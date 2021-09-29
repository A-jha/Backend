const express = require("express");
const app = express();

//static assets
app.use(express.static("./public"));
