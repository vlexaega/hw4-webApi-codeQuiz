var questions = [
    {
        question: "What is JS short for?",
        answers: [
            { text: "Javascript", correct: true},
            { text: "Justsurf", correct: false},
            { text: "Joinsomething", correct: false},
            { text: "Justslump", correct: false},
        ]},
        {
            question: "What is HTML short for?",
            answers: [
                { text: "HyperText Markup Language", correct: true},
                { text: "Holy Tamale Mile Long", correct: false},
                { text: "Hey There Mixed Length", correct: false},
                { text: "Happy To Meet Larry", correct: false},
            ]},

];

// DEPENDENCIES
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var timerEl = document.getElementById("timer");

//store question index, score and timer
var currentQuestionIndex = 0;
var score = 0;
var timerOut = false;
var endGame = 0;
var secondCount = 120;

// functions

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        //remove all previous answers
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// confirms to user if answer is correct or incorrect
function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        //increase score by 1
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//define showScore
function showScore (){
    resetState();
    questionEl.innerHTML = 'You scored  ' + score + ' out of ' + questions.length + '!'; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

//define handleNextButton to show further questions
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion(); // shows next question with updated question index 
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();




// // IDEAS OF USE
// // DEPENDENCIES 
// var questionsEl = document.querySelector('#questions');
// var timerEl = document.querySelector('#timer');
// var startQuizEl = document.querySelector('#startQuiz');

// // Determining number of questions 
// var questionCount = 0;

// // Scoreboard details
// var score = 0;
// var secondCount = 120;
// var timeOut = false;
// var endGame = 0;

// // Array to store the results
// var resultsArray = [];
// // var startQuiz = document.querySelector("#startQuiz");
// var questionsAndAnswers = [
//     {
//         question: "What is js short for?",
//         answers: {
//             a: 'Javascript',
//             b: 'Justsurf',
//             c: 'Joinsomething',
//             d: 'justslump',
//         },
//         correctAnswers: 'a',
//     },
// ]

// startQuiz.addEventListener("click", startQuiz);
// // User starts quiz
// // triggers setTime() function
// function startQuiz () {
//     console.log(question);
//     var userSelection = [];
//     if (questionCount > (questionsAndAnswers.length - 1) && (endGameRun <1)) {
//         return endGame();
//     }
//     else {
//         var newHeader = document.createElement ("h1");
//         newHeader.textContent = questionsAndAnswers[questionCount].question;
//         newHeader.id = 'questions';
//         document.getElementById("questions").appendChild(newHeader)
//     }

// }
// function startQuiz()
// // Show user the question and listen for clicks on the button #startQuiz
// // function newQuestion(){
// //     question1.addEventLister("click", function() {

// //     }

// // };

// // Creating the timer
// function setTime () {
//     var timerInterval = setInterval(function() {
//         secondCount--;
//         timerEl.textContent = secondCount + " time remaining.";

//         if (secondCount === 0) {
//             clearInterval(timerInterval);
//             sendMessage();
//         }
//     }, 1000);
// }

// function sendMessage () {
//     prompt(questionsAndAnswers);
// }

// // INITIALIZATIONS 
// setTime();

// // ROUGH IDEAS 
// // User sees quiz questions and responses
//     // presented with question 1 and response options
//         // if response incorrect, reduce timer by 10 seconds
//         // else continue
//         // occurs for each question
//             // needs to determine which question user is on
//         // once all questions answered:
//             // display score 
//                 // update text to reflect new score and previous score 
//         // prompt user for try again?


