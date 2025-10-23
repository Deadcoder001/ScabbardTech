import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const highlights = gsap.utils.toArray('.highlight-on-scroll-choose');
      
      highlights.forEach(highlight => {
        // Animate the background-size directly with GSAP
        gsap.to(highlight, {
          backgroundSize: '100% 80%',
          ease: 'none',
          scrollTrigger: {
            trigger: highlight,
            start: 'top 40%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 flex items-center justify-center why-choose-us-section">
      <div className="max-w-3xl w-full px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <div className="w-full flex justify-center">
          <hr className="w-52 border-purple-200 border-t-2 mb-8" />
        </div>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Our digital marketing strategies are backed by <span className="highlight-on-scroll-choose">years of experience</span> and a <span className="highlight-on-scroll-choose">proven track record</span> of delivering exceptional results. Whether you’re a startup or an established brand, we <span className="highlight-on-scroll-choose">customize our services</span> to fit your goals and budget. Our focus is on <span className="highlight-on-scroll-choose">driving real value</span> through transparency, measurable outcomes, and a <span className="highlight-on-scroll-choose">client-centric approach</span>.
        </p>
      </div>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700&display=swap');

        .why-choose-us-section h2 {
          font-family: 'Playfair Display', serif;
        }

        .why-choose-us-section p {
          font-family: 'Lato', sans-serif;
        }

        .highlight-on-scroll-choose {
          /* The CSS transition is removed to allow GSAP's scrub to work correctly */
          background: linear-gradient(90deg, rgba(192, 132, 252, 0.4) 100%, transparent 0%); /* Lighter purple highlight */
          background-repeat: no-repeat;
          background-size: 0% 80%;
          background-position: 0 85%;
          padding: 0 4px;
          border-radius: 4px;
        }
        /* The .is-highlighted class is no longer needed as GSAP animates the style directly */
      `}</style>
    </section>
  );
}