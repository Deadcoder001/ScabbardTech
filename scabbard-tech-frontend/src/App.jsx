import CardNav from './components/CardNav.jsx';
import Ballpit from './components/hero.jsx'; // Ballpit is the default export
import BlurText from './components/BlurText.jsx';
import LogoLoopSection from './components/LogoLoopSection';
import WhyChooseUs from './components/WhyChooseUs';
import IndustryExpertise from './components/IndustryExpertise';
import ServicesSection from './components/ServicesSection';
import WhyScabbardTech from './components/WhyScabbardTech';
import CreativeSolutions from './components/CreativeSolutions.jsx';
import OurProcess from './components/OurProcess.jsx';
import OurWork from './components/OurWork.jsx';
import BrandDevelopment from './components/BrandDevelopment.jsx';
import MarketingAdvertising from './components/MarketingAdvertising.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import StartProject from './components/StartProject.jsx';

import './App.css';

// Add this to your global CSS (App.css or index.css):
// body { font-family: 'Inter', 'Montserrat', 'Nunito', 'Helvetica Neue', Arial, sans-serif; }

const navItems = [
	{
		label: 'Products',
		bgColor: 'rgba(255, 255, 255, 0.1)',
		textColor: '#ffffff',
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'Pricing', href: '#' },
		],
	},
	{
		label: 'Solutions',
		bgColor: 'rgba(255, 255, 255, 0.1)',
		textColor: '#ffffff',
		links: [
			{ label: 'For Startups', href: '#' },
			{ label: 'For Enterprise', href: '#' },
			{ label: 'Case Studies', href: '#' },
		],
	},
	{
		label: 'Resources',
		bgColor: 'rgba(255, 255, 255, 0.1)',
		textColor: '#ffffff',
		links: [
			{ label: 'Blog', href: '#' },
			{ label: 'Documentation', href: '#' },
			{ label: 'Support', href: '#' },
		],
	},
];

function App() {
	return (
		<div
			style={{
				fontFamily: "'Inter', 'Montserrat', 'Nunito', 'Helvetica Neue', Arial, sans-serif",
			}}
		>
			{/* Hero Section: Takes up the full screen height */}
			<div className="h-screen relative" style={{ background: '#000' }}>
				<CardNav logo="/scabbardtech.png" items={navItems} />
				<Ballpit
					className="absolute inset-0 w-full h-full"
					followCursor={true}
					colors={['#FF9FFC', '#5227FF', '#B19EEF', '#00FFD0', '#FFD700']} // <-- Change/add colors here
				/>
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
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
					<div className="flex gap-4 mt-8 pointer-events-auto">
						<button className="px-6 py-2 rounded-full border border-white bg-white text-black font-semibold backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition">
							7002390792
						</button>
						<button className="px-6 py-2 rounded-full border border-white bg-transparent text-white font-semibold backdrop-blur-md hover:bg-purple-500 hover:bg-opacity-10 transition">
							Get Free SEO Audit
						</button>
						<button className="px-6 py-2 rounded-full border border-white bg-white text-black font-semibold backdrop-blur-md hover:bg-white hover:bg-opacity-10 transition">
							ABOUT US
						</button>
					</div>
				</div>
			</div>
			{/* Logo Loop Section */}
			<LogoLoopSection />

			{/* Why Choose Us Section */}
			<WhyChooseUs />


			{/* Industry Expertise Section */}
			<IndustryExpertise />

			{/* Services Section */}
			<ServicesSection />

			{/* Why Scabbard Tech Section */}
			<WhyScabbardTech />

			{/* Creative Solutions Section */}
			<CreativeSolutions />

			{/* Our Process Section */}
			<OurProcess />

			{/* Start Project Section */}
			<StartProject />

			{/* Brand Development Section */}
			<BrandDevelopment />

			{/* Marketing & Advertising Section */}
			<MarketingAdvertising />

			{/* Our Work Section */}
            <OurWork />

			{/* Scroll to Top Button */}
			<ScrollToTopButton />

		</div>
	);
}

export default App;