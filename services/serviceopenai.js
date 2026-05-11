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

const generateAIResponse = async (({

    prompt,

    plan

}) => {

    let selectedModel = AI_MODELS.FREE;

    let systemPrompt = `

You are a professional resume writer.

Create a clean, ATS-friendly, professional resume.

`;

    if (plan === PLANS.BOOST) {

        selectedModel = AI_MODELS.PREMIUM;

        systemPrompt = `

You are an advanced ATS resume expert.

Create:

- highly optimized resume

- stronger professional wording

- recruiter-focused achievements

- modern formatting

- ATS optimization

- polished presentation

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

});

module.exports = {

    generateAIResponse

};
