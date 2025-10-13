import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from "./BlurText";
import marketingStrategyImage from '../assets/Untitled-e1735972392588.png';

gsap.registerPlugin(ScrollTrigger);

const CreativeSolutions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const highlights = gsap.utils.toArray('.highlight-on-scroll');
      
      highlights.forEach(highlight => {
        ScrollTrigger.create({
          trigger: highlight,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleClass: { targets: highlight, className: 'is-highlighted' },
          // markers: true, // Uncomment for debugging
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-left">
            <BlurText
              text="CREATIVE SOLUTIONS THAT PROPEL BRANDS"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl font-medium text-gray-900 !justify-start mb-12"
            />

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Cost-Effective
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We focus on delivering <span className="highlight-on-scroll">high-value solutions</span> that <span className="highlight-on-scroll">maximize results</span> while staying within budget, ensuring that our clients achieve their goals efficiently.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Dependability and Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  <span className="highlight-on-scroll">Quality and consistency</span> are at the core of everything we do, making Scabbard Tech a <span className="highlight-on-scroll">trusted partner</span> for clients seeking reliable and exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center">
            <img 
              src={marketingStrategyImage} 
              alt="Marketing Strategy Doodle" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>

        </div>
      </div>
      <style jsx global>{`
        .highlight-on-scroll {
          transition: background-size 0.5s cubic-bezier(.4,2,.6,1), color 0.5s;
          background: linear-gradient(90deg, rgba(250,204,21,0.7) 100%, transparent 0%);
          background-repeat: no-repeat;
          background-size: 0% 70%;
          background-position: 0 85%;
          padding: 0 2px;
          border-radius: 3px;
        }
        .highlight-on-scroll.is-highlighted {
          background-size: 100% 70%;
          color: #1f2937; /* text-gray-800 */
        }
      `}</style>
    </section>
  );
};

export default CreativeSolutions;