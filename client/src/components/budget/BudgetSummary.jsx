function BudgetSummary({ budgetData }) {
    const {
        monthlyLimit,
        totalExpenses,
        remainingBudget,
    } = budgetData;

    const progress =
        monthlyLimit > 0
            ? Math.min(
                  (totalExpenses / monthlyLimit) * 100,
                  100
              )
            : 0;

    const exceeded = remainingBudget < 0;

    return (
        <div className="budget-card">
            <h2>Budget Overview</h2>

            <div className="budget-info">
                <p>
                    <strong>Monthly Budget:</strong>
                    <span>
                        ₹{monthlyLimit.toLocaleString("en-IN")}
                    </span>
                </p>

                <p>
                    <strong>Total Expenses:</strong>
                    <span className="expense-text">
                        ₹{totalExpenses.toLocaleString("en-IN")}
                    </span>
                </p>

                <p>
                    <strong>Remaining Budget:</strong>
                    <span
                        className={
                            exceeded
                                ? "negative-budget"
                                : "positive-budget"
                        }
                    >
                        ₹{remainingBudget.toLocaleString("en-IN")}
                    </span>
                </p>
            </div>

            <div className="progress-container">
                <div
                    className={`progress-bar ${
                        exceeded
                            ? "progress-danger"
                            : "progress-success"
                    }`}
                    style={{
                        width: `${progress}%`,
                    }}
                ></div>
            </div>

            <p className="progress-text">
                {progress.toFixed(0)}% of budget used
            </p>

            <p
                className={
                    exceeded
                        ? "budget-warning"
                        : "budget-success"
                }
            >
                {exceeded
                    ? `⚠ Budget exceeded by ₹${Math.abs(
                          remainingBudget
                      ).toLocaleString("en-IN")}`
                    : `✅ ₹${remainingBudget.toLocaleString(
                          "en-IN"
                      )} remaining this month`}
            </p>
        </div>
    );
}

export default BudgetSummary;