var questions = [
  {
    number: 1,
    question: "What is an Array-like object accessible inside functions that contains the values of the arguments passed to that function?",
    options: ["Class",
      "Argument",
      "Selector",
      "Tag"
    ],
    answer: "Argument"
  },
  {
    number: 2,
    question: "What offers a quick and easy way to do something repeatedly?",
    options: ["Loop",
      "Method",
      "Function",
      "Event"
    ],
    answer: "Loop"
  },
  {
    number: 3,
    question: "What can be used to manipulate web documents in some way?",
    options: ["Local Storage",
      "Event Listeners",
      "DOM",
      "APIs"
    ],
    answer: "DOM"
  },
  {
    number: 4,
    question: "_____ is purely a string with a specified data format — it contains only properties, no methods.",
    options: ["JQuery",
      "JSON",
      "PHP",
      "Bootstrap"
    ],
    answer: "JSON"
  },
];

var startBtn = document.querySelector(".startBtn");
var quiz_box = document.querySelector(".quiz_box");
var result_box = document.querySelector(".result_box");
var optionList = document.querySelector(".optionList");

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;

function startQuiz() {
  quiz_box.classList.add("activeQuiz"); //show quiz box
  displayQuestions(0); //calling showQestions function
  questionCounter(1); //passing 1 parameter to question counter
  countdown(); //calling countdown function
};

startBtn.addEventListener("click", startQuiz);

var messageEL = document.querySelector('#message');
var nextBtn = document.querySelector(".nextBtn");

function nextQuestion() {
  if (questionCount < questions.length - 1) { //if question count is less than total question length
    questionCount++; //increment the question count value
    questionNumber++; //increment the question number value
    displayQuestions(questionCount);
    questionCounter(questionNumber);
    nextBtn.classList.remove("show"); //hide the next button
  } else {
    showResult(); //calling showResult function
  }
};

nextBtn.addEventListener("click", nextQuestion);

function displayQuestions(index) {
  var questionText = document.querySelector(".questionText");
  //creating a new span and div tag for question and option and passing the value using array index
  let questionTag = questions[index].question;
  let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
  questionText.innerHTML = questionTag; //adding new span tag inside question tag
  optionList.innerHTML = optionTag; //adding new div tag inside option tag

  var option = optionList.querySelectorAll(".option");
  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onClick", "optionSelected(this)");
  }
};


function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAnswer = questions[questionCount].answer; //getting correct answer from array
  var allOptions = optionList.children.length; //getting all option items

  if (userAns == correctAnswer) { //if user selected option is equal to array's correct answer
    userScore += 5;
    answer.classList.add("correct"); //adding green color to correct selected option
  } else {
    answer.classList.add("wrong"); //adding red color to incorrect selected option
    for (i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) { //if there is an option which is matched to an array answer 
        optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
      }
    }
  }
  for (i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled"); //once user selects an option then disable all options
  }
  nextBtn.classList.add("show"); //show the next button if user selects any option

  if (questionCount === questions.length - 1) {
    nextBtn.classList.remove("show");

    var finishBtn = document.createElement("button");
    finishBtn.classList.add("finish-btn");
    finishBtn.textContent = "Finish";
    quiz_box.appendChild(finishBtn);

    finishBtn.addEventListener("click", showResult);
  }
};

function questionCounter(index) {
  //creating a new span tag and passing the question number and total question
  let totalQuestionCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
};

var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var scoreBoard = document.querySelector("#scoreBoardText");

function showResult() {
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  var scoreText = document.querySelector(".scoreText");
  let scoreTag = "Userscore: " + userScore;
  scoreText.innerHTML = scoreTag;
  init();
};

var initialsArray = [];
var userScoreArray = [];

function init() {
  var storedInitials = JSON.parse(localStorage.getItem("initials"));
  var storedUserScores = JSON.parse(localStorage.getItem("userScore"));

  if (storedInitials !== null) {
    initialsArray = storedInitials;
  }

  if (storedUserScores !== null) {
    userScoreArray = storedUserScores;
  }
};

function storeHighscores() {
  localStorage.setItem("initials", JSON.stringify(initialsArray));
  localStorage.setItem("userScore", JSON.stringify(userScoreArray));
};

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var initials = initialsInput.value;

  if (initials === "") {
    return;
  }

  initialsArray.push(initials);
  userScoreArray.push(userScore);
  initialsInput.value = "";

  storeHighscores();

  window.location.href = "./highscores.html";
});

var body = document.querySelector("body");

var timerEl = document.getElementById('countdown');
function countdown() {

  var timeLeft = 20;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "00:" + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "00:" + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      if (timeLeft === 0 && questionCount + 1 < questions.length) {
        var h2 = document.createElement('h2');
        h2.classList.add("timeUpMsg");
        h2.textContent = "Sorry, Your time is up!";
        body.appendChild(h2);
        showResult();
      }
      clearInterval(timeInterval);
    }
  }, 1000);
};