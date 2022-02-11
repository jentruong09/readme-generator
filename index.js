// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //inquirer
        //.prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
                default: 'jentruong09',
                validate: function (username) {
                    if (username.length < 1) {
                        return console.log('Please enter a GitHub username.')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                validate: function (title) {
                    if (title.length < 1) {
                        return console.log('Please enter a title.')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'Please write a description of your project.',
                name: 'description',
                validate: function (description) {
                    if (description.length < 1) {
                        return console.log('Please enter a description.')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'Please add information about installation process and/or deployment links.',
                name: 'installation',
                validate: function (title) {
                    if (title.length < 1) {
                        return console.log('Please enter a title.')
                    }
                    return true;
                }
            },
            {
                type: 'input',
                message: 'Please add information about how to use the application.',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'Please add any third-party assets used that require attribution as well as any technologies use.',
                name: 'credit'
            },
            {
                type: 'list',
                message: 'Please choose an appropriate license for your project.',
                choices: ['MIT License', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
                name: 'license'
            },
            {
                type: 'input',
                message: 'Please list any contributor(s) for this project.',
                name: 'contributors'
            },
            {
                type: 'input',
                message: 'Please add any tests for application and how to run them.',
                name: 'test'
            },
            {
                type: 'input',
                message: 'Please provide your full name that is linked to GitHub so that users can reach out about questions and issues.', // Not sure if this will work
                name: 'question'
            }

]//)];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your file has generated!')
);
}

// TODO: Create a function to initialize app - async function init()?? {await...} - to wait for all answer before creating each section? 
function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile("README.md", generateMarkdown(data))
        
    })
}

//Function call to initialize app
init();
