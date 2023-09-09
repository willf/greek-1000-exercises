function readData() {
  const objects = [
    { "1PP": "βλάπτω", "2PP": "βλάψω", "3PP": "ἔβλαψα"},
    { "1PP": "γράφω", "2PP": "γράψω", "3PP": "ἔγραψα"},
    { "1PP": "διδάσκω", "2PP": "διδάξω", "3PP": "ἐδίδαξα"},
    { "1PP": "διώκω", "2PP": "διώξω", "3PP": "ἐδίωξα"},
    { "1PP": "θύω", "2PP": "θύσω", "3PP": "ἔθυσα"},
    { "1PP": "λύω", "2PP": "λύσω", "3PP": "ἔλυσα"},
    { "1PP": "παύω", "2PP": "παύσω", "3PP": "ἔπαυσα"},
    { "1PP": "πείθω", "2PP": "πείσω", "3PP": "ἔπεισα"},
    { "1PP": "πέμπω", "2PP": "πέμψω", "3PP": "ἔπεμψα"},
    { "1PP": "στρατεύω", "2PP": "στρατεύσω", "3PP": "ἐστράτευσα"},
    { "1PP": "σῳζω", "2PP": "σώσω", "3PP": "ἔσωσα"},
  ];
  return objects;
}

function compareGreekVerbs(verb1, verb2) {
  // remove diacritics from the verbs
  const removeDiacritics = function(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  verb1 = removeDiacritics(verb1);
  verb2 = removeDiacritics(verb2);

  // remove breathing marks from the verbs
  verb1 = verb1.replace(/[ἀ-῾]/g, function(match) {
    return match.replace('᾿', '');
  });
  verb2 = verb2.replace(/[ἀ-῾]/g, function(match) {
    return match.replace('᾿', '');
  });

  // remove iota subscripts from the verbs
  verb1 = verb1.replace(/ᾳ|ῃ|ῳ|ᾀ-ᾇ|ᾐ-ᾗ|ᾠ-ᾧ/g, function(match) {
    return match.replace('ι', '');
  });
  verb2 = verb2.replace(/ᾳ|ῃ|ῳ|ᾀ-ᾇ|ᾐ-ᾗ|ᾠ-ᾧ/g, function(match) {
    return match.replace('ι', '');
  });

  // remove accents from the verbs
  verb1 = verb1.replace(/[ά-ώ]/g, function(match) {
    return match.replace(/[άέήίόύώ]/, function(match2) {
      return match2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    });
  });
  verb2 = verb2.replace(/[ά-ώ]/g, function(match) {
    return match.replace(/[άέήίόύώ]/, function(match2) {
      return match2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    });
  });

  // compare the verbs
  return verb1.toLowerCase() === verb2.toLowerCase();
}

function shuffleObjects(objects) {
  return objects;
  for (let i = objects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [objects[i], objects[j]] = [objects[j], objects[i]];
  }
  return objects;
}

function createNullObject(keys) {
  const obj = {};
  for (const key of keys) {
    obj[key] = null;
  }
  return obj;
}

function generateQuestion(object) {
  keys = ["1PP", "2PP", "3PP"]
  key = keys[Math.floor(Math.random() * keys.length)];
  answers = object;
  question = createNullObject(keys);
  question[key] = object[key];
  return [question, answers];
}

function createQuestionDiv(question, answers) {
  const div = document.createElement('div');
  div.className = 'question';
  for (const key in question) {
    if (question.hasOwnProperty(key)) {
      const value = question[key];
      if (value !== null) {
        const span = document.createElement('h2');
        span.textContent = value;
        div.appendChild(span);
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = key;
        input.lang = 'el'; // set the language to Greek
        input.spellcheck = false; // disable spell checking
        input.addEventListener('blur', function() {
          const answer = answers[key];
          const inputValue = input.value.trim();
          if (inputValue === answer) {
            input.classList.add('correct-answer');
            input.classList.remove('incorrect-answer');
            input.classList.remove('almost-correct-answer');
          } else if (compareGreekVerbs(inputValue, answer)) {
            input.classList.add('almost-correct-answer');
            input.classList.remove('correct-answer');
            input.classList.remove('incorrect-answer');
            input.title = `Correct answer: ${answer}`;
          } else {
            input.classList.add('incorrect-answer');
            input.classList.remove('correct-answer');
            input.title = `Correct answer: ${answer}`;
          }
        });
        input.addEventListener('focus', function() {
          input.classList.remove('correct-answer');
          input.classList.remove('incorrect-answer');
          input.classList.remove('almost-correct-answer');
          input.title = '';
        });
        div.appendChild(input);
      }
    }
  }
  return div;
}

async function createQuiz() {
  // read the data from the file
  const objects = readData();

  // shuffle the objects randomly
  shuffleObjects(objects);

  const quizDiv0 = document.getElementById('quiz');
  if (quizDiv0) {
    quizDiv0.remove();
  }

  // create a div for each question
  const quizDiv = document.createElement('div');
  quizDiv.id = 'quiz';
  for (const object of objects) {
    const [question, answers] = generateQuestion(object);
    const questionDiv = createQuestionDiv(question, answers);
    quizDiv.appendChild(questionDiv);
  }

  // add the quiz div to the page
  document.body.appendChild(quizDiv);
}
