import React from 'react';

const services = [
	{
		title: 'Brand Development',
		description:
			'At Scabbard Tech, we specialize in brand development that helps your business stand out in a crowded market.',
	},
	{
		title: 'Marketing & Advertising',
		description:
			'Our marketing and advertising services are designed to drive measurable results and boost your brand’s visibility.',
	},
	{
		title: 'Event Management & Promotion',
		description:
			'We offer comprehensive event management services to help you create memorable, impactful experiences that elevate your brand.',
	},
	{
		title: 'Digital Presence & Optimization',
		description:
			'We enhance your digital presence by optimizing every touchpoint your audience interacts with.',
	},
	{
		title: 'Media Production',
		description:
			'Create high-quality videos, animations, and graphics to enhance your marketing efforts and captivate your audience.',
	},
	{
		title: 'Website Development',
		description:
			'Build a sleek, user-friendly website that represents your brand and converts visitors into customers.',
	},
];

const ServicesSection = () => {
	return (
		<section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-medium text-gray-900">
						Our Core Services
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						Driving growth through innovative digital solutions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="relative bg-white border border-gray-200 rounded-2xl p-8 flex flex-col group hover:border-purple-500 transition-all duration-300 overflow-hidden"
						>
							{/* Background Reveal Element */}
							<div className="absolute inset-0 bg-purple-600 transform origin-bottom scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100 z-0"></div>

							{/* Content Container */}
							<div className="relative z-10 flex flex-col flex-grow">
								<h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
									{service.title}
								</h3>
								<p className="text-gray-600 flex-grow group-hover:text-purple-100 transition-colors duration-300">
									{service.description}
								</p>
								<div className="mt-8">
									<a
										href="#"
										className="text-sm font-semibold text-purple-600 group-hover:text-white transition-colors duration-300"
									>
										KNOW MORE &rarr;
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;