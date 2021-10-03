const express = require("express");

const app = express();

require("dotenv").config();

const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const ejs = require("ejs");

//set static file
app.use(express.static("./public"));

//parse the json
app.use(express.json());

//parse form data
app.use(express.urlencoded({ extended: false }));

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
//set the end point auth for all the auth routes
app.use(authRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is Listening to Port:${PORT}\nvisit: http://localhost:5000`
  );
});
