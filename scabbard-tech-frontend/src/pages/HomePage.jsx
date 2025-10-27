import { Link } from 'react-router-dom';
import Ballpit from '../components/hero.jsx';
import BlurText from '../components/BlurText.jsx';
import LogoLoopSection from '../components/LogoLoopSection';
import WhyChooseUs from '../components/WhyChooseUs';
import IndustryExpertise from '../components/IndustryExpertise';

import ServicesSection from '../components/ServicesSection';
import WhyScabbardTech from '../components/WhyScabbardTech';
import CreativeSolutions from '../components/CreativeSolutions.jsx';
import OurProcess from '../components/OurProcess.jsx';
import Testimonials from '../components/Testimonials.jsx';
import BrandDevelopment from '../components/BrandDevelopment.jsx';
import MarketingAdvertising from '../components/MarketingAdvertising.jsx';
import FAQ from '../components/FAQ.jsx';
import StartProject from '../components/StartProject.jsx';
import GalleryPreview from '../components/GalleryPreview'; // Added import
import '../App.css';

function HomePage({ setQuoteOpen }) {
    return (
        <div>
            {/* Hero Section: Takes up the full screen height */}
            <div className="h-screen relative" style={{ background: '#000' }}>
                <Ballpit
                    className="absolute inset-0 w-full h-full"
                    followCursor={true}
                    colors={['#FF9FFC', '#5227FF', '#B19EEF', '#00FFD0', '#FFD700']}
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                    <BlurText
                        text="WELCOME TO"
                        className="text-4xl md:text-6xl font-semibold uppercase tracking-wide mb-2 text-white"
                        delay={100}
                        animateBy="words"
                    />
                    <BlurText
                        text="Scabbard tech #1 Digital Marketing Agency in Guwahati, Assam"
                        className="text-2xl md:text-3xl font-bold mb-2 text-white"
                        delay={150}
                        animateBy="words"
                    />
                    <BlurText
                        text="Your trusted partner for innovative digital marketing solutions"
                        className="text-xs md:text-base font-normal mt-2 text-white opacity-80"
                        delay={50}
                        animateBy="words"
                    />
                    <div className="flex flex-wrap justify-center gap-4 mt-8 pointer-events-auto">
                        <a
                            href="tel:+917002390792"
                            className="px-6 py-2 rounded-full border border-white bg-white text-black font-semibold backdrop-blur-md hover:bg-opacity-80 transition cursor-hover-target"
                        >
                            Contact Us
                        </a>
                        <button
                            onClick={() => setQuoteOpen(true)}
                            className="px-6 py-2 rounded-full border border-white bg-transparent text-white font-semibold backdrop-blur-md hover:bg-purple-500 hover:border-purple-500 transition cursor-hover-target"
                        >
                            Get Free SEO Audit
                        </button>
                        <Link
                            to="/about"
                            className="px-6 py-2 rounded-full border border-white bg-white text-black font-semibold backdrop-blur-md hover:bg-opacity-80 transition cursor-hover-target"
                        >
                            ABOUT US
                        </Link>
                    </div>
                </div>
            </div>
            {/* Sections */}

            <WhyChooseUs />
            <IndustryExpertise />
            <ServicesSection />
            <LogoLoopSection />
            <WhyScabbardTech />


            {/* <CreativeSolutions /> */}

            <OurProcess />

            <StartProject />
            <GalleryPreview />
            {/* <BrandDevelopment /> */}
            {/* <MarketingAdvertising /> */}
            <Testimonials />
            <FAQ />
            
        </div>
    );
}

export default HomePage;