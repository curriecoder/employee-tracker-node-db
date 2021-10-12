const inquire = require('inquirer')
const conTable = require('console.table');
const db = require('../db/path');
const inquirer = require('inquirer');

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, result) {
    if (err) {
      throw err;
    }
    console.table(result);
  });
};

function viewRoles() {
    db.query("SELECT * FROM role", function (err, result) {
      if (err) {
        throw err;
      }
      console.table(result);
    });
};

function viewEmployees() {
    db.query("SELECT * FROM employee", function (err, result) {
      if (err) {
        throw err;
      }
      console.table(result);
    });
};


const addDepartment = [
  {
    type: 'input',
    name: 'addDept',
    message: 'Enter new department name',
    validate: input => {
      if (input) {
        return true;
      } else {
        console.log('Department name cannot be blank.');
        return false;
      }
    }
  }
];

function addDepartment() {
  inquirer
    .prompt(addDepartment)
    .then((response) => {
      console.log(response);
    })
};

function addRole() {}

function addEmployee() {}

function updateRole() {}


module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateRole
};
