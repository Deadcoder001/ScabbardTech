import React from 'react';
import { Link } from 'react-router-dom';
import websitePreviewGif from '../assets/gallery/SSHg123.gif';

// --- Direct imports for this component's preview ---
import logoImage from '../assets/gallery/Scabbardtech-Portfolio-4-e1736231191248.png';
import mascotImage from '../assets/gallery/Scabbardtech-Portfolio-8-e1736232374904.png';
import packagingImage from '../assets/gallery/Scabbardtech-Portfolio-10-e1736232954573.png';

// --- Data for the preview ---
const workToShow = [
  { src: logoImage, category: 'Logo Design' },
  { src: mascotImage, category: 'Mascot Design' },
  { src: packagingImage, category: 'Packaging Design' },
];

// Website data for the preview
const featuredWebsite = {
  name: 'Sahitya Sangam',
  description: 'A full ecommerce + online platform for buying and reading Assamese books.',
  url: 'https://sahityaasangamm.in',
  screenshot: websitePreviewGif
};

const OurWork = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            A Glimpse of Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We take pride in the solutions we've delivered. Here's a peek.
          </p>
        </div>

        {/* Grid for showcasing work */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured Website - Spans 2 columns */}
          <div className="group relative overflow-hidden rounded-lg shadow-xl bg-white lg:col-span-2">
            <img src={featuredWebsite.screenshot} alt={featuredWebsite.name} className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white">{featuredWebsite.name}</h3>
                <p className="mt-1 text-sm text-gray-200">{featuredWebsite.description}</p>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={featuredWebsite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
              >
                Visit Site
              </a>
            </div>
          </div>

          {/* Gallery Images */}
          {workToShow.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <p className="text-white font-semibold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/gallery"
            className="inline-block bg-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            View All Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWork;