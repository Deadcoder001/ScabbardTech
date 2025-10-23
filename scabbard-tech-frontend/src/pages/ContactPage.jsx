import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from '../components/BlurText';
import StartProject from '../components/StartProject';
import heroBg from '../assets/gallery/Scabbardtech-Portfolio-23.png'; // Update path as needed

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Happy Clients', value: 150 },
  { label: 'Projects Delivered', value: 150 },
  { label: 'Years of Experience', value: 6 },
];

const ContactPage = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const counters = statsRef.current.querySelectorAll('.stat-number');
    counters.forEach((counter, idx) => {
      gsap.fromTo(
        counter,
        { textContent: 0 },
        {
          textContent: stats[idx].value,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate: function () {
            counter.textContent = Math.floor(counter.textContent);
          }
        }
      );
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{ 
          backgroundImage: `linear-gradient(to top, rgba(47, 17, 66, 0.7), rgba(21, 11, 32, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <BlurText
            text="Contact Us"
            className="text-4xl md:text-6xl font-medium text-white mb-4"
          />
          <p className="text-lg md:text-xl text-purple-100">
            Let’s connect and grow your business together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-purple-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <span className="stat-number text-5xl font-bold text-purple-700">{stat.value}</span>
              <span className="text-5xl font-bold text-purple-700">+</span>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info (before the map) */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
              <div className="mb-4">
                <div className="text-lg font-semibold text-purple-700 mb-1">Reach Us</div>
                <div className="text-gray-700 mb-1">
                  2nd floor, Gangotri Building,<br />
                  Opp. Dominos, CID Bus Stop,<br />
                  Beltola, Guwahati, Assam 781028
                </div>
                <div className="text-gray-700">
                  <a href="mailto:scabbardtech@gmail.com" className="underline text-purple-700">scabbardtech@gmail.com</a>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <iframe
                title="Scabbard Tech Location"
                src="https://maps.google.com/maps?q=Scabbard%20Tech%2C%20%20CID%20BUS%20STOP%2C%20Chandan%20Nagar%2C%20Beltola%20Tiniali%2C%20Guwahati%2C%20Assam%20781028&t=m&z=14&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h2>
            <form 
              action="https://formspree.io/f/xanpgqod"
              method="POST"
              className="space-y-5 flex flex-col flex-grow"
            >
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
              </div>
              <div className="flex-grow flex flex-col">
                <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow" />
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition mt-4">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Animation Trigger */}
      <div className="faq-section">
        <StartProject />
      </div>
    </div>
  );
};

export default ContactPage;