function renderLicenseBadge(license) {
	if (license === "MIT License") {
		return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
	} else if (license === "Apache License 2.0") {
		return "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
	} else if (license === "GNU General Public License (GPL) 3.0") {
		return "![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)";
	} else {
		return "";
	}
}

function renderLicenseLink(license) {
	if (license === "MIT License") {
		return "[MIT License](https://opensource.org/licenses/MIT)";
	} else if (license === "Apache License 2.0") {
		return "[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)";
	} else if (license === "GNU General Public License (GPL) 3.0") {
		return "[GNU GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
	} else {
		return "";
	}
}

function renderLicenseSection(license) {
	if (license) {
		return `This project is licensed under the ${renderLicenseLink(license)}`;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
	return `
  ${renderLicenseBadge(answers.license)}

# ${answers.title}
 
## Description
  ${answers.description}
 
## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)  
 
## Installation
  ${answers.instal}
 
## Usage
  ${answers.usage}

## License
  ${renderLicenseSection(answers.license)}
    
## Contributions
  ${answers.contribute}
 
## Tests
  ${answers.test}

## Questions
  Please contact me @  

  ${answers.github}
  
  ${answers.email}
     `;
}

module.exports = generateMarkdown;
