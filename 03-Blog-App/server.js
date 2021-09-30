const express = require("express");

//mongoose to hook with mongoDB
const mongoose = require("mongoose");

const app = express();

//connect to database
mongoose.connect(
  `mongodb+srv://avinashjha885:avinashjha885@cluster0.sktix.mongodb.net/cluster0?retryWrites=true&w=majority`,
  { user }
);

const ejs = require("ejs");

const articleRouter = require("./routes/article");

const articles = require("./articles");

app.use("/articles", articleRouter);
//set our vie engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).render("articles/index", { articles });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sever is running on Port ${PORT}\nvisit:http://localhost:5000`);
});
