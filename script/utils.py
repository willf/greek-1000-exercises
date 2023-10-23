import json
import re
import string
import unicodedata

import betacode.conv as bc
import requests
import xmltodict


def split_greek_phrase_at_word_boundaries(greek_text):
    """
    >>> split_greek_phrase_at_word_boundaries('ἓν οἶδα ὅτι οὐδὲν οἶδα.')
    ['ἓν', 'οἶδα', 'ὅτι', 'οὐδὲν', 'οἶδα', '.']
    """
    return [x.strip() for x in re.split(r"\b", greek_text) if x and x.strip()]


def words_only(tokens):
    """
    Words only, no punctuation.
    >>> words_only(split_greek_phrase_at_word_boundaries("ἓν οἶδα ὅτι οὐδὲν οἶδα·"))
    ['ἓν', 'οἶδα', 'ὅτι', 'οὐδὲν', 'οἶδα']
    """
    return [x for x in tokens if x not in string.punctuation and x != "·"]


def word_tokens(greek_text):
    """
    >>> word_tokens('ἓν οἶδα, ὅτι οὐδὲν οἶδα.')
    ['ἓν', 'οἶδα', 'ὅτι', 'οὐδὲν', 'οἶδα']
    """
    return words_only(split_greek_phrase_at_word_boundaries(greek_text))


def remove_diacrtics(greek_text):
    """
    Remove the diacritics from a Greek text.
    including accents, breathings, iota subscripts, diaeresis, macrons, etc.
    >>> remove_diacrtics('ἓν οἶδα ὅτι οὐδὲν οἶδα.')
    'εν οιδα οτι ουδεν οιδα.'
    """
    return "".join(
        c
        for c in unicodedata.normalize("NFD", greek_text)
        if unicodedata.category(c) != "Mn"
    )


def to_perseus_betacode(unicode_text):
    """
    >>> to_perseus_betacode('μῆνιν')
    'mhnin'
    """
    baby_text = remove_diacrtics(unicode_text.lower())
    return bc.uni_to_beta(baby_text)


def lookup_word(word):
    """
    Look up a word in the Perseus Greek dictionary.
    >>> list(json.loads(lookup_word('μῆνιν')).keys())
    ['analyses']
    """
    beta_word = to_perseus_betacode(word)
    url = (
        "http://www.perseus.tufts.edu/hopper/xmlmorph?lang=greek&lookup="
        + beta_word
    )
    r = requests.get(url)
    if r.status_code == 200:
        xml = r.text
        o = xmltodict.parse(xml)
        jsons = json.dumps(o, ensure_ascii=False)
        return jsons
    else:
        return None


if __name__ == "__main__":
    import doctest
    doctest.testmod()
