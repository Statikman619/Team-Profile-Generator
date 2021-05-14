inquirer = require("inquirer");

const employeeQ = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is your engineer's id number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?",
  },
];
function eng() {
  return inquirer.prompt(employeeQ);
}
function generate(answer) {
  return `
    <div class="card" style="width: 18rem;">
    <img src="assets/images/engineer.png" class="card-img-top" alt="engineer_image"> <p class="card-text">Engineer</p>
    <h5 class="card-title">${answer.engineerName}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answer.engineerID}</li>
    <li class="list-group-item">${answer.engineerEmail}</li>
    </div>  
    `;
}
module.exports = {
  eng,
  generate,
};
