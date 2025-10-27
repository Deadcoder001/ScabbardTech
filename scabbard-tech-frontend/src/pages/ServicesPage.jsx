import React from 'react';
import BlurText from '../components/BlurText';
import StartProject from '../components/StartProject';
import ServicesSection from '../components/ServicesSection';
import MarketingAdvertising from '../components/MarketingAdvertising';
import BrandDevelopment from '../components/BrandDevelopment'; // Added import
import heroBg from '../assets/gallery/Scabbardtech-Portfolio-24.png';
import clientsImage from '../assets/gallery/Scabbard_Clients_2-copy.jpg'; // Placeholder for client logos

// --- Consistent SVG Icons for Services ---
const IconSeo = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625l-6.25 3.75" /></svg>;
const IconSocial = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 12s4.03 8.25 9 8.25z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-2.485 0-4.5-1.67-4.5-3.75S9.515 5.25 12 5.25s4.5 1.67 4.5 3.75-2.015 3.75-4.5 3.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c-2.485 0-4.5-1.67-4.5-3.75S9.515 5.25 12 5.25s4.5 1.67 4.5 3.75-2.015 3.75-4.5 3.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v6.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>;
const IconWeb = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const IconAds = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>;
const IconContent = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>;
const IconBrandDev = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 01-4.875-1.936M16.5 18.75c2.21 0 4-1.79 4-4V7.5a4 4 0 00-4-4h-9a4 4 0 00-4 4v7.25c0 2.21 1.79 4 4 4h9z" /></svg>;
const IconEvent = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg>;
const IconMedia = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>;

const servicesData = [
  { title: 'Search Engine Optimization (SEO)', description: 'Boost your visibility on search engines and attract organic traffic with our data-driven SEO strategies, tailored for the local Northeast market.', icon: <IconSeo /> },
  { title: 'Social Media Marketing', description: 'Engage your audience and build a strong brand presence on platforms like Instagram, Facebook, and WhatsApp with our creative campaigns.', icon: <IconSocial /> },
  { title: 'Web Design & Development', description: 'We build modern, responsive, and SEO-friendly websites that not only look great but also drive conversions and business growth.', icon: <IconWeb /> },
  { title: 'Paid Advertising (PPC)', description: 'Get immediate results with targeted Google Ads and social media ad campaigns designed to maximize your ROI and generate leads.', icon: <IconAds /> },
  { title: 'Content Creation', description: 'From compelling blog posts to engaging videos and regional language content, we create materials that resonate with your audience.', icon: <IconContent /> },
  { title: 'Brand Development', description: 'We specialize in brand development that helps your business stand out in a crowded market, from identity to market positioning.', icon: <IconBrandDev /> },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
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
            text="Our Services"
            className="text-4xl md:text-6xl font-medium text-white mb-4"
          />
          <p className="text-lg md:text-xl text-purple-100">
            Providing 360° digital marketing solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex-grow">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandDevelopment />
      <MarketingAdvertising /> 
      {/* Our Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
            Trusted By Leading Brands
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to have partnered with a diverse range of clients, from government bodies to innovative startups.
          </p>
          <div className="mt-12">
            <img 
              src={clientsImage} 
              alt="A collage of client logos Scabbard Tech has worked with" 
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
 
      {/* This wrapper provides the trigger for the footer animation */}
      <div className="faq-section">
        <StartProject />
      </div>
    </div>
  );
};

export default ServicesPage;