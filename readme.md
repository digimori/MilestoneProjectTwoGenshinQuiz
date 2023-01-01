THINGS TO FIX BEFORE SUBMISSION: 
MEDIA QUERIES
quiz box on mobile needs to be shrunk again as it's making things scroll
quiz box and results on  laptop view need to be pushed up

# Genshin Impact Quiz App
+ [Live Website](https://digimori.github.io/MilestoneProjectTwoGenshinQuiz/)
+ [Github Respository](https://github.com/digimori/MilestoneProjectTwoGenshinQuiz)

- This Genshin Impact quiz app is designed to be a short and sweet way of testing a players knowledge of the current in-game lore. 
- There are a variety of questions, each one more increasingly difficult than the last. 
- When the user clicks "Start Quiz", they will be shown a brief "How to play" box giving the rules and two buttons; One to exit the game and one to continue.
- Pressing the Exit Game button will take the user back to the "Start Quiz" page and the "New Game" button will take them to the quiz.
- When a user clicks an answer, they will be shown via a red or green overlay on if they are correct or not. They can then hit the "Next question" button to take them to the next question.
- Once the end of the questions has been reached, the player will then be met with a results screen which displays how many they got correct and if they would like to try again via a "New Game?" button. 

## Features:

### The Start Button:

The first element that a player will encounter upon loading the page is a 'Start Quiz' button. 
The background chosen is the in-game wish screen that every player is familiar with, beit happily or unhappily, depending on your luck. 
I would have liked to have found a better contrasting logo of the game, but it's either this or white, and neither unfortunately are particularly pretty. 

![Start Screen](/assets/images/readmeImages/homescreen.png "Image of Start Button Screen")

### How to Play Box:

Once the start button is clicked, the page will swap to a 'How to play' box, which contains information about the quiz.
On this same box, there are Exit Game and New Game buttons, both with their own functionality which will be explained below in the Navigation section.

![How to Play](/assets/images/readmeImages/howtoplay.png "Image of How to Play Screen")

### The Quiz box:

The quiz box itself consists of a title, a section in where the questions are populated from the JavaScript text file, and the answers which are also populated in the same way.  
The answers are selectable, and once an answer has been selected, the others are disabled to disallow multiple selection.  
There is also a counter underneath the answers that tells the user how far they have progressed through the quiz by displaying an 'x of 21' questions.  


![Quiz box](/assets/images/readmeImages/thequiz.png "Image of Quiz Screen")  

There is a Next Question button at the bottom that then takes the user to the next question when they are ready.  

![Next Button](/assets/images/readmeImages/nextbuttonandqcount.png "Image of Next Button")  

### The Quiz Questions and Answers:

![Questions and Answers - Correct](/assets/images/readmeImages/correctanswer.png "Image of Questions and Answer box")  
![Questions and Answers - Incorrect](/assets/images/readmeImages/incorrectAnswer.png "Image of Questions and Answer box")  

### The Results page: 
Hilichurl ending image

![Start Screen](/assets/images/readmeImages/"Image of Start Button Screen")
[image here]

## Navigation

### How to Play Box - The buttons:

## Quiz answer selections:

## Next button:

## Results page buttons:

[image of buttons here]




#How to play 
- description

#Testing:
- Wireframes
 - JSHint - explain why you left the metrics as they were 
 - HTML/CSS validation
 - amIresponsive
 - mediaquery dev tool testing
 - User testing

#Bugs: 
accidentally had half of the answer keys as "answer" and "answers" which meant it wouldn't go past a certain amount of questions before throwing an error.
- fixed


#Deployment:
Github pages


#Credits:
Coding Ninjas stuff
- google fonts
-MHY for background and hilichurl/logo
- Genshin Impact for having a lot of lore
- my awesome Programmer friends for looking over my code and pointing out my dumb choices
- StackOverflow for just existing to be honest.