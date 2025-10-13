import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyScabbardTech = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const highlights = gsap.utils.toArray('.highlight-on-scroll-scabbard');
      
      highlights.forEach(highlight => {
        ScrollTrigger.create({
          trigger: highlight,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleClass: { targets: highlight, className: 'is-highlighted' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Why Scabbard Tech is the best digital marketing agency in Guwahati, Assam
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Scabbard Tech, we believe in <span className="highlight-on-scroll-scabbard">delivering value through innovation</span> and expertise. Our team is dedicated to providing the best digital marketing <span className="highlight-on-scroll-scabbard">solutions tailored to your needs</span>.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {/* Feature 1: Innovative Technology */}
          <div className="p-8 border border-gray-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovative Technology
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Scabbard Tech, we <span className="highlight-on-scroll-scabbard">harness the latest technology</span> to deliver tailored solutions that address complex challenges. Our focus on innovation ensures that our strategies are both <span className="highlight-on-scroll-scabbard">cutting-edge and effective</span> in driving transformative change, be it in an event or the digital field.
            </p>
          </div>

          {/* Feature 2: Expertise Across Industries */}
          <div className="p-8 border border-gray-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expertise Across Industries
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team comprises specialists with <span className="highlight-on-scroll-scabbard">deep knowledge across various sectors</span>, allowing us to provide impactful solutions that are <span className="highlight-on-scroll-scabbard">customized to meet the unique needs</span> of each industry.
            </p>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .highlight-on-scroll-scabbard {
          transition: background-size 0.5s cubic-bezier(.4,2,.6,1), color 0.5s;
          background: linear-gradient(90deg, rgba(250,204,21,0.7) 100%, transparent 0%);
          background-repeat: no-repeat;
          background-size: 0% 70%;
          background-position: 0 85%;
          padding: 0 2px;
          border-radius: 3px;
        }
        .highlight-on-scroll-scabbard.is-highlighted {
          background-size: 100% 70%;
          color: #1f2937; /* text-gray-800 */
        }
      `}</style>
    </section>
  );
};

export default WhyScabbardTech;