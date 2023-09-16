const router = require("express").Router();
const AuthController = require("../controllers/authController");
const Middleware = require("../middlewares/verifyToken");

router.post("/login", AuthController.Login);

router.get("/profile", Middleware.verifyToken, AuthController.Details);

module.exports = router;
