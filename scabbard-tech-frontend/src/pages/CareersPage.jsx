import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import BlurText from '../components/BlurText';
import StartProject from '../components/StartProject';
import heroBg from '../assets/gallery/Scabbardtech-Portfolio-24.png'; // Re-using a suitable background

const CareersPage = () => {
  // To show the fallback message, simply comment out or empty this array.
  const jobListings = [
    {
      title: 'Frontend Developer',
      location: 'Guwahati, Assam',
      type: 'Full-time',
      description: 'Translate UI/UX design wireframes into responsive, high-quality code. You will be responsible for building and maintaining user-facing features using modern frameworks like React.',
      href: '/apply/frontend-developer',
    },
    {
      title: 'Backend Developer',
      location: 'Guwahati, Assam',
      type: 'Full-time',
      description: 'Develop and maintain server-side logic, manage databases, and build robust APIs. You will collaborate with our frontend team to deliver seamless digital solutions.',
      href: '/apply/backend-developer',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Contract',
      description: 'Create intuitive wireframes, user flows, and high-fidelity mockups. Your work will define the user experience across our web and mobile projects, ensuring they are both beautiful and functional.',
      href: '/apply/uiux-designer',
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Guwahati, Assam',
      type: 'Full-time',
      description: 'Plan and execute digital marketing campaigns, including SEO/SEM, social media, and content marketing. Analyze performance data to optimize strategies and drive growth.',
      href: '/apply/digital-marketing-specialist',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(47, 17, 66, 0.7), rgba(21, 11, 32, 0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <BlurText
            text="Join Our Team"
            className="text-4xl md:text-6xl font-medium text-white mb-4"
          />
          <p className="text-lg md:text-xl text-purple-100">
            We're looking for passionate, creative, and driven individuals to help us build the future of digital innovation.
          </p>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find your next opportunity at Scabbard Tech.
            </p>
          </div>

          {jobListings && jobListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobListings.map((job, index) => (
                <a
                  key={index}
                  href={job.href}
                  className="group flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 aspect-square"
                >
                  {/* Top section of the card */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-3">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Bottom section of the card */}
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span>{job.type}</span>
                    </div>
                    <div className="text-gray-400 group-hover:text-purple-600 transition-all duration-300 transform group-hover:rotate-45">
                      <GoArrowUpRight size={24} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center bg-gray-50 p-12 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800">We're Always Looking for Talent</h3>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                We are not actively recruiting for specific roles right now, but our team is growing. If you are passionate about what we do, we'd love to hear from you.
              </p>
              <a
                href="mailto:careers@scabbardtech.com"
                className="mt-6 inline-block bg-purple-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
              >
                Send Us Your Resume
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Internship Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
              Interested in an Internship?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're always looking for bright minds to join us. Fill out the form below to apply for an internship opportunity.
            </p>
          </div>
          
          <form 
            action="https://formspree.io/f/xzzjldeo"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-md border border-gray-200"
          >
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="fullName" id="fullName" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Your Name" required />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="you@example.com" required />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="+91 12345 67890" />
            </div>

            {/* College/University */}
            <div>
              <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">College/University</label>
              <input type="text" name="college" id="college" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="Your College Name" required />
            </div>

            {/* Field of Study */}
            <div className="md:col-span-2">
              <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
              <input type="text" name="fieldOfStudy" id="fieldOfStudy" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="e.g., Computer Science, Design, Marketing" required />
            </div>

            {/* Portfolio/LinkedIn URL */}
            <div className="md:col-span-2">
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">Portfolio or LinkedIn URL</label>
              <input type="url" name="portfolio" id="portfolio" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500" placeholder="https://linkedin.com/in/yourprofile" />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 w-full md:w-auto bg-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer Animation Trigger */}
      <div className="faq-section">
        <StartProject />
      </div>
    </div>
  );
};

export default CareersPage;