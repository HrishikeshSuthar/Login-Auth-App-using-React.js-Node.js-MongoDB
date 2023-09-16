const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SecretKey = "Secfwf";

const Login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ Message: "User Email does not exists !!" });
    }
    const validpassword = await bcrypt.compareSync(password, user.password);
    if (!validpassword) {
      return res.status(400).json({ Message: "Invalid Password" });
    }
    const token = jwt.sign({ email: email }, SecretKey, { expiresIn: "2h" });
    return res.status(200).json({ Token: token });
  } catch (error) {
    console.log(error);
  }
};

const Details = async (req, res) => {
  try {
    const user = req.user;
    const email = user.email;
    const AuthUser = await User.findOne({ email: email });
    return res.status(200).send(AuthUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Login, Details };
