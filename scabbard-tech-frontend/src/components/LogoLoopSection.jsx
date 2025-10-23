import { useState, useEffect } from 'react';
import LogoLoop from './LogoLoop';

// List all logo filenames from the /public/logos folder
const logos = [
  { src: '/logos/arna-residency-logo.png.webp', alt: 'Arna Residency' },

  { src: '/logos/assam_seed_corporation_logo_png-removebg-preview.png', alt: 'Assam Seed Corporation' },

  { src: '/logos/Bhaggya-traders-logo.png', alt: 'Bhaggya Traders' },

  { src: '/logos/competition-care-logo.png', alt: 'Competition Care' },
  { src: '/logos/cookieman-logo.webp', alt: 'Cookieman' },
  { src: '/logos/D-MOJO-ART_-LOGO.png', alt: 'D-MOJO ART' },
  { src: '/logos/dynaroof-logo.png', alt: 'Dynaroof' },
  { src: '/logos/Election-Commission_logo.png', alt: 'Election Commission' },

  { src: '/logos/hera-logo.jpeg', alt: 'Hera' },
  { src: '/logos/kidzee-logo.jpeg', alt: 'Kidzee' },

  { src: '/logos/Lohia-Group-logo.png', alt: 'Lohia Group' },
  { src: '/logos/Naamya-manor-logo-e1735798164287.png', alt: 'Naamya Manor' },
  { src: '/logos/noureea-logo.jpeg', alt: 'Noureea' },
  { src: '/logos/olio-logo-.jpeg', alt: 'Olio' },
  { src: '/logos/ratna_kuber-logo.jpg', alt: 'Ratna Kuber' },
];

// Custom hook to get responsive props based on screen width
const useResponsiveProps = () => {
  const [props, setProps] = useState({
    speed: 120,
    logoHeight: 80,
    gap: 48,
    scaleOnHover: true,
  });

  useEffect(() => {
    const checkSize = () => {
      const isMobile = window.innerWidth < 768;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setProps({
        speed: isMobile ? 60 : 120,
        logoHeight: isMobile ? 50 : 80,
        gap: isMobile ? 32 : 48,
        scaleOnHover: !isTouch && !isMobile, // Disable on touch devices and mobile
      });
    };

    checkSize(); // Initial check
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return props;
};

const LogoLoopSection = () => {
  const responsiveProps = useResponsiveProps();

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-12">
          Trusted by Leading Brands
        </h2>
        <LogoLoop
          logos={logos}
          direction="left"
          fadeOut={false}
          ariaLabel="Our partners"
          className="w-full"
          {...responsiveProps} // Spread the responsive props
        />
      </div>
    </section>
  );
};

export default LogoLoopSection;