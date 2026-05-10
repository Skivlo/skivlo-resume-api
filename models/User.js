const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true

    },

    email: {

        type: String,

        required: true,

        unique: true

    },

    plan: {

        type: String,

        default: "free"

    },

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

    unlockedTemplates: {

        type: [String],

        default: []

    },

    boostPurchased: {

        type: Boolean,

        default: false

    },

    adsWatched: {

        type: Number,

        default: 0

    },

    watermarkAdsWatched: {

        type: Number,

        default: 0

    },

    referralCount: {

        type: Number,

        default: 0

    }

}, {

    timestamps: true

});

module.exports = mongoose.model("User", userSchema);
