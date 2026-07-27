import { useState, useEffect } from "react";

function TransactionModal({
    isOpen,
    onClose,
    onSubmit,
    initialData = null,
}) {
    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "expense",
        category: "",
        date: "",
        notes: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                date: initialData.date?.split("T")[0],
            });
        } else {
            setFormData({
                title: "",
                amount: "",
                type: "expense",
                category: "",
                date: "",
                notes: "",
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h2>
                    {initialData
                        ? "Edit Transaction"
                        : "Add Transaction"}
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>

                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>

                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Salary">Salary</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Investment">Investment</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <textarea
                        name="notes"
                        placeholder="Notes"
                        value={formData.notes}
                        onChange={handleChange}
                    />

                    <div className="modal-buttons">
                        <button
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button type="submit">
                            {initialData
                                ? "Update"
                                : "Save"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default TransactionModal;