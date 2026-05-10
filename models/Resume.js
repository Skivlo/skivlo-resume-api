const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "User",

        default: null

    },

    name: {

        type: String,

        required: true

    },

    role: {

        type: String,

        required: true

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

    template: {

        type: String,

        default: "classic"

    },

    plan: {

        type: String,

        default: "free"

    },

    aiMode: {

        type: String,

        default: "basic-ai"

    },

    resumeContent: {

        type: String,

        default: ""

    },

    pdfUrl: {

        type: String,

        default: ""

    },

    watermarkRemoved: {

        type: Boolean,

        default: false

    },

    adsUnlocked: {

        type: Boolean,

        default: false

    },

    boostEnhanced: {

        type: Boolean,

        default: false

    }

}, {

    timestamps: true

});

module.exports = mongoose.model("Resume", resumeSchema);
