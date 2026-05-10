const openai = require("../config/openai");

const {
    AI_MODELS,
    PLANS
} = require("../constants/appConstants");

/*
========================
   GENERATE AI RESPONSE
========================
*/

const generateAIResponse = async ({
    prompt,
    plan
}) => {

    let selectedModel = AI_MODELS.FREE;

    let systemPrompt = `
You are a professional resume writer.
Create a clean, ATS-friendly, professional resume.
`;

    if (
        plan === PLANS.SMART_PRO ||
        plan === PLANS.CAREER_PLUS
    ) {

        selectedModel = AI_MODELS.PREMIUM;

        systemPrompt = `
You are an advanced ATS resume expert.

Create:
- highly optimized resume
- professional wording
- strong achievements
- modern formatting
- ATS optimization
`;
    }

    const completion = await openai.chat.completions.create({

        model: selectedModel,

        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.7

    });

    return {
        success: true,
        model: selectedModel,
        content: completion.choices[0].message.content
    };

};

module.exports = {
    generateAIResponse
};
