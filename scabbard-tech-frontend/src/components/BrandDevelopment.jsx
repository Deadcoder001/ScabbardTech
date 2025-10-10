import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from './BlurText';
// You can replace this placeholder with your actual image
import centerImage from '../assets/Scabbardtech-Portfolio-1-e1736163246171-792x1024.png'; 

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Logo Design",
    description: "Create a comprehensive business plan that encompasses vision, mission, goals, strategies, and financial projections.",
  },
  {
    title: "Graphic Design",
    description: "Develop marketing strategies to promote products or services. Implement sales tactics to reach.",
  },
  {
    title: "Brand development infographic",
    description: "Brand Identity. Identify market opportunities, analyze competitors, and understand customer needs.",
  },
  {
    title: "Product Packaging Design",
    description: "Develop products or services based on market research and customer feedback.",
  },
];

// A simplified card component
const ServiceCard = ({ title, description, align = 'left' }) => (
  <div className={`service-card text-${align}`}>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const BrandDevelopment = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.service-card');
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        autoAlpha: 0,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const leftServices = services.slice(0, 2);
  const rightServices = services.slice(2, 4);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <BlurText
            text="A 360° Approach to Branding"
            className="text-4xl md:text-5xl font-medium text-gray-900"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {leftServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title} 
                description={service.description}
                align="right"
              />
            ))}
          </div>

          {/* Center Column (Image) */}
          <div className="flex justify-center items-center order-first md:order-none">
            <img 
              src={centerImage} 
              alt="Brand Development" 
              className="w-full max-w-xs md:max-w-sm object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title} 
                description={service.description}
                align="left"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDevelopment;