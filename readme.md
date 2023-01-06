THINGS TO FIX BEFORE SUBMISSION: 


# Genshin Impact Quiz App
+ [Live Website](https://digimori.github.io/MilestoneProjectTwoGenshinQuiz/)
+ [Github Respository](https://github.com/digimori/MilestoneProjectTwoGenshinQuiz)

## Developer Goals:

This Genshin Impact quiz app is designed to be a short and sweet way of testing a players knowledge of the current in-game lore.   
There are a variety of questions, each one more increasingly difficult than the last.   
When the user clicks "Start Quiz", they will be shown a brief "How to play" box giving the rules and two buttons; One to exit the game and one to continue.  
Pressing the Exit Game button will take the user back to the "Start Quiz" page and the "New Game" button will take them to the quiz.  
When a user clicks an answer, they will be shown via a red or green overlay on if they are correct or not. They can then hit the "Next question" button to take them to the next question.   
 Once the end of the questions has been reached, the player will then be met with a results screen which displays how many they got correct and if they would like to try again via a "New Game?" button. 


 ## User Stories: 
 As a user I want blah blah blah
- to be able to answer questions and be told which answer is correct or not clearly - also given the right one if incorrect is selected
- easily start a new game
- easily exit the quiz if want to after reading how to play

 ## Design Choices:

 ###### Fonts:
 I chose a [Google Font]() called "Philosopher", as it was the closest that I could find that matched the current in-game font.
The fall-back font is 'Sans-Serif' as always.

###### Colours: 
[traveler image]
-- colours - traveler 

###### Logo: 
- change the logo in PS to have a border

 ## Wireframes:
 Wireframes were created in FIGMA[link].
- [Image]
- [image]
- [image]

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
The results page, I constructed to just be a basic "Congratulations" message and a part that tells you how much out of the total questions you scored correctly.   
Beneath this, I also give the user an option to try again with a "New Game?" button.

![Results Page](/assets/images/readmeImages/)


###### Hilichurl ending image:   
This image is just an image file of the emojis that are found in the in-game chat.
I thought it appropriate, as it isn't biased towards any character in particular (It is just a basic enemy) and thought it was just cute, happy, celebratory image to finish the quiz with.  
![Hilichurl Image](/assets/images/Hilichurl_3.png "Image of Hilichurl Icon")

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
![JSHint Metrics](/assets/images/readmeImages/jshintmetrics.png "Image of Metrics given by JSHint")  

There are three flags that I left in the code here and the reasons are:  
- The $ not recognised by JSHint is due to me using jQuery on certain lines of code, these lines being:
[Images here]

- The "selectedAnswer" supposedly not being a variable. It's actually called in another function, linked back through the DOM. There is likely a better way to do this, but I found .setAttribute to be the only way that I could get it to function. 
The function it is called in is:

So these are the only metrics that I endeavoured to not fix, as they are technically speaking, not errors.

### HTML & CSS:
- All HTML has been validated at: [HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdigimori.github.io%2FMilestoneProjectTwoGenshinQuiz%2F)      
![HTML Validation](/assets/images/readmeImages/htmlvalidatorCheck.png "Image of HTML validation")    
  
- All CSS had been validated at: [CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdigimori.github.io%2FMilestoneProjectTwoGenshinQuiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)  
![CSS Validation](/assets/images/readmeImages/CSSvalidatorCheck.png "Image of CSS Validation")

 ### Other tests:

 #### Manual Testing:
 - amIresponsive

 #### Media Queries: 
##### Chrome DevTools:
 I used the Chrome Dev tools to implement changes in real time before performing a final commit on the code itself.  
 I did run into several issues with this whilst using Gitpod, as I was finding that it was not updating in real time, and so switched over to JSFiddle and VSCode for the remainder.

##### Manual Testing: 
- going through it on multiple browsers and phones
- asked some friends who play the game and also have dev knowledge to go through.


# Bugs: 
Fairly late into testing, I noticed that I accidentally had half of the answer keys in my "questions" object as "answer" and  the rest as "answers" which meant it wouldn't go past a certain amount of questions before throwing an error.  
This was easily fixed by just changing the "answers" key back to just "answer" on all of the objects.


# Deployment: - FORMAT THIS
##### Github pages
**To deploy and run locally:**  

1. Use the Chrome browser
2. Create a Gitpod account at [this link](https://www.gitpod.io/)
3. Download and install the Gitpod browser extension for Google Chrome.
4. Restart browser after installation has completed.
5. Log into Gitpod using your Github username and password. (If you don't already have a GitHub account, create one [here](https://github.com/)
6. Navigate into your desired Gitpod repository (This project's repository can be found both at the top of this README, and [here](https://github.com/digimori/MilestoneProjectTwoGenshinQuiz)  
7. Click the green "Gitpod" button on the top right of the repository file section.

**This will open the project into a Gitpod workspace and can then be worked on in a local setting, such as VSCode.**

**To deploy and run project on a local IDE:**
1. Follow [This link](https://github.com/digimori/MilestoneProjectTwoGenshinQuiz) back to the Github project respository.
2. Select the menu item above the repository files labelled "Code".
3. To clone: Select the appropriate url or open to Git Desktop.
4. To view on a web IDE: Click the dropdown labelled "Open in Web IDE" on the top right of the repository, and choose the appropriate IDE.   
This dropdown can also be used to clone the code into VSCode IDE.
5. To clone into the Local IDE - in the terminal, type 'git clone' followed by the URL that can be copied from the aforementioned Code URL.


# Credits:

### Code: 
Coding Ninjas - [How to Create a Quiz in Javascript]("https://www.codingninjas.com/codestudio/library/how-to-create-a-quiz-app-using-javascript")    
I used this as a general idea to begin with, but there were a lot of aspects that I didn't like and changed them.   
I used it more as both inspiration and to refresh my memory on what I needed to consider when building.


### Images and media: 
[Hilichurl Logo]
[Genshin Impact Logo]



- Genshin Impact for having a lot of lore

### Other: 
- my awesome Programmer friends for looking over my code and pointing out my dumb choices
- StackOverflow for just existing to be honest.