const engineer = require("../Classes/Engineer");

inquirer = require("inquirer");

const engineerQ = [
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
  {
    type: "input",
    name: "engineerGit",
    message: "What is your engineer's GitHub username?",
  },
  {
    type: "list",
    name: "addEmp",
    message: "Add another team member?",
    choices: ["Engineer", "Intern", "No more members"],
  },
];
function eng() {
  return inquirer.prompt(engineerQ);
}
function generate(answer) {
  const engineer = new Engineer(
    answer.engineerName,
    answer.engineerID,
    answer.engineerEmail,
    answer.engineerGithub
  );
  return `
    <div class="card" style="width: 18rem;">
    <img src="assets/images/engineer.png" class="card-img-top" alt="engineer_image"> <p class="card-text">Engineer</p>
    <h5 class="card-title">${engineer.getName()}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getID()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item">${engineer.Github()}</li>
    </ul>
    </div>  
    `;
}
module.exports = {
  eng,
  generate,
};
