import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TransactionRow({ transaction, onDelete }) {
    return (
        <tr>
            <td>{transaction.title}</td>

            <td>{transaction.category}</td>

            <td>
                {new Date(transaction.date).toLocaleDateString("en-IN")}
            </td>

            <td
                className={
                    transaction.type === "income"
                        ? "income"
                        : "expense"
                }
            >
                {transaction.type === "income" ? "+" : "-"}₹
                {Number(transaction.amount).toLocaleString("en-IN")}
            </td>

            <td>
                <button
                    className="icon-btn delete-btn"
                    onClick={() => onDelete(transaction._id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
}

export default TransactionRow;