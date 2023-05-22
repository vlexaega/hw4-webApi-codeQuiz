// IDEAS OF USE
// functions
function generateQuiz (questions, quizContainer, resultsContainer, submitButton){
    // User starts quiz
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for (var i=0; i<question.length, i++) {
            answers = [];
            for (letter in questions[i].answers){
                answers.push()
            }
        }
    }
    function showResults(questions, quizContainer, resultsContainer){

    }
    // shows the user the questions
    showQuestions(questions, quizContainer);
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}

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
    {
        question: "What is our professors name?",
        answers: {
            a: 'benjanmin',
            b: 'larry',
            c: 'json',
            d: 'billy',
        }
    }
]

// User starts quiz


// Determining number of questions 
var questionCount = 0;

// Scoreboard details
var score = 0;
var secondCount = 120;
var timeOut = false;
var endGame = 0;

// Array to store the results
var resultsArray = [];

function questionVerify() {
    if (secondCount < 0) {
        return
    }
    else {
        return newQuestion();
    }
}

// Show user the question and listen for clicks on the button #startQuiz
function newQuestion(){
    
}

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


