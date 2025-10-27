import React, { useState, useEffect } from 'react';
import { galleryImages } from '../gallery-data';
import { GoSync } from 'react-icons/go'; // Import a shuffle icon

const PREVIEW_SIZE = 6;

// Helper function to get a random subset of images
const getRandomImages = (sourceArray, size) => {
  const shuffled = [...sourceArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, size);
};

const GalleryPreview = () => {
  const [previewImages, setPreviewImages] = useState([]);

  // Set initial images on component mount
  useEffect(() => {
    setPreviewImages(galleryImages.slice(0, PREVIEW_SIZE));
  }, []);

  const handleShuffle = () => {
    setPreviewImages(getRandomImages(galleryImages, PREVIEW_SIZE));
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Our Recent Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse into our creative portfolio.
          </p>
        </div>

        {/* Masonry Image Gallery Preview */}
        <div className="masonry-grid-preview cursor-hover-target">
          {previewImages.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className="group relative overflow-hidden rounded-lg break-inside-avoid mb-4 shadow-md"
            >
              <img
                src={item.type === 'video' ? item.thumbnail : item.src}
                alt={item.category}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Hover UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold text-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={handleShuffle}
            className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all transform hover:scale-105 flex items-center gap-2"
            aria-label="Shuffle images"
          >
            <GoSync />
            Shuffle
          </button>
          <a
            href="/gallery"
            className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 inline-block"
          >
            View Full Gallery
          </a>
        </div>
      </div>

      {/* Scoped styles for the masonry grid */}
      <style jsx global>{`
        .masonry-grid-preview {
          column-count: 1;
          column-gap: 1rem;
        }
        @media (min-width: 640px) {
          .masonry-grid-preview {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .masonry-grid-preview {
            column-count: 3;
            column-gap: 1.5rem;
          }
        }
        .break-inside-avoid {
          break-inside: avoid;
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;