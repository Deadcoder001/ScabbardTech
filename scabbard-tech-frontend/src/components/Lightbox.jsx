import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoX } from 'react-icons/go';

const Lightbox = ({ item, onClose }) => {
  const lightboxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (item) {
      document.body.style.overflow = 'hidden';
      gsap.to(lightboxRef.current, { autoAlpha: 1, duration: 0.3 });
      gsap.fromTo(containerRef.current, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose]);

  const handleClose = () => {
    gsap.to(lightboxRef.current, { autoAlpha: 0, duration: 0.3, onComplete: onClose });
  };

  if (!item) return null;

  return (
    <div
      ref={lightboxRef}
      className="fixed inset-0 flex items-center justify-center z-[100] invisible opacity-0"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80"
        onClick={handleClose}
      />

      {/* Image Container */}
      {item && (
        <div
          ref={containerRef}
          className="relative max-w-[90vw] max-h-[90vh] bg-white p-2 rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              controls
              autoPlay
              loop
              className="w-full h-full object-contain rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={item.src}
              alt={item.category || 'Gallery image'}
              className="max-w-full max-h-full object-contain rounded"
            />
          )}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-black/75 transition-all"
            aria-label="Close image view"
          >
            <GoX size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Lightbox;