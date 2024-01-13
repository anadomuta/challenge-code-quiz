var startQuizEl = document.getElementById("start");
var count = 0;
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var timerInterval;

function startQuiz(event) {
  startQuizEl.addEventListener("click", function setTime() {
    timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  });
}

startQuiz();

function loadQuestionsScript(src) {
  let script = document.createElement("script");
  script.src = src;
  script.async = false; // Remove async behaviour to prevent scripts from loading in undesired order
}
loadQuestionsScript("questions.js");
