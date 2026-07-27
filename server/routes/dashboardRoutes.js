const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
    getDashboardSummary,getDailySpending,getRecentTransactions
} = require("../controllers/dashboardController");
router.get("/", protect, getDashboardSummary);
router.get("/daily-spending", protect, getDailySpending);
router.get("/recent-transactions", protect, getRecentTransactions);
module.exports = router;


