const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(

    {

        /*
        =========================
        USER
        =========================
        */

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            default: null

        },

        /*
        =========================
        BASIC INFO
        =========================
        */

        name: {

            type: String,

            required: true,

            trim: true

        },

        role: {

            type: String,

            required: true,

            trim: true

        },

        skills: {

            type: String,

            required: true

        },

        education: {

            type: String,

            default: ""

        },

        experience: {

            type: String,

            default: ""

        },

        extraDetails: {

            type: String,

            default: ""

        },

        /*
        =========================
        RESUME SYSTEM
        =========================
        */

        template: {

            type: String,

            default: "classic"

        },

        selectedTemplates: {

            type: [String],

            default: []

        },

        /*
        =========================
        PLAN SYSTEM
        =========================
        */

        plan: {

            type: String,

            enum: [

                "free",

                "premium",

                "premium-upgrade"

            ],

            default: "free"

        },

        /*
        =========================
        AI SYSTEM
        =========================
        */

        aiModel: {

            type: String,

            default: "gpt-4.1-mini"

        },

        aiMode: {

            type: String,

            enum: [

                "basic-ai",

                "premium-ai"

            ],

            default: "basic-ai"

        },

        /*
        =========================
        GENERATED CONTENT
        =========================
        */

        resumeContent: {

            type: String,

            default: ""

        },

        atsScore: {

            type: Number,

            default: 0

        },

        /*
        =========================
        PDF SYSTEM
        =========================
        */

        pdfUrl: {

            type: String,

            default: ""

        },

        downloadCount: {

            type: Number,

            default: 0

        },

        /*
        =========================
        FREE FEATURES
        =========================
        */

        watermarkRemoved: {

            type: Boolean,

            default: false

        },

        adsUnlocked: {

            type: Boolean,

            default: false

        },

        /*
        =========================
        PREMIUM BOOST
        =========================
        */

        boostEnhanced: {

            type: Boolean,

            default: false

        },

        /*
        =========================
        AFFILIATE SYSTEM
        =========================
        */

        affiliateShown: {

            type: Boolean,

            default: false

        },

        /*
        =========================
        STATUS SYSTEM
        =========================
        */

        status: {

            type: String,

            enum: [

                "draft",

                "generated",

                "downloaded"

            ],

            default: "draft"

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(
    "Resume",
    resumeSchema
);
