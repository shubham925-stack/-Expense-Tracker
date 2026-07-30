import "../../styles/Skeleton.css";
import "../../styles/Budget.css";

function BudgetSkeleton() {
    return (
        <div className="budget-container">

            <div className="budget-header">
                <div
                    className="skeleton"
                    style={{
                        width: "250px",
                        height: "36px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "150px",
                        height: "42px",
                    }}
                />
            </div>

            {/* Budget Form */}
            <div className="budget-card">

                <div
                    className="skeleton"
                    style={{
                        width: "180px",
                        height: "24px",
                        marginBottom: "20px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "100%",
                        height: "42px",
                        marginBottom: "20px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "160px",
                        height: "42px",
                    }}
                />

            </div>

            {/* Budget Overview */}
            <div className="budget-card">

                <div
                    className="skeleton"
                    style={{
                        width: "220px",
                        height: "24px",
                        marginBottom: "25px",
                    }}
                />

                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            className="skeleton"
                            style={{
                                width: "150px",
                                height: "18px",
                            }}
                        />

                        <div
                            className="skeleton"
                            style={{
                                width: "120px",
                                height: "18px",
                            }}
                        />
                    </div>
                ))}

                <div
                    className="skeleton"
                    style={{
                        width: "100%",
                        height: "18px",
                        marginTop: "25px",
                        borderRadius: "20px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "220px",
                        height: "18px",
                        marginTop: "20px",
                    }}
                />

            </div>

        </div>
    );
}

export default BudgetSkeleton;