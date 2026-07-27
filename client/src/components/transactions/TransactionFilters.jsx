import { useState } from "react";

function TransactionFilters({ onFilterChange }) {
    const [filters, setFilters] = useState({
        search: "",
        type: "",
        category: "",
        month: "",
    });

    const handleChange = (e) => {
        const updatedFilters = {
            ...filters,
            [e.target.name]: e.target.value,
        };

        setFilters(updatedFilters);

        if (onFilterChange) {
            onFilterChange(updatedFilters);
        }
    };

    return (
        <div className="filter-card">

            <input
                type="text"
                name="search"
                placeholder="Search transactions..."
                value={filters.search}
                onChange={handleChange}
            />

            <select
                name="type"
                value={filters.type}
                onChange={handleChange}
            >
                <option value="">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            <select
                name="category"
                value={filters.category}
                onChange={handleChange}
            >
                <option value="">All Categories</option>

                <option value="Salary">Salary</option>
                <option value="Freelancing">Freelancing</option>
                <option value="Business">Business</option>
                <option value="Investment">Investment</option>

                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>

                <option value="Other">Other</option>
            </select>

            <input
                type="month"
                name="month"
                value={filters.month}
                onChange={handleChange}
            />

        </div>
    );
}

export default TransactionFilters;