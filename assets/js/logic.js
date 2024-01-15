var startQuizEl = document.getElementById("start");
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time");
var questionTitleEl = document.getElementById("question-title");
var questionChoices = document.querySelector(".choices");
// var choicesArray = [];
var secondsLeft = 60;
var count = 0;
var timerInterval;

startQuizEl.addEventListener("click", function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

function checkAnswer(chosenAnswer, expectedAnswer) {
  if (chosenAnswer !== expectedAnswer) {
    if (secondsLeft <= 10) {
      secondsLeft = 0;
    } else {
      secondsLeft = secondsLeft - 10;
    }
  }
}

function renderQuestions() {
  var questionTitleText = questions.title; //assign question title to h2
  var choicesArray = questions.choices;

  var listEl = document.createElement("ol");
  questionTitleEl.textContent = questionTitleText;

  choicesArray.forEach((choice) => {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = choice;
    listEl.appendChild(listItemEl);
  });

  // questionChoices.appendChild(listEl);
}

// renderQuestions();
