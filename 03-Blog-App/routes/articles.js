//all routes related to article will be inside this file
const express = require("express");

const router = express.Router();

const Article = require("../models/article");

router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
  res.send("routers home page");
});

//new routes
router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

//edit route
router.get("/edit/:id", async (req, res) => {
  let article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
});

//for each article
router.get("/:slug", async (req, res) => {
  console.log(req.params);
  const article = await Article.findOne({ slug: req.params.slug });
  if (!article) {
    res.redirect("/");
  }
  res.render("articles/show", { article: article });
});
//post routes for new article
router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, description, markdown, createdAt } = req.body;
  let article = new Article({
    title,
    description,
    markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (e) {
    console.log("failed fucker", e);
    res.render("articles/new", { article: article });
  }
});

//update
router.put("/:id", async (req, res) => {
  let article = await Article.findById(req.params.id);
  const { title, description, markdown, createdAt } = req.body;
  article.title = title;
  article.description = description;
  article.markdown = markdown;
  article.createdAt = new Date();
  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (e) {
    res.render(`/articles/`);
  }
});

router.delete("/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
