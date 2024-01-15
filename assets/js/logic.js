var startQuizEl = document.getElementById("start");
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time");
var questionTitleEl = document.getElementById("question-title");
var questionChoices = document.querySelector(".choices");
var startScreen = document.getElementById("start-screen");
var questionsContainer = document.querySelector("#questions");
var secondsLeft = 60;
var questionIndex = 0;
var count = 0;

startQuizEl.addEventListener("click", function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  renderQuestions();
});

function checkAnswer(chosenAnswer, expectedAnswer) {
  if (chosenAnswer === expectedAnswer) {
    if (secondsLeft <= 10) {
      secondsLeft = 0;
    } else {
      secondsLeft = secondsLeft - 10;
    }
  }
}

function renderQuestions() {
  startScreen.classList.add("hide"); // hide the start screen from displaying when displaying questions
  questionsContainer.classList.remove("hide");
  var question = questions[questionIndex]; // access the first question in the object to access the title of the question

  var questionTitleText = question.title;
  var choicesArray = question.choices;

  var listEl = document.createElement("ol");
  questionTitleEl.textContent = questionTitleText;

  choicesArray.forEach((choice) => {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = choice;
    listEl.appendChild(listItemEl);
    // Function to check whether the answer chosen is correct
    listItemEl.addEventListener("click", function (event) {
      checkAnswer(this.textContent, question.answer);
    });
  });

  questionChoices.appendChild(listEl);
}

// renderQuestions();
