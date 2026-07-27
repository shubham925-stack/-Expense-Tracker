import { useEffect, useState } from "react";
import api from "../../services/api";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

function ExpenseBarChart() {
    const [chartData, setChartData] = useState([]);

    const fetchChartData = async () => {
        try {
            const response = await api.get("/analytics/daily-expenses");
            setChartData(response.data.dailyExpenses);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchChartData();
    }, []);

    return (
        <div className="chart-container">
            <h2>Daily Expenses</h2>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="expense"
                        fill="#4F46E5"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
export default ExpenseBarChart;