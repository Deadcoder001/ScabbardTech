import React from 'react';
import BlurText from './BlurText';
import timelineImage from '../assets/Scabbardtech-Portfolio-3-e1736164409885-1536x453.png';

const marketingSteps = [
	{
		step: '01',
		title: 'Social Media Marketing',
		description:
			'In this initial phase, businesses create a comprehensive plan outlining their goals, strategies, and financial projections.',
		position: 'bottom',
	},
	{
		step: '02',
		title: 'Content Marketing',
		description:
			'Businesses promote their products/services through marketing campaigns, advertising, and sales efforts.',
		position: 'top',
	},
	{
		step: '03',
		title: 'Meta & Google Ads',
		description:
			'Market research involves gathering data and insights about target markets, customer preferences.',
		position: 'bottom',
	},
	{
		step: '04',
		title: 'Influencer Engagement',
		description:
			'This phase involves the day-to-day operations of the business, including managing resources, and personnel.',
		position: 'top',
	},
	{
		step: '05',
		title: 'Creatives Outdoors & Printables',
		description:
			'During this stage, businesses design, develop, and refine their products or services.',
		position: 'bottom',
	},
	{
		step: '06',
		title: 'Hoarding and LEDs',
		description:
			'After the business is up and running, it’s important to evaluate performance, identify areas for improvement.',
		position: 'top',
	},
	{
		step: '07',
		title: 'IEC Activities',
		description:
			'In this initial phase, businesses create a comprehensive plan outlining their goals, strategies, and financial projections.',
		position: 'bottom',
	},
];

const MarketingAdvertising = () => {
	return (
		<section className="py-24 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 md:mb-20">
					<BlurText
						text="Marketing & Advertising"
						className="text-4xl md:text-5xl font-medium text-gray-900"
					/>
				</div>

				{/* Desktop Timeline - Hidden on mobile */}
				<div className="hidden md:block relative mt-16 mb-16">
					{/* Timeline Image */}
					<div className="flex justify-center items-center">
						<img
							src={timelineImage}
							alt="Marketing timeline"
							className="w-full h-auto"
						/>
					</div>

					{/* Steps Content */}
					<div className="absolute -top-16 -bottom-16 left-0 right-0 grid grid-cols-7 gap-x-2">
						{marketingSteps.map((item, index) => {
							let alignmentClass = '';
							if (index === 0) alignmentClass = 'pl-7';
							if (index === marketingSteps.length - 1) alignmentClass = 'pr-7';

							return (
								<div
									key={item.step}
									className={`flex flex-col ${
										item.position === 'top' ? 'justify-start' : 'justify-end'
									} text-center px-1 ${alignmentClass}`}
								>
									<h3 className="text-md font-bold text-gray-800 mb-2">
										{item.title}
									</h3>
									<p className="text-xs text-gray-600">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Mobile List - Hidden on desktop */}
				<div className="md:hidden space-y-8">
					{marketingSteps.map((item) => (
						<div
							key={item.step}
							className="bg-gray-50 p-6 rounded-lg shadow-sm"
						>
							<span className="text-sm font-bold text-purple-600">
								{`Step ${item.step}`}
							</span>
							<h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
								{item.title}
							</h3>
							<p className="text-base text-gray-600">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default MarketingAdvertising;