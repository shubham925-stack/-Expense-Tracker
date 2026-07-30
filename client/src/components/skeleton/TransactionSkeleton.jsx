import "../../styles/Skeleton.css";
import "../../styles/Transactions.css";

function TransactionSkeleton() {
    return (
        <div className="transactions-container">

            <div className="transactions-header">
                <div
                    className="skeleton"
                    style={{
                        width: "220px",
                        height: "36px",
                    }}
                />

                <div
                    className="skeleton"
                    style={{
                        width: "170px",
                        height: "42px",
                    }}
                />
            </div>

            {/* Filters */}
            <div className="filter-card">

                <div
                    className="skeleton"
                    style={{
                        width: "100%",
                        height: "45px",
                        marginBottom: "15px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="skeleton"
                            style={{
                                flex: "1",
                                minWidth: "180px",
                                height: "42px",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="table-card">

                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[1, 2, 3, 4, 5, 6].map((row) => (
                            <tr key={row}>
                                {[1, 2, 3, 4, 5].map((col) => (
                                    <td key={col}>
                                        <div
                                            className="skeleton"
                                            style={{
                                                width: "90%",
                                                height: "18px",
                                                margin: "6px auto",
                                            }}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default TransactionSkeleton;