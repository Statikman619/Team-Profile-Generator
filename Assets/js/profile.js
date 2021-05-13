const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const writeToFile = util.promisify(fs.appendFile)
const manager = require("./Lib/manager")
const engineer = require("./Lib/engineer")
const intern = require("./Lib/intern")
const start = require("./Lib/init")
//const path = require("path")

var managers = []
var engineers = []
var interns = []

async function init() {
    try {
        var answer = await manager.ask();
        console.log(answer)
        data = manager.generate(answer)
        managers.push(data)
       
 