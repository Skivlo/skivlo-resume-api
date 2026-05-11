const TOOL_CATEGORIES = {

    RESUME: "resume"

};

const PLANS = {

    FREE: "free",

    BOOST: "boost"

};

const AI_MODELS = {

    FREE: "basic-ai",

    PREMIUM: "gpt-4"

};

const RESUME_TEMPLATES = {

    FREE: ["classic", "modern"],

    PREMIUM: [

        "professional",

        "creative",

        "executive",

        "minimal"

    ]

};

const TEMPLATE_PRICING = {
    modern: 6,
    professional: 7,
    executive: 9
};

};

const FREE_LIMITS = {

    DAILY_RESUME_LIMIT: 1,

    FREE_TEMPLATES: 2,

    ADS_AFTER_LIMIT: 2,

    WATERMARK_REMOVE_ADS: 1

};

const BOOST_FEATURES = {

    PRICE: 19,

    PREMIUM_TEMPLATE_DOWNLOADS: 3

};

module.exports = {

    TOOL_CATEGORIES,

    PLANS,

    AI_MODELS,

    RESUME_TEMPLATES,

    TEMPLATE_PRICING,

    FREE_LIMITS,

    BOOST_FEATURES

};
