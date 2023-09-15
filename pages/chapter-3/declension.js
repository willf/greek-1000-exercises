const declensions_to_test = [
  {
    form: "ἀγορά, ἀγορᾶς, ἡ",
    translation: "marketplace",
    stem: "ἀγορα",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "ἀγορά",
      genitive: "ἀγορᾶς",
      dative: "ἀγορᾷ",
      accusative: "ἀγοράν",
      vocative: "ἀγορά",
    },
    plural: {
      nominative: "ἀγοραί",
      genitive: "ἀγορῶν",
      dative: "ἀγοραῖς",
      accusative: "ἀγορᾶς",
      vocative: "ἀγοραί",
    },
  },
  {
    form: "ἄνθρωπος, ἀνθρώπου, ὁ",
    translation: "man, human",
    stem: "ἀνθρωπ",
    gender: "masculine",
    declensionType: "Second declension, masculine",
    singular: {
      nominative: "ἄνθρωπος",
      genitive: "ἀνθρώπου",
      dative: "ἀνθρώπῳ",
      accusative: "ἄνθρωπον",
      vocative: "ἄνθρωπε",
    },
    plural: {
      nominative: "ἄνθρωποι",
      genitive: "ἀνθρώπων",
      dative: "ἀνθρώποις",
      accusative: "ἀνθρώπους",
      vocative: "ἄνθρωποι",
    },
  },
  {
    form: "δῶρον, δώρου, τό",
    translation: "gift",
    stem: "δωρο",
    gender: "neuter",
    declensionType: "Second declension, neuter",
    singular: {
      nominative: "δῶρον",
      genitive: "δώρου",
      dative: "δώρῳ",
      accusative: "δῶρον",
      vocative: "δῶρον",
    },
    plural: {
      nominative: "δῶρα",
      genitive: "δώρων",
      dative: "δώροις",
      accusative: "δῶρα",
      vocative: "δῶρα",
    },
  },
  {
    form: "ἔργον, ἔργου, τό",
    translation: "work",
    stem: "εργο",
    gender: "neuter",
    declensionType: "Second declension, neuter",
    singular: {
      nominative: "ἔργον",
      genitive: "ἔργου",
      dative: "ἔργῳ",
      accusative: "ἔργον",
      vocative: "ἔργον",
    },
    plural: {
      nominative: "ἔργα",
      genitive: "ἔργων",
      dative: "ἔργοις",
      accusative: "ἔργα",
      vocative: "ἔργα",
    },
  },
  {
    form: "θάλαττα, θαλάττης, ἡ",
    translation: "sea",
    stem: "θαλαττ",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "θάλαττα",
      genitive: "θαλάττης",
      dative: "θαλάττῃ",
      accusative: "θάλατταν",
      vocative: "θάλαττα",
    },
    plural: {
      nominative: "θάλατται",
      genitive: "θαλαττῶν",
      dative: "θαλάτταις",
      accusative: "θάλαττας",
      vocative: "θάλατται",
    },
  },
  {
    form: "θεά, θεᾶς, ἡ",
    translation: "goddess",
    stem: "θεα",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "θεά",
      genitive: "θεᾶς",
      dative: "θεᾷ",
      accusative: "θεάν",
      vocative: "θεά",
    },
    plural: {
      nominative: "θεαί",
      genitive: "θεῶν",
      dative: "θεαῖς",
      accusative: "θεάς",
      vocative: "θεαί",
    },
  },
  {
    form: "θεός, θεοῦ, ὁ",
    translation: "god",
    stem: "θεο",
    gender: "masculine",
    declensionType: "Second declension, masculine",
    singular: {
      nominative: "θεός",
      genitive: "θεοῦ",
      dative: "θεῷ",
      accusative: "θεόν",
      vocative: "θεέ",
    },
    plural: {
      nominative: "θεοί",
      genitive: "θεῶν",
      dative: "θεοῖς",
      accusative: "θεούς",
      vocative: "θεοί",
    },
  },
  {
    form: "ἵππος, ἵππου, ὁ",
    translation: "horse",
    stem: "ἱππο",
    gender: "masculine",
    declensionType: "Second declension, masculine",
    singular: {
      nominative: "ἵππος",
      genitive: "ἵππου",
      dative: "ἵππῳ",
      accusative: "ἵππον",
      vocative: "ἵππε",
    },
    plural: {
      nominative: "ἵπποι",
      genitive: "ἵππων",
      dative: "ἵπποις",
      accusative: "ἵππους",
      vocative: "ἵπποι",
    },
  },
  {
    form: "κώμη, κώμης, ἡ",
    translation: "village",
    stem: "κωμη",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "κώμη",
      genitive: "κώμης",
      dative: "κώμῃ",
      accusative: "κώμην",
      vocative: "κώμη",
    },
    plural: {
      nominative: "κῶμαι",
      genitive: "κωμῶν",
      dative: "κῶμαις",
      accusative: "κώμας",
      vocative: "κῶμαι",
    },
  },
  {
    form: "ξένος, ξένου, ὁ",
    translation: "stranger, guest",
    stem: "ξενο",
    gender: "masculine",
    declensionType: "Second declension, masculine",
    singular: {
      nominative: "ξένος",
      genitive: "ξένου",
      dative: "ξένῳ",
      accusative: "ξένον",
      vocative: "ξένε",
    },
    plural: {
      nominative: "ξένοι",
      genitive: "ξένων",
      dative: "ξένοις",
      accusative: "ξένους",
      vocative: "ξένοι",
    },
  },
  {
    form: "οἰκία, οἰκίας, ἡ",
    translation: "house",
    stem: "οἰκία",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "οἰκία",
      genitive: "οἰκίας",
      dative: "οἰκίᾳ",
      accusative: "οἰκίαν",
      vocative: "οἰκία",
    },
    plural: {
      nominative: "οἰκίαι",
      genitive: "οἰκιῶν",
      dative: "οἰκίαις",
      accusative: "οἰκίας",
      vocative: "οἰκίαι",
    },
  },
  {
    form: "τέκνον, τέκνου, τό",
    translation: "child",
    stem: "τέκνο",
    gender: "neuter",
    declensionType: "Second declension, neuter",
    singular: {
      nominative: "τέκνον",
      genitive: "τέκνου",
      dative: "τέκνῳ",
      accusative: "τέκνον",
      vocative: "τέκνον",
    },
    plural: {
      nominative: "τέκνα",
      genitive: "τέκνων",
      dative: "τέκνοις",
      accusative: "τέκνα",
      vocative: "τέκνα",
    },
  },
  {
    form: "τιμή, τιμῆς, ἡ",
    translation: "honor",
    stem: "τιμή",
    gender: "feminine",
    declensionType: "First declension, feminine",
    singular: {
      nominative: "τιμή",
      genitive: "τιμῆς",
      dative: "τιμῇ",
      accusative: "τιμήν",
      vocative: "τιμή",
    },
    plural: {
      nominative: "τιμαί",
      genitive: "τιmῶν",
      dative: "τιμαῖς",
      accusative: "τιμάς",
      vocative: "τιμαί",
    },
  },
  {
    form: "φίλος, φίλου, ὁ",
    translation: "friend",
    stem: "φίλο",
    gender: "masculine",
    declensionType: "Second declension, masculine",
    singular: {
      nominative: "φίλος",
      genitive: "φίλου",
      dative: "φίλῳ",
      accusative: "φίλον",
      vocative: "φίλε",
    },
    plural: {
      nominative: "φίλοι",
      genitive: "φίλων",
      dative: "φίλοις",
      accusative: "φίλους",
      vocative: "φίλοι",
    },
  },
];

function shuffleObjects(objects) {
  // return objects;
  for (let i = objects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [objects[i], objects[j]] = [objects[j], objects[i]];
  }
  return objects;
}

function compareGreekForms(form1, form2) {
  // remove diacritics from the forms
  const removeDiacritics = function (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  form1 = removeDiacritics(form1);
  form2 = removeDiacritics(form2);

  // remove breathing marks from the forms
  form1 = form1.replace(/[ἀ-῾]/g, function (match) {
    return match.replace("᾿", "");
  });
  form2 = form2.replace(/[ἀ-῾]/g, function (match) {
    return match.replace("᾿", "");
  });

  // remove iota subscripts from the forms
  form1 = form1.replace(/ᾳ|ῃ|ῳ|ᾀ-ᾇ|ᾐ-ᾗ|ᾠ-ᾧ/g, function (match) {
    return match.replace("ι", "");
  });
  form2 = form2.replace(/ᾳ|ῃ|ῳ|ᾀ-ᾇ|ᾐ-ᾗ|ᾠ-ᾧ/g, function (match) {
    return match.replace("ι", "");
  });

  // remove accents from the forms
  form1 = form1.replace(/[ά-ώ]/g, function (match) {
    return match.replace(/[άέήίόύώ]/, function (match2) {
      return match2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    });
  });
  form2 = form2.replace(/[ά-ώ]/g, function (match) {
    return match.replace(/[άέήίόύώ]/, function (match2) {
      return match2.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    });
  });

  // compare the forms
  return form1.toLowerCase() === form2.toLowerCase();
}

function showCaseName(str) {
  const firstThreeChars = str.substring(0, 3);
  const capitalizedFirstChar = firstThreeChars.charAt(0).toUpperCase();
  const lowercaseRest = firstThreeChars.substring(1).toLowerCase();
  return capitalizedFirstChar + lowercaseRest;
}
function createDeclensionDiv(declension) {
  // Create the main DIV element
  const div = document.createElement("div");

  // Add the form to the DIV
  const formSpan = document.createElement("span");
  formSpan.textContent = declension.form;
  formSpan.classList.add("headword");
  div.appendChild(formSpan);

  // Add the singular and plural forms to the DIV
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const singularHeader = document.createElement("th");
  singularHeader.textContent = "Singular";
  headerRow.appendChild(singularHeader);
  const pluralHeader = document.createElement("th");
  pluralHeader.textContent = "Plural";
  headerRow.appendChild(pluralHeader);
  table.appendChild(headerRow);
  for (const caseName in declension.singular) {
    const row = document.createElement("tr");
    const singularCell = document.createElement("td");
    const singularInput = document.createElement("input");
    singularInput.type = "text";
    singularInput.name = caseName;
    singularCell.appendChild(document.createTextNode(showCaseName(caseName) + ". "));
    singularCell.appendChild(singularInput);
    row.appendChild(singularCell);
    const pluralCell = document.createElement("td");
    const pluralInput = document.createElement("input");
    pluralInput.type = "text";
    pluralInput.name = caseName;
    pluralCell.appendChild(pluralInput);
    row.appendChild(pluralCell);
    table.appendChild(row);

    // Check the singular input value
    singularInput.addEventListener("blur", () => {
      if (singularInput.value === declension.singular[caseName]) {
        singularInput.classList.remove("incorrect-answer", "almost-correct-answer");
        singularInput.classList.add("correct-answer");
      } else if (compareGreekForms(singularInput.value, declension.singular[caseName])) {
        singularInput.classList.remove("incorrect-answer", "correct-answer");
        singularInput.classList.add("almost-correct-answer");
      } else {
        singularInput.classList.remove("correct-answer", "almost-correct-answer");
        singularInput.classList.add("incorrect-answer");
      }
    });

    // Check the plural input value
    pluralInput.addEventListener("blur", () => {
      if (pluralInput.value === declension.plural[caseName]) {
        pluralInput.classList.remove("incorrect-answer", "almost-correct-answer");
        pluralInput.classList.add("correct-answer");
      } else if (compareGreekForms(pluralInput.value, declension.plural[caseName])) {
        pluralInput.classList.remove("incorrect-answer", "correct-answer");
        pluralInput.classList.add("almost-correct-answer");
      } else {
        pluralInput.classList.remove("correct-answer", "almost-correct-answer");
        pluralInput.classList.add("incorrect-answer");
      }
    });
  }
  div.appendChild(table);

  return div;
}

function createPracticeDiv0(declensions) {
  // Shuffle the declensions
  const shuffledDeclensions = shuffleObjects(declensions);

  // Create the practice DIV
  const practiceDiv = document.createElement("div");
  practiceDiv.id = "practice";

  // Create a DIV for each declension and add it to the practice DIV
  for (const declension of shuffledDeclensions) {
    const declensionDiv = createDeclensionDiv(declension);
    practiceDiv.appendChild(declensionDiv);
  }

  return practiceDiv;
}

function createPracticeDiv() {
  return createPracticeDiv0(declensions_to_test);
}
