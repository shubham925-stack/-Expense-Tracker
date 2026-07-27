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

const getDailySpending = async (req, res) => {
    try {
        const { month, year } = req.query;
        const selectedMonth = Number(month);
        const selectedYear = Number(year);
        const startDate = new Date(selectedYear, selectedMonth - 1, 1);
        const endDate = new Date(selectedYear, selectedMonth, 1);
        const dailySpending = await Transaction.aggregate([
            {
                $match: {
                    user: req.user._id,
                    type: "expense",
                    date: {
                            $gte: startDate,
                            $lt: endDate
                    }
                }
            },
            {
                $group:{
                    _id:{
                        $dateToString:{
                            format:"%Y-%m-%d",
                            date:"$date"
                        }
                    },
                        totalExpense:{
                            $sum:"$amount"
                        }
                }
            },
            {
                $sort:{
                    _id:1
                }
            },
            {
                $project: {
                    _id: 0,
                    date: "$_id",
                    totalExpense: 1
                }
            }
        ]);
        res.status(200).json({
            success: true,
            data: dailySpending
        });

    }catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
const getRecentTransactions = async (req, res) => {

    try {
        const transactions = await Transaction.find({
            user: req.user._id,
        })
            .sort({ date: -1 })
            .limit(5);
        res.status(200).json({
            success:true,
            transactions,
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    getDashboardSummary,
    getDailySpending,
    getRecentTransactions
};
