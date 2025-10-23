import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from './BlurText';

// Import images for the process steps
import imgCoordination from '../assets/processes/Untitled-design-e1735978523310.jpg';
import imgConcept from '../assets/processes/Untitled-design-1-e1735978884688.jpg';
import imgControl from '../assets/processes/Untitled-design-2-e1735979194202.jpg';
import imgCulmination from '../assets/processes/Untitled-design-3-e1735979469932.jpg';
import imgCloseOut from '../assets/processes/Untitled-design-4-e1735979620260.jpg';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Co-ordination",
    description: "Seamless collaboration with clients ensures alignment and project success.",
    icon: <img src={imgCoordination} alt="Co-ordination" className="w-full h-full object-cover" />
  },
  {
    title: "Concept",
    description: "Innovative, tailored solutions aligned with your business goals.",
    icon: <img src={imgConcept} alt="Concept" className="w-full h-full object-cover" />
  },
  {
    title: "Control",
    description: "Rigorous project management keeps projects on time, within scope, and on budget.",
    icon: <img src={imgControl} alt="Control" className="w-full h-full object-cover" />
  },
  {
    title: "Culmination",
    description: "Transforming ideas into reality with flawless execution.",
    icon: <img src={imgCulmination} alt="Culmination" className="w-full h-full object-cover" />
  },
  {
    title: "Close-out",
    description: "Post-project analysis to ensure continued value and improvement.",
    icon: <img src={imgCloseOut} alt="Close-out" className="w-full h-full object-cover" />
  }
];

const OurProcess = () => {
  const sectionRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bar animation
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 50%",
          scrub: 1,
        }
      });

      // Step animations have been removed.
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-purple-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <BlurText
            text="OUR PROCESS: THE 5Cs"
            delay={100}
            className="text-4xl md:text-5xl font-medium text-white"
          />
        </div>

        <div className="relative">
          {/* Progress Line - hidden on mobile */}
          <div className="absolute top-16 left-0 w-full h-1 hidden md:block" aria-hidden="true">
            <div className="bg-black/20 h-full w-full"></div>
            <div 
              ref={progressBarRef} 
              className="bg-white h-full w-full absolute top-0 left-0"
              style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
            ></div>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center p-6"
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-purple-950 rounded-full">
                    <div className="flex items-center justify-center w-20 h-20 bg-purple-900 rounded-full shadow-md text-purple-500 overflow-hidden">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;