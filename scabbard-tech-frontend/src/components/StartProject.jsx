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
        <a 
          href="tel:+917002390792" 
          className="inline-block bg-purple-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-all transform hover:scale-105 duration-300 ease-in-out"
        >
          +91 70023 90792
        </a>
      </div>
    </section>
  );
};

export default StartProject;