const jwt = require("jsonwebtoken");

const User = require("../models/User");

const {
    PLANS
} = require("../constants/appConstants");

/*
=================================
PROTECT AUTH ROUTES
=================================
*/

const protect = async (req, res, next) => {

    try {

        let token;

        /*
        ============================
        GET TOKEN
        ============================
        */

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {

            token =
                req.headers.authorization.split(" ")[1];

        }

        /*
        ============================
        TOKEN REQUIRED
        ============================
        */

        if (!token) {

            return res.status(401).json({

                success: false,

                message: "Authentication token missing"

            });

        }

        /*
        ============================
        VERIFY TOKEN
        ============================
        */

        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET

        );

        /*
        ============================
        FIND USER
        ============================
        */

        const user = await User.findById(
            decoded.id
        ).select("-password");

        if (!user) {

            return res.status(401).json({

                success: false,

                message: "User not found"

            });

        }

        /*
        ============================
        BLOCKED USER CHECK
        ============================
        */

        if (user.isBlocked === true) {

            return res.status(403).json({

                success: false,

                message: "Account access blocked"

            });

        }

        /*
        ============================
        ATTACH USER
        ============================
        */

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({

            success: false,

            message: "Invalid or expired token"

        });

    }

};

/*
=================================
PREMIUM ACCESS
=================================
*/

const premiumOnly = (req, res, next) => {

    if (
        req.user.plan === PLANS.PREMIUM ||
        req.user.plan === PLANS.PREMIUM_UPGRADE
    ) {

        return next();

    }

    return res.status(403).json({

        success: false,

        premiumRequired: true,

        message: "Premium access required"

    });

};

/*
=================================
ADMIN ACCESS
=================================
*/

const adminOnly = (req, res, next) => {

    if (req.user.role === "admin") {

        return next();

    }

    return res.status(403).json({

        success: false,

        message: "Admin access required"

    });

};

module.exports = {

    protect,

    premiumOnly,

    adminOnly

};
