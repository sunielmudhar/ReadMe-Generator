const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for you repo:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your repo:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your instructions for installing your repo correctly:',
        default: "npm install"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage for your repo:',
    },
    {
        type: "input",
        message: "Please enter your contributors:",
        name: "contributors",
    },
    {
        type: "input",
        message: "Please enter your test instructions:",
        name: "test",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["MIT", "Apache", "GPL", "BSD 2", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "email",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => { error ? console.log(error) : console.log("README created successfully!")});
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data))
    });
}

// function call to initialize program
init();