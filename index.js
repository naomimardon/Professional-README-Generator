const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the README file?'
    }
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