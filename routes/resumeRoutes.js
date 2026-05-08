const express = require("express");

const router = express.Router();

const {
    generateResume
} = require("../controllers/resumeController");

const validateResumeInput = require("../middlewares/validationMiddleware");

/*
========================
    RESUME ROUTES
========================
*/

router.post(
    "/generate",
    validateResumeInput,
    generateResume
);

module.exports = router;
