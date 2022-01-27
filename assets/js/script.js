var timerEl = document.querySelector(".timer");
var timeLeft = 75;
let timerGo;

var quizList = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correct: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log",
    },
];

var currentIndex = 0;

var quizTextEl = document.querySelector("#quiz-text");
var startButton = document.querySelector("#Start_Quiz");
var submitButton = document.querySelector("#submit-button");
var scoreCard = document.querySelector("#finalScore");

var gameOver = function () {
    var score = timeLeft;
    //unhide end screen
    document.getElementById("end-screen").removeAttribute("class");
    document.getElementById("end-screen").setAttribute("class", "quiz");
    //hide quiz
    document.getElementById("displayQA").style.display = "none";

    scoreCard.textContent = "Your final score is " + score + ".";
};

// decrease time remaining every second
var timerControl = function() {
    console.log(timeLeft);
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft < 1) {
        clearInterval(timerGo);
        gameOver();
    }
};

var question = function () {
    //start the timer
    timerGo = setInterval(timerControl, 1000);
    timerEl.textContent = "Time: " + timeLeft
    //unhide the displayQA 
    document.getElementById("displayQA").removeAttribute("class");
    document.getElementById("displayQA").setAttribute("class", "quiz");

    //Hiding the start Scrren 
    quizTextEl.style.display = "none";

    displayQA();

};

var displayQA = function () {

    document.querySelector("#question-text").textContent = quizList[currentIndex].question;
    document.querySelector("#answer1").textContent = quizList[currentIndex].answers[0];
    document.querySelector("#answer2").textContent = quizList[currentIndex].answers[1];
    document.querySelector("#answer3").textContent = quizList[currentIndex].answers[2];
    document.querySelector("#answer4").textContent = quizList[currentIndex].answers[3];

    document.querySelector("#answer1").addEventListener("click", checkAnswer);
    document.querySelector("#answer2").addEventListener("click", checkAnswer);
    document.querySelector("#answer3").addEventListener("click", checkAnswer);
    document.querySelector("#answer4").addEventListener("click", checkAnswer);

}

var checkAnswer = function () {
    if (this.textContent !== quizList[currentIndex].correct) {
        timeLeft-=10
        // say wrong
    } else {
        // say right
    }

    //move to next question 
    currentIndex++;
    //call the function 
    if (quizList[currentIndex]) {
        displayQA();
    }
    else {
        // go to end screen
        clearInterval(timerGo);
        gameOver();
    }

}

var saveScore = function () {

};

startButton.addEventListener("click", question);
submitButton.addEventListener("click", saveScore);