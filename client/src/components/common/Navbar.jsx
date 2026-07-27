import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h2 className="logo">Expense Tracker</h2>

            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/budget">Budget</Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;