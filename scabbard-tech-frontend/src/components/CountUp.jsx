import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CountUp = ({ end, duration = 2, className, suffix = '' }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return;

    const counter = { value: 0 };

    gsap.to(counter, {
      value: end,
      duration: duration,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%', // Starts animation when 85% of the element is in view
        toggleActions: 'play none none none',
        once: true,
      },
      onUpdate: () => {
        element.textContent = Math.ceil(counter.value);
      },
    });
  }, [end, duration]);

  return (
    <span className={className}>
      <span ref={countRef}>0</span>{suffix}
    </span>
  );
};

export default CountUp;