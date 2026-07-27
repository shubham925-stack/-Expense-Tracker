
import { useEffect, useState } from "react";
import api from "../services/api";
import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionModal from "../components/transactions/TransactionModal";
import { useNavigate } from "react-router-dom";
import "../styles/Transactions.css";

function Transactions() {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const fetchTransactions = async (filters = {}) => {
        try {
            const response = await api.get("/transactions", {
                params: filters,
            });

            setTransactions(response.data.transactions);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleFilterChange = (filters) => {
        fetchTransactions(filters);
    };

    const handleDelete = async (transactionId) => {
    try {
        await api.delete(`/transactions/${transactionId}`);
        alert("Transaction deleted successfully.");
        fetchTransactions(); // Refresh the list
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert(error.message);
        }
    }
};
const handleAddTransaction = async (formData) => {
    try {
        await api.post("/transactions", formData);

        alert("Transaction added successfully.");

        setIsModalOpen(false);
        fetchTransactions();
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message);
        } else {
            alert(error.message);
        }
    }
};

    return (
    <>
        <div className="transactions-container">

            <div className="transactions-header">
                <h1>Transactions</h1>
                <button
                    className="home-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    <i className="fa-solid fa-house"></i> Home
                </button>
                <button
                    className="add-btn"
                    onClick={() => {
                        setSelectedTransaction(null);
                        setIsModalOpen(true);
                    }}
                >
                    + Add Transaction
                </button>
            </div>

            <TransactionFilters
                onFilterChange={handleFilterChange}
            />

            <TransactionTable
                transactions={transactions}
                onDelete={handleDelete}
            />

            <TransactionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddTransaction}
                initialData={selectedTransaction}
            />

        </div>
    </>
);
}

export default Transactions;