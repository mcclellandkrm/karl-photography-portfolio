'use client';

import { useEffect } from 'react';

export default function InteractiveFeatures() {
  useEffect(() => {
    // Service accordion functionality
    const handleServiceToggle = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('service-toggle') || target.closest('.service-header')) {
        const serviceItem = target.closest('.service-item') as HTMLElement;
        const isActive = serviceItem.classList.contains('active');
        
        // Close all service items
        document.querySelectorAll('.service-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          serviceItem.classList.add('active');
        }
      }
    };

    // Scroll animations for expanding image
    const handleScroll = () => {
      const expandingImage = document.querySelector('.expanding-image') as HTMLElement;
      if (expandingImage) {
        const rect = expandingImage.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageSection = expandingImage.closest('.full-image-section') as HTMLElement;
        
        if (imageSection) {
          const sectionRect = imageSection.getBoundingClientRect();
          const scrollProgress = Math.max(0, Math.min(1, 
            (windowHeight - sectionRect.top) / (windowHeight + sectionRect.height)
          ));
          
          // Scale from 75% to 100% based on scroll progress
          const scale = 0.75 + (0.25 * scrollProgress);
          expandingImage.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      }

      // Fade in animations for client text
      const fadeElements = document.querySelectorAll('.fade-up-text');
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
          element.classList.add('fade-in-up');
        }
      });

      // Fade in animations for client logos
      const logoElements = document.querySelectorAll('.client-logo-item');
      logoElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
          setTimeout(() => {
            element.classList.add('fade-in-up');
          }, index * 100);
        }
      });
    };

    // Add event listeners
    document.addEventListener('click', handleServiceToggle);
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleServiceToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
