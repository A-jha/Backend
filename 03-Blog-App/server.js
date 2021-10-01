const express = require("express");

const dotenv = require("dotenv");

const result = dotenv.config(process.env);

//mongoose to hook with mongoDB
const mongoose = require("mongoose");

//method override package
const methodOverride = require("method-override");

//pull in  the article model
const Article = require("./models/article");

const app = express();

//connect to database
mongoose.connect(
  `mongodb+srv://avinashjha885:${process.env.DB_PASSWORD}@cluster0.sktix.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const ejs = require("ejs");
app.use(methodOverride("_method"));
const articleRouter = require("./routes/articles");

app.use("/articles", articleRouter);
//set our vie engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.status(200).render("articles/index", { articles });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sever is running on Port ${PORT}\nvisit:http://localhost:5000`);
});
