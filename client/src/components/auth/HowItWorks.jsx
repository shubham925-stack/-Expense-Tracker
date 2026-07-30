function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Create an Account",
            description:
                "Sign up securely to start managing your personal finances.",
        },
        {
            number: "2",
            title: "Add Transactions",
            description:
                "Record your income and expenses with just a few clicks.",
        },
        {
            number: "3",
            title: "Set Monthly Budget",
            description:
                "Define your monthly spending limit and stay on track.",
        },
        {
            number: "4",
            title: "Analyze Your Spending",
            description:
                "View charts, reports, and insights to improve your financial habits.",
        },
    ];

    return (
        <section className="how-section">

            <h2>How It Works</h2>

            <p className="section-description">
                Start tracking your finances in four simple steps.
            </p>

            <div className="steps-container">

                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="step-card"
                    >
                        <div className="step-number">
                            {step.number}
                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}

export default HowItWorks;