const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter Last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "This email already exist"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a Password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please retype the password"],
    minlength: [6, "Password length do not matches"],
  },
});

userSchema.path("password").validate(function (v) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password do not matches.");
  }
});

//fire a function before doc is saved
userSchema.pre("save", async function (next) {
  //generate a salt
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
  next();
});

//static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    console.log("user login success");
    if (auth) {
      return user;
    } else {
      throw new Error("Incorrect user password");
    }
  } else {
    throw new Error("incorrect email");
  }
};
const User = mongoose.model("users", userSchema);

module.exports = User;
