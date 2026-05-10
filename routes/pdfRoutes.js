const express = require("express");

const {
    generatePDF
} = require("../controllers/pdfController");

const router = express.Router();

/*
========================
        PDF ROUTES
========================
*/

router.post(
    "/generate",
    generatePDF
);

module.exports = router;
