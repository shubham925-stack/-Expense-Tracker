const express = require("express");
const { getDailyExpenses } = require("../controllers/analyticsController");
const {protect}= require("../middleware/authMiddleware");

const router = express.Router();

router.get("/daily-expenses", protect, getDailyExpenses);

module.exports = router;