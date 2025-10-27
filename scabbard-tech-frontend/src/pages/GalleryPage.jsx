import React, { useState, useEffect } from 'react';
import StartProject from '../components/StartProject';
import StrategicCampaigns from '../components/StrategicCampaigns';
import { galleryImages } from '../gallery-data';
import websitePreview1Gif from '../assets/gallery/SSHg123.gif';
import websitePreview2Gif from '../assets/gallery/1761386584407579.MP4';
import websitePreview3Gif from '../assets/gallery/1761386655482576.MP4';
import websitePreview4Gif from '../assets/gallery/1761386623265819.MP4';
import websitePreview5Gif from '../assets/gallery/1761386680784648.MP4';
import websitePreview6Gif from '../assets/gallery/1761388225504267.MP4';
import { GoLinkExternal } from 'react-icons/go';
import BlurText from '../components/BlurText';
import heroBg from '../assets/gallery/Scabbardtech-Portfolio-23.png';
import CustomCursor from '../components/CustomCursor';
import GetAQuote from '../components/GetAQuote'; // Import the modal

const ITEMS_PER_PAGE = 9;

// Data for the new websites section
const websitesData = [
  {
    name: 'Sahitya Sangam',
    description: 'An e-commerce and digital library platform primarily for Assamese literature.',
    url: 'https://sahityaasangamm.in',
    screenshot: websitePreview1Gif // Use the imported GIF
  },
  {
    name: 'Tea Country',
    description: 'A tourism and travel company website.',
    url: 'https://teacountry.in',
    screenshot: websitePreview2Gif // Use the imported GIF
  },
    {
    name: 'Vastrakala',
    description: 'An online store',
    url: 'https://vastrakalabyleena.com',
    screenshot: websitePreview3Gif // Use the imported GIF
  },
  {
    name: 'Assam Career Hub',
    description: 'An educational and training institute website',
    url: 'https://assamcareerhub.com/',
    screenshot: websitePreview4Gif // Use the imported GIF
  },
    {
    name: 'Creatorhub',
    description: 'A business website for an influencer marketing agency.',
    url: 'https://creatorhub.in/',
    screenshot: websitePreview5Gif // Use the imported GIF
  },
  {
    name: 'MeghaRise',
    description: 'An e-commerce website.',
    url: 'https://meghariseproducts.com',
    screenshot: websitePreview6Gif // Use the imported GIF
  }
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [isHovering, setIsHovering] = useState(false);
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false); // State for the modal

  const tabCategories = ['All', ...new Set(galleryImages.map(image => image.category))];

  const filteredImages = activeTab === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeTab);

  // Reset visible count when tab changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeTab]);

  const currentImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-white text-gray-800 hide-cursor">
      <CustomCursor isHovering={isHovering} />
      <GetAQuote open={isQuoteModalOpen} setOpen={setQuoteModalOpen} /> {/* Render the modal */}

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(47, 17, 66, 0.7), rgba(21, 11, 32, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <BlurText
            text="Our Work"
            className="text-4xl md:text-6xl font-medium text-white mb-4"
          />
          <p className="text-lg md:text-xl text-purple-100">
            A showcase of our creative solutions and successful projects.
          </p>
        </div>
      </section>

      {/* Modern Tabs Navigation */}
      <div className="flex justify-center my-16 px-4">
        <div className="flex flex-wrap justify-center space-x-6 border-b border-gray-200">
          {tabCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-2 py-3 text-sm md:text-base font-medium transition-colors duration-300 relative ${
                activeTab === category
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              {category}
              {activeTab === category && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="masonry-grid">
          {currentImages.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className="group relative overflow-hidden rounded-lg break-inside-avoid mb-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setQuoteModalOpen(true)} // Open modal on click
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={item.category}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* New Hover UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
      
      {/* Websites Section */}
      <section className="bg-gray-50 py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
              Website Creations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Functional and beautiful websites tailored for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websitesData.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-lg shadow-lg bg-white no-underline border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img src={site.screenshot} alt={site.name} className="w-full h-56 object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{site.name}</h3>
                  <p className="mt-2 text-gray-600">{site.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                  <GoLinkExternal className="text-xl" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <StrategicCampaigns />    

      {/* Lightbox has been removed */}

      <StartProject />

      <style jsx global>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1rem;
        }
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
            column-gap: 2rem;
          }
        }
        .break-inside-avoid {
          break-inside: avoid;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;