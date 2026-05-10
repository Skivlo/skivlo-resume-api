const express = require("express");

const {
    generateResume
} = require("../controllers/resumeController");

const validateResumeInput = require("../middlewares/validationMiddleware");

const {
    checkFreeUsageLimit
} = require("../middlewares/usageMiddleware");

const router = express.Router();

/*
========================
     RESUME ROUTES
========================
*/

router.post(
    "/generate",
    validateResumeInput,
    checkFreeUsageLimit,
    generateResume
);

module.exports = router;
