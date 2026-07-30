import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import BudgetForm from "../components/budget/BudgetForm";
import BudgetSummary from "../components/budget/BudgetSummary";
import "../styles/Budget.css";
import BudgetSkeleton from "../components/skeleton/BudgetSkeleton";

function Budget() {
    const navigate = useNavigate();
    const [budget, setBudget] = useState("");
    const [budgetData, setBudgetData] = useState({
    monthlyLimit: 0,
    totalExpenses: 0,
    remainingBudget: 0,
    });
    const [loading, setLoading] = useState(true);
    // Fetch current budget
    const fetchBudget = async () => {
        try {
            setLoading(true);

            const response = await api.get("/budget");

            console.log(response.data);

            setBudgetData({
                monthlyLimit: response.data.budget.monthlyLimit,
                totalExpenses: response.data.totalExpenses || 0,
                remainingBudget: response.data.remainingBudget || 0,
            });
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setBudgetData({
                    monthlyLimit: 0,
                    totalExpenses: 0,
                    remainingBudget: 0,
                });
            }else if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        } finally{
            setLoading(false)
    }
    }
    
    // Save budget
    const handleSaveBudget = async (e) => {
        e.preventDefault();

        try {
            await api.post("/budget", {
                monthlyLimit: budget,
            });

            alert("Budget Saved Successfully");

            setBudget("");

            fetchBudget();
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        fetchBudget();
    }, []);
    if (loading) {
        return <BudgetSkeleton />;
    }

    return (
        <div className="budget-container">
            <div className="budget-header">
                <h1>Budget Management</h1>
                <button
                    className="home-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>
            </div>
            <BudgetForm
                budget={budget}
                setBudget={setBudget}
                onSave={handleSaveBudget}
            />
            <BudgetSummary budgetData={budgetData} />
        </div>
);
}

export default Budget;