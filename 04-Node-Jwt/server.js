const express = require("express");

const app = express();

require("dotenv").config();

const mongoose = require("mongoose");

const ejs = require("ejs");

//set static file
app.use(express.static("public"));

//set view engine as ejs
app.set("view engine", "ejs");

//connect to database
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.status(200).render("home");
});

app.get("/details", (req, res) => {
  res.status(200).render("details");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is Listening to Port:${PORT}\nvisit: http://localhost:5000`
  );
});
