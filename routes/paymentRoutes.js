const express = require("express");

const router = express.Router();

const {
    createOrder
} = require("../controllers/paymentController");

/*
========================
      PAYMENT ROUTES
========================
*/

router.post(
    "/create-order",
    createOrder
);

module.exports = router;
