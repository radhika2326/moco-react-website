
import "./Hero.css";

function Hero() {

    return (
        <section className="hero" id="home">

            <div className="hero__overlay"></div>

           
            <div className="hero__content container">

                <p className="hero__eyebrow">
                    Smart · Stylish · Modular
                </p>

                <h1 className="hero__title">
                    Design Your Dream Modular Kitchen with MOCO
                </h1>

                <p className="hero__subtitle">
                    Premium modular kitchens crafted with precision,
                    delivered with care.
                </p>

                {/* CTA Buttons */}
                <div className="hero__actions">

                    <a href="#designs" className="btn btn--primary btn--lg">
                        Explore Designs
                    </a>

                    <a href="#contact" className="btn btn--outline btn--lg">
                        Get Free Consultation
                    </a>

                </div>

            </div>

            
            <a href="#about" className="hero__scroll" aria-label="Scroll down">

                <span className="hero__mouse">
                    <span className="hero__wheel"></span>
                </span>

            </a>

        </section>
    );
}

export default Hero;
