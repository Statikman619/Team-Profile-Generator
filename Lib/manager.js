const Manager = require("../Classes/Manager");
inquirer = require("inquirer");
const questions = [
  {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?",
  },
  {
    type: "input",
    name: "managerID",
    message: "What is your manager's id number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?",
  },
  {
    type: "input",
    name: "managerNum",
    message: "What is your manager's office number?",
  },
  {
    type: "list",
    name: "addEmp",
    message: "Add another team member?",
    choices: ["Engineer", "Intern", "No more members"],
  },
];
// make async and await then run other function
function ask() {
  return inquirer.prompt(questions);
}
function generate(answer) {
  const manager = new Manager(
    answer.managerName,
    answer.managerID,
    answer.managerEmail,
    answer.managerNum
  );
  return `
       <div class="card" style="width: 18rem;">
  <img src="assets/images/manager.png" class="card-img-top" alt="Manager-Image"> <p class="card-text">Manager</p>
  <div class="card-body">
  <p class="card-text">MANAGER</p>
  </div>
  <h5 class="card-title">${manager.getName()}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getID()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
  </div>
  `;
}

module.exports = {
  ask,
  generate,
};
