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

    premiumTemplatesUnlocked: {
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
