'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import InteractiveFeatures from '@/components/InteractiveFeatures';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <InteractiveFeatures />
      
      {/* Header */}
      <Header />
      
      {/* Gallery Hero */}
      <section className="gallery-hero section py-32 bg-black">
        <div className="container">
          <div className="gallery-header">
            <div className="section-label text-gray">[MY WORK]</div>
            <h1 className="section-title">Portfolio Gallery</h1>
            <p className="section-description">
              A collection of my best work across commercial, portrait, event, and creative photography projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="gallery-grid section py-32 bg-white text-black">
        <div className="container">
          <div className="gallery-categories">
            <button className="category-filter active">All</button>
            <button className="category-filter">Commercial</button>
            <button className="category-filter">Portrait</button>
            <button className="category-filter">Events</button>
            <button className="category-filter">Creative</button>
          </div>
          
          <div className="portfolio-grid">
            {/* Portfolio items will be populated with your content */}
            <div className="portfolio-item" data-category="commercial">
              <img src="/images/case-studies/case1.jpg" alt="Commercial Project" />
              <div className="portfolio-overlay">
                <h3>Commercial Campaign</h3>
                <p>Brand Photography</p>
              </div>
            </div>
            
            <div className="portfolio-item" data-category="portrait">
              <img src="/images/case-studies/case2.jpg" alt="Portrait Session" />
              <div className="portfolio-overlay">
                <h3>Executive Portraits</h3>
                <p>Corporate Photography</p>
              </div>
            </div>
            
            <div className="portfolio-item" data-category="events">
              <img src="/images/case-studies/case3.jpg" alt="Event Coverage" />
              <div className="portfolio-overlay">
                <h3>Corporate Event</h3>
                <p>Event Photography</p>
              </div>
            </div>
            
            <div className="portfolio-item" data-category="creative">
              <img src="/images/case-studies/case4.jpg" alt="Creative Project" />
              <div className="portfolio-overlay">
                <h3>Creative Direction</h3>
                <p>Artistic Photography</p>
              </div>
            </div>
            
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="contact-cta section py-32 bg-black">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Create Something Amazing?</h2>
            <p className="cta-description">Let's discuss your next project</p>
            <a href="/#contact" className="cta-button">Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
