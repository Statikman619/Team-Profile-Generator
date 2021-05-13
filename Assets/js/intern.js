inquirer = require("inquirer");

const internQ = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "internID",
    message: "What is your intern's id number?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "internSch",
    message: "What is your intern's school?",
  },
  {
    type: "list",
    name: "addEmp",
    message: "Add another team member?",
    choices: ["Engineer", "Intern", "No more members"],
  },
];
