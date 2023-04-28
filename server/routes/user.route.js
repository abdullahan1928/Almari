const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { register, login } = require("../controllers/user.controller");

router.post(
    "/register",
    [
        check("name").exists(),
        check("email").exists().isEmail(),
        check("password").exists(),
    ], register)

router.post("/login", login);

module.exports = router;