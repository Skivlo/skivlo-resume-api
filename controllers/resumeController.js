const generateResume = async (req, res) => {
  try {
    const {
      name,
      skills,
      experience,
      education,
      template
    } = req.body;

    const prompt = `
    Create a professional resume.

    Name: ${name}
    Skills: ${skills}
    Experience: ${experience}
    Education: ${education}

    Template Style: ${template}
    `;

    res.status(200).json({
      success: true,
      message: "Resume generated successfully",
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
