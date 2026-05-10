const express = require("express");

const {
    createOrder,
    verifyPayment
} = require("../controllers/paymentController");

const router = express.Router();

/*
========================
      PAYMENT ROUTES
========================
*/

router.post(
    "/create-order",
    createOrder
);

router.post(
    "/verify-payment",
    verifyPayment
);

module.exports = router;
