import React from 'react';
import BlurText from './BlurText';

const StartProject = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dotted background overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '25px 25px',
          opacity: 0.6
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <BlurText
          text="Would you like to start a project with us?"
          className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
          delay={100}
        />
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Stay updated with the latest trends, insights, and tips on digital marketing. Our blog covers a wide range of topics to help you stay ahead in the digital world.
        </p>
        <a href="tel:+917002390792" className="inline-block">
          <button className="contact-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            Get in touch
            <div className="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-5">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
            <div className="star-6">
              <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering:'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule:'evenodd', clipRule:'evenodd'}} viewBox="0 0 784.11 815.53"><path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>
            </div>
          </button>
        </a>
      </div>
      <style jsx global>{`
        .contact-button {
          position: relative;
          padding: 12px 35px;
          background: #8B5CF6; /* purple-500 */
          font-size: 17px;
          font-weight: 1000;
          color: #ffffff;
          border: 3px solid #8B5CF6;
          border-radius: 8px;
          box-shadow: 0 0 0 #ffffff;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-button .star-1 {
          position: absolute; top: 20%; left: 20%; width: 25px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
        }
        .contact-button .star-2 {
          position: absolute; top: 45%; left: 45%; width: 15px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }
        .contact-button .star-3 {
          position: absolute; top: 40%; left: 40%; width: 5px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
        }
        .contact-button .star-4 {
          position: absolute; top: 20%; left: 40%; width: 8px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
        }
        .contact-button .star-5 {
          position: absolute; top: 25%; left: 45%; width: 15px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
        }
        .contact-button .star-6 {
          position: absolute; top: 5%; left: 50%; width: 5px; height: auto;
          filter: drop-shadow(0 0 0 #8B5CF6); z-index: -5;
          transition: all .8s ease;
        }

        .contact-button:hover {
          background: transparent;
          color: #8B5CF6;
          box-shadow: 0 0 25px #8B5CF6;
        }

        .contact-button:hover .star-1 {
          position: absolute; top: -80%; left: -30%; width: 25px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .contact-button:hover .star-2 {
          position: absolute; top: -25%; left: 10%; width: 15px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .contact-button:hover .star-3 {
          position: absolute; top: 55%; left: 25%; width: 5px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .contact-button:hover .star-4 {
          position: absolute; top: 30%; left: 80%; width: 8px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .contact-button:hover .star-5 {
          position: absolute; top: 25%; left: 115%; width: 15px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .contact-button:hover .star-6 {
          position: absolute; top: 5%; left: 60%; width: 5px; height: auto;
          filter: drop-shadow(0 0 10px #8B5CF6); z-index: 2;
        }
        .fil0 { fill: #8B5CF6; }
      `}</style>
    </section>
  );
};

export default StartProject;