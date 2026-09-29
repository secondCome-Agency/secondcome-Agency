import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="exact-site-footer">
      {/* Main Big Statement */}
      <div className="footer-hero-banner">
        <h2 className="footer-hero-heading">ENSURE YOUR COMEBACK IN SECONDCOME IS</h2>
        <div className="footer-hero-script">unforgettable</div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="footer-content-grid">
        {/* Left Section: Contact Info, Socials, Legal */}
        <div className="footer-left-sec">
          <div className="footer-contact-details">
            <a href="tel:+919528812309" className="footer-phone-link">
              +91 95288 12309
            </a>
            <a href="mailto:secondcome33@gmail.com" className="footer-email-link">
              secondcome33@gmail.com
            </a>
          </div>

          {/* Social Icons with working external links & target="_blank" */}
          <div className="footer-social-icons">
            {/* WhatsApp */}
            <a href="https://wa.me/919528812309" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/secondcome-in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61594604313306" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@Secondcome" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>

          {/* Legal / ReCAPTCHA Metadata */}
          <div className="footer-legal-container">
            <div className="footer-legal-links">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-recaptcha-notice">
              <p>This site is protected by reCAPTCHA and the Google</p>
              <p><a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
            </div>
          </div>
        </div>

        {/* Right Section: Navigation Links Columns */}
        <div className="footer-right-columns">
          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h3 className="footer-nav-title">QUICK LINKS</h3>
            <ul className="footer-nav-list">
              <li><a href="#home" onClick={scrollToTop}>Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-nav-col">
            <h3 className="footer-nav-title">CAPABILITIES</h3>
            <ul className="footer-nav-list">
              <li><a href="#crm">Business CRM & Pipelines</a></li>
              <li><a href="#automations">24/7 AI Automations</a></li>
              <li><a href="#marketing">Digital Performance Marketing</a></li>
              <li><a href="#branding">Brand Identity & Positioning</a></li>
              <li><a href="#web-platforms">High-Performance Web Platforms</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919528812309"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="floating-whatsapp-btn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </footer>
  );
}
