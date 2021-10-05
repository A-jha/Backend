const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
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
  //incorrect email during login
  if (err.message === "incorrect email") {
    errors.email = "sorry email is not registered:(";
  }
  //incorrect password during login
  if (err.message === "Incorrect user password") {
    errors.password = "Please enter your password carefully.";
  }
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

//jwt token generation
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToke = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
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
    const token = createToke(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const error = handleError(err);
    res.status(400).json(error);
  }
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToke(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
