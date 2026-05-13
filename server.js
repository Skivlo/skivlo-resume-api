require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

const connectDatabase = require("./config/mongodb");

const resumeRoutes = require("./routes/resumeRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const authRoutes = require("./routes/authRoutes");
const pdfRoutes = require("./routes/pdfRoutes");

const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

/*
========================
DATABASE CONNECTION
========================
*/

connectDatabase();

/*
========================
TRUST PROXY
========================
*/

app.set("trust proxy", 1);

/*
========================
RATE LIMITER
========================
*/

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests. Please try again later."
    }
});

/*
========================
SECURITY + MIDDLEWARE
========================
*/

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(cookieParser());

app.use(express.json({
    limit: "1mb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "1mb"
}));

app.use(limiter);

/*
========================
HOME ROUTE
========================
*/

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Skivlo Resume API Running",
        status: "online"
    });

});

/*
========================
HEALTH CHECK
========================
*/

app.get("/api/health", (req, res) => {

    res.status(200).json({
        success: true,
        server: "running",
        environment: process.env.NODE_ENV
    });

});

/*
========================
API ROUTES
========================
*/

app.use("/api/resume", resumeRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/pdf", pdfRoutes);

/*
========================
404 HANDLER
========================
*/

app.use("*", (req, res) => {

    res.status(404).json({
        success: false,
        message: "Route not found"
    });

});

/*
========================
GLOBAL ERROR HANDLER
========================
*/

app.use(errorHandler);

/*
========================
SERVER START
========================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
