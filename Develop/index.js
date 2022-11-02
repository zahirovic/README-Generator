// inquire , fs , and markdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: general README requirements
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please input the title of your project. (Required)',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please input your GitHub username. (Required)',
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Please input your GitHub repository name. (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Please provide credits for resources used. (Required)',
    },


    {
        type: 'input',
        name: 'features',
        message: 'Please input features of your application (Required)',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license (Required)',
        choices: [`MIT`, `Apache License 2.0`, `No License`,]

    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(`./dist/${fileName}`, data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(function (data) {
            console.log(data)
            const readmeData = generateMarkdown(data)
            console.log(readmeData)
            writeToFile("generateReadme.md", readmeData)
        })
}

// Function call to initialize app
init();

