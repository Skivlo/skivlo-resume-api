const asyncHandler = require("../utils/asyncHandler");

const Resume = require("../models/Resume");

const User = require("../models/User");

const {
  generateAIResponse
} = require("../services/serviceOpenai");

const {
  PLANS,
  FREE_LIMITS
} = require("../constants/appConstants");

const generateResume = asyncHandler(async (req, res) => {

  const {
    fullName,
    jobRole,
    skills,
    education,
    experience,
    extraDetails,
    template,
    plan
  } = req.body;

  const user = req.user || null;

  /*
  ========================
        FREE LIMIT
  ========================
  */

  if (user && user.plan === PLANS.FREE) {

    const today = new Date().toDateString();

    const lastDate = user.lastResumeDate
      ? new Date(user.lastResumeDate).toDateString()
      : null;

    if (today !== lastDate) {
      user.dailyResumeCount = 0;
    }

    if (
      user.dailyResumeCount >=
      FREE_LIMITS.DAILY_RESUME_LIMIT
    ) {

      return res.status(403).json({
        success: false,
        message: "Daily free resume limit reached"
      });

    }

  }

  /*
  ========================
        AI PROMPT
  ========================
  */

  const prompt = `
Create a clean ATS optimized professional resume.

Return ONLY professional resume content.

Full Name: ${fullName}

Job Role: ${jobRole}

Skills: ${skills}

Education: ${education}

Experience: ${experience}

Additional Details: ${extraDetails || "None"}

Template Style: ${template}
`;

  const aiResponse = await generateAIResponse({
    prompt,
    plan
  });

  /*
  ========================
        SAVE RESUME
  ========================
  */

  const savedResume = await Resume.create({

    userId: user ? user._id : null,

    name: fullName,

    role: jobRole,

    skills,

    education,

    experience,

    extraDetails,

    template,

    plan: plan || PLANS.FREE,

    aiModel: aiResponse.model,

    aiMode:
      plan === PLANS.FREE
        ? "basic-ai"
        : "premium-ai",

    resumeContent: aiResponse.content,

    boostEnhanced:
      plan === PLANS.PREMIUM_UPGRADE

  });

  /*
  ========================
      UPDATE FREE COUNT
  ========================
  */

  if (user && user.plan === PLANS.FREE) {

    user.dailyResumeCount += 1;

    user.lastResumeDate = new Date();

    await user.save();

  }

  res.status(200).json({

    success: true,

    message: "Resume generated successfully",

    resume: savedResume

  });

});

module.exports = {
  generateResume
};
