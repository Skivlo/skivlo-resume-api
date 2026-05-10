const asyncHandler = require("../utils/asyncHandler");

const User = require("../models/User");

const generateToken = require("../utils/generateToken");

/*
========================
     REGISTER USER
========================
*/

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
        token: generateToken(user._id),
        user
    });

});

/*
========================
       LOGIN USER
========================
*/

const loginUser = asyncHandler(async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

        return res.status(404).json({
            success: false,
            message: "User not found"
        });

    }

    res.status(200).json({
        success: true,
        message: "Login successful",
        token: generateToken(user._id),
        user
    });

});

module.exports = {
    registerUser,
    loginUser
};
