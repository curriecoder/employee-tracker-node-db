-- TODO fix Out of range value for column 'salary' at row 1
INSERT INTO department (name) 
VALUES 
      ("Human Resources"),
      ("Marketing"),
      ("Information Technology"),
      ("Corporate");

INSERT INTO role (title, salary, department_id) 
VALUES 
      ("Analyst", 70000.00, 3),
      ("Communications Associate", 50000.00, 2),
      ("Social Media Manager", 50000.00, 2),
      ("Director", 100000.00, 1),
      ("Director", 100000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
      ("David", "Jester", 2, NULL),
      ("Abby", "Whiteman", 1, 2),
      ("Katie", "Pieto", 3, 2),
      ("Rachael", "Squirm", 4, 7),
      ("Lizzie", "Halep", 5, NULL);