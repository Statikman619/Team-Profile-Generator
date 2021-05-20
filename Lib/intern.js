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
