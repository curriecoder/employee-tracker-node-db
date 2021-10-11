// require inquirer
const inquirer = require("inquirer");
// const queries = require("./queries/queries");
// create main menu promts
const menuOptions = [
  {
    type: "list",
    name: "mainMenu",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ],
  },
];

// function to start the app
function start() {
  inquirer
  .prompt(menuOptions)
  .then((response) => {
    if (response.mainMenu === "View all departments") {
      viewDepartments();
    } else if (response.mainMenu === "View all roles") {
      viewRoles();
    } else if (response.mainMenu === "View all employees") {
      viewEmployees();
    } else if (response.mainMenu === "Add a department") {
      addDepartment();
    } else if (response.mainMenu === "Add a role") {
      addRole();
    } else if (response.mainMenu === "Add an employee") {
      addEmployee();
    } else if (response.mainMenu === "Update an employee role") {
      updateRole();
    } else if (response.mainMenu === "Quit") {
      quit();
    }
  });
}

const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_db database.`)
);

function viewDepartments() {

  db.query("SELECT * FROM department", (err, res) => {
    console.log("DEPARTMENTS:");
    res.forEach((department) => {
      console.log(`ID: ${department.id} | Name: ${department.name}`);
    });
    start();
  });
}

function viewRoles() {}

function viewEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateRole() {}

function quit() {}

start();