const express = require("express");

const app = express();

require("dotenv").config();

const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const ejs = require("ejs");

//set static file
app.use(express.static("./public"));

//parse the json
app.use(express.json());

//middleware to parse cookie data
app.use(cookieParser());

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

//cookies
app.get("/set-cookies", (req, res) => {
  res.cookie("newUser", true, {
    maxAge: 1000 * 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });
  res.cookie("isLoggedIn", false);
  //res.setHeader("set-Cookie", "nameUser=true");
  res.send("you got the cookies");
});

app.get("/read-cookie", (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  res.json(cookie);
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server is Listening to Port:${PORT}\nvisit: http://localhost:5000`
  );
});
