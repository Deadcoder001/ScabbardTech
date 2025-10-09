import React from 'react';

const WhyScabbardTech = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Why Scabbard Tech is the best digital marketing agency in Guwahati, Assam
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Scabbard Tech, we believe in delivering value through innovation and expertise. Our team is dedicated to providing the best digital marketing solutions tailored to your needs.
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
              At Scabbard Tech, we harness the latest technology to deliver tailored solutions that address complex challenges. Our focus on innovation ensures that our strategies are both cutting-edge and effective in driving transformative change, be it in an event or the digital field.
            </p>
          </div>

          {/* Feature 2: Expertise Across Industries */}
          <div className="p-8 border border-gray-200 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expertise Across Industries
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team comprises specialists with deep knowledge across various sectors, allowing us to provide impactful solutions that are customized to meet the unique needs of each industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScabbardTech;