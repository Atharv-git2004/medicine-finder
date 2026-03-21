const express = require("express");
const router = express.Router();
const register = require("../controllers/userController.js")

router.post("/register",register.register)
router.post("/login",register.login)

module.exports = router;