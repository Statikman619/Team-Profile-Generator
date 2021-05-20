const Engineer = require("../Classes/Engineer");

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
    name: "engineerGithub",
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
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
      <link rel="stylesheet" href="./assets/css/style.css"/>
      <title>Team Profile Generator</title>
    <div class="card" style="width: 18rem;">
    <img src="assets/images/engineer.png" class="card-img-top" alt="engineer_image"> <p class="card-text">Engineer</p>
    <h5 class="card-title">${engineer.getName()}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getID()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item">${engineer.getGit()}</li>
    </ul>
    </div>  
    `;
}
module.exports = {
  eng,
  generate,
};
