/*jshint esversion: 6 */

// -------------------- Getting all the elements needed from the HTML ----------- //

const startButton = document.getElementById("startButton");
const howToPlay = document.getElementById("info_box");
const quizBox = document.getElementById("quiz");
const results = document.getElementById("results");
const answers = document.getElementById("answerList");

// ------------ All counters set to their start numbers ----------------- //

let questionCount = 1;
let questionNum = 1;
let userScore = 0;

// ------------ Start the game functions ---------------------------------- //

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

// ---------------------- Show questions function ---------- //

function showQuestions(i) {
let questionText = document.getElementById("questionText");
questionText.innerHTML = '<span>' + questions[i].numero + ". " + questions[i].question + '</span>';
answers.innerHTML = '<div class="option"><span>' + questions[i].answer[0] + '</span></div>' +
  '<div class="option"><span>' + questions[i].answer[1] + '</span></div>' +
  '<div class="option"><span>' + questions[i].answer[2] + '</span></div>';
let option = answers.querySelectorAll(".option");
for (let i = 0; i < option.length; i++) {
  option[i].setAttribute("onclick", "selectedAnswer(this)");
}
}

// --------------------- Answer Selection --------------------- //

function selectedAnswer(rightAnswer) {
let userResponse = rightAnswer.textContent;
let correctAnswer = questions[questionCount - 1].rightAnswer;
let allSelections = answers.children.length;

if (userResponse == correctAnswer) {
  userScore += 1;
  rightAnswer.classList.add("correct");
} else {
  rightAnswer.classList.add("incorrect");
  showAnswer();
}

function showAnswer() {
  for (let i = 0; i < allSelections; i++) {
    if (answers.children[i].textContent == correctAnswer) {
      answers.children[i].setAttribute("class", "option correct");
    }
  }
}
$('#nextButton').prop("disabled", false)
$(".option").addClass("disable");
}

// -------------------------------x of 21 questions code------------------------- //

function counter(i) {
const quesCount = document.getElementById("totalQuestions");
let bottomQuestionCounter = "<span><p> " + i + " of " + questions.length + "</p></span>";
quesCount.innerHTML = bottomQuestionCounter;
}

// -------------------Button and function for next question--------------------- //

document.getElementById("nextButton").onclick = function() {
nextQuestion();
$('#nextButton').prop("disabled", true);
};

function nextQuestion() {
  if (questionCount <= questions.length - 1) {
    showQuestions(questionCount);
    questionCount++;
    questionNum++;
    counter(questionNum);
  } else if (questionCount == questions.length) {
    $('#nextButton').prop("disabled", false);
    let endOfQues = document.getElementById("nextButton").innerHTML = "Results";
    document.getElementById("nextButton").onclick = function() {
      showResults();
      };
  } else {
    console.log("End of questions");
    showResults();
  }
}

// ------------------------ Results box -------------------------------------- //

function showResults() {
howToPlay.classList.remove("showBox");
quizBox.classList.remove("activeQuiz");
results.classList.add("showResults");
incrementScore();
}

function incrementScore() {
let scoreCounter = document.getElementById("score");
if (userScore >= 0) {
  scoreCounter.innerHTML = "<span>You scored <p>" + userScore + "</p> out of <p>21</p></span>";
}
}

function exitGameEnd() {
window.location.reload();
}

// ------------------- Event Listeners ----------------------- //

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("exitQuizStart").addEventListener("click", exitGame);
document.getElementById("exitQuiz").addEventListener("click", exitGameEnd);
