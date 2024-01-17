var startQuizEl = document.getElementById("start");
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time");
var questionTitleEl = document.getElementById("question-title");
var questionChoices = document.querySelector(".choices");
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questionsContainer = document.querySelector("#questions");
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var displayScore = document.getElementById("final-score");
var timerInterval;
var secondsLeft = 60;
var questionIndex = 0;
var count = 0;
var highscoreFromLS = initLS();

// Start Quiz
startQuizEl.addEventListener("click", function setTime() {
  timerInterval = setInterval(function () {
    if (secondsLeft > 0) {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
    } else if (secondsLeft === 0) {
      endQuiz();
    }
  }, 1000);
  renderQuestions();
});

// Display Questions and Answer Choices
function renderQuestions() {
  if (questionIndex >= questions.length) {
    endQuiz();
    return;
  }
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
    listItemEl.classList.add("hover-effect");
    listEl.appendChild(listItemEl);

    // Function to check whether the clicked answer is correct
    listItemEl.addEventListener("click", function (event) {
      checkAnswer(this.textContent, question.answer);
    });
  });

  questionChoices.appendChild(listEl);
}

// Check Answer
function checkAnswer(chosenAnswer, expectedAnswer) {
  if (chosenAnswer === expectedAnswer) {
    if (secondsLeft <= 10) {
      secondsLeft = 0;
    } else {
      secondsLeft -= 10;
    }
  }
  // Logic for moving to next question
  questionIndex++;
  questionChoices.innerHTML = "";
  renderQuestions();
}

// End Quiz
function endQuiz() {
  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");
  clearInterval(timerInterval);
  displayScore.textContent = secondsLeft;
}

// Store Scores in Local Storage
function initLS() {
  var highscoreFromLS = localStorage.getItem("highscores");
  if (highscoreFromLS === null || highscoreFromLS === undefined) {
    highscoreFromLS = []; // if null, declare as empty
    localStorage.setItem("highscores", JSON.stringify(highscoreFromLS));
  } else {
    highscoreFromLS = JSON.parse(highscoreFromLS);
  }
  return highscoreFromLS;
}

function saveScore() {
  var name = initialsInput.value;
  var highscoreFromLS = initLS();

  highscoreFromLS.push({ name: name, score: secondsLeft });
  localStorage.setItem("highscores", JSON.stringify(highscoreFromLS));
}

submitBtn.addEventListener("click", saveScore);
