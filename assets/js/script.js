const answerFile = require('./answers.js');

const startButton = document.getElementById("startButton");
const howToPlay = document.getElementById("info_box");
const exitQuiz = document.getElementById("exitQuizStart");
const continue_btn = document.getElementById("newGame");
const quizBox = document.getElementById("quiz");
const results = document.getElementById("results");
const answerList = document.getElementById("answerList")


function startGame() {
  howToPlay.classList.add("showBox")
}




function continueButton() {
  alert("BLAAAAAAAAHHH")
}
document.getElementById('startButton').addEventListener("click", startGame);


document.getElementById('newGame').addEventListener("click", continueButton)
document.getElementById('newGamePlus').addEventListener("click", continueButton)
document.getElementById('exitQuizStart').addEventListener("click", continueButton)
document.getElementById('exitQuiz').addEventListener("click", continueButton)
