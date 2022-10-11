var scoreBoard = document.querySelector("#scoreBoardText");
var clearButton = document.querySelector("#clear-highscores-btn");

var initialsArray = [];
var scoreArray = [];

init();

function viewHighscores() {
    scoreBoard.innerHTML = "";

    for (var i = 0; i < initialsArray.length; i++) {
        var initial = initialsArray[i];
        var score = scoreArray[i];

        var li = document.createElement("li");
        li.textContent = initial.toUpperCase() + " : " + score;
        li.classList.add("scoresList");

        scoreBoard.appendChild(li);
    }
};

function init() {
    var initials = JSON.parse(localStorage.getItem("initials"));
    var scores = JSON.parse(localStorage.getItem("userScore"));

    if (initials !== null && scores !== null) {
        initialsArray = initials;
        scoreArray = scores;
    }

    viewHighscores();
};

clearButton.addEventListener("click", function (event) {
    var empty = [];
    localStorage.setItem("initials", JSON.stringify(empty));
    localStorage.setItem("userScore", JSON.stringify(empty));
    init();
});



