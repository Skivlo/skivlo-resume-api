const openai = require("../config/openai");

const {
    AI_MODELS,
    PLANS
} = require("../constants/appConstants");

const generateAIResponse = async ({
    prompt,
    plan
}) => {

    let selectedModel = AI_MODELS.FREE;

    if (
        plan === PLANS.SMART_PRO ||
        plan === PLANS.CAREER_PLUS
    ) {
        selectedModel = AI_MODELS.PREMIUM;
    }

    return {
        success: true,
        model: selectedModel,
        prompt
    };
};

module.exports = {
    generateAIResponse
};
