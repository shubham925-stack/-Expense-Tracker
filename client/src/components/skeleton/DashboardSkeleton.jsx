import "../../styles/Skeleton.css";
import "../../styles/Dashboard.css";

function DashboardSkeleton() {
    return (
        <div className="dashboard-container">

            <div className="summary-container">

                {[1, 2, 3, 4, 5].map((card) => (
                    <div
                        key={card}
                        className="summary-card"
                    >
                        <div
                            className="skeleton"
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                margin: "0 auto 20px",
                            }}
                        />

                        <div
                            className="skeleton"
                            style={{
                                width: "70%",
                                height: "18px",
                                margin: "0 auto 15px",
                            }}
                        />

                        <div
                            className="skeleton"
                            style={{
                                width: "50%",
                                height: "32px",
                                margin: "0 auto",
                            }}
                        />
                    </div>
                ))}

            </div>

            <div className="chart-card">

                <div
                    className="skeleton"
                    style={{
                        width: "180px",
                        height: "22px",
                        marginBottom: "20px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "100%",
                        height: "320px",
                    }}
                />

            </div>

        </div>
    );
}

export default DashboardSkeleton;