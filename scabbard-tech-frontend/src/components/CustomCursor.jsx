import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Simple heart SVG to display on hover
const HeartIcon = () => (
  <svg className="w-8 h-8 text-red-500 cursor-icon-heart" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursor-hover-target')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('.cursor-hover-target')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      gsap.to(cursor, {
        scale: isHovering ? 1 : 0.5,
        width: isHovering ? '80px' : '20px',
        height: isHovering ? '80px' : '20px',
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(139, 92, 246, 0.7)',
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  }, [isHovering]);

  return (
    <div ref={cursorRef} className="custom-cursor">
      {isHovering && <HeartIcon />}
    </div>
  );
};

export default CustomCursor;