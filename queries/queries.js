const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.NAME,
  },
  console.log(`Connected to the employee_db database.`)
);

db.query("SELECT * FROM department", (err, res) => {
  console.log("DEPARTMENTS:");
  res.forEach((department) => {
    console.log(`ID: ${department.id} | Name: ${department.name}`);
  })
  start();
});
