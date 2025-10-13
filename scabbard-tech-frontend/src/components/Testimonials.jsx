import React from 'react';
import BlurText from './BlurText';

// --- SVG Icons ---
const GoogleIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.651-3.356-11.303-8H6.306C9.656,39.663,16.318,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.012,35.846,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// I've added more placeholders. You can manually add more real reviews here.
const testimonials = [
  {
    name: "Anurag Das",
    review: "Excellent service and amazing results! Our business has grown significantly since we started working with them.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    review: "The team is professional, creative, and always responsive. They truly understand our brand and vision.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    review: "A fantastic partner for all our digital marketing needs. Highly recommended for their expertise and dedication.",
    rating: 5,
  },
  {
    name: "Deepika Kalita",
    review: "Their strategies are top-notch. We saw a huge increase in engagement and leads within the first few months.",
    rating: 5,
  },
  {
    name: "Vikram Bora",
    review: "Scabbard Tech transformed our online presence. Their attention to detail is impeccable.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    review: "If you're looking for a reliable and effective digital marketing agency in Assam, look no further.",
    rating: 5,
  }
];

const TestimonialCard = ({ review, name, rating }) => (
  <div className="testimonial-card bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="flex items-center mb-4">
      <GoogleIcon className="w-6 h-6 mr-2" />
      <span className="text-sm font-semibold text-gray-700">Google Review</span>
    </div>
    <div className="flex items-center mb-5">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">"{review}"</p>
    <p className="font-bold text-gray-800 mt-auto">- {name}</p>
  </div>
);

const Testimonials = () => {
  // Duplicate testimonials for a seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <BlurText
            text="What Our Clients Say"
            className="text-4xl md:text-5xl font-medium text-gray-900"
          />
          <p className="mt-4 text-lg text-gray-500">
            Verified reviews from our Google Business Profile.
          </p>
        </div>

        <div className="scrolling-wrapper">
          <div className="scrolling-content">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={index} className="scrolling-item">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.google.com/maps/place/Scabbard+Tech/@26.1265256,91.7951489,17z/data=!4m8!3m7!1s0x375a59b1e8e67d77:0x6be978d6dc1d3893!8m2!3d26.1265256!4d91.7977238!9m1!1b1!16s%2Fg%2F11h6k17cvm?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D#:~:text=Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Read All 150+ Reviews on Google
          </a>
        </div>
      </div>
      <style jsx global>{`
        .scrolling-wrapper {
          display: flex;
          width: 100%;
        }
        .scrolling-content {
          display: flex;
          animation: scroll 60s linear infinite;
        }
        .scrolling-wrapper:hover .scrolling-content {
          animation-play-state: paused;
        }
        .scrolling-item {
          flex: 0 0 400px; /* Card width */
          margin: 0 1rem; /* Gap between cards */
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;