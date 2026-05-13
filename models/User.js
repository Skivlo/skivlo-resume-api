const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

    {

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

        email: {

            type: String,

            required: true,

            unique: true,

            lowercase: true,

            trim: true

        },

        password: {

            type: String,

            default: null

        },

        /*
        =========================
        USER ROLE
        =========================
        */

        role: {

            type: String,

            enum: [

                "user",

                "admin"

            ],

            default: "user"

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

                "premium"

            ],

            default: "free"

        },

        premiumActivated: {

            type: Boolean,

            default: false

        },

        premiumActivatedAt: {

            type: Date,

            default: null

        },

        /*
        =========================
        FREE USAGE SYSTEM
        =========================
        */

        resumesUsed: {

            type: Number,

            default: 0

        },

        dailyResumeCount: {

            type: Number,

            default: 0

        },

        lastResumeDate: {

            type: Date,

            default: null

        },

        /*
        =========================
        TEMPLATE SYSTEM
        =========================
        */

        unlockedTemplates: {

            type: [String],

            default: []

        },

        /*
        =========================
        BOOST SYSTEM
        =========================
        */

        boostPurchased: {

            type: Boolean,

            default: false

        },

        /*
        =========================
        ADS SYSTEM
        =========================
        */

        adsWatched: {

            type: Number,

            default: 0

        },

        watermarkAdsWatched: {

            type: Number,

            default: 0

        },

        /*
        =========================
        REFERRAL SYSTEM
        =========================
        */

        referralCode: {

            type: String,

            default: null

        },

        referralCount: {

            type: Number,

            default: 0

        },

        referredUsers: {

            type: [String],

            default: []

        },

        /*
        =========================
        ACCOUNT STATUS
        =========================
        */

        isBlocked: {

            type: Boolean,

            default: false

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(
    "User",
    userSchema
);
