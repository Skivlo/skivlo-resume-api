const checkPremiumAccess = async (req, res, next) => {

    try {

        const userPlan = req.body.plan || "free";

        const premiumPlans = [
            "mini",
            "smart-pro",
            "career-plus"
        ];

        if (!premiumPlans.includes(userPlan)) {

            return res.status(403).json({
                success: false,
                message: "Premium plan required"
            });

        }

        next();

    } catch (error) {

        next(error);

    }

};

module.exports = {
    checkPremiumAccess
};
