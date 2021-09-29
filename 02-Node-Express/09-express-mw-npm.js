const express = require("express");
const app = express();
const morgan = require("morgan");
const { inc } = require("./middleware/countReq.js");
app.use([morgan("short"), inc]);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(5000, () => {
  console.log("Port is active on 5000");
});
