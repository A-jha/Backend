const User = require("../models/User");
const bcrypt = require("bcrypt");
//validator function
const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };
  //check for duplicate error
  if (err.code === 11000) {
    errors["email"] = "this email is already registered!";
    return errors;
  }
  //validation error
  if (err.message.includes("users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signup_post = async (req, res) => {
  let { firstName, lastName, email, password, confirmPassword } = req.body;

  //check if password matches or not
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    res.status(201).json(user);
  } catch (err) {
    const error = handleError(err);
    res.status(400).json(error);
  }
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("User authenticated successfully");
};
