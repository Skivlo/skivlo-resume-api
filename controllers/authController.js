const asyncHandler = require("../utils/asyncHandler");

const User = require("../models/User");

const registerUser = asyncHandler(async (req, res) => {

    const {
        name,
        email
    } = req.body;

    let user = await User.findOne({ email });

    if (user) {

        return res.status(400).json({
            success: false,
            message: "User already exists"
        });

    }

    user = await User.create({
        name,
        email
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user
    });

});

module.exports = {
    registerUser
};
