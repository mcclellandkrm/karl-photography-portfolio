'use client';

import { useEffect } from 'react';

export default function OMOEffects() {
  useEffect(() => {
    // Stepped reveal animation on scroll
    const steppedSection = document.querySelector('.stepped-cta-section');
    
    const handleScroll = () => {
      if (steppedSection) {
        const rect = steppedSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          steppedSection.classList.add('revealed');
        }
      }
    };

    // Client showcase cycling
    const showcaseItems = document.querySelectorAll('.client-showcase-item');
    let currentActive = 0;
    
    const cycleShowcase = () => {
      showcaseItems.forEach(item => item.classList.remove('active'));
      if (showcaseItems[currentActive]) {
        showcaseItems[currentActive].classList.add('active');
      }
      currentActive = (currentActive + 1) % showcaseItems.length;
    };

    // Start cycling every 3 seconds
    const showcaseInterval = setInterval(cycleShowcase, 3000);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(showcaseInterval);
    };
  }, []);

  return null; // This component only handles effects
}
