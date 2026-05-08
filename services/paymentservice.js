const razorpay = require("../config/razorpay");

const createPaymentOrder = async ({
    amount,
    currency = "INR",
    receipt
}) => {

    const options = {
        amount: amount * 100,
        currency,
        receipt
    };

    const order = await razorpay.orders.create(options);

    return order;
};

module.exports = {
    createPaymentOrder
};
