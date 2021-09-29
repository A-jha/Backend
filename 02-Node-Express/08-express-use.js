const express = require("express");
const app = express();
const { logger, auth } = require("./middleware/logger");

//setting up middleware
app.use([logger, auth]);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.listen(5000, () => {
  console.log("Server is activated on port: 5000");
});
