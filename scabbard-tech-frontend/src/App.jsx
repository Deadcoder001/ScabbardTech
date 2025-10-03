import CardNav from './components/CardNav.jsx';
import GradientBlinds from './components/hero.jsx';
import BlurText from './components/BlurText.jsx';
import ServicesStack from './components/ServicesStack.jsx';
import './App.css';

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
        <>
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    fontFamily: "'Inter', 'Montserrat', 'Nunito', 'Helvetica Neue', Arial, sans-serif",
                }}
            >
                <CardNav logo="/scabbardtech.png" items={navItems} />
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
                </div>
                <GradientBlinds
                    gradientColors={['#511aa3ff', '#420d91ff', '#B19EEF']}
                    className="w-full h-full"
                />
            </div>
            <div className="relative z-30 mt-[100vh]">
                <ServicesStack />
            </div>
        </>
    );
}

export default App;