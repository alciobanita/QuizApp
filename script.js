let questions = [
  // {
  //   "question": "Wer hat HTML erfunden?",
  //   "answer_1": "Lady Gaga",
  //   "answer_2": "Richard Stallman",
  //   "answer_3": "Tim Berners-Lee",
  //   "answer_4": "Mark Zuckerberg",
  //   "right_answer": 3
  // },
  // {
  //   "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
  //   "answer_1": "readonly",
  //   "answer_2": "max",
  //   "answer_3": "from",
  //   "answer_4": "spellcheck",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
  //   "answer_1": "a[title]{...}",
  //   "answer_2": "a>title{...}",
  //   "answer_3": "a.title{...}",
  //   "answer_4": "a=title{...}",
  //   "right_answer": 1
  // },
  // {
  //   "question": "Wie definiert man in JavaScript eine Variable?",
  //   "answer_1": "let 100 = rate;",
  //   "answer_2": "100= let rate",
  //   "answer_3": "rate = 100",
  //   "answer_4": "let rate = 100;",
  //   "right_answer": 4
  // }
];

let currentQuestion = 0;

function init() {
  document.getElementById('all-questions').innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = "";
    document.getElementById('questionBody').style= "display: none";
  } else {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('numberOfCurrentQuestion').innerHTML = currentQuestion + 1;
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question['right_answer']}`;

  if (selectedQuestionNumber == question[`right_answer`]) {
    console.log('Richtige Antwort!');
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    console.log('Falsche Antwort!');

    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  document.getElementById('next-button').disabled = true;
  resetButtons();
}

function resetButtons() {
  document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger');
  document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger');
  document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger');
  document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger');

}