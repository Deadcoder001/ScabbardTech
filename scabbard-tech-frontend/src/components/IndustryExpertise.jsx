import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const industries = [
  "FOR HEALTH CARE INDUSTRIES",
  "FOR HOSPITALITY BUSINESS",
  "FOR FMCG (FAST MOVING CONSUMER GOODS)",
  "FOR SUPER MARKETS",
  "FOR RETAIL BUSINESSES",
  "FOR CONSTRUCTION COMPANIES",
  "FOR REAL ESTATE BUSINESS",
  "FOR EDUCATIONAL INSTITUTES",
  "FOR TOUR AND TRAVEL AGENCIES",
  "FOR ECOMMERCE",
  "FOR STARTUPS",
  "FOR BARS & RESTAURANT",
  "FOR LOCAL BUSINESS BASED IN ASSAM",
];

const IndustryExpertise = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  
  useEffect(() => {
    // GSAP animation logic remains the same as your active file
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
  
  // SVG data URI for a subtle dot pattern
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
          className="industry-container flex py-10 space-x-6"
          style={{ width: 'fit-content', paddingLeft: '10vw', paddingRight: '10vw' }}
        >
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="industry-item flex-shrink-0 group"
              style={{ width: '300px' }}
            >
              <div
                className="py-10 px-6 h-[180px] flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm group-hover:border-gray-300 group-hover:shadow-md transition-all duration-300"
                style={{ backgroundImage: abstractPattern }}
              >
                <h3 className="text-lg md:text-xl font-normal text-gray-600 group-hover:text-gray-900 text-center transition-colors duration-300">
                  {industry}
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