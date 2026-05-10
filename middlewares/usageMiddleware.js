const Resume = require("../models/Resume");

/*
========================
   FREE USAGE LIMIT
========================
*/

const checkFreeUsageLimit = async (req, res, next) => {

    try {

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const freeUsageLimit = 1;

        const resumesToday = await Resume.countDocuments({
            createdAt: {
                $gte: today
            },
            isPremium: false
        });

        if (resumesToday >= freeUsageLimit) {

            return res.status(403).json({
                success: false,
                message: "Free limit reached. Watch ads or upgrade plan."
            });

        }

        next();

    } catch (error) {

        next(error);

    }

};

module.exports = {
    checkFreeUsageLimit
};
