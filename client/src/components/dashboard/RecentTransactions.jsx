import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/RecentTransactions.css";

function RecentTransactions() {
    const [transactions, setTransactions] = useState([]);

    const fetchRecentTransactions = async () => {
        try {
            const response = await api.get("/dashboard/recent-transactions");
            setTransactions(response.data.transactions);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRecentTransactions();
    }, []);

    return (
        <div className="recent-transactions">
            <h2>Recent Transactions</h2>

            {transactions.length === 0 ? (
                <p>No recent transactions found.</p>
            ) : (
                transactions.map((transaction) => (
                    <div
                        className="transaction-card"
                        key={transaction._id}
                    >
                        <div className="transaction-left">
                            <h4>{transaction.title}</h4>
                            <p>
                                {transaction.category} •{" "}
                                {new Date(transaction.date).toLocaleDateString(
                                    "en-IN"
                                )}
                            </p>
                        </div>

                        <div
                            className={
                                transaction.type === "income"
                                    ? "amount income"
                                    : "amount expense"
                            }
                        >
                            {transaction.type === "income" ? "+" : "-"}₹
                            {transaction.amount.toLocaleString("en-IN")}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default RecentTransactions;