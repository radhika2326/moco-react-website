
import "./Footer.css";

function Footer() {

    const quickLinks = [
        { label: "About", link: "#about" },
        { label: "Designs", link: "#designs" },
        { label: "Gallery", link: "#gallery" },
        { label: "Process", link: "#process" },
        { label: "Contact", link: "#contact" }
    ];

    const kitchenTypes = [
        "L-Shaped Kitchen",
        "U-Shaped Kitchen",
        "Island Kitchen",
        "Parallel Kitchen",
        "Straight Kitchen"
    ];

    const socialLinks = [
        {
            name: "Instagram",
            icon: "instagram",
            url: "https://www.instagram.com/"
        },
        {
            name: "Facebook",
            icon: "facebook",
            url: "https://www.facebook.com/"
        },
        {
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/"
        },
        {
            name: "YouTube",
            icon: "youtube",
            url: "https://www.youtube.com/"
        }
    ];

    const socialIcons = {
        instagram: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <path d="M17.5 6.5h.01"/>
            </svg>
        ),
        facebook: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V1.5C18.3 1.3 17.2 1.2 16 1.2c-3.2 0-5 1.9-5 5.4V9H8v4h3v8Z"/>
            </svg>
        ),
        twitter: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8A12 12 0 0 1 2.8 4.5a4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 1 18.6a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.9Z"/>
            </svg>
        ),
        youtube: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="4"/>
                <path d="m10 9 5 3-5 3Z"/>
            </svg>
        )
    };

    return (
        <footer className="footer" id="contact">

            <div className="footer__container">

                <div className="footer__grid">

                    {/* Brand Column */}
                    <div className="footer__brand">

                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-mark">M</span>
                            <span>MOCO</span>
                        </a>

                        <p>
                            Premium modular kitchens designed for
                            modern Indian homes. Smart, stylish,
                            and built to last.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="footer__column">

                        <h3>Quick Links</h3>

                        <ul>
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Kitchen Types */}
                    <div className="footer__column">

                        <h3>Kitchen Types</h3>

                        <ul>
                            {kitchenTypes.map((type, index) => (
                                <li key={index}>
                                    <a href="#designs">{type}</a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Social Links */}
                    <div className="footer__column">

                        <h3>Follow Us</h3>

                        <div className="footer__socials">

                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.name}
                                >
                                    {socialIcons[social.icon]}
                                </a>
                            ))}

                        </div>

                    </div>

                </div>

                {/* Copyright */}
                <div className="footer__bottom">

                    <p>
                        © 2026 MOCO Modular Kitchenware. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
