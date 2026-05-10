const generateResumePDF = async (resumeData) => {

    return {
        success: true,
        message: "PDF generation service ready",
        data: resumeData
    };

};

module.exports = {
    generateResumePDF
};
