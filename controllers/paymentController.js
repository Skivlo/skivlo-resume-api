const { createPaymentOrder } = require("../services/paymentService");

const createOrder = async (req, res, next) => {

    try {

        const { amount } = req.body;

        const order = await createPaymentOrder({
            amount,
            receipt: `receipt_${Date.now()}`
        });

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {

        next(error);

    }

};

module.exports = {
    createOrder
};
