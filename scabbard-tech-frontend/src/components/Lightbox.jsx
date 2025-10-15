import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoX } from 'react-icons/go';

const Lightbox = ({ image, onClose }) => {
  const lightboxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    if (image) {
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
  }, [image, onClose]);

  const handleClose = () => {
    gsap.to(lightboxRef.current, { autoAlpha: 0, duration: 0.3, onComplete: onClose });
  };

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
      {image && (
        <div
          ref={containerRef}
          className="relative max-w-[90vw] max-h-[90vh] bg-white p-2 rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.category}
            className="max-w-full max-h-full object-contain rounded"
          />
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