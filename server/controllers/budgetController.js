const Budget = require("../models/Budget");

const setBudget = async (req, res) => {
    try {
        const { monthlyLimit } = req.body;

        if (!monthlyLimit) {
            return res.status(400).json({
                success: false,
                message: "Please enter a monthly budget."
            });
        }

        let budget = await Budget.findOne({
            user: req.user._id
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
        const budget = await Budget.findOne({
            user: req.user._id
        });

        if (!budget) {
            return res.status(404).json({
                success: false,
                message: "Budget not found."
            });
        }

        res.status(200).json({
            success: true,
            budget
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