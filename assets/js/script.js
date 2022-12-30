const questions = [{
  numero: 1,
  question: "Which region are the Knights of Favonius located?",
  answer: ["Khaenriah", "Mondstadt", "Inazuma"],
  rightAnswer: "Mondstadt",
},
{
  numero: 2,
  question: "Who are the four beginner characters that you start the game with?",
  answer: ["Venti, Zhongli, Ei, Nahida", "Albedo, Sucrose, Traveler, Bennett", "Traveler, Lisa, Amber, Kaeya"],
  rightAnswer: "Traveler, Lisa, Amber, Kaeya",
},
{
  numero: 3,
  question: "What is the name of the pitstop between Mondstadt and Liyue?",
  answer: ["Dihua Marsh", "Wangshu Inn", "Dragonspine"],
  rightAnswer: "Wangshu Inn",
},
{
  numero: 4,
  question: "What is the name of your Silver haired flying companion",
  answer: ["Paimon", "Spymon", "Byemon"],
  rightAnswer: "Paimon",
},
{
  numero: 5,
  question: "What element does the traveler acquire first in Teyvat?",
  answer: ["Anemo", "Geo", "Electro"],
  rightAnswer: "Anemo",
},
{
  numero: 6,
  question: "Which island of Inazuma is known for its Aztec-like story theme?",
  answer: ["Yashiori Island", "Watatsumi Island", "Tsurumi Island"],
  rightAnswer: "Tsurumi Island",
},
{
  numero: 7,
  question: "What are the demon names of the currently confirmed archons?",
  answer: ["Santa, Rudolf, Satan, George, Frank, Jim", "Barbatos, Morax, Beelzebuul, Buer, Focalors, Murata", "Bermuda, Borax, Baal, Beer, Folklore, Murakami"],
  rightAnswer: "Barbatos, Morax, Beelzebuul, Buer, Focalors, Murata",
},
{
  numero: 8,
  question: "How many Fatui Harbingers were there originally (We don't talk about Signora)?",
  answer: ["11", "9", "6"],
  rightAnswer: "11",
},
{
  numero: 9,
  question: "Who was it who originally sealed away the traveler and their twin?",
  answer: ["Kiana Kaslana", "The Sustainer of Heavenly Principles", "The Principality of Celestia"],
  rightAnswer: "The Sustainer of Heavenly Principles",
},
{
  numero: 10,
  question: "What are the virtues of the currently encountered archons of Teyvat (as of 3.0)?",
  answer: ["Love, Justice, Wisdom, War", "Justice, Transience, Freedom, War", "Freedom, Contracts, Eternity, Wisdom"],
  rightAnswer: "Freedom, Contracts, Eternity, Wisdom",
},
{
  numero: 11,
  question: "The Tianquan of the Liyue Qixing is?",
  answer: ["Keqing", "Qiqi", "Ningguang"],
  rightAnswer: "Ningguang",
},
{
  numero: 12,
  question: "What is the name of the cell in which Nahida was imprisoned?",
  answer: ["Sanctuary of Samsara", "Sanctuary of Suresthana", "Sanctuary of Shamshir"],
  rightAnswer: "Sanctuary of Suresthana",
},
{
  numero: 13,
  question: "Who is the First descender?",
  answer: ["Celstia", "Phanes", "Traveler"],
  rightAnswer: "Phanes",
},
{
  numero: 14,
  question: "What is the name of the princess of Sal Vindagnyr's protector?",
  answer: ["Irminsul", "Imunlaukr", "Imminent"],
  rightAnswer: "Imunlaukr",
},
{
  numero: 15,
  question: "Who was responsible for the sacrifice of King Deshret?",
  answer: ["Greater Lord Rukkhedevata", "Himself", "Lesser Lord Kusanali"],
  rightAnswer: "Himself",
},
{
  numero: 16,
  question: "Before the First Who Came, who, or what, were the original inhabitants of Teyvat?",
  answer: ["Celestia", "Orobashi", "Dragonheirs of the Depths"],
  rightAnswer: "Dragonheirs of the Depths",
},
{
  numero: 17,
  question: "What is the name of Albedo's brother, also created by Rhinedottir?",
  answer: ["Durin", "Dvalin", "Daran"],
  rightAnswer: "Durin",
},
{
  numero: 18,
  question: "What is the name of the creator of the Dainichi Mikoshi?",
  answer: ["Aberaku", "Supada", "Daimon"],
  rightAnswer: "Aberaku",
},
{
  numero: 19,
  question: "The origin of the Black Serpent Knights is?",
  answer: ["The Chasm", "Enkanomiya", "Khaenriah"],
  rightAnswer: "Khaenriah",
},
{
  numero: 20,
  question: "What are the names of the Moon Sisters?",
  answer: ["Seelie, Hili, Canon", "Aria, Sonnet, Canon", "Aria, Seelie, Hili"],
  rightAnswer: "Aria, Sonnet, Canon",
},
{
  numero: 21,
  question: "The Guili Assembly of Liyue was ruled by which god?",
  answer: ["Zhongli", "Havria", "Guizhong"],
  rightAnswer: "Guizhong",
},
];

$(document).ready(function() {
console.log("Ready");
})


/*jshint esversion: 6 */

// -------------------- Getting all the elements needed from the HTML ----------- //

const startButton = document.getElementById("startButton");
const howToPlay = document.getElementById("info_box");
const exitQuiz = document.getElementById("exitQuizStart");
const continue_btn = document.getElementById("newGame");
const quizBox = document.getElementById("quiz");
const results = document.getElementById("results");
const leaveQuiz = document.getElementById("exitQuiz");
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
questionText.innerHTML = '<span>' + questions[i].numero + '. ' + questions[i].question + '</span>';
answers.innerHTML = "<div class='option'><span>" + questions[i].answer[0] + "</span></div>" +
  "<div class='option'><span>" + questions[i].answer[1] + "</span></div>" +
  "<div class='option'><span>" + questions[i].answer[2] + "</span></div>";

let option = answers.querySelectorAll(".option");

for(let i = 0; i < option.length; i++) {
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
  console.log(userScore);
  console.log("correct");
  rightAnswer.classList.add("correct");
} else {
  rightAnswer.classList.add("incorrect");
  console.log("incorrect");
  showAnswer();
}

function showAnswer() {
  for (let i = 0; i < allSelections; i++) {
    if (answers.children[i].textContent == correctAnswer) {
      answers.children[i].setAttribute("class", "option correct");
    }
  }
}
$(".option").addClass("disable");
}


// -------------------------------x of 21 questions code------------------------- //

function counter(i) {
const quesCount = document.getElementById("totalQuestions");
quesCount.innerHTML = "<span><p> " + i + " of " + questions.length + "</p></span>";
}


// -------------------Button and function for next question--------------------- //

const nextButton = document.getElementById("nextButton");
document.getElementById("nextButton").onclick = function() {
nextQuestion();
};

function nextQuestion() {
if (questionCount <= questions.length -1) {
  showQuestions(questionCount);
  questionCount++;
  questionNum++;
  counter(questionNum);
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