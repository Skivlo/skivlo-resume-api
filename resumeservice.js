const generateResumeContent = async (data) => {

    const {
        name,
        skills,
        experience,
        education,
        template,
        plan
    } = data;

    let aiModel = "basic-ai";

    if (plan === "premium") {
        aiModel = "gpt-4";
    }

    const prompt = `
Create a professional ATS optimized resume.

Name: ${name}

Skills: ${skills}

Experience: ${experience}

Education: ${education}

Template Style: ${template}

AI Model: ${aiModel}
`;

    return {
        aiModel,
        prompt
    };
};

module.exports = {
    generateResumeContent
};
