const generateResume = async (req, res) => {
  try {

    const {
      name,
      skills,
      experience,
      education,
      template,
      plan
    } = req.body;

    // Free vs Premium AI Logic
    let aiModel = "basic-ai";

    if (plan === "premium") {
      aiModel = "gpt-4";
    }

    const prompt = `
Create a professional resume.

Name: ${name}

Skills: ${skills}

Experience: ${experience}

Education: ${education}

Template Style: ${template}

AI Model: ${aiModel}
`;

    res.status(200).json({
      success: true,
      message: "Resume generated successfully",
      aiModel,
      prompt
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Resume generation failed"
    });

  }
};

module.exports = {
  generateResume
};
