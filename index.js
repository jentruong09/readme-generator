// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'What is the name of your project?',
                name: 'name' //Add validate?
            },
            {
                type: 'input',
                message: 'Please write a description of your project.',
                name: 'description' //Add validate?
            },
            {
                type: 'input',
                message: '(Deployment Section) Please add information about installation process or deployment links.',
                name: 'installation'
            },
            {
                type: 'input',
                message: '(Usage Section) Please add information about how to use the application.',
                name: 'usage'
            },
            {
                type: 'input',
                message: '(Credits Section) Please add any third-party assets used that require attribution as well as any technologies use.',
                name: 'credit'
            },
            {
                type: 'list',
                message: '(License Section) Please choose an appropriate license for your project.',
                choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
                name: 'license'
            },
            {
                type: 'input',
                message: '(Contributor(s) Section) Please list any contributors for this project.',
                name: 'contributors'
            },
            {
                type: 'input',
                message: '(Test Section) Please add any tests for application and how to run them.',
                name: 'test'
            },
            {
                type: 'input',
                message: '(Question Section) Please add any contact information. Please press enter for default.', // Not sure if this will work
                default: 'question-default', //To be added??
                name: 'question'
            }

])];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your file has generated!')
);
}

// TODO: Create a function to initialize app - async function init()?? {await...} - to wait for all answer before creating each section? 
async function init() {
 

}

// Function call to initialize app
init();
