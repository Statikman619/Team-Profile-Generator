const Intern = require("../Classes/Intern");
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
function int() {
  return inquirer.prompt(internQ);
}
function generate(answer) {
  const intern = new Intern(
    answer.internName,
    answer.internID,
    answer.internEmail,
    answer.internSch
  );
  return `
    <div class="card" style="width: 18rem;">
  <img src="assets/images/intern.png" class="card-img-top" alt="intern-image"> <p class="card-text">Intern</p>
    <h5 class="card-title">${intern.getName()}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${intern.getID()}</li>
    <li class="list-group-item">${intern.getEmail()}</li>
    <li class="list-group-item">${intern.getSchool()}</li>
    </ul>
  </div>
      `;
}

module.exports = {
  int,
  generate,
};
