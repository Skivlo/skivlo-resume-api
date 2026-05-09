const express = require("express");

const {
    registerUser
} = require("../controllers/authController");

const router = express.Router();

/*
========================
       AUTH ROUTES
========================
*/

router.post("/register", registerUser);

module.exports = router;
