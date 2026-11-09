
import "./About.css";

function About() {

    return (
        <section className="about" id="about">

            <div className="about__container">

                {/* Left side - Kitchen Image */}
                <div className="about__image">
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                        alt="Modern wooden modular kitchen"
                    />
                </div>

                {/* Right side - About Content */}
                <div className="about__content">

                    <p className="about__eyebrow">
                        ABOUT MOCO
                    </p>

                    <h2 className="about__title">
                        Where Modularity Meets Modern Living
                    </h2>

                    <p className="about__description">
                        MOCO was born from a simple belief: every home
                        deserves a kitchen that's as functional as it
                        is beautiful. We combine sustainable materials,
                        precision engineering, and premium finishes to
                        create modular kitchens that stand the test of time.
                    </p>

                    {/* Statistics */}
                    <div className="about__stats">

                        <div className="about__stat">
                            <h3>500+</h3>
                            <p>Kitchens Delivered</p>
                        </div>

                        <div className="about__stat">
                            <h3>10yr</h3>
                            <p>Warranty</p>
                        </div>

                        <div className="about__stat">
                            <h3>15+</h3>
                            <p>Cities Served</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;
