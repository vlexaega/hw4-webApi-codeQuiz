// IDEAS OF USE
// DEPENDENCIES 
var questionsEl = document.querySelector('#questions');
var timerEl = document.querySelector('#timer');
var startQuizEl = document.querySelector('#startQuiz');

// Determining number of questions 
var questionCount = 0;

// Scoreboard details
var score = 0;
var secondCount = 120;
var timeOut = false;
var endGame = 0;

// Array to store the results
var resultsArray = [];
// var startQuiz = document.querySelector("#startQuiz");
var questionsAndAnswers = [
    {
        question: "What is js short for?",
        answers: {
            a: 'Javascript',
            b: 'Justsurf',
            c: 'Joinsomething',
            d: 'justslump',
        },
        correctAnswers: 'a',
    },
]

startQuiz.addEventListener("click", startQuiz);
// User starts quiz
// triggers setTime() function
function startQuiz () {
    console.log(question);
    var userSelection = [];
    if (questionCount > (questionsAndAnswers.length - 1) && (endGameRun <1)) {
        return endGame();
    }
    else {
        var newHeader = document.createElement ("h1");
        newHeader.textContent = questionsAndAnswers[questionCount].question;
        newHeader.id = 'questions';
        document.getElementById("questions").appendChild(newHeader)
    }

}
function startQuiz()
// Show user the question and listen for clicks on the button #startQuiz
// function newQuestion(){
//     question1.addEventLister("click", function() {

//     }

// };

// Creating the timer
function setTime () {
    var timerInterval = setInterval(function() {
        secondCount--;
        timerEl.textContent = secondCount + " time remaining.";

        if (secondCount === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage () {
    prompt(questionsAndAnswers);
}

// INITIALIZATIONS 
setTime();

// ROUGH IDEAS 
// User sees quiz questions and responses
    // presented with question 1 and response options
        // if response incorrect, reduce timer by 10 seconds
        // else continue
        // occurs for each question
            // needs to determine which question user is on
        // once all questions answered:
            // display score 
                // update text to reflect new score and previous score 
        // prompt user for try again?


