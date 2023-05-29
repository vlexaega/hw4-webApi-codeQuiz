var contentSpotEl = document.querySelector("#contentspot")
var feedbackEl = document.querySelector("#feedback")
var scoreBoxEl = document.querySelector("#scorebox")
var timerBoxEl = document.querySelector("#timerbox")
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

//endGame();

// Question variable to create index
var questionCount = 0;
// Score and timer
var score = 0;
var timerOut = false;
var endGameRun = 0;
var secondCount = 120;
// Variable to store results
var resultsStorage = new Array();

resetEndGameRun(); 
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
    if (questionCount > (questionsAndAnswers.length - 1) && (endGameRun <= 1)){
        //console.log("part of makeQuestion that causes the game to end has run")
        return endGame();
    }
    else {
        //clear the content box
        contentSpotEl.innerHTML = "",
        //clear the feedback box
        feedbackEl.innerHTML = "",
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
        document.getElementById("feedback").appendChild(feedbackElement);
        questionCount++;
        return setTimeout(confirmOkToMakeQuestion, 1000);
    }
    else if (event.target.id.includes("answer") && (event.target.innerText !== questionsAndAnswers[questionCount].answers[convertAnswerstoString])){
        //tell the user they got the question wrong
        document.getElementById("answersbox").innerHTML = "";
        feedbackElement.textContent = "Wrong!"
        document.getElementById("feedback").appendChild(feedbackElement);
        //create function to reduce seconds if question wrong!
        subtractSeconds();
        questionCount++;
        return setTimeout(confirmOkToMakeQuestion, 1000);
    }
}

// Function to subtract seconds goes here
function subtractSeconds(){
    //create a var for the lost second count
    var lostSecondCount = secondCount - 20;
    return secondCount = lostSecondCount;
}

// Function to handle timer goes here 
function timerFunction (){
    var timerID = setInterval(runSecondsCounter, 1000);
    var timerEl = document.getElementById("timerbox");
    function runSecondsCounter(){
        if (endGameRun > 0){
            clearInterval(timerID);
        }
        else {
            return secondsCounter();
        }
    }
    function secondsCounter(){
        if (secondCount > 0){
            secondCount--
            return timerEl.innerHTML = "Timer: " + secondCount;
        }
        else if (secondCount <= 0 && ((questionCount < questionsAndAnswers.length) && (endGameRun < 1)) && timerOut === false){
            timerEl.innerHTML = "TIME IS UP!";
            clearInterval(timerID);
            timerOut = true;
            return setTimeout(endGame, 1000);
        }
        else {
            return clearInterval(timerID);
        }
        return
    }
}
// Function to end the game goes here
function endGame () {
    //wipe the content box clean
    contentSpotEl.innerHTML = "";
    //wipe the feedback box clean
    feedbackEl.innerHTML = "";
    //wipe the timer box clean 
    timerBoxEl.innerHTML = "";
    //create a new header to tell user thanks for playing
    var newHeader = document.createElement("h1");
    newHeader.textContent = "Thanks for playing!";
    newHeader.id = 'endtext';
    document.getElementById("contentspot").appendChild(newHeader);
    //create a form to collect users data and save that plus the score to local storage
    var form = document.createElement("form");
    form.id = 'form';
    document.getElementById("contentspot").appendChild(form);

    var initialLabel = document.createElement("Label");
    initialLabel.setAttribute("for", "initialbox");
    initialLabel.id = 'initialinputlabel';
    document.getElementById("form").appendChild(initialLabel);

    var initialInputBox = document.createElement("INPUT");
    initialInputBox.setAttribute("type", "text");
    initialInputBox.setAttribute("placeholder", "Input Initials Here");
    initialInputBox.id = 'initialinput';
    document.getElementById("initialinputlabel").appendChild(initialInputBox);

    // // //need a submit buttonnnn
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Save Score");
    submit.id = 'submit';
    document.getElementById("initialinput").after(submit);
    
    //var initialInput = document.querySelector("#initialinput");
    var submissionResponseEl = document.createElement("p");
    document.querySelector("#feedback").appendChild(submissionResponseEl);

    function displayScoreSubmitMessage (type, message){
            var submitFeedback = document.createElement("p");
            submitFeedback.id = 'submitfeedback';
            document.querySelector("#scorebox").appendChild(submitFeedback);

            document.querySelector("#submitfeedback").textContent = message;
            document.querySelector("#submitfeedback").setAttribute("class", type);
        };

        document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();

        var initials = document.querySelector("#initialinput").value;

        if (initials === ""){
            displayScoreSubmitMessage("error", "Box cannot be blank");
        }

        else {
            displayScoreSubmitMessage("success", "Your score has been saved!");
            localStorage.setItem("initialsUser", initials);
            localStorage.setItem("finalScore", score);
            storeScore();
        }
    })

    var playAgainButton = document.createElement("button");
    playAgainButton.id = 'playagainbutton';
    playAgainButton.innerText = "Play Again";
    document.querySelector("#feedback").appendChild(playAgainButton);

    document.getElementById("playagainbutton").addEventListener('click', resetQuiz);

    return endGameRun = endGameRun + 1;
}


function resetQuiz(){
    resetScore();
    resetQuestionCount();
    resetTimer();
    resetTimerRun();
    document.querySelector("#feedback").innerHTML = "";
    return runQuiz();
}

function resetScore(){
    scoreBoxEl.innerHTML = "";
    return score = 0;
}
function resetQuestionCount(){
    return questionCount = 0;
}
function resetTimer(){
    return secondCount = 120;
}
function resetTimerRun(){
    return timerOut = false;
}
function resetEndGameRun(){
    return endGameRun = 0;
}

// the main function that handles everything for the quiz!
function runQuiz(){
    resetEndGameRun();
    makeQuestion();

    //display timer and score!
    timerElement = document.createElement("p");
    timerElement.id = 'timer';
    document.getElementById("timerbox").appendChild(timerElement);
    timer.innerHTML = "Timer: "+ secondCount;

    timerFunction();

    scoreElement = document.createElement("p");
    scoreElement.id = 'score';
    scoreElement.textContent = 'Score:' + score;
    document.getElementById("scorebox").appendChild(scoreElement);
    document.addEventListener('click', runCheckAnswer);

    return;
}

// Function to store the scores goes here
function storeScore(){
    var initialsText = localStorage.getItem("initialsUser");
    var highScoreText = localStorage.getItem("finalScore");

    //add both of these to the results storage item
    var highScoreEntry = {
        initialz: initialsText,
        scorelog: highScoreText,
    }
    resultsStorage.push(highScoreEntry);
    return
}
//storeScore()
// Function to see the high scores goes here
function displayHighScores (){
    //wipe the necessary boxes clean
    document.getElementById("contentspot").innerHTML = "",
    document.getElementById("feedback").innerHTML = "",
    document.getElementById("scorebox").innerHTML = "",
    document.getElementById("timerbox").innerHTML = ""

    //create the playAgain button again
    var playAgainButton = document.createElement("button");
    playAgainButton.id = 'playagainbutton';
    playAgainButton.innerText = "Play Again";
    document.querySelector("#feedback").appendChild(playAgainButton);

    document.getElementById("playagainbutton").addEventListener('click', resetQuiz);

    //create for loop to display results if local storage has data, otherwise put an element that says no scores yet
    for (var i = 0; i < resultsStorage.length; i++){
        var highScoreElement = document.createElement("p");
        var uniqueIdValue = 'entry' + i; // this gives each button a unique ID
        highScoreElement.innerText = "Initials: " + resultsStorage[i].initialz + " Score: " + resultsStorage[i].scorelog;
        document.getElementById("contentspot").appendChild(highScoreElement);
    }
    return;
}

//INITIALIZATION WOO HOO
document.getElementById("startgame").addEventListener('click', runQuiz);
document.getElementById("highscores").addEventListener('click', checkForHighScores);

function checkForHighScores(){
    if (resultsStorage.length < 1){
        document.getElementById("contentspot").innerHTML = "";
        document.getElementById("feedback").innerHTML = "";
        document.getElementById("scorebox").innerHTML = "";
        document.getElementById("timerbox").innerHTML = "";
        var newHeader = document.createElement("h1");
        newHeader.textContent = "No Scores Yet";
        newHeader.id = 'noscores';
        document.getElementById("contentspot").appendChild(newHeader)

        //recreate the play again buttooonnnnn
        var playAgainButton = document.createElement("button");
        playAgainButton.id = 'playagainbutton';
        playAgainButton.innerText = "Play Again";
        document.querySelector("#feedback").appendChild(playAgainButton);

        document.getElementById("playagainbutton").addEventListener('click', resetQuiz);
    }
    else {
        return displayHighScores();
    }
}

function runCheckAnswer(){
    if (questionCount <= (questionsAndAnswers.length - 1)){
        return checkAnswer(event);
    }
    else {
        return
    }
}
