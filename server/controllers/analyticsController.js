const Transaction = require("../models/Transaction");

const getDailyExpenses = async (req, res) => {
    try {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();
        const totalDays = new Date(currentYear, currentMonth, 0).getDate();

        const dailyExpenses = await Transaction.aggregate([
            {
                $match: {
                    user: req.user._id,
                    type: "expense",
                    $expr: {
                        $and: [
                            {
                                $eq: [
                                    { $month: "$date" },
                                    currentMonth
                                ]
                            },
                            {
                                $eq: [
                                    { $year: "$date" },
                                    currentYear
                                ]
                            }
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        $dayOfMonth: "$date"
                    },
                    expense: {
                        $sum: "$amount"
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            },
            {
                $project: {
                    _id: 0,
                    day: "$_id",
                    expense: 1
                }
            }
        ]);
        const chartData = [];

        for (let day = 1; day <= totalDays; day++) {
            chartData.push({
                day,
                expense: 0,
            });
        }
        dailyExpenses.forEach((item) => {
            chartData[item.day - 1].expense = item.expense;
        });
        res.status(200).json({
            dailyExpenses:chartData
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    getDailyExpenses
};