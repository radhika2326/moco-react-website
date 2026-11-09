
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

   
    const [isOpen, setIsOpen] = useState(false);

   
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        // Check scroll position
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        // Desktop par menu close karna
        const handleResize = () => {
            if (window.innerWidth > 960) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        // Page load hone par bhi scroll check karo
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    // Mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Link click hone par menu close
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (

        <header
            className={`header 
                ${isScrolled ? "header--scrolled" : ""}
                ${isOpen ? "header--open" : ""}
            `}
            id="header"
        >

            <nav className="nav container">

                {/* Logo */}
                <a href="#home" className="logo">
                    <span className="logo__mark">M</span>
                    <span className="logo__text">MOCO</span>
                </a>

                {/* Navigation links */}
                <ul className="nav__menu" id="navMenu">

                    <li>
                        <a href="#about" className="nav__link" onClick={closeMenu}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#why" className="nav__link" onClick={closeMenu}>
                            Why MOCO
                        </a>
                    </li>

                    <li>
                        <a href="#designs" className="nav__link" onClick={closeMenu}>
                            Designs
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="nav__link" onClick={closeMenu}>
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#process" className="nav__link" onClick={closeMenu}>
                            Process
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="nav__link" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>

                    <li className="nav__cta">
                        <a href="#quote" className="btn btn--primary btn--sm" onClick={closeMenu}>
                            Get Quote
                        </a>
                    </li>

                </ul>

                {/* Mobile hamburger button */}
                <button
                    className="nav__toggle"
                    id="navToggle"
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    aria-controls="navMenu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>

        </header>
    );
}

export default Navbar;
