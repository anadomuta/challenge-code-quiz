var count = 0;
var timerEl = document.querySelector(".timer");
var timeEl = document.getElementById("time");
var secondsLeft = 60;
var timerInterval;

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

setTime();
