const inquire = require("inquirer");
const conTable = require("console.table");
const db = require("../db/path");

function viewDepartments() {
  db.query("SELECT * FROM department", function (err, result) {
    if (err) {
      throw err;
    }
    console.table(result);
  });
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, result) {
    if (err) {
      throw err;
    }
    console.table(result);
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, result) {
    if (err) {
      throw err;
    }
    console.table(result);
  });
}

const depPrompt = [
  {
    type: "input",
    name: "addDept",
    message: "Enter new department name",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Department name cannot be blank.");
        return false;
      }
    },
  },
];

function addDepartment() {
  inquire.prompt(depPrompt).then((response) => {
    console.log(response);
    db.query(
      `INSERT INTO department(name) VALUES ('${response.addDept}')`,
      function (err, result) {
        if (err) {
          throw err;
        }
        console.log("New department added!");
      }
    );
  });
}

const rolePrompt = [
  {
    type: "input",
    name: "addRoleTitle",
    message: "Enter new role title",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Role title cannot be blank.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "addRoleSalary",
    message: "Enter salary for new role",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Salary name cannot be blank.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "addRoleDept",
    message: "What department is the new role in?",
    choices: [],
  },
];

function addRole() {
  rolePrompt[2].choices = [];
  db.query("SELECT id, name FROM department", function (err, result) {
    if (err) {
      throw err;
    }
    result.forEach((department) => {
      rolePrompt[2].choices.push(department.name);
    });
    inquire.prompt(rolePrompt).then((response) => {
      let addRoleId = "";
      result.forEach((department) => {
        if (department.name === response.addRoleDept) {
          addRoleId = department.id;
        }
      });
      db.query(
        `INSERT INTO role(title, salary, department_id) VALUES ('${response.addRoleTitle}', '${response.addRoleSalary}', '${addRoleId}')`,
        function (err, result) {
          if (err) {
            throw err;
          }
          console.log("New role added!");
        }
      );
    });
  });
}

const emplPrompt = [
  {
    type: "input",
    name: "addEmpFName",
    message: "Enter first name of new employee",
    validate: (input) => {
      if (input) {
        return true;
      }
      console.log("First name cannot be blank");
      return false;
    },
  },
  {
    type: "input",
    name: "addEmpLName",
    message: "Enter last name of new employee",
    validate: (input) => {
      if (input) {
        return true;
      }
      console.log("Last name cannot be blank");
      return false;
    },
  },
  {
    type: "list",
    name: "addEmpRole",
    message: "Select role of new employee",
    choices: [
      "Human Resources",
      "Marketing",
      "Information Technology",
      "Corporate",
    ],
  },
  {
    type: "list",
    name: "addEmpMngr",
    message: "Input the manager ID for new employee's manager",
    choices: [],
  },
];

function addEmployee() {
  db.query(
    `SELECT * FROM employee WHERE manager_id IS NULL`,
    function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      emplPrompt[3].choices = result;
        inquire.prompt(emplPrompt).then((response) => {
          db.query(
            `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${response.addEmpFName}', '${response.addEmpLName}', '${response.addEmpRole}', '${response.addEmpMngr}')`
          );
        });
    }
  );
}

function updateRole() {}

function quit() {}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateRole,
};
