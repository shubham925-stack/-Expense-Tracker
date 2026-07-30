function BudgetForm({
    budget,
    setBudget,
    onSave,
}) {
    return (
        <div className="budget-card">
            <h2>Set Monthly Budget</h2>
            <form onSubmit={onSave}>
                <input
                    type="number"
                    placeholder="Enter Monthly Budget"
                    value={budget}
                    onChange={(e) =>
                        setBudget(e.target.value)
                    }
                />
                <button type="submit">
                    Save Budget
                </button>
            </form>
        </div>
    );
}

export default BudgetForm;