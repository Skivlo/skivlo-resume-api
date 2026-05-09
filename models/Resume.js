const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    fullName: {
        type: String,
        required: true
    },

    jobRole: {
        type: String,
        required: true
    },

    skills: {
        type: [String],
        default: []
    },

    education: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    template: {
        type: String,
        default: "classic"
    },

    aiModel: {
        type: String,
        default: "basic-ai"
    },

    isPremium: {
        type: Boolean,
        default: false
    },

    resumeContent: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Resume", resumeSchema);
