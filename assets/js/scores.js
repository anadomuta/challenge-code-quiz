var ol = document.getElementById("highscores");
var liScore = document.createElement("li");
var clearScoreEl = document.getElementById("clear");

ol.appendChild(liScore);

// Clear scores when users taps on button
function clearScores(event) {
  clearScoreEl.addEventListener("click", function () {
    localStorage.removeItem("highscores");
    renderScores();
  });
}

clearScores();

// Display Scores from Local Storage
function renderScores() {
  ol.innerHTML = ""; // Clear existing scores

  var highscoreFromLS = JSON.parse(localStorage.getItem("highscores")) || [];

  if (highscoreFromLS.length === 0) {
    // No scores to display
    var noScoreEl = document.createElement("p");
    noScoreEl.textContent = "Scores cleared!";
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
