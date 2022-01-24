var questions = [];

var q1 = {
    question: "C is correct",
    answers: ["A", "B", "C", "D"],
    correct: "C",
};

var quizText = document.querySelector("#quiz-text");
var startButton = document.querySelector("#Start_Quiz");

// var questionFormat = {};

var question = function () {
    quizText.innerHTML = '<div class="quiz">'
    '<h3> q1.question </h3>'
    '<div class="answer-buttons">'
        '<button class="btn" id="answer1">A</button>'
        '<button class="btn" id="answer2">Basdf</button>'
        '<button class="btn" id="answer3">C</button>'
        '<button class="btn" id="answer4">D</button>'
    '</div>'
'</div>'
};

startButton.addEventListener("click", question);