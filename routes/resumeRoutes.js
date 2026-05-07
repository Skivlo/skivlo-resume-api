const express = require("express");

const router = express.Router();

router.post("/generate-resume", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Resume route working"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

module.exports = router;
