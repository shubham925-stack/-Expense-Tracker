import { Link } from "react-router-dom";

function HeroSection({ children }) {
    return (
        <section className="hero">

            <div className="hero-left">
                
                <h1>
                    Take Control <br />
                    of Your Finances
                </h1>

                <p className="hero-tagline">
                    Expense Tracker helps you manage income,
                    monitor expenses, plan monthly budgets,
                    and understand your spending with beautiful
                    analytics.
                </p>

                <div className="hero-features">

                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check"></i>
                        Track Income & Expenses
                    </div>

                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check"></i>
                        Monthly Budget Planning
                    </div>

                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check"></i>
                        Expense Analytics
                    </div>

                    <div className="feature-item">
                        <i className="fa-solid fa-circle-check"></i>
                        Secure Authentication
                    </div>

                </div>

                <div className="hero-buttons">

                    <a href="#login-card">
                        <button className="primary-btn">
                            Get Started
                        </button>
                    </a>

                    <Link to="/register">
                        <button className="secondary-btn">
                            Create Account
                        </button>
                    </Link>

                </div>

            </div>

            <div
                className="hero-right"
                id="login-card"
            >
                {children}
            </div>

        </section>
    );
}

export default HeroSection;