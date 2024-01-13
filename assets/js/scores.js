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
