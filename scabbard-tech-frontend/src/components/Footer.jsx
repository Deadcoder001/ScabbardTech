import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../assets/scabbardtech.png';

gsap.registerPlugin(ScrollTrigger);

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="footer-social-circle">
    {children}
  </a>
);

const Footer = () => {
  const footerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the trigger element (the section before the footer) exists
    const triggerElement = document.querySelector('.faq-section');
    if (!triggerElement) return;

    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, { yPercent: -50 });

      const uncover = gsap.timeline({ paused: true });
      uncover.to(containerRef.current, { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: triggerElement,
        start: 'bottom bottom',
        end: '+=75%',
        animation: uncover,
        scrub: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-section">
      <section ref={containerRef} className="footer-container">
        <div className="footer-row top">
          <div className="footer-logo-wrapper">
            <img src={logo} alt="Scabbard Tech Logo" className="h-12" />
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Your trusted partner for innovative digital marketing solutions in Guwahati, Assam.
            </p>
          </div>
        </div>

        <div className="footer-row middle">
          <div className="footer-items">
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center"><span className="mr-3">📞</span><a href="tel:+917002390792" className="hover:text-white">+91 70023 90792</a></li>
                <li className="flex items-center"><span className="mr-3">✉️</span><a href="mailto:info@scabbardtech.com" className="hover:text-white">info@scabbardtech.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-socials">
            <SocialIcon href="https://facebook.com">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" /></svg>
            </SocialIcon>
            <SocialIcon href="https://instagram.com">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zM12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </SocialIcon>
          </div>
        </div>

        <div className="footer-row bottom">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Scabbard Tech. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;