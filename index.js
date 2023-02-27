const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the README file?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project, explaining what the application does, your motivation for building it, and what you learnt:',
    },
    {
        type: 'input',
        name: 'appLink',
        message: 'Provide a link to the deployed application:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your application:',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide a link to a screenshot of the application:',
    },
    {
        type: 'input',
        name: 'altText',
        message: 'Provide some alt text describing the screenshot:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use for your project? (Use the down arrow to choose one):',
        choices: ['None','MIT License','GNU General Public License v3.0','Apache License 2.0', 'Other'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how to contribute to this project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `README.md`;
        writeToFile(filename, generateMarkdown(data))
    });
};

// function call to initialize program
init();