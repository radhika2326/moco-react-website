import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyMoco from "./components/WhyMoco";
import Designs from "./components/Design";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "./App.css";

function App() {

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <WhyMoco />
                <Designs />
                <Gallery />
                <Process />
                <Testimonials />
                <CTA />
            </main>

            <Footer />
        </>
    );
}

export default App;