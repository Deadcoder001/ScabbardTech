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

const LogoLoopSection = () => (
  <div className="w-full py-12 bg-white flex items-center justify-center">
    <LogoLoop
      logos={logos}
      speed={120}
      direction="left"
      logoHeight={80} // Same height for all logos
      gap={48}
      fadeOut={false}
      scaleOnHover={true}
      ariaLabel="Our partners"
      className="w-full"
    />
  </div>
);

export default LogoLoopSection;