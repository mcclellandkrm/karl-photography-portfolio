'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import InteractiveFeatures from '@/components/InteractiveFeatures';

export default function KFCCaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <InteractiveFeatures />
      
      {/* Header */}
      <Header />
      
      {/* Case Study Hero */}
      <section className="case-study-hero section py-32 bg-black">
        <div className="container">
          <div className="case-study-header">
            <div className="section-label text-gray">[CASE STUDY]</div>
            <h1 className="case-study-title">KFC Brand Campaign</h1>
            <div className="case-study-meta">
              <span className="meta-item">[Food/Beverage]</span>
              <span className="meta-item">2024</span>
              <span className="meta-item">3 Month Project</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Image */}
      <section className="case-study-image section">
        <div className="full-width-image">
          <img src="/images/case-studies/case2.jpg" alt="KFC Campaign Hero" />
        </div>
      </section>
      
      {/* Project Overview */}
      <section className="project-overview section py-32 bg-white text-black">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2 className="section-title">Project Overview</h2>
              <p className="overview-text">
                KFC approached us to create a comprehensive visual campaign for their new menu launch. The challenge was to showcase their food in a way that felt both appetizing and premium while maintaining the brand's approachable personality.
              </p>
              <p className="overview-text">
                Our team developed a visual strategy that combined dynamic food photography with lifestyle elements, creating images that not only looked delicious but told a story about the KFC dining experience.
              </p>
            </div>
            <div className="project-details">
              <div className="detail-section">
                <h3 className="detail-title">Services Provided</h3>
                <ul className="detail-list">
                  <li>Food Photography</li>
                  <li>Creative Direction</li>
                  <li>Art Direction</li>
                  <li>Post-Production</li>
                </ul>
              </div>
              <div className="detail-section">
                <h3 className="detail-title">Results</h3>
                <ul className="detail-list">
                  <li>45% increase in social engagement</li>
                  <li>25% boost in online orders</li>
                  <li>Featured in Campaign Magazine</li>
                  <li>2M+ social media impressions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="project-process section py-32 bg-gray-light text-black">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">[01]</div>
              <h3 className="step-title">Discovery & Strategy</h3>
              <p className="step-description">
                We began with extensive brand research and competitor analysis to understand KFC's unique position in the market and identify opportunities for visual differentiation.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">[02]</div>
              <h3 className="step-title">Creative Development</h3>
              <p className="step-description">
                Our creative team developed mood boards, lighting concepts, and styling approaches that would bring the KFC brand to life through compelling food photography.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">[03]</div>
              <h3 className="step-title">Production</h3>
              <p className="step-description">
                Over 5 days of shooting, we captured hundreds of images featuring KFC's menu items, using specialized food styling and lighting techniques to achieve maximum visual impact.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">[04]</div>
              <h3 className="step-title">Post-Production</h3>
              <p className="step-description">
                Careful retouching and color grading ensured every image met KFC's brand standards while maintaining the authentic, mouth-watering appeal of their food.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery */}
      <section className="project-gallery section py-32 bg-white text-black">
        <div className="container">
          <h2 className="section-title">Final Results</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/case-studies/case2.jpg" alt="KFC Product Shot 1" />
            </div>
            <div className="gallery-item">
              <img src="/images/case-studies/case1.jpg" alt="KFC Product Shot 2" />
            </div>
            <div className="gallery-item">
              <img src="/images/case-studies/case3.jpg" alt="KFC Lifestyle Shot" />
            </div>
            <div className="gallery-item">
              <img src="/images/case-studies/case4.jpg" alt="KFC Behind the Scenes" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Project */}
      <section className="next-project section py-32 bg-black">
        <div className="container">
          <div className="next-project-content">
            <div className="next-label">Next Case Study</div>
            <h2 className="next-title">Jim Beam Heritage Campaign</h2>
            <a href="/case-studies/jim-beam" className="next-link">View Project →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
