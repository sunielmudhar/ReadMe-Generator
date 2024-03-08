// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contributors)
  * [Testing](#Test)
  * [License](#lLicense)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.tests}

  ## Questions
  For any questions relating to this repo, ${data.title}, please feel free to contact me on ${data.email} or find more of my work on https://github.com/${data.username}.

  ## License
  Licensed under ${data.license}.
`;
}

module.exports = generateMarkdown;
