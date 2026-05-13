const TOOL_CATEGORIES = {

    RESUME: "resume"

};

const PLANS = {

    FREE: "free",

    PREMIUM: "premium",

    PREMIUM_UPGRADE: "premium_upgrade"

};

const AI_MODELS = {

    FREE: "gpt-4.1-mini",

    PREMIUM: "gpt-4.1"

};

const FREE_PLAN_LIMITS = {

    DAILY_RESUMES: 1,

    FREE_TEMPLATES: 2,

    REQUIRED_REFERRALS: 2,

    REQUIRED_AD_VIEWS: 2,

    WATERMARK_REMOVE_ADS: 1

};

const PREMIUM_FEATURES = {

    PREMIUM_TEMPLATE_DOWNLOADS: 3,

    WATERMARK_FREE: true,

    ATS_OPTIMIZATION: true,

    AI_ENHANCEMENT: true,

    NO_ADS: true

};

const PRICING = {

    PREMIUM_RESUME: 19,

    PREMIUM_TEMPLATE: 9

};

const UPGRADE_FLOWS = {

    FREE_TO_PREMIUM: true,

    REUSE_EXISTING_RESUME_DATA: true,

    SKIP_QUESTIONS_AFTER_UPGRADE: true

};

const RESUME_TEMPLATES = {

    FREE: [

        "classic",

        "modern"

    ],

    PREMIUM: [

        "professional",

        "executive",

        "minimal",

        "creative",

        "modern-pro"

    ]

};

const AFFILIATE_CATEGORIES = [

    "interview-preparation",

    "high-income-skills",

    "communication-skills",

    "remote-jobs",

    "linkedin-growth",

    "career-growth"

];

const API_MESSAGES = {

    SERVER_RUNNING: "Skivlo Resume API Running",

    RESUME_CREATED: "Resume generated successfully",

    PAYMENT_SUCCESS: "Payment completed successfully",

    PREMIUM_UPGRADE_SUCCESS: "Premium upgrade activated",

    UNAUTHORIZED: "Unauthorized access"

};

module.exports = {

    TOOL_CATEGORIES,

    PLANS,

    AI_MODELS,

    FREE_PLAN_LIMITS,

    PREMIUM_FEATURES,

    PRICING,

    UPGRADE_FLOWS,

    RESUME_TEMPLATES,

    AFFILIATE_CATEGORIES,

    API_MESSAGES

};
