
import "./WhyMoco.css";

function WhyMoco() {

    const features = [
        {
            icon: "ruler",
            title: "Custom Modular Designs",
            description: "Tailored to your space, style, and lifestyle needs."
        },
        {
            icon: "factory",
            title: "Factory Precision Manufacturing",
            description: "CNC-cut components for flawless fit and finish."
        },
        {
            icon: "diamond",
            title: "Premium Hardware",
            description: "Top-grade hinges, channels, and fittings built to last."
        },
        {
            icon: "zap",
            title: "Quick Installation",
            description: "Ready-to-assemble modules installed in just 7 days."
        },
        {
            icon: "shield",
            title: "10-Year Warranty",
            description: "Complete peace of mind with our industry-leading warranty."
        },
        {
            icon: "rupee",
            title: "D2C Affordable Pricing",
            description: "Factory-direct pricing with no middlemen markups."
        }
    ];

    const icons = {
        ruler: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.3 8.7-6-6a2.4 2.4 0 0 0-3.4 0l-9.2 9.2a2.4 2.4 0 0 0 0 3.4l6 6a2.4 2.4 0 0 0 3.4 0l9.2-9.2a2.4 2.4 0 0 0 0-3.4Z"/>
                <path d="m7.5 7.5 2 2m1-5 2 2m-1 6 2 2"/>
            </svg>
        ),
        factory: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20V8l7 4V8l7 4V4h4v16Z"/>
                <path d="M6 16h.01M10 16h.01M14 16h.01"/>
            </svg>
        ),
        diamond: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l5 6-11 13L1 9Z"/>
                <path d="M1 9h22M9 3l3 19 3-19M6 3l-5 6m17-6 5 6"/>
            </svg>
        ),
        zap: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h8l-1 8 11-12h-8Z"/>
            </svg>
        ),
        shield: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>
                <path d="m9 12 2 2 4-4"/>
            </svg>
        ),
        rupee: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4h14M5 9h14M5 4c8 0 8 10 0 10h2l8 7"/>
                <path d="M5 14h8"/>
            </svg>
        )
    };

    return (
        <section className="why" id="why">

            <div className="why__container">

                <div className="why__heading">
                    <p className="why__eyebrow">
                        WHY CHOOSE MOCO
                    </p>

                    <h2 className="why__title">
                        Built Different. Built Better.
                    </h2>
                </div>

                <div className="why__grid">

                    {features.map((feature, index) => (

                        <div className="why__card" key={index}>

                            <div className="why__icon">
                                {icons[feature.icon]}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyMoco;
