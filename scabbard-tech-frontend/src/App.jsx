import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CardNav from './components/CardNav.jsx';
import GetAQuote from './components/GetAQuote.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import CustomCursor from './components/CustomCursor.jsx'; // Import the cursor

import './App.css';

const navItems = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Our Story", href: "/about", ariaLabel: "Learn about our story" },
            { label: "Careers", href: "/career", ariaLabel: "Explore career opportunities" }
        ]
    },
    {
        label: "What We Do",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Services", href: "/services", ariaLabel: "View our services" },
            { label: "Gallery", href: "/gallery", ariaLabel: "See our work" }
        ]
    },
    {
        label: "Get In Touch",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Contact Us", href: "/contact", ariaLabel: "Get in touch with us" },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/scabbard-consulting/", ariaLabel: "Find us on LinkedIn" }
        ]
    }
];

function App() {
    const location = useLocation();
    const [quoteOpen, setQuoteOpen] = useState(false);

    // Set nav colors to be transparent on all pages
    const navBaseColor = 'rgba(255, 255, 255, 0.1)';
    const navMenuColor = '#ffffff';
    const navButtonBgColor = 'rgba(255, 255, 255, 0.2)';
    const navButtonTextColor = '#ffffff';

    return (
        <div
            className="hide-cursor" // Hide the default cursor globally
            style={{
                fontFamily: "'Inter', 'Montserrat', 'Nunito', 'Helvetica Neue', Arial, sans-serif",
            }}
        >
            <CustomCursor /> {/* Add the custom cursor here */}
            <CardNav 
                logo="/scabbardtech.png" 
                items={navItems}
                onQuoteClick={() => setQuoteOpen(true)}
                baseColor={navBaseColor}
                menuColor={navMenuColor}
                buttonBgColor={navButtonBgColor}
                buttonTextColor={navButtonTextColor}
            />
            
            <main>
                <Routes>
                    <Route path="/" element={<HomePage setQuoteOpen={setQuoteOpen} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/career" element={<CareersPage />} />
                    {/* Add other routes here as you create them */}
                </Routes>
            </main>

            <Footer />
            <ScrollToTopButton />
            <GetAQuote open={quoteOpen} setOpen={setQuoteOpen} />
        </div>
    );
}

export default App;