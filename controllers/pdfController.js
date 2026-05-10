const asyncHandler = require("../utils/asyncHandler");

const {
    generateResumePDF
} = require("../services/pdfService");

/*
========================
      GENERATE PDF
========================
*/

const generatePDF = asyncHandler(async (req, res) => {

    const pdfResponse = await generateResumePDF(req.body);

    res.status(200).json({
        success: true,
        pdf: pdfResponse
    });

});

module.exports = {
    generatePDF
};
