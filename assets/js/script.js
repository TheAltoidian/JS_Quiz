var timerEl = document.querySelector(".timer");
var timeLeft = 75;

var quizList = [
    {
        question: "C is correct",
        answers: ["A", "B", "C", "D"],
        correct: "C",
    },
    {
        question: "Question 2",
        answers: ["AA", "AB", "AC", "AD"],
        correct: "AC",
    }
];

var currentIndex = 0;


var quizTextEl = document.querySelector("#quiz-text");
var startButton = document.querySelector("#Start_Quiz");

var timerControl = function() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
};

// var questionFormat = {};

var question = function () {
    //start the timer
    timerEl.textContent = "Time: " + timeLeft;
    setInterval(timerControl, 1000);
    //unhide the displayQA 
    document.getElementById("displayQA").removeAttribute("class");
    document.getElementById("displayQA").setAttribute("class", "quiz");
    //Hiding the start Scrren 
    quizTextEl.style.display = "none";

    displayQA();

};

var displayQA = function () {

    console.log(quizList[currentIndex]);

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

var checkAnswer = function() {
    if (this.textContent !== quizList[currentIndex].correct) {
        // timeLeft-=10
        alert("Wrong "); 
    }else {
        alert("Right"); 
    }
    console.log("button clicked", this.textContent , "Correct ans is ",  quizList[currentIndex].correct);

    //move to next question 
    currentIndex++;
    //call the function 
    if (quizList[currentIndex]) {
        displayQA(); 
    }
    else {
        // go to end screen
        alert("Game over")
    }

}
console.log(timerEl.textContent);
startButton.addEventListener("click", question);