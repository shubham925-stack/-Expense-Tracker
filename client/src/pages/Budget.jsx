import { useEffect, useState } from "react";
import api from "../services/api";

function Budget() {
    const [budget, setBudget] = useState("");
    const [currentBudget, setCurrentBudget] = useState(0);

    // Fetch current budget
    const fetchBudget = async () => {
        try {
            const response = await api.get("/budget");

            console.log(response.data);

            setCurrentBudget(response.data.budget.monthlyLimit);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setCurrentBudget(0);
            } else if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

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

    return (
        <div>
            <h1>Monthly Budget</h1>

            <form onSubmit={handleSaveBudget}>
                <input
                    type="number"
                    placeholder="Enter Monthly Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                />

                <button type="submit">
                    Save Budget
                </button>
            </form>

            <hr />

            <h2>Current Budget: ₹{currentBudget}</h2>
        </div>
    );
}

export default Budget;