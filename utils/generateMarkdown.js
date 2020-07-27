// This function will generate the Readme by populating with given answers.

function generateMarkdown(answers) {
  console.log(answers);
  return `
### __*${answers.title}*__
https://img.shields.io/github/license/${answers.Github}/${answers.repo}

## __License__
${answers.license}

## __Description__
${answers.description}

### __Installation__
*${answers.installation}

### __Usage__
*${answers.usage}

### __Contributing__
*${answers.contributing}

### __Tests__
*${answers.tests}

### __Questions__
- Find me on [Github](https//github.com/${answers.github})!
- For further information or questions, email me at ${answers.email}`
}

module.exports = generateMarkdown;
