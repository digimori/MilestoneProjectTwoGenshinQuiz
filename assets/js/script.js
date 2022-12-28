$(document).ready(function(){
  console.log("Ready");
  })

const answerFile = require('./answers.js');


 // --------------------Getting all the elements needed from the HTML -----------//

const startButton = document.getElementById("startButton");
const howToPlay = document.getElementById("info_box");
const exitQuiz = document.getElementById("exitQuizStart");
const continue_btn = document.getElementById("newGame");
const quizBox = document.getElementById("quiz");
const results = document.getElementById("results");
const answerList = document.getElementById("answerList")

//------------ Start the game functions ----------------------------------//

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

let questionCount = 1;
let questionNum = 1;

//----------------------Show questions function----------//

function showQuestions(i) {
  let questionText = document.getElementById('questionText');
  let answers = document.getElementById('answerList')
  let questionShow = '<span>' + questions[i].numero + ". " + questions[i].question + '</span>';
  let showOptions = '<div class="option"><span>' + questions[i].answer[0] + '</span></div>' +
    '<div class="option"><span>' + questions[i].answer[1] + '</span></div>' +
    '<div class="option"><span>' + questions[i].answer[2] + '</span></div>';
  questionText.innerHTML = questionShow;
  answers.innerHTML = showOptions;
  answers.innerHTML = showOptions;
  let option = answers.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "selectedAnswer(this)");
  }
}

function selectedAnswer(rightAnswer) {
  let userResponse = rightAnswer.textContent;
  let correctAnswer = questions[questionCount - 1].rightAnswer;
  if(userResponse == correctAnswer) {
  console.log("correct")
  rightAnswer.classList.add("correct");
  } else {
  rightAnswer.classList.add("incorrect");
  console.log("incorrect");
  }
  }

//-------------------------------x of 21 questions code-------------------------//
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

//const iterator = questions.answer.keys();

/*Answer click buttons. Use 'this'?
function selectAnswer() {
for (let i = 0; iterator.length; i++) {
if(key === questions.rightAnswer) {
this.element.style.backgroundColor = 'lightGreen'
} else {
this.element.style.backgroundColor = 'red'
}
}
}*/


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

//Tester button ---------------------------------------------------------

function continueButton() {
  alert("BLAAAAAAAAHHH")
}

//------------------- Event Listeners -----------------------//

document.getElementById('startButton').addEventListener("click", startGame);
document.getElementById("newGame").addEventListener("click", newGame)
document.getElementById('newGamePlus').addEventListener("click", continueButton)
document.getElementById('exitQuizStart').addEventListener("click", exitGame)
document.getElementById('exitQuiz').addEventListener("click", continueButton)
