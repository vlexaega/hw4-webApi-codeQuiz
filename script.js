// IDEAS OF USE
// User starts quiz
var startQuiz = document.querySelector("#startQuiz");
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

// Determining number of questions 
var questionCount = 0;

// Scoreboard details
var score = 0;
var secondCount = 120;
var timeOut = false;
var endGame = 0;

// Array to store the results
var resultsStore = [];



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


