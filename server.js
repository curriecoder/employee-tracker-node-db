const { appendFile } = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.NAME,
  },
  console.log(`Connected to the employee_db database.`)
);

app.use((req, res) => {
  res.status(404).end();
});