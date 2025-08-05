'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import ServiceMouseFollower from '@/components/ServiceMouseFollower';
import OMOEffects from '@/components/OMOEffects';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <InteractiveFeatures />
      <OMOEffects />
      
      {/* Header - Transparent over video */}
      <Header />
      
      {/* Hero Section with Background Video */}
      <section className="hero-video" id="hero">
        {/* Video Background */}
        <video 
          className="hero-background-video"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/images/cta-image.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="hero-overlay"></div>
        
        {/* Content Overlay */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Vision. My Craft.<br />
              Unforgettable Results.
            </h1>
            
            <button className="explore-btn">
              Explore My Work
            </button>
          </div>
          
          {/* Client Logos on Right - OMO Style */}
          <div className="client-showcase">
            <div className="client-showcase-item active">
              <div className="client-text">Toyota</div>
              <div className="client-play">↳ View</div>
            </div>
            <div className="client-showcase-item">
              <div className="client-text">Aston Martin</div>
              <div className="client-play">↳ View</div>
            </div>
            <div className="client-showcase-item">
              <div className="client-text">Grand Opera House</div>
              <div className="client-play">↳ View</div>
            </div>
            <div className="client-showcase-item">
              <div className="client-text">B&Q</div>
              <div className="client-play">↳ View</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Our Clients */}
      <section id="my-work" className="clients-section section py-32 bg-gray-light">
        <div className="container">
          <div className="clients-content">
            <div className="clients-text">
              <div className="section-label">[MY WORK]</div>
              <div className="clients-description">
                <p className="fade-up-text">
                  Partnering with a diverse range of clients, delivering impactful solutions and virtual tours across social media, internal communications, PR and more.
                </p>
                <p className="fade-up-text">
                  No matter the platform or medium, we thrive in every arena, turning ideas into results.
                </p>
              </div>
            </div>
            
            <div className="client-logos-grid">
              <div className="client-logo-item fade-in">
                <img src="/images/logos/toyota-logo.png" alt="Toyota" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/astonmartin-logo.png" alt="Aston Martin" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/grandoperahouse-logo.png" alt="Grand Opera House" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/bandq-logo.png" alt="B&Q" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/lyrictheatre-logo.png" alt="Lyric Theatre" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/avanir-logo.png" alt="Avanir" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/solventum-logo.png" alt="Solventum" className="client-logo-img" />
              </div>
              <div className="client-logo-item fade-in">
                <img src="/images/logos/pepco-logo.png" alt="Pepco Holdings" className="client-logo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Stepped Reveal CTA - OMO Style */}
      <section className="stepped-cta-section">
        <div className="stepped-reveal-container">
          {/* 8 stepped reveal items */}
          <div className="reveal-step step-1"></div>
          <div className="reveal-step step-2"></div>
          <div className="reveal-step step-3"></div>
          <div className="reveal-step step-4"></div>
          <div className="reveal-step step-5"></div>
          <div className="reveal-step step-6"></div>
          <div className="reveal-step step-7"></div>
          <div className="reveal-step step-8"></div>
          
          {/* Background Image */}
          <div className="stepped-bg-image">
            <img 
              src="/images/cta-image.jpg" 
              alt="Let's Work Together" 
              className="stepped-image"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="stepped-overlay">
            <div className="stepped-content">
              <div className="stepped-badge">KARL MCCLELLAND</div>
              <div className="stepped-badge-2">LET'S WORK TOGETHER!</div>
              <h2 className="stepped-title">Join the List of Our Satisfied Clients</h2>
              <button className="stepped-button">
                <span className="button-text">Let's Collaborate</span>
                <span className="button-mask">Let's Collaborate</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 4: Our Services (FAQ Style) */}
      <section className="services-section section py-32 bg-white text-black">
        <ServiceMouseFollower />
        <div className="container">
          <div className="section-label text-gray">[OUR SERVICES]</div>
          
          <div className="services-list">
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[01]</span>
                <h3 className="service-title">Commercial Video + Photo Production</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>We specialize in creating high-quality video and photo assets that tell your brand&apos;s story and connect with your audience. From concept development to final delivery, we manage the entire production process, ensuring your vision comes to life with stunning visuals and engaging narratives. Whether for advertising campaigns, branded content, or internal communications, our productions elevate your message.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/commercial.jpg" alt="Commercial Production" />
                </div>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[02]</span>
                <h3 className="service-title">Video + Photo Shooting</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>Professional on-location and studio photography and videography services. We bring state-of-the-art equipment and creative expertise to capture compelling content that resonates with your target audience. From product photography to corporate headshots, event coverage to brand storytelling, we deliver exceptional visual content.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/portrait.jpg" alt="Video Photo Shooting" />
                </div>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[03]</span>
                <h3 className="service-title">Video + Photo Editing</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>Post-production excellence that transforms raw footage and images into polished, professional content. Our editing services include color grading, motion graphics, audio enhancement, and creative storytelling techniques that bring your vision to life with cinematic quality and impact.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/wedding.jpg" alt="Video Photo Editing" />
                </div>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[04]</span>
                <h3 className="service-title">PR Asset Development</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>Strategic visual asset creation for public relations and marketing campaigns. We develop compelling press materials, brand imagery, and promotional content that effectively communicates your message across traditional and digital media platforms, ensuring consistent brand representation.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/event.jpg" alt="PR Asset Development" />
                </div>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[05]</span>
                <h3 className="service-title">Creative Consultation</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>Strategic creative guidance to elevate your brand&apos;s visual identity and storytelling approach. We collaborate with you to develop comprehensive creative strategies, concept development, and brand positioning that sets your business apart in the competitive marketplace.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/product.jpg" alt="Creative Consultation" />
                </div>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-header">
                <span className="service-number">[06]</span>
                <h3 className="service-title">Social Media Content</h3>
                <button className="service-toggle">+</button>
              </div>
              <div className="service-content">
                <div className="service-text">
                  <p>Engaging visual content specifically designed for social media platforms. We create scroll-stopping imagery, short-form videos, and interactive content that drives engagement, builds brand awareness, and converts followers into customers across all major social platforms.</p>
                </div>
                <div className="service-image">
                  <img src="/images/services/lifestyle.jpg" alt="Social Media Content" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 5: Case Studies */}
      <section id="case-studies" className="case-studies-section section py-32 bg-white text-black">
        <div className="container">
          <div className="section-header">
            <div className="section-label text-gray">[CASE STUDIES]</div>
            <h2 className="section-title">Case Studies</h2>
          </div>
          
          <div className="case-studies-grid">
            <div className="case-study-item">
              <div className="case-study-image">
                <img src="/images/case-studies/case1.jpg" alt="Muscle Milk Campaign" />
                <div className="view-button">
                  <span>View</span>
                </div>
              </div>
              <div className="case-study-info">
                <h3 className="case-study-title">Muscle Milk</h3>
                <span className="case-study-category">[Social]</span>
              </div>
            </div>
            
            <div className="case-study-item">
              <div className="case-study-image">
                <img src="/images/case-studies/case2.jpg" alt="Toyota Campaign" />
                <div className="view-button">
                  <span>View</span>
                </div>
              </div>
              <div className="case-study-info">
                <h3 className="case-study-title">Toyota</h3>
                <span className="case-study-category">[Automotive]</span>
              </div>
            </div>
            
            <div className="case-study-item">
              <div className="case-study-image">
                <img src="/images/case-studies/case3.jpg" alt="Behind the Scenes" />
                <div className="view-button">
                  <span>View</span>
                </div>
              </div>
              <div className="case-study-info">
                <h3 className="case-study-title">Behind the Scenes</h3>
                <span className="case-study-category">[Production]</span>
              </div>
            </div>
            
            <div className="case-study-item">
              <div className="case-study-image">
                <img src="/images/case-studies/case4.jpg" alt="Jim Beam Campaign" />
                <div className="view-button">
                  <span>View</span>
                </div>
              </div>
              <div className="case-study-info">
                <h3 className="case-study-title">Jim Beam</h3>
                <span className="case-study-category">[Food/Beverage]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 6: Social */}
      <section className="social-section section py-32 bg-white text-black">
        <div className="container">
          <div className="social-content">
            <div className="section-label text-gray">[SOCIAL]</div>
            <h2 className="social-title">Follow Us for Behind the Scenes & Latest Work</h2>
            
            <div className="social-gallery">
              <div className="social-image">
                <img src="/images/social/social1.jpg" alt="Behind the scenes" />
              </div>
              <div className="social-image">
                <img src="/images/social/social2.jpg" alt="Latest work" />
              </div>
              <div className="social-image">
                <img src="/images/social/social3.jpg" alt="Production" />
              </div>
              <div className="social-image">
                <img src="/images/social/social4.jpg" alt="Setup" />
              </div>
              <div className="social-image">
                <img src="/images/social/social5.jpg" alt="Equipment" />
              </div>
            </div>
            
            <div className="social-links">
              <div className="social-link-item">
                <span className="social-number">[01]</span>
                <a href="#" className="social-link">Instagram</a>
              </div>
              <div className="social-link-item">
                <span className="social-number">[02]</span>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 7: My Story */}
      <section id="my-story" className="my-story-section section py-32 bg-gray-light text-black">
        <div className="container">
          <div className="story-content">
            <div className="section-label text-gray">[MY STORY]</div>
            <h2 className="section-title">Behind the Lens</h2>
            
            <div className="story-grid">
              <div className="story-text">
                <p>Photography has been my passion for over a decade. What started as a hobby capturing moments with friends has evolved into a professional journey dedicated to telling stories through powerful imagery.</p>
                
                <p>Based in Louisville, Kentucky, I specialize in creating authentic, compelling visual narratives for brands, individuals, and events. My approach combines technical expertise with creative vision to deliver images that not only look stunning but also connect emotionally with viewers.</p>
                
                <p>Every project is an opportunity to collaborate, create, and capture something unique. Whether it&apos;s a corporate campaign, a personal portrait session, or documenting a special event, I bring the same level of dedication and artistic vision to every shoot.</p>
                
                <div className="story-stats">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">100+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
              </div>
              
              <div className="story-image">
                <img src="/images/cta-image.jpg" alt="Karl McClelland Photography" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 8: Footer */}
      <footer id="contact" className="footer-section bg-black text-white py-32">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-info">
                <div className="footer-label">[A]</div>
                <div className="footer-address">Louisville, KY</div>
              </div>
              <div className="footer-info">
                <div className="footer-label">[E]</div>
                <div className="footer-email">Karl@KarlMcClelland.com</div>
              </div>
              <div className="footer-info">
                <div className="footer-label">[P]</div>
                <div className="footer-phone">502.555.0123</div>
              </div>
              <div className="footer-info">
                <div className="footer-label">[S]</div>
                <div className="footer-social">
                  <div>Instagram</div>
                  <div>YouTube</div>
                </div>
              </div>
            </div>
            
            <div className="footer-right">
              <h2 className="footer-title">Ready to Start Your Project?</h2>
              
              <form 
                className="contact-form"
                action="https://formspree.io/f/mjkwdwbp"
                method="POST"
              >
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your name" 
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    className="form-input"
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Comment" 
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="form-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
