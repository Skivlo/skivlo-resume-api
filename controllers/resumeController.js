const asyncHandler = require("../utils/asyncHandler");

const {
    generateAIResponse
} = require("../services/serviceOpenai");

const generateResume = asyncHandler(async (req, res) => {

    const {
        name,
        skills,
        experience,
        education,
        template,
        plan
    } = req.body;

    const prompt = `
Create a professional resume.

Name: ${name}

Skills: ${skills}

Experience: ${experience}

Education: ${education}

Template Style: ${template}
`;

    const aiResponse = await generateAIResponse({
        prompt,
        plan
    });

    res.status(200).json({
        success: true,
        message: "Resume generated successfully",
        data: aiResponse
    });

});

module.exports = {
    generateResume
};
