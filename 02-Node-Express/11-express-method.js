const express = require("express");

const app = express();

let students = require("./student.json");

//static assets
app.use(express.static("./public"));

// parse from data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.get("/api/students", (req, res) => {
  res.status(200).json(students);
});

app.post("/api/student", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.send(401).send("please provide credentials");
});

app.put("/api/student/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = students.find((student) => students.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newStudent = students.map((student) => {
    if (student.id === Number(id)) {
      student.name = name;
    }
    return student;
  });
  res.status(200).json({ success: true, data: newStudent });
});
app.listen(5000, () => {
  console.log("Server is listening to Port: 5000");
});
