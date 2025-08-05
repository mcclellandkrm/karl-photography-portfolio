'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import InteractiveFeatures from '@/components/InteractiveFeatures';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <InteractiveFeatures />
      
      {/* Header */}
      <Header />
      
      {/* Case Studies Hero */}
      <section className="case-studies-hero section py-32 bg-black">
        <div className="container">
          <div className="case-studies-header">
            <div className="section-label text-gray">[CASE STUDIES]</div>
            <h1 className="section-title">In-Depth Project Analysis</h1>
            <p className="section-description">
              Detailed breakdowns of successful photography projects, from concept to completion.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies List */}
      <section className="case-studies-list section py-32 bg-white text-black">
        <div className="container">
          <div className="case-studies-grid">
            
            {/* KFC Case Study */}
            <div className="case-study-card">
              <div className="case-study-image">
                <img src="/images/case-studies/case2.jpg" alt="KFC Campaign" />
              </div>
              <div className="case-study-content">
                <div className="case-study-meta">
                  <span className="case-study-category">[Food/Beverage]</span>
                  <span className="case-study-date">2024</span>
                </div>
                <h2 className="case-study-title">KFC Brand Campaign</h2>
                <p className="case-study-excerpt">
                  A comprehensive visual campaign showcasing KFC's new menu items through dynamic food photography and lifestyle imagery that increased engagement by 45%.
                </p>
                <div className="case-study-details">
                  <div className="detail-item">
                    <span className="detail-label">Services:</span>
                    <span className="detail-value">Food Photography, Creative Direction</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">3 months</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Results:</span>
                    <span className="detail-value">45% increase in social engagement</span>
                  </div>
                </div>
                <a href="/case-studies/kfc" className="case-study-link">View Full Case Study →</a>
              </div>
            </div>
            
            {/* Jim Beam Case Study */}
            <div className="case-study-card">
              <div className="case-study-image">
                <img src="/images/case-studies/case4.jpg" alt="Jim Beam Campaign" />
              </div>
              <div className="case-study-content">
                <div className="case-study-meta">
                  <span className="case-study-category">[Food/Beverage]</span>
                  <span className="case-study-date">2024</span>
                </div>
                <h2 className="case-study-title">Jim Beam Heritage Campaign</h2>
                <p className="case-study-excerpt">
                  Captured the craftsmanship and heritage of Jim Beam through atmospheric product photography and behind-the-scenes documentation.
                </p>
                <div className="case-study-details">
                  <div className="detail-item">
                    <span className="detail-label">Services:</span>
                    <span className="detail-value">Product Photography, Documentary</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">2 months</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Results:</span>
                    <span className="detail-value">Brand awareness increase 30%</span>
                  </div>
                </div>
                <a href="/case-studies/jim-beam" className="case-study-link">View Full Case Study →</a>
              </div>
            </div>
            
            {/* Muscle Milk Case Study */}
            <div className="case-study-card">
              <div className="case-study-image">
                <img src="/images/case-studies/case1.jpg" alt="Muscle Milk Campaign" />
              </div>
              <div className="case-study-content">
                <div className="case-study-meta">
                  <span className="case-study-category">[Social]</span>
                  <span className="case-study-date">2023</span>
                </div>
                <h2 className="case-study-title">Muscle Milk Social Campaign</h2>
                <p className="case-study-excerpt">
                  High-energy fitness photography campaign that captured the strength and determination of athletes using Muscle Milk products.
                </p>
                <div className="case-study-details">
                  <div className="detail-item">
                    <span className="detail-label">Services:</span>
                    <span className="detail-value">Sports Photography, Social Content</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">4 months</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Results:</span>
                    <span className="detail-value">60% boost in social media reach</span>
                  </div>
                </div>
                <a href="/case-studies/muscle-milk" className="case-study-link">View Full Case Study →</a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
