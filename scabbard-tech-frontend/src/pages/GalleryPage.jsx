import React, { useState, useEffect } from 'react';
import StartProject from '../components/StartProject';
import Lightbox from '../components/Lightbox';
import StrategicCampaigns from '../components/StrategicCampaigns';
import { galleryImages } from '../gallery-data'; // Import local image data
import websitePreviewGif from '../assets/gallery/SSHg123.gif'; // Import the GIF
import { GoPlus, GoLinkExternal } from 'react-icons/go'; // Icon for the hover effect

// Background image for the hero section
const heroBg = 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2670&auto=format&fit=crop';
const ITEMS_PER_PAGE = 6;

// Data for the new websites section
const websitesData = [
  {
    name: 'Sahitya Sangam',
    description: 'A full ecommerce + online platform for buying and reading Assamese books.',
    url: 'https://sahityaasangamm.in',
    screenshot: websitePreviewGif // Use the imported GIF
  },
  // Add more website objects here as needed
];

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const tabCategories = ['All', ...new Set(galleryImages.map(image => image.category))];

  const filteredImages = activeTab === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeTab);

  // Reset to first page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(47, 17, 66, 0.7), rgba(21, 11, 32, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Discover our work
          </h1>
          <p className="mt-4 text-lg text-purple-100">
            Top creations by Leading Digital marketing agency in Assam
          </p>
          <p className="mt-2 text-md text-gray-300">
            Logo Design, Mascot Design, Social Media & Package Design
          </p>
        </div>
      </section>

      {/* Image Gallery Content */}
      <div className="text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        <div className="flex justify-center my-8">
          <div className="flex flex-wrap justify-center space-x-2 bg-gray-100 p-2 rounded-full">
            {tabCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${
                  activeTab === category
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {currentImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.category}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Corrected Hover Effect: Removed black background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-3">
                    <GoPlus className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentPage === page
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Websites Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Our Website Creations
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
                className="group block relative overflow-hidden rounded-lg shadow-xl bg-white no-underline"
              >
                <img src={site.screenshot} alt={site.name} className="w-full h-56 object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{site.name}</h3>
                  <p className="mt-2 text-gray-600 h-20">{site.description}</p>
                </div>
                {/* Corrected Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/60 rounded-full p-4 text-white flex items-center gap-2">
                    <GoLinkExternal className="text-2xl" />
                    <span className="font-semibold">Visit Site</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

                <StrategicCampaigns />    

      {/* Footer Animation Trigger */}
      <div className="faq-section">
        <StartProject />
      </div>
    </div>
  );
};

export default GalleryPage;