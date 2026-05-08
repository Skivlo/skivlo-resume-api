const validateResumeInput = (req, res, next) => {

    const {
        name,
        skills,
        experience,
        education,
        template
    } = req.body;

    // Required field check
    if (
        !name ||
        !skills ||
        !experience ||
        !education ||
        !template
    ) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    next();

};

module.exports = validateResumeInput;
