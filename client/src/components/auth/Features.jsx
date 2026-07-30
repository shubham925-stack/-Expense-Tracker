function Features() {
    const features = [
        {
            icon: "fa-solid fa-chart-line",
            title: "Track Expenses",
            description:
                "Record your daily income and expenses effortlessly.",
        },
        {
            icon: "fa-solid fa-wallet",
            title: "Budget Planning",
            description:
                "Set monthly budgets and stay in control of your spending.",
        },
        {
            icon: "fa-solid fa-chart-pie",
            title: "Analytics",
            description:
                "Visualize your spending patterns with interactive charts.",
        },
        {
            icon: "fa-solid fa-shield-halved",
            title: "Secure",
            description:
                "Your financial data is protected using JWT authentication.",
        },
    ];

    return (
        <section className="features-section">

            <h2>Why Choose Expense Tracker?</h2>

            <p className="section-description">
                Everything you need to manage your personal finances in one place.
            </p>

            <div className="features-grid">

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                    >
                        <i className={feature.icon}></i>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Features;