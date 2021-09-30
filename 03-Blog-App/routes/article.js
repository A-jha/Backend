//all routes related to article will be inside this file
const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.get("/", (req, res) => {
  res.send("routers home page");
});

//new routes
router.get("/new", (req, res) => {
  res.render("articles/new");
});

//post routes for new article
router.post("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
