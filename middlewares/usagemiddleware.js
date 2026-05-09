const checkFreeUsageLimit = async (req, res, next) => {

    try {

        const freeUsageLimit = 1;

        const userResumesToday = 0;

        if (userResumesToday >= freeUsageLimit) {

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
