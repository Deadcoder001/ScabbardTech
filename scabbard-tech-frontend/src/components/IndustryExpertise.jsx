import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- Image Imports ---
// TODO: Please verify these file paths match your images in the src/assets/ui/ folder
import healthBg from '../assets/ui/health-care.jpg';
import retailBg from '../assets/ui/retail-ecommerce.jpg';
import realEstateBg from '../assets/ui/real-estate.jpg';
import educationBg from '../assets/ui/education.jpg';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Generic SVG Icon Components (Your existing icon components go here)
const IconHealth = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/></svg>;
const IconBuilding = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/></svg>;
const IconCart = ({ className }) => <svg className={className}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>;
const IconCompany = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/></svg>;
const IconEducation = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/></svg>;
const IconTravel = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;
const IconStartup = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58v-4.8m0 4.8a6 6 0 01-3.36 5.84m3.36-5.84a6 6 0 012.48-5.84" /></svg>;
const IconRestaurant = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 8.25v12.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V8.25M15 3.75a3 3 0 00-6 0M21 8.25H3" /></svg>;
const IconPin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;


// UPDATED: Added image property to each industry
const industries = [
  { name: "FOR HEALTH CARE INDUSTRIES", icon: <IconHealth className="w-14 h-14" />, description: "Tailored digital strategies to connect with patients and build trust in the healthcare sector.", image: healthBg },
  { name: "FOR RETAIL & ECOMMERCE", icon: <IconCart className="w-14 h-14" />, description: "Creating omnichannel experiences that convert browsers into loyal customers, both online and in-store.", image: retailBg },
  { name: "FOR REAL ESTATE BUSINESS", icon: <IconBuilding className="w-14 h-14" />, description: "Utilizing virtual tours and digital campaigns to close deals faster in a competitive market.", image: realEstateBg },
  { name: "FOR EDUCATIONAL INSTITUTES", icon: <IconEducation className="w-14 h-14" />, description: "Engaging students and parents with compelling content and streamlined admissions processes.", image: educationBg },
  
];

const IndustryExpertise = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !containerRef.current) return;

      const scrollTween = gsap.to(containerRef.current, {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate heading and line
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
      gsap.fromTo(lineRef.current, { width: 0 }, { width: "8rem", duration: 1, ease: "power2.inOut", delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" } });
      
      const cards = gsap.utils.toArray('.industry-item');
      const indicators = gsap.utils.toArray('.indicator-line');

      cards.forEach((card, index) => {
        const indicator = indicators[index];
        ScrollTrigger.create({
          trigger: card,
          containerAnimation: scrollTween,
          start: "left center",
          end: "right center",
          toggleClass: { targets: [card, indicator], className: "is-active" },
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="h-screen bg-gray-50 text-gray-800 overflow-hidden"
    >
      <div className="pt-24 px-6 h-full flex flex-col">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-5xl font-medium mb-6 leading-snug text-gray-900"
          >
            We empower every business with our top-notch digital marketing services
          </h2>
          <div 
            ref={lineRef}
            className="h-[2px] bg-gray-200 mx-auto mb-14 w-24"
          />
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div 
          ref={containerRef}
          className="industry-container flex py-10 items-center space-x-10" // Added items-center and increased spacing
          style={{ 
            width: 'fit-content',
            // UPDATED: The padding calculation centers a 450px card
            paddingLeft: 'calc(50vw - 225px)', 
            paddingRight: 'calc(50vw - 225px)' 
          }}
        >
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="industry-item flex-shrink-0 group"
              style={{ width: '450px' }} // UPDATED: Increased card width
            >
              <div
                className="card-content py-12 px-8 flex flex-col items-center justify-center bg-white border border-gray-700 rounded-2xl shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden"
                style={{ 
                  backgroundImage: `linear-gradient(to top, rgba(21, 11, 32, 0.8), rgba(47, 17, 66, 0.6)), url(${industry.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '320px' 
                }}
              >
                <div className="icon-wrapper text-gray-300 transition-colors duration-400 mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-normal text-white text-center transition-colors duration-300">
                  {industry.name}
                </h3>
                {/* ADDED: Description paragraph */}
                <p className="description text-center text-gray-200 max-h-0 opacity-0 transition-all duration-500 ease-in-out overflow-hidden">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center space-x-3 mt-auto pb-12">
          {industries.map((_, index) => (
            <div key={index} className="indicator-line h-1 w-10 bg-gray-300 rounded-full transition-all duration-400"></div>
          ))}
        </div>
      </div>
      
      {/* UPDATED: Global styles for the active/expanded state */}
      <style jsx global>{`
        .industry-item.is-active .card-content {
          transform: scale(1.08);
          border-color: #a78bfa; /* A softer purple */
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .industry-item.is-active .icon-wrapper {
          color: #ffffff;
        }
        /* Style to reveal the description */
        .industry-item.is-active .description {
          max-height: 200px; /* Allow space for the text to appear */
          opacity: 1;
          margin-top: 1.5rem; /* Add some space when it appears */
        }
        .indicator-line.is-active {
          background-color: #8b5cf6; /* purple-600 */
          width: 4rem; /* 64px */
        }
      `}</style>
    </section>
  );
};

export default IndustryExpertise;