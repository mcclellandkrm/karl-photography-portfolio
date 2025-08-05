'use client';

import { useEffect, useState } from 'react';

export default function ServiceMouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const servicesSection = document.querySelector('.services-section');
      const activeServiceItem = document.querySelector('.service-item.active');
      
      if (servicesSection && activeServiceItem) {
        const sectionRect = servicesSection.getBoundingClientRect();
        const activeRect = activeServiceItem.getBoundingClientRect();
        
        // Check if mouse is within the active service item
        if (
          e.clientX >= activeRect.left &&
          e.clientX <= activeRect.right &&
          e.clientY >= activeRect.top &&
          e.clientY <= activeRect.bottom
        ) {
          setMousePosition({
            x: e.clientX - sectionRect.left,
            y: e.clientY - sectionRect.top
          });
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
    };

    const handleServiceToggle = () => {
      // Small delay to ensure the DOM has updated
      setTimeout(() => {
        const activeServiceItem = document.querySelector('.service-item.active');
        if (!activeServiceItem) {
          setIsVisible(false);
        }
      }, 100);
    };

    // Listen for mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    
    // Listen for service accordion changes
    document.addEventListener('click', handleServiceToggle);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleServiceToggle);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="service-mouse-follower"
      style={{
        transform: `translate(${mousePosition.x - 30}px, ${mousePosition.y - 30}px)`,
      }}
    >
      <div className="follower-graphic">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle 
            cx="30" 
            cy="30" 
            r="25" 
            stroke="#000000" 
            strokeWidth="2" 
            fill="none"
            strokeDasharray="4 4"
            className="rotating-circle"
          />
          <circle 
            cx="30" 
            cy="30" 
            r="8" 
            fill="#000000"
          />
        </svg>
      </div>
    </div>
  );
}
