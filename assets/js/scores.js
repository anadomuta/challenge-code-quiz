var ol = document.getElementById("highscores");
var liScore = document.createElement("li");
var clearScoreEl = document.getElementById("clear");

ol.appendChild(liScore);

function clearScores(event) {
  clearScoreEl.addEventListener("click", function () {
    ol.removeChild(liScore);
  });
}

clearScores();

function renderScores() {
  ol.innerHTML = "";

  var highscoreFromLS = JSON.parse(localStorage.getItem("highscores"));

  highscoreFromLS.forEach(function (highscore) {
    var liScore = document.createElement("li");
    liScore.textContent = `${highscore.name}: ${highscore.score} seconds`;
    ol.appendChild(liScore);
  });
}

renderScores();
