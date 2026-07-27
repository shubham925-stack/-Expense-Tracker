const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
    try {
        const {
            title,
            amount,
            type,
            category,
            date,
            notes,
        } = req.body;
        if (!title || !amount || !type || !category) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }
        const transaction = await Transaction.create({
            user: req.user._id,
            title,
            amount,
            type,
            category,
            date,
            notes,
        });
        res.status(201).json({
            success: true,
            message: "Transaction added successfully.",
            transaction,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getAllTransactions = async (req, res) => {
    try {
        const { type, category, month, year, search, page = 1, limit = 10 } = req.query;
        let filter = {
            user: req.user._id
        };
        if (type) {
            filter.type = type;
        }
        if (category) {
            filter.category = category;
        }
        if (search) {
            filter.title = {
            $regex: search,
            $options: "i"
            };
        }
        if (month && year) {
            const startDate = new Date(year, month - 1, 1);
            const endDate = new Date(year, month, 1);
            filter.date = {
                $gte: startDate,
                $lt: endDate
            };
        }
        const pageNumber = Number(page);
        const limitNumber = Number(limit);
        const skip = (pageNumber - 1)*limitNumber;
        const totalTransactions = await Transaction.countDocuments(filter);
        const transactions = await Transaction.find(filter)
            .sort({date: -1})
            .skip(skip)
            .limit(limitNumber);
        const totalPages = Math.ceil(totalTransactions / limitNumber);
        res.status(200).json({
            success: true, 
            currentPage: pageNumber,
            totalPages,
            totalTransactions,
            count: transactions.length,
            transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateTransaction = async (req, res) => {
    try {

        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found.",
            });
        }

        if (transaction.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: "Not authorized.",
            });
        }

        const updatedTransaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "Transaction updated successfully.",
            transaction: updatedTransaction,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Transaction not found."
            });
        }
        if (transaction.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: "Not authorized."
            });
        }
        await transaction.deleteOne();
        res.status(200).json({
            success: true,
            message: "Transaction deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addTransaction,getAllTransactions,updateTransaction,deleteTransaction
};