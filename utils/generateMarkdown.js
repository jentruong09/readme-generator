// created these within the generateMarkdown function 
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {} //switch case??

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  
  let chosenLicense = `${data.license}`;
  let readLicense = '';
  
  if (chosenLicense === 'MIT License') {
    showLicense = 'MIT License';
    badgeLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    readLicense = 'https://opensource.org/licenses/MIT';
  };
  if (chosenLicense === 'GNU AGPLv3') {
    showLicense = 'GNU AGPLv3 License' ;
    badgeLicense = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    readLicense = 'https://www.gnu.org/licenses/agpl-3.0';
  };
  if (chosenLicense === 'Mozilla Public License 2.0') {
    showLicense = 'Mozilla Public License 2.0';
    badgeLicense = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    readLicense = 'https://opensource.org/licenses/MPL-2.0';
  };
  if (chosenLicense === 'Apache License 2.0') {
    showLicense = ;
    badgeLicense = ;
    readLicense = ;
  };
  if (chosenLicense === 'Boost Software License 1.0') {
    showLicense = ;
    badgeLicense = ;
    readLicense = ;
  };
  if (chosenLicense === 'The Unlicense') {
    showLicense = ;
    badgeLicense = ;
    readLicense = ;
  };
  
  return `
  # ${data.title} 

  <br/>

  ## Project Description

  ${data.description}

  <br/>

  ## Table of Contents
  - [Deployment](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions] (#questions)

  <br/>

  ## Deployment

  ${data.installation}

  <br/>

  ## Usage
  ${data.usage}

  <br/>

  ## Credits
  This project is made possible by:
  ${data.credit}

  <br/>

  ## License 
  ${badgeLicense}
  
  This application uses the ${showLicense}

  For more information, please visit: ${readLicense}

  <br/>

  ## Contributors 

  The following are contributors of this project:
  ${data.contributors}

  <br/>

  ## Tests

  ${data.test}

  <br/>

  ## Questions
  If you have any questions, please reach out to a contributor via GitHub:

  [${data.question}](https://github.com/${data.username})
  

`;
}

module.exports = generateMarkdown;
