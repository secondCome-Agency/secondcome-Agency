import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ isDrawerOpen, onToggleDrawer }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookCall = (e) => {
    e.preventDefault();

    const scrollToContact = () => {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('fullName');
          if (nameInput) nameInput.focus();
        }, 400);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToContact, 300);
    } else {
      scrollToContact();
    }
  };

  const handleSupportClick = (e) => {
    e.preventDefault();
    navigate('/complementary-services');
    window.scrollTo(0, 0);
  };

  return (
    <header className="site-header">
      {/* Top Red Marquee / Ticker Strip */}
      <Link to="/complementary-services" onClick={handleSupportClick} className="top-ticker-strip" aria-label="Explore Complementary Support">
        <div className="ticker-track">
          <div className="ticker-content">
            <span className="ticker-badge">3 MONTHS SUPPORT INCLUDED</span>
            <span className="ticker-star">✦</span>
            <span>SEO · GBP · SOCIAL OPTIMIZATION · WEBSITE SPEED</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-action">EXPLORE SUPPORT →</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-badge">3 MONTHS SUPPORT INCLUDED</span>
            <span className="ticker-star">✦</span>
            <span>SEO · GBP · SOCIAL OPTIMIZATION · WEBSITE SPEED</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-action">EXPLORE SUPPORT →</span>
            <span className="ticker-star">✦</span>
          </div>
          <div className="ticker-content" aria-hidden="true">
            <span className="ticker-badge">3 MONTHS SUPPORT INCLUDED</span>
            <span className="ticker-star">✦</span>
            <span>SEO · GBP · SOCIAL OPTIMIZATION · WEBSITE SPEED</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-action">EXPLORE SUPPORT →</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-badge">3 MONTHS SUPPORT INCLUDED</span>
            <span className="ticker-star">✦</span>
            <span>SEO · GBP · SOCIAL OPTIMIZATION · WEBSITE SPEED</span>
            <span className="ticker-star">✦</span>
            <span className="ticker-action">EXPLORE SUPPORT →</span>
            <span className="ticker-star">✦</span>
          </div>
        </div>
      </Link>

      <div className="header-inner">

        <button
          id="menu-toggle-btn"
          className="pill-btn pill-btn--left"
          onClick={onToggleDrawer}
          aria-label="Toggle Navigation"
        >
          <svg className="pill-icon wave-icon" width="28" height="14" viewBox="0 0 38 20" fill="none">
            <path className="wave-path-1" d="M37 4.99C33.5 1.8 29.3 0.37 25.1 1.25C20.7 2.18 17.6 6.43 13.4 8.2C9 10 4.7 8.5 1 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="wave-path-2" d="M37 15C33.5 11.8 29.3 10.3 25.1 11.2C20.7 12.1 17.6 16.4 13.4 18.2C9 20 4.7 18.5 1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="pill-text">{isDrawerOpen ? 'CLOSE' : 'MENU'}</span>
        </button>


        <div className="brand-logo-container">
          <Link to="/" className="brand-logo">
            <span className="logo-script">Second Come</span>
            <span className="logo-sub">AGENCY</span>
          </Link>
        </div>

        <button id="book-toggle-btn" onClick={handleBookCall} className="pill-btn pill-btn--right">
          <span className="pill-text">BOOK A CALL</span>
          <svg className="pill-icon arrow-icon" width="22" height="14" viewBox="0 0 38 20" fill="none">
            <path d="M23.5 12C25.6 10.8 27.6 9.7 29.7 8.5C31.3 7.6 32.9 6.7 34.5 5.8C35.8 5 37.5 4.3 36.8 2.9C36.1 1.5 33.1 0 29.7 1.8L24.5 4.7C24.2 4.9 23.7 5 23.3 4.8L12.1 1.3C11.5 1.1 10.9 1.1 10.3 1.5L7.3 3.3L15.2 9.9L10 12.8C9.4 13.1 8.7 13.2 8.1 13L4.4 11.8C3.8 11.6 3.2 11.7 2.7 12L1.3 13C0.8 13.4 0.8 14.2 1.3 14.6L5.8 17.8C7.8 19.2 10.2 19.3 12.3 18.2L15.5 16.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

