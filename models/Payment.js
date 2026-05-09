const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    amount: {
        type: Number,
        required: true
    },

    plan: {
        type: String,
        required: true
    },

    paymentId: {
        type: String
    },

    orderId: {
        type: String
    },

    status: {
        type: String,
        default: "pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);
