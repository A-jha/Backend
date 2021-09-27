const express = require("express");

const app = express();

const data = require("./student.json");

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.listen(5000);
