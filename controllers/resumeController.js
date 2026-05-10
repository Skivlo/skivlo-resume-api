const asyncHandler = require("../utils/asyncHandler");

const Resume = require("../models/Resume");

const {
    generateAIResponse
} = require("../services/serviceOpenai");

/*
========================
     GENERATE RESUME
========================
*/

const generateResume = asyncHandler(async (req, res) => {

    const {
        fullName,
        jobRole,
        skills,
        education,
        experience,
        template,
        plan
    } = req.body;

    const prompt = `
Create a professional resume.

Full Name: ${fullName}

Job Role: ${jobRole}

Skills: ${skills}

Education: ${education}

Experience: ${experience}

Template Style: ${template}
`;

    const aiResponse = await generateAIResponse({
        prompt,
        plan
    });

    const savedResume = await Resume.create({

        fullName,
        jobRole,
        skills,
        education,
        experience,
        template,

        aiModel: aiResponse.model,

        isPremium:
            plan !== "free",

        resumeContent:
            aiResponse.content

    });

    res.status(200).json({
        success: true,
        message: "Resume generated successfully",
        resume: savedResume
    });

});

module.exports = {
    generateResume
};
