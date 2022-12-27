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
    }
    
    
    function showQuestions(i) {
      let questionText = document.getElementById('questionText');
      let answers = document.getElementById('answerList')
      let questionShow = '<span>' + questions[i].numero + ". " + questions[i].question + '</span>';
      let showOptions = '<div class="option"><span>' + questions[i].answer[0] + '</span></div>'
                                 + '<div class="option"><span>' + questions[i].answer[1] + '</span></div>' 
                                          + '<div class="option"><span>' + questions[i].answer[2] + '</span></div>';
      questionText.innerHTML = questionShow;
      answers.innerHTML = showOptions;
    }
    
    let questionCount = 0;
    const nextButton = document.getElementById('nextButton');
    const quesCount = document.getElementById("totalQuestions");
    let totalQuestions =  '<p><span>' + questionCount + '</span> of 21</p>';
    
    
    document.getElementById("nextButton").onclick = function() {nextQuestion()};
     
     function nextQuestion() {
      if(questionCount < questions.length) {
    questionCount++; 
    showQuestions(questionCount);
    } else {
    console.log("End of questions");
    }}
    
    function answerClicked() {
    
    }
    
    function isCorrectAnswer() {
    
    }
    
    function incorrectAnswer() {
    
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
    