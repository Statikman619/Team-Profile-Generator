inquirer = require("inquirer");

const employeeQ = [
  {
    type: "input",
    name: "employeeName",
    message: "What is your employee's name?",
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is your employee's id number?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What is your employee's email?",
  },
];
function eng() {
  return inquirer.prompt(employeeQ);
}
function generate(answer) {
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
    <img src="assets/images/employee.png" class="card-img-top" alt="employee-image"> <p class="card-text">Employee</p>
    <h5 class="card-title">${answer.employeeName}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${answer.employeeID}</li>
    <li class="list-group-item">${answer.employeeEmail}</li>
    </div>  
    `;
}
module.exports = {
  eng,
  generate,
};
