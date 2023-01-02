THINGS TO FIX BEFORE SUBMISSION: 
MEDIA QUERIES
quiz box on mobile needs to be shrunk again as it's making things scroll
quiz box and results on  laptop view need to be pushed up

# Genshin Impact Quiz App
+ [Live Website](https://digimori.github.io/MilestoneProjectTwoGenshinQuiz/)
+ [Github Respository](https://github.com/digimori/MilestoneProjectTwoGenshinQuiz)

This Genshin Impact quiz app is designed to be a short and sweet way of testing a players knowledge of the current in-game lore.   
There are a variety of questions, each one more increasingly difficult than the last.   
When the user clicks "Start Quiz", they will be shown a brief "How to play" box giving the rules and two buttons; One to exit the game and one to continue.  
Pressing the Exit Game button will take the user back to the "Start Quiz" page and the "New Game" button will take them to the quiz.  
When a user clicks an answer, they will be shown via a red or green overlay on if they are correct or not. They can then hit the "Next question" button to take them to the next question.   
 Once the end of the questions has been reached, the player will then be met with a results screen which displays how many they got correct and if they would like to try again via a "New Game?" button. 


 ## User Stories: 
 As a user I want blah blah blah

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
The questions, when clicked will change colour to signal a correct or incorrect answer; green for correct, red for incorrect.   
Once an answer is selected, the user cannot choose another one and must proceed to the next question.  
If the answer selected is incorrect, it will colour itself red and then also reveal the correct answer in green.  
  
![Questions and Answers - Correct](/assets/images/readmeImages/correctanswer.png "Image of Questions and Answer box")  
![Questions and Answers - Incorrect](/assets/images/readmeImages/incorrectAnswer.png "Image of Questions and Answer box")  

### The Results page: 
Hilichurl ending image

![Start Screen](/assets/images/readmeImages/"Image of Start Button Screen")
[image here]

## Navigation
The navigation is simple, consisting of a series of clearly labelled "Start Quiz", "Next Question", "New Game" "Exit Quiz" buttons.   

### How to Play Box - The buttons:
The "Start Quiz" button will open up the "How to Play" section, the "New Game" button within that section will start the quiz, and the "Exit Quiz" button will take the user back to the "Start Quiz" page.  I wanted to make the navigation simple, as the userbase for Genshin Impact consists of both adults and children alike.


## Next button:
The "Next Question" will take the user to the next question. 

## Results page buttons:
And finally, the "New Game?" button found on the Results page, will restart the quiz.  
[image of buttons here]



# Testing and Validation:
### JSHint Metrics: 
![JSHint Metrics](/assets/images/readmeImages/jshintmetrics.png"Image of Metrics given by JSHint")  

There are three flags that I left in the code here and the reasons are:  
- The $ not recognised by JSHint is due to me using jQuery on certain lines of code, these lines being:
[Images here]

- The "selectedAnswer" supposedly not being a variable. It's actually called in another function, linked back through the DOM. There is likely a better way to do this, but I found .setAttribute to be the only way that I could get it to function. 
The function it is called in is:

So these are the only metrics that I endeavoured to not fix, as they are technically speaking, not errors.

### HTML & CSS:
 - HTML/CSS validation

 ### Other tests:
 - amIresponsive
 - mediaquery dev tool testing
 - User testing

# Bugs: 
Fairly late into testing, I noticed that I accidentally had half of the answer keys in my "questions" object as "answer" and  the rest as "answers" which meant it wouldn't go past a certain amount of questions before throwing an error.  
This was easily fixed by just changing the "answers" key back to just "answer" on all of the objects.


# Deployment: - FORMAT THIS
Github pages
To deploy and run locally:
Create a Gitpod account.
Use the Chrome browser
Download and install the Gitpod browser extension for Google Chrome.
Restart browser after installation has completed.
Log into Gitpod using your Github username and password.
Navigate into your desired Gitpod repository
Click the green "Gitpod" button on the top right of the repository file section.
This will open the project into a Gitpod workspace and can then be worked on in a local setting.
To deploy and run project on a local IDE:
Follow This Link back to the Github project respository.
Select the menu item above the repository files labelled "Code".
To clone: Select the appropriate url or open to Git Desktop.
To view on a web IDE: Click the dropdown "Open in Web IDE" and choose the appropriate IDE. This dropdown can also be used to clone the code into VSCode IDE.
To clone into the Local IDE - in the terminal, type 'git clone' followed by the URL that can be copied from the aforementioned Code URL.


# Credits:
Coding Ninjas stuff
- google fonts
-MHY for background and hilichurl/logo
- Genshin Impact for having a lot of lore
- my awesome Programmer friends for looking over my code and pointing out my dumb choices
- StackOverflow for just existing to be honest.