# Trivia Quiz: General Knowledge Quiz

! Placeholder for center image, 

This interactive quiz is crafted for anyone with a keen interest in quizzes, covering a wide array of topics such as general knowledge, video games, science & nature, and films. It features 20 diverse questions, each accompanied by four possible answers for participants to select from. As participants navigate through the quiz, questions will appear in a random order, ensuring a unique experience for each user. Instant feedback is provided after each selection, indicating whether the chosen answer is correct or incorrect, and the correct answer is displayed for any wrong choices. Participants are allotted a maximum of 15 seconds per question, with a countdown timer and a diminishing bar visually tracking the time left. At the quiz's conclusion, participants can view their total correct answers, their overall score as a percentage, and their score converted into a grade, following typical grading boundaries.

# Contents

- [Contents](#contents)
- [Target Audience](#target-audience)
- [User Expectations](#user-expectations)
- [User Stories](#user-stories)
- [Design](#design)
    - [Typography](#typography)
    - [Colour Scheme](#colour-scheme)
- [Features](#features)
  - [Existing Features:](#existing-features)
    - [Header and Footer](#header-and-footer)
    - [Interactive Start Button](#interactive-start-button)
    - [Question number in the Test Area](#question-number-in-the-test-area)
    - [Timer bar and number](#timer-bar-and-number)
    - [Selecting correct answer](#selecting-correct-answer)
    - [Incorrect answer selection](#incorrect-answer-selection)
    - [Results Area](#results-area)
    - [Random Question Order Generation](#random-question-order-generation)
    - [Random Answer Order Generation](#random-answer-order-generation)
    - [Dynamic Question](#dynamic-question-generation-via-api)
    - [API Integration](#api-integration)
    - [Quiz Categories](#quiz-categories)
    - [Quiz Difficulties](#quiz-difficulty)
  - [Features Left To Implement and Future Development](#features-left-to-implement-and-future-development)
    - [Below are features that I would like to integrate into the project:](#below-are-features-that-i-would-like-to-integrate-into-the-project)
  - [Wireframes](#wireframes)
  - [Framework, Languages and Programs Used](#framework-languages-and-programs-used)
- [Testing](#testing)
  - [Validator testing:](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Lighthouse results](#lighthouse-results)
    - [Mobile](#mobile)
    - [Desktop](#desktop)
  - [Responsiveness](#responsiveness)
  - [Features Tested](#features-tested)
- [Deployment](#deployment)
- [Credits](#credits)


# Target Audience 
*   This quiz is aimed at anyone who has a keen interest in quizzes. This quiz is designed as a brief assessment tool to evaluate knowledge and retention across various subjects. It's also a fun exercise for quiz enthusiasts who wish to test how much they remember from diverse topics of interest.

# User Expectations
*   This is a interactive quiz that is able to be completed on desktop, tablet and mobile devices.
*   The quiz will load quickly on all devices.
*   The quiz is fully responsive.
*   Feedback from each question attempted.
*   Clear indication of time left to answer each question via a timer bar and number
*   Clear indication of which question they are on and how many questions in total. 
*   Overall feedback with a mark, percentage and grade at the end.
*   The ability to restart the quiz once completed.

# User Stories

* As a visitor:

    * I am looking for an easy to navigate test, that is responsive and easy to interact with on all devices.
    * I will see a start button and a header detailing the content and subject of the quiz.
    * I will click start and see the instructions for the quiz.
    * The Instructions will be clearly laid out and easy to follow.
    * I will see two buttons at the bottom of the rules inviting me to start the test or quit.
    * The quiz will begin when I click the start button.
    * I will see the question number and total at the top of the quiz area.
    * I will see a timer bar indicating how long I have left on that question.
    * I will see a timer number counting down to show how long I have left on that quesiton.
    * I will see the question being asked.
    * I will see 4 possible answers.
    * Once an answer is selected I will see if I am correct instantly by showing the answer correct answer in green.
    * If incorrect I will see my answer selected turn red and the correct answer show in green.
    * The next button will appear when I have selected an answer and the timer and timer bar will stop.
    * I will complete all 20 questions.
    * After completing all 20 questions a results window will appear showing me my overall score, percentage and grade achieved.
    * I am able to restart the quiz again.
    * The question order and options in each question will be random.
    * I can see links in the footer to social media. 

# Design

## Typography
*   For my font choice I selected Roboto which was imported from Google Fonts. This font was selected because it is simple and clear to read. The purpose of the quiz is to test your knowledge and I did not want a font that distracts away from this. ![roboto](assets/images/font.choice.png)

## Colour Scheme
- I decided on a simple colour scheme that was consistent throughout the quiz. Text black for the question on a white/light grey background. I did not want a design and colour scheme that distracted away from the quiz content. The colour scheme is displayed in the features section below.


# Features

## Existing Features:

### Header and Footer
*   Header element detailing the quiz title and a interactive footer that will direct users to my social media sites.

![Header](assets/images/header.png)
![Footer](assets/images/footer.png)


### Interactive Start Button
*   The users will be greeted on the home page with an interactive start button that has a hover effect and opens up the guidelines window when clicked.

![Start](assets/images/start.button.png)
![Hover](assets/images/start.button.hvr.png)
![Guidelines](assets/images/guidelines.png)

### Question number in the Quiz Area
*   The users will see the question number they are on and how many questions there are in the header of their quiz area.
<br> 

![question](assets/images/question.png)

### Timer bar and number
*   The user will see how many seconds left there are to answer the current question. This will also be displayed in a timer bar.
![timerbar](assets/images/timerbar.png)

### Selecting correct answer 
*   Selecting the correct answer will stop the timer and timer bar, display the answer as green and display a button to move to the next question.
![correct](assets/images/correctanswer.png)

### Incorrect answer selection
*   Selecting an incorrect answer will stop the timer and the timer bar, display the incorrect answer selected as red and the correct answer as green.
<br>

![incorrect](assets/images/incorrectanswer.png)

### Results Area
*   The results area will show the total number of questions correct, calculate the percentage and use the percentage to generate a grade for the user.
<br>

![results](assets/images/results.png)

### Random Question Order Generation
*   The 20 questions in the quiz appear in a random order every time the quiz is attempted to ensure the user does not just learn the sequence of answers.
![questions](assets/images/random1.png)
![questions](assets/images/random2.png)

### Dynamic Question Generation via API
The quiz leverages the Open Trivia Database API to enrich the user experience with a diverse range of dynamically generated questions. This intergration allows for a robust quiz environment, catering to a variety of topics and difficulty levels.

### API Integration
*   The questions are fetched in real-time from the Open Trivia Database, a free service providing a wide array of quiz questions.
![Open Trivia](assets/images/opentbd.png)

### Quiz Categories
*   The quiz offers four categories, Science & Nature, Video games, Films and general knowledge. This allows the user to select a category that they enjoy the most.
![quiz categories](assets/images/quizcat.png)

### Quiz Difficulty
*   As well as being to select the different quiz category, I have also given the user the opportunity to select the difficulty. This can be easy, medium or hard. On the selection the correct difficulty questions for the category selected will be loaded into the quiz.
![difficulty area](assets/images/difficultyarea.png)

## Features Left To Implement and Future Development
### Below are features that I would like to integrate into the project:
*   Greater selection of questions and/or the use of an API to generate the questions.
*   Responsive test design which selects the next quesion based on the success of the user in the previous few questions.
*   Level of difficulty questions that the user can select which will in turn dictate the demand of the questions being asked.

## Wireframes

*   Main Page:
[design](assets/images/homewireframe.png)
*   Instructions:
[design](assets/images/instructionswireframe.png)
*   Quiz Area:
[design](assets/images/quizareawireframe.png)
*   Results Area:
[design](assets/images/resultsareawireframe.png)

## Framework, Languages and Programs Used

1. [Google Fonts](https://fonts.google.com/)
    *Google Fonts was used to import different font styles to be used in styling of the website.

2. [GitHub](https://github.com/)
    *GitHub is used to store the projects code afer being pushed from Git.

3. [Javascript](https://www.javascript.com/)
    *Javascript was used to create the interactive elements on the website and Quiz.

4. [Balsamiq](https://www.balsamiq.com/)
    *Balsamiq was used to create the wireframes for the project.

# Testing 

*   The website and interactive quiz has been tested through the following methods below. These tests have taken place on the hosted server during development and on the deployed site on GitHub pages. After deploying the website to GitHub Pages the webiste was further tested by friends, family and students at my school to check its UX and functionality on both desktop computers and the variety of mobile devices.

## Validator testing:

* [HTML:](https://validator.w3.org/)
    *   No errors were found when testing with the W3C HTML Validator.
![HTMLResult](assets/images/htmltest.png)

* [CSS:](https://jigsaw.w3.org/)
    *   No errors were found when testing with the W3C Jigsaw CSS Validator.
![CSSResults](assets/images/csstest.png)

* [Javascript:](https://jshint.com/)
    *   No errors were found when testing with the JSHint Validator. [JSValidator]
        * The following metrics were returned:
        * There are 30 functions in this file.
        * Function with the largest sigature takes 2 arguments, while the median is 0.
        * Largest function has 26 statements in it, while the median is 3.
        * The most complex function has a cyclomatic complexity value of 8 while the median is 1.


## Unfixed Bugs
*   On desktop devices: Tabbing out of the quiz once started loses the window focus. This causes the timer bar to stop counting down. The numbers work correctly. This will be corrected in the future by ensuring when the quiz has started, the window is always the focus even if tabbed out.

## Lighthouse results

*   I have used the developer tools in google chrome to test each page in my website for performance, accessibility, best practice and SEO. Below is an exmaple of the homepage.

### Mobile
![Lighthouse test mobile](assets/images/lighthousemobile.png)
### Desktop
![Lighthouse test desktop](assets/images/lighthousedesktop.png)

## Responsiveness
*   In order to fully test the responsiveness of the web application I performed further tests on different devices and browsers. These were:
    *Browsers:
        * Google Chrome
        * Safari
        * MS Edge
        * Firefox

    * Devices:
        * IPhone 14pro
        * IPhone 12 Mini
        * IPad Pro 12.9inc
        * Mac Laptop
        * Windows Desktop PC
        * Windows Laptop

## Features Tested

| Feature   | Expected Outcome | Testing Performed  | Result | Pass or Fail |
| :---      |   :----:         |        :----:      | :----: |    :----:    
| Start Button | When clicked <br> quiz instructions <br> appear. | Clicked Start | Instructions shown  | Pass      |
| Quit Quiz Button  | When clicked <br> the Test ends <br> takes user to start. <br> | Clicked Quit | Navigate to start   | Pass        |
| Start Quiz Button | When clicked <br> Quiz window shown <br> the quiz begins <br> | Clicked Start | Quiz begins  | Pass        |
| Question Number | When quiz begins <br> question number displayed <br> counts up as you progress questions.| Moved through questions | Number counts up | Pass        |
| Timer Bar | When quiz begins <br> timer bar decreases. <br>  | Started the test | Timer bar decreases | Pass        |
| Timer     | When quiz begins <br> timer decreases from 15 <br> down to 0. | Started the quiz | Timer decreases  | Pass    |
| No answer selected | If no answer is <br> selected when timer <br> ends, correct answer <br> shown and no score acquired. | Did not select and answer | No point awarded and <br> correct answer shown | Pass    |
| Next Button | When quiz begins the <br> next button will only display when <br> an answer is selected <br> and when clicked takes <br> user to next questions. | Clicked answer | Next button appears and takes <br> user to next questions | Pass   |
| Results Window | After completing the Quiz <br> the results window will show. | Completed all questions | Results window shown | Pass    |
| Results Data | Results window shows total score <br> Percentage achieved and <br> what grade achieved. | Completed questions to get different scores | Correct score, percentage and <br> grade shown | Pass    |
|Restart Button | Click button to restart Quiz | Clicked restart | Quiz restarts | Pass  |
Social Media | Click social media icons takes <br> user to social media site. | Clicked social media icons. | Navigated to social media. | Pass  |

# Deployment

*   The website has been deployed to GitHub pages. This was accomplished by following the detailed steps below:

*   Selecting settings in the GitHub repository.
*   Navigate to the pages tab on the left hand side of the screen.
*   Select deploy from branch in the source section and ensure the main branch is selected in the branch.
*   Finally click the save button and the page will be deployed to GitHub pages.
*   Once the website has been updated to the server, you will see your live URL link.

## Remaining Bugs

- Certain questions or options that use special characters do not display correctly in the console and as a result, even when the user selects the correct answer, it does not display as correct. Likewise, if the user selects the incorrect answer, the correct answer does not show. This is rare and only a few questions cause this. It does not affect any other aspect of the quiz. With more development time I would correct this issue.

- API fails to load: If the API fails to load no message is shown to the user even though the timer starts and timeline. With more development time I would like to write script that would provide user feedback if the API failed to load. I would do this in the same way I have with category select and difficulty. It would inform the user that their API is currently unavailable.


# Credits 

* [W3Schools](http://www.w3schools.com/) was used as a general source of knowledge.
* [Loves Math project](https://learn.codeinstitute.net/dashboard) was used as a general source of knowledge.
* [Slack Overflow](https;//stackoverflow.com/) Was used in the process of debugging the code.
[MND Web Docs](#) was used as a general source of knowledge.



