import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MetaBalls from './MetaBalls';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const highlights = gsap.utils.toArray('.highlight-on-scroll-choose');
      
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
    <section ref={sectionRef} className="w-full bg-white py-16 flex items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-5xl w-full px-6 gap-8 md:gap-12">
        <div className="flex items-center justify-center flex-1 h-64 md:h-auto">
        <MetaBalls
         color="#000000ff"
          cursorBallColor="#000000ff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
        </div>
        <div className="flex-1 text-center md:text-right flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why Choose Us?
          </h2>
          <div className="w-full flex justify-center md:justify-end">
            <hr className="w-32 border-gray-300 border-t-2 mb-6" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 font-medium text-left md:text-right">
            Our digital marketing strategies are backed by <span className="highlight-on-scroll-choose">years of experience</span> and a <span className="highlight-on-scroll-choose">proven track record</span> of delivering exceptional results. Whether you’re a startup or an established brand, we <span className="highlight-on-scroll-choose">customize our services</span> to fit your goals and budget. Our focus is on <span className="highlight-on-scroll-choose">driving real value</span> through transparency, measurable outcomes, and a <span className="highlight-on-scroll-choose">client-centric approach</span>.
          </p>
        </div>
      </div>
      <style jsx global>{`
        .highlight-on-scroll-choose {
          transition: background-size 0.5s cubic-bezier(.4,2,.6,1), color 0.5s;
          background: linear-gradient(90deg, rgba(250,204,21,0.7) 100%, transparent 0%);
          background-repeat: no-repeat;
          background-size: 0% 70%;
          background-position: 0 85%;
          padding: 0 2px;
          border-radius: 3px;
        }
        .highlight-on-scroll-choose.is-highlighted {
          background-size: 100% 70%;
          color: #1f2937; /* text-gray-800 */
        }
      `}</style>
    </section>
  );
}