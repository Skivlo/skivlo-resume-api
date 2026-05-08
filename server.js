const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const resumeRoutes = require("./routes/resumeRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();



/* =========================
   SECURITY + MIDDLEWARE
========================= */

app.use(express.json());

app.use(cors());

app.use(helmet());



/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Skivlo Resume API Running",
        status: "online"
    });

});



/* =========================
   API ROUTES
========================= */

app.use("/api/resume", resumeRoutes);



/* =========================
   GLOBAL ERROR HANDLER
========================= */

app.use(errorHandler);



/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
