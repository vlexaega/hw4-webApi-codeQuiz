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
            question: "What is Javascript?",
            answers: [
                { text: "Javascript is a scripting language used to make the website interactive", correct: true},
                { text: "JavaScript is an assembly language used to make the website interactive", correct: false},
                { text: "JavaScript is a compiled language used to make the website interactive", correct: false},
                { text: "None of the mentioned", correct: false},
            ]},
        {
            question: "Among the given statements, which statement defines closures in JavaScript?", 
            answers: [
                { text: "JavaScript is a function that is enclosed with references to its inner function scope", correct: false},
                { text: "JavaScript is a function that is enclosed with references to its lexical environment", correct: true},
                { text: "JavaScript is a function that is enclosed with the object to its inner function scope", correct: false},
                { text: "None of the mentioned", correct: false},
            ]},
        {
            question: "Which of the following is not javascript data types?", 
            answers: [
                { text: "Null type", correct: false},
                { text: "Undefined type", correct: false},
                { text: "Number type", correct: false},
                { text: "All of the mentioned", correct: true},
            ]},
        {
            question: " Which of the following object is the main entry point to all client-side JavaScript features and APIs?", 
            answers: [
                { text: "Position", correct: false},
                { text: "Window", correct: true},
                { text: "Standard", correct: false},
                { text: "Location", correct: false},
            ]},

];

// DEPENDENCIES
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var timerEl = document.getElementById("timer");
var scoreboxEl = document.getElementById("scorebox");
var initialinputEl = document.getElementById("initialinput");
var submitfeedbackEl = document.getElementById("submitfeedback");
var quizEl = document.querySelector(".quiz");

//store question index, score and timer
var currentQuestionIndex = 0;
var score = 0;
var timerOut = false;
var endGame = 0;
var secondCount;

// functions

function setTime(){
    var timerInterval = setInterval(function(){
        secondCount--;
        timerEl.textContent = secondCount + " seconds remaining!!";

        if (secondCount === 0){
            clearInterval(timerInterval);
            timerEl.textContent = "Times Up!!";
            showScore();
        }
    }, 1000);//number of milliseconds between intervals
};


function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    secondCount = 60;
    nextButton.innerHTML = "Next";
    showQuestion();
        // start timer here! 
    setTime();
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
        };
        // if (answer = false){
        //     timerEl.textContent = (secondCount - 10 + " seconds remaining");
        // }  // I don't think this works..nope it doesn't
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        //remove all previous answers
        answerButtons.removeChild(answerButtons.firstChild)
    };
};

// confirms to user if answer is correct or incorrect
function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    //count = isCorrect++;
    if (isCorrect){
        selectedBtn.classList.add("correct");
        //increase score by 1
        // store score count into local storage 
        //console.log("you got 1 point");
        //count++;
        // localStorage.setItem("count", count);
        
        // keep adding to score count as the questions are answered
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
    // THIS IS WHERE WE NEED TO DISPLAY THE STORED SCORE AND OFFER PLAY AGAIN BUTTON!
    resetState();
    questionEl.innerHTML = 'You scored  ' + score + ' out of ' + questions.length + '!'; 
    let playAgainButton = document.createElement("button");
    playAgainButton.addEventListener("click", function(){
        quizEl.removeChild(playAgainButton);
        startQuiz();
    });
    playAgainButton.textContent = "Play Again";
    quizEl.appendChild(playAgainButton);
    // nextButton.innerHTML = "Play Again";
    // playAgainButton.style.display = "block";

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



// function displayScoreSubmitMessage(type, message){
//     var submitFeedback = document.createElement("p");
//     submitFeedback.id = 'submitFeedback';
//     document.querySelector('#scorebox').appendChild(submitFeedback);
//     document.querySelector('#submitfeedback').textContent = message;
//     document.querySelector('#submitfeedback').setAttribute = ("class", type);
// }
// document.getElementById("next-btn").addEventListener("click", function(event){
//     event.preventDefault();
//     var initials = document.querySelector('#initialinput');
//     if (initials === ""){
//         displayScoreSubmitMessage("error", "Box cannot be blank");
//     }
//     else {
//         displayScoreSubmitMessage("success", "Your score has been saved!");
//         localStorage.setItem("initialZ", initials);
//         localStorage.setItem("finalScore", score);
//         storeScore();
//     }
// });

// function storeScore(){
//     var initialsText = localStorage.getItem("initialZ");
//     var highscoreText = localStorage.getItem("finalScore");

//     var highScoreEntry = {
//         initialZ: initialsText,
//         scorelog: highscoreText
//     };
//     resultsStorage.push(highScoreEntry);
//     console.log("STORESCORE HAS RUN");

// };



// function displayScoreSubmitMessage(type, message) {
//     var submitfeedback = document.createElement("p");
//     submitfeedback.id = 'submitfeedback'; 
//     document.querySelector("#scorebox").appendChild(submitfeedback);

//     document.querySelector("#submitfeedback").textContent = message;
//     document.querySelector("#submitfeedback").setAttribute("class", type);
//     }

// document.getElementById("submit").addEventListener("click", function(event) {
//     event.preventDefault();

//     var initials = document.querySelector("#initialinput").value;

//     if (initials === "") {
//         displayScoreSubmitMessage("error", "Box cannot be blank");
//     }

//     else {
//         displayScoreSubmitMessage("success", "Your score has been saved!");
//     // Save initials and score to localStorage 
//     localStorage.setItem("initialzz", initials);
//     localStorage.setItem("finalScore", score);
//     storeScore();
//     }
//     })
// function storeScore() {
//     //Retrieve the stuff
//   var initialsText = localStorage.getItem("initialzz");
//   var highscoreText = localStorage.getItem("finalScore");

//   //take both and add to resultsStorage
//   var highScoreEntry = {
//         initialz: initialsText,
//         scorelog: highscoreText
//   };

//   resultsStorage.push(highScoreEntry);
//   return ////console.log("STORESCORE HAS RUN");






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


