const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Questions/prompts that user will answer to generate the Readme.

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of this project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the description of this project?",
      name: "description"
    },
    {
      type: "input",
      message: "Are there installation instructions for this project?",
      name: "installation"
    },
    {
      type: "input",
      message: "What is the usage of this project?",
      name: "usage"
    },
    {
      type: "input",
      message: "What are the contributution guidlines to this project?",
      name: "contributing"
    },
    {
      type: "input",
      message: "How can someone run a test on your application?",
      name: "tests"
    },
    {
      type: "list",
      message: "What type of license would you like for this project?",
      name: "license",
      choices: [
          "Existing license: ORIGINAL",
          "MIT",
          "ISC",
          "GNU GPLv3",
          "None"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your Repository name?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const markDown = generateMarkdown(answers);

    await writeFileAsync("README.md", markDown);

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
}

init();