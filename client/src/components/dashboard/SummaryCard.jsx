import {
    FaWallet,
    FaArrowDown,
    FaPiggyBank,
    FaBullseye,
    FaMoneyBillWave
} from "react-icons/fa";

function SummaryCard({ title, value }) {

    let icon;

    switch (title) {
        case "Total Income":
            icon = <FaWallet />;
            break;

        case "Total Expense":
            icon = <FaArrowDown />;
            break;

        case "Total Savings":
            icon = <FaPiggyBank />;
            break;

        case "Monthly Budget":
            icon = <FaBullseye />;
            break;

        case "Remaining Budget":
            icon = <FaMoneyBillWave />;
            break;

        default:
            icon = null;
    }

    return (
        <div className="summary-card">
            <div className="card-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <h2>₹{value}</h2>
        </div>
    );
}

export default SummaryCard;
