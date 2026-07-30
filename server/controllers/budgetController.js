const Budget = require("../models/Budget");
const Transaction = require("../models/Transaction");

const setBudget = async (req, res) => {
    try {
        const { monthlyLimit } = req.body;

        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        if (!monthlyLimit) {
            return res.status(400).json({
                success: false,
                message: "Please enter a monthly budget."
            });
        }

        let budget = await Budget.findOne({
            user: req.user._id,
            month,
            year
        });

        if (budget) {
            budget.monthlyLimit = monthlyLimit;
            await budget.save();

            return res.status(200).json({
                success: true,
                message: "Budget updated successfully.",
                budget
            });
        }

        budget = await Budget.create({
            user: req.user._id,
            month,
            year,
            monthlyLimit
        });

        res.status(201).json({
            success: true,
            message: "Budget created successfully.",
            budget
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getBudget = async (req, res) => {
    try {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const budget = await Budget.findOne({
            user: req.user._id,
            month,
            year
        });

        if (!budget) {
            return res.status(404).json({
                success: false,
                message: "Budget not found."
            });
        }
        const startDate = new Date(year,month - 1, 1);
        const endDate = new Date(year,month,1);

        const expenses = await Transaction.aggregate([
            {
                $match:{
                    user:req.user._id,
                    type:"expense",
                    date:{
                        $gte:startDate,
                        $lt: endDate
                    }
                }
            },
            {
                $group:{
                _id:null,
                totalExpenses:{
                    $sum:"$amount"
                }
            }
            }
        ]);
        const totalExpenses =
            expenses.length > 0 ? expenses[0].totalExpenses : 0;
        const remainingBudget =
            budget.monthlyLimit - totalExpenses

        res.status(200).json({
            success: true,
            budget,
            totalExpenses,
            remainingBudget
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    setBudget,
    getBudget
};