const express = require("express");

const app = express();

//setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

//error path if no route worked
app.all("*", (req, res) => {
  res.status(404).json({ Message: "sorry no data found" });
});
app.listen(5000);
