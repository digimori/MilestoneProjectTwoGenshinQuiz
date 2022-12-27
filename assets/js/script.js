const answerFile = require('./answers.js');


  

const startButton = document.getElementById("startButton");
const howToPlay = document.getElementById("info_box");
const exitQuiz = document.getElementById("exitQuizStart");
const continue_btn = document.getElementById("newGame");
const quizBox = document.getElementById("quiz");
const results = document.getElementById("results");
const answerList = document.getElementById("answerList")


function startGame() {
howToPlay.classList.add("showBox");
startButton.classList.add("hideStart");
}

function exitGame() {
howToPlay.classList.remove("showBox");
startButton.classList.remove("hideStart");
}

function newGame() {
howToPlay.classList.remove("showBox");
quizBox.classList.add("activeQuiz");
showQuestions(0);
counter(1);
}

//----------------------Show questions function----------
function showQuestions(i) {
let questionText = document.getElementById('questionText');
let answers = document.getElementById('answerList')
let questionShow = '<span>' + questions[i].numero + ". " + questions[i].question + '</span>';
let showOptions = '<div class="option"><span>' + questions[i].answer[0] + '</span></div>' +
  '<div class="option"><span>' + questions[i].answer[1] + '</span></div>' +
  '<div class="option"><span>' + questions[i].answer[2] + '</span></div>';
questionText.innerHTML = questionShow;
answers.innerHTML = showOptions;
}

let questionCount = 1;
let questionNum = 1;

//x of 21 questions code

function counter(i) {
const quesCount = document.getElementById("totalQuestions");
let bottomQuestionCounter = '<span><p> ' + i + ' of ' + questions.length + '</p></span>';
quesCount.innerHTML = bottomQuestionCounter;
}


// -------------------Button and function for next question---------------------

const nextButton = document.getElementById('nextButton');
document.getElementById("nextButton").onclick = function() {
nextQuestion()
};

function nextQuestion() {
if (questionCount <= questions.length -1) {
  showQuestions(questionCount); 
  questionCount++;
  questionNum++;
  counter(questionNum);
} else {
  console.log("End of questions");
}
}

function answerClicked() {

}

function isCorrectAnswer() {
//turn green, add to score
document.getElementById('').style.backgroundColor = 'lightgreen';
}

function incorrectAnswer() {
document.getElementById('').style.backgroundColor = 'red';
//turn red, don't add, initiate showAnswer() 
}

function incrementScore() {

}

function showAnswer() {

}

function continueButton() {
alert("BLAAAAAAAAHHH")
}


document.getElementById('startButton').addEventListener("click", startGame);
document.getElementById("newGame").addEventListener("click", newGame)


document.getElementById('newGamePlus').addEventListener("click", continueButton)
document.getElementById('exitQuizStart').addEventListener("click", exitGame)
document.getElementById('exitQuiz').addEventListener("click", continueButton)
