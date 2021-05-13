const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const writeToFile = util.promisify(fs.appendFile);
const manager = require("./Lib/js/manager");
const engineer = require("./Lib/js/engineer");
const intern = require("./Lib/js/intern");
const start = require("./Lib/js/init");
//const path = require("path")

var managers = [];
var engineers = [];
var interns = [];

async function init() {
  try {
    var answer = await manager.ask();
    console.log(answer);
    data = manager.generate(answer);
    managers.push(data);

    if (answer.addEmp === "Engineer" || answer.addEmp === "Intern") {
      for (var i = 2; i > 1; i++) {
        if (answer.addEmp === "Engineer") {
          var answer = await engineer.eng();
          data = engineer.generate(answer);
          engineers.push(data);
        } else if (answer.addEmp === "Intern") {
          var answer = await intern.int();
          data = intern.generate(answer);
          console.log(data);
          console.log(typeof data);
          interns.push(data);
        } else {
          var employees = managers.concat(engineers, interns);
          var team = employees.join(" ");
          console.log(team);

          var teamList = await start.list(team);
          await writeFileAsync("team.html", teamList);
          return;
        }
      }
    } else {
      //Print manager html only
    }
  } catch (err) {
    console.log(err);
  }
}

init();
