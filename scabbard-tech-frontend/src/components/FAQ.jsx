import React, { useState } from 'react';
import BlurText from './BlurText';

const faqData = [
  {
    question: "What is digital marketing, and how can it help my business in the Northeast?",
    answer: "Digital Marketing is all about utilizing all the digital platforms available to create conversions for a business which might be creating awareness, engagement, generating leads to improving a business’s ROI according to the Business’s Goal. For businesses in the Northeast, digital marketing can be a game-changer. Whether you’re a small shop in Guwahati or a large enterprise in Assam, digital marketing helps you showcase your products or services, attract more customers, and build lasting relationships."
  },
  {
    question: "How can digital marketing improve my business's visibility in Guwahati and surrounding areas?",
    answer: "Digital marketing can significantly improve a business’s visibility across Guwahati and its surroundings. Key strategies include: Local SEO to rank higher in local Google searches, targeted Social Media Marketing on platforms like Facebook and Instagram to build brand awareness, and optimizing your website (SEO) to appear for queries your potential customers are searching for."
  },
  {
    question: "What are the key digital marketing strategies suitable for small businesses in Assam?",
    answer: "For small businesses in Assam, we recommend a mix of: 1. Local SEO to capture local search traffic. 2. Targeted social media campaigns on Meta platforms. 3. A well-optimized business website. 4. Collaborations with local influencers. 5. Direct customer engagement via WhatsApp. 6. Creating engaging visual content like short videos, which resonate well with the local audience."
  },
  {
    question: "How is digital marketing different from traditional marketing methods?",
    answer: "The primary difference is cost-effectiveness and measurability. While traditional marketing can be very expensive with hard-to-track results, digital marketing campaigns are significantly more affordable, highly targeted, and provide detailed data on performance, allowing for continuous optimization and a better return on investment."
  },
  {
    question: "Can Scabbardtech help Businesses with local SEO to target customers in Assam and the Northeast?",
    answer: "Yes, absolutely. At Scabbard Tech, we specialize in local SEO to help businesses like yours connect with customers in Assam and the Northeast effectively. We optimize your online presence to ensure you are visible to the customers right in your area."
  },
  {
    question: "Do Scabbardtech provide social media marketing for platforms like Facebook, Instagram, and WhatsApp?",
    answer: "Yes, we do! At Scabbard Tech, we provide comprehensive social media marketing services for popular platforms like Facebook, Instagram, and WhatsApp to engage your audience and grow your brand."
  },
  {
    question: "Can Scabbardtech create content in regional languages like Assamese for better engagement?",
    answer: "Definitely. We understand the importance of connecting with the local audience. Our team can create engaging content in Assamese and other regional languages to ensure your message resonates effectively with your target market."
  },
  {
    question: "Do Scabbardtech offer website design and development?",
    answer: "Yes. At Scabbard Tech, we not only offer professional website design but focus on building SEO-friendly websites that are designed to help your business grow digitally and rank higher on search engines."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-white faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BlurText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-medium text-gray-900"
          />
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;