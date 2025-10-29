const express = require("express");
const router = express.Router();
const { addUserController, getUsersController } = require("./user.controller");

router.post("/users", addUserController);
router.get("/users", getUsersController);

module.exports = router;
