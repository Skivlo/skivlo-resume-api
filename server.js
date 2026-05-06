const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Skivlo Resume API Running");
});

app.post("/generate-resume", (req, res) => {

  const { name, skills, experience } = req.body;

  const resume = `
${name}

PROFESSIONAL SUMMARY
Skilled professional with expertise in ${skills}.

CORE SKILLS
${skills}

EXPERIENCE
${experience}
`;

  res.json({
    success: true,
    resume: resume
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
