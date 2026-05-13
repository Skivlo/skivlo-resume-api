const Resume = require("../models/Resume");

const {
    PLANS,
    FREE_PLAN_LIMITS
} = require("../constants/appConstants");

/*
=================================
CHECK FREE USAGE LIMIT
=================================
*/

const checkUsageAccess = async (req, res, next) => {

    try {

        const {

            plan,
            userId,
            adUnlock,
            referralUnlock

        } = req.body;

        /*
        ============================
        PREMIUM BYPASS
        ============================
        */

        if (
            plan === PLANS.PREMIUM ||
            plan === PLANS.PREMIUM_UPGRADE
        ) {

            req.usageAccess = true;

            return next();

        }

        /*
        ============================
        FREE PLAN CHECK
        ============================
        */

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        /*
        ============================
        TODAY FREE RESUMES
        ============================
        */

        const todayResumeCount = await Resume.countDocuments({

            userId,

            createdAt: {
                $gte: today
            },

            plan: PLANS.FREE

        });

        /*
        ============================
        FREE DAILY LIMIT
        ============================
        */

        if (
            todayResumeCount <
            FREE_PLAN_LIMITS.DAILY_RESUMES
        ) {

            req.usageAccess = true;

            return next();

        }

        /*
        ============================
        AD UNLOCK
        ============================
        */

        if (
            adUnlock === true
        ) {

            req.usageAccess = true;

            req.unlockType = "ads";

            return next();

        }

        /*
        ============================
        REFERRAL UNLOCK
        ============================
        */

        if (
            referralUnlock === true
        ) {

            req.usageAccess = true;

            req.unlockType = "referral";

            return next();

        }

        /*
        ============================
        ACCESS DENIED
        ============================
        */

        return res.status(403).json({

            success: false,

            upgradeRequired: true,

            message:
                "Free limit reached. Watch ads, refer friends or upgrade to premium."

        });

    } catch (error) {

        next(error);

    }

};

/*
=================================
PREMIUM TEMPLATE ACCESS
=================================
*/

const checkPremiumTemplateAccess = (req, res, next) => {

    const { plan } = req.body;

    if (
        plan === PLANS.PREMIUM ||
        plan === PLANS.PREMIUM_UPGRADE
    ) {

        return next();

    }

    return res.status(403).json({

        success: false,

        premiumRequired: true,

        message:
            "Premium template access required"

    });

};

module.exports = {

    checkUsageAccess,

    checkPremiumTemplateAccess

};
