import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Generic SVG Icon Components for demonstration
const IconHealth = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
</svg>;
const IconBuilding = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>;
const IconCart = ({ className }) => <svg className={className}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>;
const IconCompany = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
</svg>;

const IconEducation = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
</svg>;
const IconTravel = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;
const IconStartup = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25a14.98 14.98 0 00-5.84 7.38m5.84 2.58v-4.8m0 4.8a6 6 0 01-3.36 5.84m3.36-5.84a6 6 0 012.48-5.84" /></svg>;
const IconRestaurant = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 8.25v12.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V8.25M15 3.75a3 3 0 00-6 0M21 8.25H3" /></svg>;
const IconPin = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;

const industries = [
  { name: "FOR HEALTH CARE INDUSTRIES", icon: <IconHealth className="w-10 h-10" /> },
  { name: "FOR HOSPITALITY BUSINESS", icon: <IconBuilding className="w-10 h-10" /> },
  { name: "FOR SUPER MARKETS", icon: <IconCart className="w-10 h-10" /> },
  { name: "FOR RETAIL BUSINESSES", icon: <IconCart className="w-10 h-10" /> },
  { name: "FOR CONSTRUCTION COMPANIES", icon: <IconCompany className="w-10 h-10" /> },
  { name: "FOR REAL ESTATE BUSINESS", icon: <IconBuilding className="w-10 h-10" /> },
  { name: "FOR EDUCATIONAL INSTITUTES", icon: <IconEducation className="w-10 h-10" /> },
  { name: "FOR TOUR AND TRAVEL AGENCIES", icon: <IconTravel className="w-10 h-10" /> },
  { name: "FOR ECOMMERCE", icon: <IconCart className="w-10 h-10" /> },
  { name: "FOR BARS & RESTAURANT", icon: <IconRestaurant className="w-10 h-10" /> },
  { name: "FOR LOCAL BUSINESS BASED IN ASSAM", icon: <IconPin className="w-10 h-10" /> },
];

const IndustryExpertise = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    // GSAP animation logic remains the same
    if (!sectionRef.current || !containerRef.current) return;
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === sectionRef.current) trigger.kill();
    });
    gsap.to(containerRef.current, {
      x: () => -(containerRef.current.scrollWidth - window.innerWidth + 32),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      }
    });
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" } });
    gsap.fromTo(lineRef.current, { width: 0 }, { width: "8rem", duration: 1, ease: "power2.inOut", delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" } });
    const cards = gsap.utils.toArray('.industry-item');
    cards.forEach((card, index) => {
      gsap.fromTo(card, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.05 * index, scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" } });
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) trigger.kill();
      });
    };
  }, []);
  
  const abstractPattern = `url("data:image/svg+xml,%3csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='10' cy='10' r='1' fill='%23f3f4f6'/%3e%3c/svg%3e")`;

  return (
    <section 
      ref={sectionRef} 
      className="h-screen bg-gray-50 text-gray-800 overflow-hidden"
    >
      <div className="pt-24 px-6 h-full">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-5xl font-medium mb-6 text-center leading-snug text-gray-900"
          >
            We empower every business with our top-notch digital marketing services
          </h2>
          <div 
            ref={lineRef}
            className="h-[2px] bg-gray-200 mx-auto mb-14 w-24"
          />
        </div>
        
        <div 
          ref={containerRef}
          className="industry-container flex py-10 space-x-8"
          style={{ width: 'fit-content', paddingLeft: '10vw', paddingRight: '10vw' }}
        >
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="industry-item flex-shrink-0 group"
              style={{ width: '340px' }}
            >
              <div
                className="py-12 px-8 h-[220px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-gray-300 group-hover:shadow-md transition-all duration-300"
                style={{ backgroundImage: abstractPattern }}
              >
                <div className="text-gray-400 group-hover:text-purple-600 transition-colors duration-300 mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-lg md:text-xl font-normal text-gray-600 group-hover:text-gray-900 text-center transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;