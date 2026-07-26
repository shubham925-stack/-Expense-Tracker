const Transaction = require("../models/Transaction");
const Budget=require("../models/Budget")
const getDashboardSummary = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user._id,
        });
        let totalIncome = 0;
        let totalExpense = 0;
        transactions.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            } else if (transaction.type === "expense") {
                totalExpense += transaction.amount;
            }
        });
        const totalSavings = totalIncome - totalExpense;
        const budget = await Budget.findOne({
            user:req.user._id
        });
        const monthlyBudget=budget?budget.monthlyLimit:0;
        const remainingBudget=monthlyBudget-totalExpense;
        const budgetExceeded=totalExpense>monthlyBudget
        res.status(200).json({
            success: true,
            summary: {
                totalIncome,
                totalExpense,
                totalSavings,
                monthlyBudget,
                remainingBudget,
                budgetExceeded,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
module.exports = {
    getDashboardSummary,
};