// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ##Table of Content

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Description
  ${data.description}

  ## Installation

  *Steps required to install project and how to get the development environment running:*

  ${data.installation}

  ## Usage

  *Instructions and examples for use:*

  ${data.usage}

  ## Contributing

  *If you would like to contribute it, you can follow these guidelines for how to do so.*

  ${data.contributing}

  ## Tests

  *Tests for application and how to run them:*

  ${data.tests}

  ## License

  ${data.license}

  ## Questions?


  For any questions, please contact me with the information below:

  GitHub: ${data.username}

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
