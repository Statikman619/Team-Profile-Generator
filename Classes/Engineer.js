const Employee = require("./Engineer");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.git = github;
  }
  getGit() {
    return this.git;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
