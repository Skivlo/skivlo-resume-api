const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(

    {

        /*
        =========================
        USER
        =========================
        */

        userId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

            required: true

        },

        /*
        =========================
        PAYMENT INFO
        =========================
        */

        amount: {

            type: Number,

            required: true

        },

        currency: {

            type: String,

            default: "INR"

        },

        /*
        =========================
        PLAN INFO
        =========================
        */

        plan: {

            type: String,

            enum: [

                "FREE",

                "PREMIUM",

                "PREMIUM_UPGRADE",

                "TEMPLATE"

            ],

            required: true

        },

        /*
        =========================
        TEMPLATE PURCHASE
        =========================
        */

        templateId: {

            type: String,

            default: null

        },

        /*
        =========================
        RAZORPAY
        =========================
        */

        orderId: {

            type: String,

            required: true

        },

        paymentId: {

            type: String,

            default: null

        },

        signature: {

            type: String,

            default: null

        },

        /*
        =========================
        PAYMENT STATUS
        =========================
        */

        status: {

            type: String,

            enum: [

                "created",

                "paid",

                "failed",

                "refunded"

            ],

            default: "created"

        },

        /*
        =========================
        PREMIUM ACCESS
        =========================
        */

        premiumActivated: {

            type: Boolean,

            default: false

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model(
    "Payment",
    paymentSchema
);
