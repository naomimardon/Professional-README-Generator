// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  Here is a link to the deployed application:
  ${data.appLink}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![${data.altText}](${data.screenshot})

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For further information:
    Visit: ${data.github}
    Contact: ${data.email}
`;
}

module.exports = generateMarkdown;
