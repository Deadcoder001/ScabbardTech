import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../components/BlurText';
import aboutHeroBg from '../assets/gallery/Scabbardtech-Portfolio-22.png'; // TODO: Replace with your actual hero image
import StartProject from '../components/StartProject';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text highlight animation
      const highlights = gsap.utils.toArray('.highlight-on-scroll-about');
      highlights.forEach(highlight => {
        ScrollTrigger.create({
          trigger: highlight,
          start: 'top 75%',
          end: 'bottom 15%',
          toggleClass: { targets: highlight, className: 'is-highlighted' },
        });
      });

      // Counter animation
      const counters = gsap.utils.toArray('.stat-number');
      gsap.from(counters, {
        textContent: 0,
        duration: 3,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-white text-gray-800">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(47, 17, 66, 0.7), rgba(21, 11, 32, 0.5)), url(${aboutHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="z-10">
          <BlurText
            text="About Us"
            className="text-5xl md:text-7xl font-bold"
            delay={100}
          />
          <p className="text-lg md:text-xl mt-4 opacity-90">
            Scabbard Tech: Your 360° Marketing Agency
          </p>
        </div>
      </section>

      {/* Who, Mission, Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Who Are We */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Who Are We</h3>
            <p className="text-gray-600 leading-relaxed">
              At Scabbard Tech, we are a team of <span className="highlight-on-scroll-about">digital marketing professionals</span> committed to helping businesses thrive in today’s <span className="highlight-on-scroll-about">fast-paced, ever-changing</span> digital landscape.
            </p>
          </div>
          {/* Card 2: Our Mission */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to help businesses thrive by crafting <span className="highlight-on-scroll-about">innovative marketing strategies</span> that engage audiences, build brands, and <span className="highlight-on-scroll-about">drive tangible results</span>.
            </p>
          </div>
          {/* Card 3: Our Vision */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              At Scabbard Tech, our vision is to become the leading digital marketing agency known for delivering <span className="highlight-on-scroll-about">creative, customized, and results-driven</span> marketing solutions.
            </p>
          </div>
        </div>
      </section>



      {/* Core Values Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {coreValues.map(value => (
              <div key={value.number} className="flex">
                <div className="text-purple-200 text-5xl font-bold mr-6">{value.number}</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Stats Counter Section */}
      <section ref={statsRef} className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <span className="stat-number text-5xl font-bold text-purple-700">150</span>
            <span className="text-5xl font-bold text-purple-700">+</span>
            <p className="text-lg text-gray-600 mt-2">Satisfied Clients</p>
          </div>
          {/* Stat 2 */}
          <div>
            <span className="stat-number text-5xl font-bold text-purple-700">150</span>
            <span className="text-5xl font-bold text-purple-700">+</span>
            <p className="text-lg text-gray-600 mt-2">Projects Completed</p>
          </div>
          {/* Stat 3 */}
          <div>
            <span className="stat-number text-5xl font-bold text-purple-700">6</span>
            <span className="text-5xl font-bold text-purple-700">+</span>
            <p className="text-lg text-gray-600 mt-2">Years of Experience</p>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .highlight-on-scroll-about {
          transition: background-size 0.5s cubic-bezier(.4,2,.6,1);
          background: linear-gradient(90deg, rgba(250,204,21,0.7) 100%, transparent 0%);
          background-repeat: no-repeat;
          background-size: 0% 70%;
          background-position: 0 85%;
          padding: 0 2px;
          border-radius: 3px;
        }
        .highlight-on-scroll-about.is-highlighted {
          background-size: 100% 70%;
        }
      `}</style>

      {/* This wrapper provides the trigger for the footer animation */}
      <div className="faq-section">
        <StartProject />
      </div>
    </div>
  );
};

const coreValues = [
  { number: '01.', title: 'Creativity', description: 'We believe in pushing boundaries and thinking outside the box. Creativity is at the heart of everything we do, from crafting compelling marketing campaigns to building unique brand identities.' },
  { number: '02.', title: 'Integrity', description: 'Transparency and honesty are foundational to how we operate. We keep our clients informed and involved, ensuring every decision is made with their best interests in mind.' },
  { number: '03.', title: 'Collaboration', description: 'We see our clients as partners. By working closely together, we create tailored strategies that align with your vision and drive results that matter.' },
  { number: '04.', title: 'Innovation', description: 'The digital world is always evolving, and so are we. We stay ahead of trends and leverage the latest tools and technologies to keep your business on the cutting edge.' },
  { number: '05.', title: 'Results-Driven', description: 'Every campaign we launch is focused on delivering measurable results. We believe in using data to optimize performance, ensuring our efforts lead to tangible success for your business.' },
  { number: '06.', title: 'Customer-Centric', description: 'Our clients are at the center of everything we do. We tailor our services to meet your unique needs, ensuring a personalized approach that drives real value.' },
];

export default AboutPage;