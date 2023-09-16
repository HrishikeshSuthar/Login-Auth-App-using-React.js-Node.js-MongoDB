const jwt = require("jsonwebtoken");
const SecretKey = "Secfwf";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(403)
        .json({ Message: "A token is required for authentication" });
    }
    const decoded = jwt.verify(token, SecretKey);
    req.user = decoded;
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyToken };
