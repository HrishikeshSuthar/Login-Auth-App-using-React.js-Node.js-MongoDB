const User = require("../models/user");
const bcrypt = require("bcrypt");

const add = async (req, res) => {
  try {
    let data = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    };
    const user = await User.create(data);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.findById({ _id: id });
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add, getOne };
