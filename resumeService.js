const {

    AI_MODELS,

    PLANS,

    RESUME_TEMPLATES

} = require("../constants/appConstants");

const getAvailableTemplates = (userPlan = PLANS.FREE) => {

    if (userPlan === PLANS.BOOST) {

        return [

            ...RESUME_TEMPLATES.FREE,

            ...RESUME_TEMPLATES.PREMIUM

        ];

    }

    return RESUME_TEMPLATES.FREE;

};

const generateResumeContent = async (data) => {

    const {

        name,

        skills,

        experience,

        education,

        template,

        plan

    } = data;

    const userPlan = plan || PLANS.FREE;

    const availableTemplates = getAvailableTemplates(userPlan);

    if (!availableTemplates.includes(template)) {

        throw new Error("Template access denied");

    }

    let aiModel = AI_MODELS.FREE;

    if (userPlan === PLANS.BOOST) {

        aiModel = AI_MODELS.PREMIUM;

    }

    const prompt = `

Create a professional ATS optimized resume.

Name: ${name}

Skills: ${skills}

Experience: ${experience}

Education: ${education}

Template Style: ${template}

AI Mode: ${aiModel}

`;

    return {

        aiModel,

        template,

        prompt

    };

};

module.exports = {

    generateResumeContent,

    getAvailableTemplates

};
