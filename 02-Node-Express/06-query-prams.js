const express = require("express");

const app = express();

const students = require("./student.json");

app.get("/", (req, res) => {
  res.send('<h1>Hello Home</h1><a href="/api/students">Products</a>');
});

//return the selected data from bunch of data
app.get("/api/students", (req, res) => {
  const newStudent = students.map((student) => {
    const { id, name, stream } = student;
    return { id, name, stream };
  });
  res.json(newStudent);
});

//set first query prams
//url: http://localhost:5000/api/students/3
//then it will return the student with id = 3
app.get("/api/students/:studentID", (req, res) => {
  console.log(req.params);
  const { studentID } = req.params;
  const singleStudent = students.find(
    (student) => student.id === Number(studentID)
  );
  if (!singleStudent) {
    return res
      .status(404)
      .send(`Sorry student with id: ${studentID} is not in database`);
  }
  res.send(singleStudent);
});

//http://localhost:5000/api/students/3/posts/1
app.get("/api/students/:studentID/posts/:postID", (req, res) => {
  const { studentID, postID } = req.params;
  const singleStudent = students.find(
    (student) => student.id == Number(studentID)
  );
  const singlePost = singleStudent.posts.find(
    (post) => post.id == Number(postID)
  );

  if (!singleStudent) {
    return res
      .status(404)
      .send(
        `Sorry postID = ${postID} and studentID = ${studentID} does not exist`
      );
  } else if (!singlePost) {
    return res.send(singleStudent);
  }
  res.send(singlePost);
});

app.listen(5000, () => {
  console.log("Server is lis tings to port: 5000");
});
