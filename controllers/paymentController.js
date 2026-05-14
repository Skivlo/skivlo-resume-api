const crypto = require("crypto");

const asyncHandler = require("../utils/asyncHandler");

const Payment = require("../models/Payment");

const {
    createPaymentOrder
} = require("../services/paymentService");

/*
========================
      CREATE ORDER
========================
*/

const createOrder = asyncHandler(async (req, res) => {

    const {
        amount,
        plan
    } = req.body;

    const order = await createPaymentOrder({
        amount,
        receipt: `receipt_${Date.now()}`
    });

    await Payment.create({
        amount,
        plan,
        orderId: order.id,
        status: "created"
    });

    res.status(200).json({
        success: true,
        order
    });

});

/*
========================
     VERIFY PAYMENT
========================
*/

const verifyPayment = asyncHandler(async (req, res) => {

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body;

    const body =
        razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac(
            "sha256",
            process.env.RAZORPAY_KEY_SECRET
        )
        .update(body.toString())
        .digest("hex");

    const isAuthentic =
        expectedSignature === razorpay_signature;

    if (!isAuthentic) {

        return res.status(400).json({
            success: false,
            message: "Payment verification failed"
        });

    }

    await Payment.findOneAndUpdate(
        {
            orderId: razorpay_order_id
        },
        {
            paymentId: razorpay_payment_id,
            status: "paid"
        }
    );

    res.status(200).json({
        success: true,
        message: "Payment verified successfully"
    });

});

module.exports = {
    createOrder,
    verifyPayment
};
