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

import './App.css';

function App() {
    const location = useLocation();
    const [quoteOpen, setQuoteOpen] = useState(false);
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
        { label: 'Career', href: '/career' },
    ];

    return (
        <div
            style={{
                fontFamily: "'Inter', 'Montserrat', 'Nunito', 'Helvetica Neue', Arial, sans-serif",
            }}
        >
            <CardNav logo="/scabbardtech.png" items={navItems} onQuoteClick={() => setQuoteOpen(true)} />
            
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
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