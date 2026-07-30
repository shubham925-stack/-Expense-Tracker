function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <h2>Expense Tracker</h2>

                <p>
                    Take control of your finances with smart expense tracking,
                    budgeting, and insightful analytics.
                </p>

                <div className="footer-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Expense Tracker. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;