var ol = document.getElementById("highscores");
var liScore = document.createElement("li");
var clearScoreEl = document.getElementById("clear");

ol.appendChild(liScore);

function clearScores(event) {
  clearScoreEl.addEventListener("click", function () {
    localStorage.removeItem("highscores");
    renderScores();
    // ol.innerHTML = "";
  });
}

clearScores();

function renderScores() {
  ol.innerHTML = ""; // Clear existing content

  var highscoreFromLS = JSON.parse(localStorage.getItem("highscores")) || [];

  if (highscoreFromLS.length === 0) {
    // No scores to display
    var noScoreEl = document.createElement("p");
    noScoreEl.textContent = "No high scores available.";
    ol.appendChild(noScoreEl);
  } else {
    // Display scores
    highscoreFromLS.forEach(function (highscore) {
      var listScoreEl = document.createElement("li");
      listScoreEl.textContent = `${highscore.name}: ${highscore.score} seconds`;
      ol.appendChild(listScoreEl);
    });
  }
}

renderScores();
