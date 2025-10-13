import React, { useState, useEffect } from 'react';

// Modern SVG Close Icon
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GetAQuote = ({ open, setOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      // When the modal is told to open, start the entering animation
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    }
    // The closing animation is handled by the handleClose function
  }, [open]);

  const handleClose = () => {
    // Start the closing animation
    setIsAnimating(false);
    // Wait for the animation to finish before unmounting the component
    setTimeout(() => {
      setOpen(false);
    }, 300); // This duration should match your transition duration
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: handle form submission (API/email)
    alert('Thank you for your enquiry!');
    handleClose(); // Use the new close handler
  };

  if (!open) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-gray-50 rounded-xl shadow-2xl p-8 w-full max-w-lg relative transform transition-all duration-300 ease-out ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Let's Build Something</h2>
          <p className="text-gray-500 mt-1">Tell us about your project.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-600" htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required className="mt-1 w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600" htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required className="mt-1 w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600" htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required className="mt-1 w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600" htmlFor="details">Project Details</label>
            <textarea id="details" name="details" rows={3} required className="mt-1 w-full bg-transparent border-b-2 border-gray-200 py-2 focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-out">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;