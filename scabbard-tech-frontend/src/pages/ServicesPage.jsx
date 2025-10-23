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
const IconSocial = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.5c0 2.986 1.655 5.64 4.059 7.095b-1.118 2.236a.75.75 0 00.94 1.054l2.236-1.118c.47.097.956.17 1.458.22A9.01 9.01 0 0012 20.25z" /></svg>;
const IconWeb = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const IconAds = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197" /></svg>;
const IconContent = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>;
const IconBrandDev = () => <svg viewBox="0 0 400 400" fill="currentColor" className="w-10 h-10"><path d="m175.417 321.478c-1.166-.48-2.448-1.015-3.863-1.622-10.796-4.592-17.013-15.352-15.615-27.001 1.096-9.209 2.036-12.911 1.423-16.398-.612-3.485-2.758-6.639-6.941-14.91l-.006-.012c-5.281-10.484-3.133-22.712 5.44-30.717 6.748-6.347 9.842-8.582 11.61-11.648 1.768-3.068 2.149-6.867 4.259-15.896l.002-.007c2.679-11.416 12.186-19.383 23.913-20.043h.001c9.254-.519 13.06-.239 16.387-1.45 3.328-1.212 6.066-3.874 13.493-9.426 9.399-7.03 21.789-7.03 31.188 0 7.427 5.552 10.165 8.214 13.493 9.426 3.327 1.211 7.133.931 16.387 1.45h.002c11.73.66 21.237 8.632 23.886 20.048 2.121 9.026 2.51 12.825 4.281 15.893 1.772 3.069 4.868 5.306 11.612 11.65 8.545 8.001 10.726 20.234 5.444 30.72l-.006.012c-4.184 8.274-6.336 11.43-6.952 14.916-.616 3.484.326 7.182 1.433 16.382.001.01.002.019.004.029 1.339 11.484-4.656 22.09-15.164 26.784l17.908 41.808c1.172 2.736.727 5.897-1.154 8.204-1.881 2.308-4.887 3.38-7.804 2.783l-23.867-4.883-12.854 20.692c-1.577 2.54-4.438 3.988-7.419 3.755-2.98-.233-5.582-2.108-6.745-4.862l-15.761-37.293c-6.327-1.997-9.307-3.136-12.328-3.136-1.742 0-3.47.379-5.831 1.083l-22.959 48.837c-1.265 2.692-3.92 4.46-6.892 4.589s-5.77-1.401-7.264-3.973l-12.238-21.06-23.993 4.204c-2.934.514-5.911-.645-7.726-3.008-1.814-2.363-2.165-5.538-.911-8.24zm121.119 4.75c-.267.19-.522.388-.77.596-2.713 2.277-4.371 5.718-9.437 13.482l-.007.011c-3.631 5.546-8.958 9.32-14.935 10.93l6.53 15.451 7.642-12.304c1.767-2.844 5.119-4.287 8.4-3.616l14.35 2.936zm-80.94 25.83c-7.87-.577-15.115-4.754-19.69-11.741l-.002-.004c-3.262-4.986-5.114-8.191-6.74-10.449l-14.915 32.139 14.405-2.523c3.302-.578 6.614.963 8.298 3.861l7.374 12.69zm31.529-166.897c-3.623-2.71-8.399-2.71-12.022 0l-.001.001c-9.524 7.12-13.335 10.093-17.602 11.646-4.267 1.554-9.095 1.726-20.962 2.391-4.524.255-8.201 3.318-9.235 7.722-2.705 11.577-3.708 16.304-5.976 20.239-2.268 3.934-5.856 7.173-14.519 15.321-.009.009-.018.017-.027.025-3.304 3.08-4.11 7.792-2.078 11.829 5.367 10.611 7.631 14.879 8.417 19.351.787 4.471.112 9.255-1.293 21.061l-.001.007c-.538 4.48 1.847 8.62 5.998 10.382.009.004.018.008.027.012 10.934 4.687 15.412 6.501 18.89 9.423 3.477 2.921 6.038 7.023 12.552 16.982 2.469 3.77 6.958 5.415 11.297 4.098l.011-.003c11.371-3.433 15.963-4.922 20.503-4.922 4.539 0 9.137 1.49 20.52 4.921.008.002.015.004.022.007 4.321 1.315 8.82-.332 11.288-4.099 6.5-9.962 9.064-14.064 12.546-16.987 3.481-2.921 7.966-4.734 18.897-9.42.009-.004.018-.008.027-.012 4.156-1.764 6.516-5.914 5.996-10.399-1.42-11.8-2.091-16.586-1.301-21.057.789-4.471 3.061-8.737 8.426-19.345 2.034-4.042 1.202-8.758-2.091-11.841l-.014-.013c-8.66-8.146-12.248-11.383-14.519-15.316-2.272-3.934-3.281-8.661-6.002-20.24-.002-.01-.004-.019-.007-.028-1.016-4.393-4.688-7.444-9.201-7.698-11.868-.665-16.696-.837-20.963-2.391-4.267-1.553-8.078-4.526-17.602-11.646zm-6.024 132.918c-32.199 0-58.475-26.276-58.475-58.475 0-32.198 26.276-58.474 58.475-58.474 32.229 0 58.474 26.276 58.474 58.474 0 32.199-26.245 58.475-58.474 58.475zm0-16c23.41 0 42.474-19.087 42.474-42.475 0-23.387-19.064-42.474-42.474-42.474-23.388 0-42.475 19.087-42.475 42.474 0 23.388 19.087 42.475 42.475 42.475z" /></svg>;
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