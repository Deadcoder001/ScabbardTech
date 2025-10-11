import React from 'react';
import BlurText from './BlurText';

// --- Image Imports ---
import logoDesignImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import mascotDesignImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import packageDesignImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import trainingProgramImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import risingSunFestImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import axomBeejImg from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';


const works = [
  {
    id: 1,
    category: 'Logo Design',
    title: 'Modern Corporate Branding',
    image: logoDesignImg,
    featured: true,
  },
  {
    id: 2,
    category: 'Mascot Design',
    title: 'Character for Startup',
    image: mascotDesignImg,
    featured: true,
  },
  {
    id: 3,
    category: 'Social Media & Package Design',
    title: 'E-commerce Packaging',
    image: packageDesignImg,
    featured: true,
  },
  {
    id: 4,
    category: 'Strategic Campaigns',
    title: 'Digital Marketing Training',
    client: 'Directorate of Commerce and Industries, Meghalaya',
    stats: '30+ Participants, 36 Sessions',
    image: trainingProgramImg,
    featured: true,
  },
  {
    id: 5,
    category: 'Strategic Campaigns',
    title: 'Branding for Rising Sun Festival 2023',
    client: 'Directorate of Horticulture and Food Processing, Assam',
    stats: '10,000+ Footfall, 3 Days',
    image: risingSunFestImg,
    featured: false, // This won't show on the homepage
  },
  {
    id: 6,
    category: 'Strategic Campaigns',
    title: 'Innovative Branding for Axom Beej',
    client: 'Assam Seeds Corporation Limited',
    image: axomBeejImg,
    featured: false, // This won't show on the homepage
  },
];

const WorkCard = ({ work }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-sm bg-gray-100">
    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <p className="text-sm font-medium text-purple-300">{work.category}</p>
      <h3 className="text-xl font-bold text-white mt-1">{work.title}</h3>
      {work.client && <p className="text-xs text-gray-300 mt-2">{work.client}</p>}
      {work.stats && <p className="text-xs font-mono text-gray-200 mt-1">{work.stats}</p>}
    </div>
  </div>
);

const OurWork = () => {
  const featuredWork = works.filter(w => w.featured);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurText
            text="Discover Our Work"
            className="text-4xl md:text-5xl font-medium text-gray-900"
          />
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Top creations by the leading Digital Marketing agency in Assam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredWork.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/our-works" // This would link to your full gallery page
            className="inline-block bg-gray-800 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-900 transition-colors duration-300"
          >
            View All Our Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;