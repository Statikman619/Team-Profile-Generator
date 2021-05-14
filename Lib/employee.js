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
  return `
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
