import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/common/Navbar";
import SummaryCard from "../components/dashboard/SummaryCard";
import "../styles/Dashboard.css";
import ExpenseBarChart from "../components/dashboard/ExpenseBarChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";

function Dashboard() {
    const [summary, setSummary] = useState(null);
  
    const fetchSummary = async () => {
    try {
        const response = await api.get("/dashboard");
        console.log(response.data);
        setSummary(response.data.summary);
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert(error.message);
        }
    }
};
useEffect(() => {
        fetchSummary();
    }, []);

    if (!summary) {
        return <h2>Loading...</h2>;
    }
    return (
    <>
        <Navbar />
        <div className="dashboard-container">
            {/* <h1>Expense Tracker Dashboard</h1> */}
            <div className="summary-container">
                <SummaryCard
                    title="Total Income"
                    value={summary.totalIncome}
                />
                <SummaryCard
                    title="Total Expense"
                    value={summary.totalExpense}
                />
                <SummaryCard
                    title="Total Savings"
                    value={summary.totalSavings}
                />
                <SummaryCard
                    title="Monthly Budget"
                    value={summary.monthlyBudget}
                />
                <SummaryCard
                    title="Remaining Budget"
                    value={summary.remainingBudget}
                />
            </div>
        <ExpenseBarChart />
        <RecentTransactions/>
        </div>
    </>
);
}

export default Dashboard;
