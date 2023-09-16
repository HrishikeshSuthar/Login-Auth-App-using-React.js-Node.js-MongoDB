const router = require("express").Router();
const UserController = require("../controllers/userController");

router.post("/add", UserController.add);

router.get("/details/:id", UserController.getOne);

module.exports = router;
