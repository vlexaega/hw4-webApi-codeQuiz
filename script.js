var contentSpotEl = document.querySelector("#contentspot")
var submitFeedbackEl = document.querySelector("#submitfeedback")
var scoreBoxEl = document.querySelector("#scorebox")
var questionsAndAnswers = [
    {
        question: "What is JS short for?",
        answers: {
            a: "Javascript",
            b: "Justsurf",
            c: "Joinsomething",
            d: "Justslump", 
        },
        correctAnswer: 'a'},
        {
            question: "What is Javascript?",
            answers: {
                a: "Javascript is a scripting language used to make the website interactive",
                b: "JavaScript is an assembly language used to make the website interactive",
                c: "JavaScript is a compiled language used to make the website interactive",
                d: "None of the mentioned", 
            },
        correctAnswer: 'a'},
        {
            question: "Among the given statements, which statement defines closures in JavaScript?", 
            answers: {
                a: "JavaScript is a function that is enclosed with references to its inner function scope", 
                b: "JavaScript is a function that is enclosed with references to its lexical environment", 
                c: "JavaScript is a function that is enclosed with the object to its inner function scope", 
                d: "None of the mentioned", 
            },
        correctAnswer: 'b'},
        {
            question: "Which of the following is not javascript data types?", 
            answers: {
                a: "Null type",
                b: "Undefined type", 
                c: "Number type", 
                d: "All of the mentioned", 
            },
        correctAnswer: 'd'},
        {
            question: " Which of the following object is the main entry point to all client-side JavaScript features and APIs?", 
            answers: {
                a: "Position",
                b: "Window", 
                c: "Standard", 
                d: "Location", 
            },
        correctAnswer: 'b'},

];


// Question variable to create index
var questionCount = 0;
// Score and timer
var score = 0;
var timerOut = false;
var endGame = 0;
var secondCount = 120;
// Variable to store results
var resultsStorage = new Array();

// Function to check if OK to make a new question goes here
function confirmOkToMakeQuestion (){
    if (secondCount < 0) {
        return
    }
    else {
        console.log("test")
        return makeQuestion();
    }
}

// Function to make a question goes here 
function makeQuestion (){
    if (questionCount > (questionsAndAnswers.length - 1) && (endGameRun < 1)){
        return endGame();
    }
    else {
        //clear the content box
        contentSpotEl.innerHTML = "",
        //clear the feedback box
        submitFeedbackEl.innerHTML = "",
        //create new question 
        newHeader = document.createElement("h1");
        newHeader.textContent = questionsAndAnswers[questionCount].question;
        newHeader.id = 'question';
        document.getElementById("contentspot").appendChild(newHeader)
        // make an answers box to append answers rather than in the header
        var answersBox = document.createElement("h1");
        answersBox.id = 'answersbox';
        document.getElementById("question").after(answersBox);
        
        //make the answer buttons
        var countAnswers = (Object.values(questionsAndAnswers[questionCount].answers).length);
        var answerArray = Object.values(questionsAndAnswers[questionCount].answers);
        for (var i=0; i < countAnswers; i++){
            var answerElement = document.createElement("button");
            var uniqueButtonID = 'answer' + i; // this gives each button a unique ID
            answerElement.id = uniqueButtonID;
            //fill each answer button with the associated answer in the array for the specific question
            answerElement.innerHTML = answerArray[i].toString();
            document.getElementById("answersbox").appendChild(answerElement);
        }
    }
    return //console.log("making a question works in the background!")
}


// Function to check the answer goes here
function checkAnswer(event){
    var currentQuestionAnswer = Object.values(questionsAndAnswers[questionCount].correctAnswer);
    var convertAnswerstoString = currentQuestionAnswer.toString();
    var feedbackElement = document.createElement("p");
    if (event.target.id.includes("answer") && event.target.innerText === questionsAndAnswers[questionCount].answers[convertAnswerstoString]){
        score += 10;
        //target the scorebox in HTML!
        scoreBoxEl.textContent = "Score: " + score;
        //tell the user if they got the question right 
        document.getElementById("answersbox").innerHTML = "";
        feedbackElement.textContent = "Correct!";
        document.getElementById("submitfeedback").appendChild(feedbackElement);
        questionCount++;
        return setTimeout(confirmOkToMakeQuestion, 1000);
    }
    else if (event.target.id.includes("answer") && (event.target.innerText !== questionsAndAnswers[questionCount].answers[convertAnswerstoString])){
        //tell the user they got the question wrong
        
    }
}

// Function to subtract seconds goes here

// Function to handle timer goes here 

// Function to end the game goes here

// Function to display score goes here



// function setTime(){
//     var timerInterval = setInterval(function(){
//         secondCount--;
//         timerEl.textContent = secondCount + " seconds remaining!!";

//         if (secondCount === 0){
//             clearInterval(timerInterval);
//             timerEl.textContent = "Times Up!!";
//             showScore();
//         }
//     }, 1000);//number of milliseconds between intervals
// };


// function startQuiz (){
//     currentQuestionIndex = 0;
//     score = 0;
//     secondCount = 60;
//     nextButton.innerHTML = "Next";
//     showQuestion();
//         // start timer here! 
//     setTime();
// }

// function showQuestion(){
//     resetState();
//     var currentQuestion = questions[currentQuestionIndex];
//     var questionNo = currentQuestionIndex + 1;
//     questionEl.innerHTML = questionNo + ". " + currentQuestion.question; 

//     currentQuestion.answers.forEach(answer => {
//         var button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if (answer.correct){
//             button.dataset.correct = answer.correct;
//         };
//         // if (answer = false){
//         //     timerEl.textContent = (secondCount - 10 + " seconds remaining");
//         // }  // I don't think this works..nope it doesn't
//         button.addEventListener("click", selectAnswer);
//     });
// }

// function resetState(){
//     nextButton.style.display = "none";
//     while (answerButtons.firstChild){
//         //remove all previous answers
//         answerButtons.removeChild(answerButtons.firstChild)
//     };
// };

// // confirms to user if answer is correct or incorrect
// function selectAnswer(e){
//     var selectedBtn = e.target;
//     var isCorrect = selectedBtn.dataset.correct === "true";
//     //count = isCorrect++;
//     if (isCorrect){
//         selectedBtn.classList.add("correct");
//         //increase score by 1
//         // store score count into local storage 
//         //console.log("you got 1 point");
//         //count++;
//         // localStorage.setItem("count", count);
        
//         // keep adding to score count as the questions are answered
//     }
//     else {
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if (button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// //define showScore
// function showScore (){
//     // THIS IS WHERE WE NEED TO DISPLAY THE STORED SCORE AND OFFER PLAY AGAIN BUTTON!
//     resetState();
//     questionEl.innerHTML = 'You scored  ' + score + ' out of ' + questions.length + '!'; 
//     let playAgainButton = document.createElement("button");
//     playAgainButton.addEventListener("click", function(){
//         quizEl.removeChild(playAgainButton);
//         startQuiz();
//     });
//     playAgainButton.textContent = "Play Again";
//     quizEl.appendChild(playAgainButton);
//     // nextButton.innerHTML = "Play Again";
//     // playAgainButton.style.display = "block";

// }

// //define handleNextButton to show further questions
// function handleNextButton(){
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length){
//         showQuestion(); // shows next question with updated question index 
//     }
//     else {
//         showScore();
//     }
    
// }

// nextButton.addEventListener("click", ()=>{
//     if (currentQuestionIndex < questions.length){
//         handleNextButton();
//     }
//     else {
//         startQuiz();
//     }
// });



// startQuiz();

