const errorHandler = (err, req, res, next) => {

    console.log(err);

    /*
    =========================
    DEFAULT ERROR
    =========================
    */

    let statusCode = err.statusCode || 500;

    let message = err.message || "Internal Server Error";

    /*
    =========================
    MONGODB INVALID ID
    =========================
    */

    if (err.name === "CastError") {

        statusCode = 404;

        message = "Resource not found";

    }

    /*
    =========================
    MONGODB DUPLICATE KEY
    =========================
    */

    if (err.code === 11000) {

        statusCode = 400;

        message = "Duplicate field value already exists";

    }

    /*
    =========================
    JWT INVALID
    =========================
    */

    if (err.name === "JsonWebTokenError") {

        statusCode = 401;

        message = "Invalid authentication token";

    }

    /*
    =========================
    JWT EXPIRED
    =========================
    */

    if (err.name === "TokenExpiredError") {

        statusCode = 401;

        message = "Session expired. Please login again";

    }

    /*
    =========================
    VALIDATION ERROR
    =========================
    */

    if (err.name === "ValidationError") {

        statusCode = 400;

        message = Object.values(err.errors)
            .map(val => val.message)
            .join(", ");

    }

    /*
    =========================
    FINAL RESPONSE
    =========================
    */

    res.status(statusCode).json({

        success: false,

        message,

        stack:
            process.env.NODE_ENV === "production"
                ? null
                : err.stack

    });

};

module.exports = errorHandler;
