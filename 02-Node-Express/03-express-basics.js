//import express
const express = require("express");

//create an in stance of express
const app = express();

//Now we can directly define paths

//send a json data
app.get("/", (req, res) => {
  res.status(200).json({ Name: "Avinash", gmail: "avvinashjha@gmai.com" });
});

//send an html
app.get("/html", (req, res) => {
  res.status(200).send("<h1>Hello HTML</h1>");
});

//send simple text
app.get("/text", (req, res) => {
  res.status(200).send("Simple Text");
});

//default route for 404
app.get("*", (req, res) => {
  res.status(404).send("Sorry data Not Found 404!");
});
//assign the port
app.listen(5000, () => {
  console.log("Server is listening on Port: 5000");
});
