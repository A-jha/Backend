const express = require("express");
const app = express();
//hash password
const bcrypt = require("bcrypt");

//static assets
app.use(express.static("./public"));

//parse from data
app.use(express.urlencoded({ extended: false }));

//format data to  json
app.use(express.json());

//route to get the data from form
app.post("/form", async (req, res) => {
  //   console.log(req.body);
  const { name, email, password } = req.body;
  const bcryptPassword = await bcrypt.hash(password, 12);
  res.send(`
  <h1>Thanks For Submitting the form</h1>
    <details>
    <summary>Here is all of your details</summary>
    <div>
    <h4>Name:</h4> ${name}
    <h4>Email:</h4> ${email}
    <h4>Password:</h4> ${bcryptPassword}
    </div>
    </details>
  `);
});

app.listen(5000, () => {
  console.log("server is activated on port: 5000");
});
