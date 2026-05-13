const validateResumeInput = (req, res, next) => {

    const {

        name,
        skills,
        education,
        experience,
        jobRole,
        moreDetails,
        template

    } = req.body;

    /*
    ============================
    REQUIRED FIELD VALIDATION
    ============================
    */

    if (
        !name ||
        !skills ||
        !education ||
        !experience
    ) {

        return res.status(400).json({

            success: false,
            message: "Required resume fields are missing"

        });

    }

    /*
    ============================
    STRING SANITIZATION
    ============================
    */

    const cleanName = String(name).trim();

    const cleanSkills = String(skills).trim();

    const cleanEducation = String(education).trim();

    const cleanExperience = String(experience).trim();

    const cleanJobRole = jobRole
        ? String(jobRole).trim()
        : "";

    const cleanMoreDetails = moreDetails
        ? String(moreDetails).trim()
        : "";

    /*
    ============================
    MINIMUM VALIDATION
    ============================
    */

    if (cleanName.length < 2) {

        return res.status(400).json({

            success: false,
            message: "Name is too short"

        });

    }

    if (cleanSkills.length < 2) {

        return res.status(400).json({

            success: false,
            message: "Skills field is invalid"

        });

    }

    /*
    ============================
    MAXIMUM LIMITS
    ============================
    */

    if (cleanName.length > 80) {

        return res.status(400).json({

            success: false,
            message: "Name is too long"

        });

    }

    if (cleanSkills.length > 500) {

        return res.status(400).json({

            success: false,
            message: "Skills limit exceeded"

        });

    }

    if (cleanEducation.length > 500) {

        return res.status(400).json({

            success: false,
            message: "Education limit exceeded"

        });

    }

    if (cleanExperience.length > 1000) {

        return res.status(400).json({

            success: false,
            message: "Experience limit exceeded"

        });

    }

    if (cleanJobRole.length > 120) {

        return res.status(400).json({

            success: false,
            message: "Job role is too long"

        });

    }

    if (cleanMoreDetails.length > 3000) {

        return res.status(400).json({

            success: false,
            message: "Additional details limit exceeded"

        });

    }

    /*
    ============================
    SPAM PROTECTION
    ============================
    */

    const spamPattern = /(.)\1{10,}/;

    if (
        spamPattern.test(cleanSkills) ||
        spamPattern.test(cleanExperience) ||
        spamPattern.test(cleanMoreDetails)
    ) {

        return res.status(400).json({

            success: false,
            message: "Spam content detected"

        });

    }

    /*
    ============================
    CLEAN BODY
    ============================
    */

    req.cleanedData = {

        name: cleanName,

        skills: cleanSkills,

        education: cleanEducation,

        experience: cleanExperience,

        jobRole: cleanJobRole,

        moreDetails: cleanMoreDetails,

        template: template || "classic"

    };

    next();

};

module.exports = {

    validateResumeInput

};
