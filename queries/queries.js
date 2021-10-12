const conTable = require("console.table");
const db = require('../db/path')

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, result) {
    if (err) {
      throw err;
    }
    console.table(result);
  });
}

function viewRoles() {}

function viewEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateRole() {}

function quit() {}

module.exports = { viewDepartments };
