# coding-quiz-repo

This repository has the HTML, CSS and JavaScript code for the Web API Challenge for Module 4. It is a pop up quiz wherein the user will select one of four options in a time-based JavaScript quiz.

## Contents

The files have the following contents -

- index.html - Has the HTML code for the first page that is displayed upon loading the application.
- questionsPage.html - Has the HTML code for the quiz section of the application
- highscores.html - Has the HTML code for the score board
- style.css - Has the CSS code for all 3 html pages containing styles for the entire application
- script.js - Contains the JavaScript code written in order to execute the functionality of the pop up quiz
- highscores.js - Contains the JavaScript code for the score board

## Components of the JavaScript code

- The questions for the quiz have been stored as objects in an array.
- The `startQuiz` function starts the question counter and calls the `displayQuestions` function which displays the first question
- Event listeners have been added to the buttons 
- `setInterval` and `clearInterval` methods have been used to execute the `countdown` function
- `localStorage` has been used to store highscores and display them on the screen

## How to get a copy of this repository

- Clone the git repository from this [folder](https://github.com/rashida53/coding-quiz-repo)
- Open the local copy on VS code using the terminal
- Any changes can be made on this text editor

## Using terminal to upload on Github

- Use `git add .` to add files to the repository
- Use `git commit` to describe the changes made
- Use `git push origin main` to push up the changes to github

### The following image shows the web application's appearance and functionality:

![screenshot](https://github.com/rashida53/coding-quiz-repo/blob/main/coding-quiz.png?raw=true)

## Deployment

This website has been deployed to this [URL](https://rashida53.github.io/coding-quiz-repo) using Github pages.