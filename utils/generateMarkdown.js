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
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![${data.altText}](${data.screenshot})

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Badges

  ${data.license}

  ## Features

  ${data.features}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.tests}

`;
}

module.exports = generateMarkdown;
