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

function exitGame(){
howToPlay.classList.remove("showBox");
  startButton.classList.remove("hideStart");
}

function newGame() {
howToPlay.classList.remove("showBox");
quizBox.classList.add("activeQuiz");
}

function continueButton() {
  alert("BLAAAAAAAAHHH")
}
document.getElementById('startButton').addEventListener("click", startGame);
document.getElementById("newGame").addEventListener("click", newGame)


document.getElementById('newGamePlus').addEventListener("click", continueButton)
document.getElementById('exitQuizStart').addEventListener("click", exitGame)
document.getElementById('exitQuiz').addEventListener("click", continueButton)
