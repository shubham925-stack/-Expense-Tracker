import TransactionRow from "./TransactionRow";

function TransactionTable({
    transactions,
    onEdit,
    onDelete,
}) {
    return (
        <div className="table-card">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction) => (
                            <TransactionRow
                                key={transaction._id}
                                transaction={transaction}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="5"
                                style={{ textAlign: "center", padding: "20px" }}
                            >
                                No transactions found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionTable;