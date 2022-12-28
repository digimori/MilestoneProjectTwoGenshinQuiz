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
  let answers = document.getElementById('answerList')
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
  
  let questionCount = 1; //Needs to be 1 as 0 causes the answer to require two clicks.
  let questionNum = 1;
  
  //----------------------Show questions function----------
  
  function showQuestions(i) {
    let questionText = document.getElementById('questionText');
  
    let questionShow = '<span>' + questions[i].numero + ". " + questions[i].question + '</span>';
    let showOptions = '<div class="option"><span>' + questions[i].answer[0] + '</span></div>' +
      '<div class="option"><span>' + questions[i].answer[1] + '</span></div>' +
      '<div class="option"><span>' + questions[i].answer[2] + '</span></div>';
    questionText.innerHTML = questionShow;
    answers.innerHTML = showOptions;
    let option = answers.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
      option[i].setAttribute("onclick", "selectedAnswer(this)");
    }
  }
  
  function selectedAnswer(rightAnswer) {
    let userResponse = rightAnswer.textContent;
    let correctAnswer = questions[questionCount - 1].rightAnswer;
    let allSelections = answers.children.length;
    if (userResponse == correctAnswer) {
      console.log("correct")
      rightAnswer.classList.add("correct");
    } else {
      rightAnswer.classList.add("incorrect");
      console.log("incorrect");
  showAnswer();
  }
  
  function showAnswer() {
  for (let i = 0; i < allSelections; i++) {
  if(answers.children[i].textContent == correctAnswer) {
  answers.children[i].setAttribute("class", "option correct");
  }
  }
  }
      //showAnswer button to appear to show the answer and some text??
      // if(!$(this).is(':checked')) {
      //  $(this).prop('disabled', true);
    // ------ need to disable the options once one is selected----//
  //if answer is selected > disable others
  
  }
  
  
  //-------------------------------x of 21 questions code-------------------------
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
    if (questionCount <= questions.length - 1) {
      showQuestions(questionCount);
      questionCount++;
      questionNum++;
      counter(questionNum);
    } else {
      console.log("End of questions");
    }
  }
  
  function incrementScore() {
  
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
  