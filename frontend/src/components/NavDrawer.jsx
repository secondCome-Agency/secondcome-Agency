import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { num: '01', text: 'ABOUT US', targetId: 'about' },
    { num: '02', text: 'OUR TEAM', href: '/team', isPage: true },
    { num: '03', text: 'COMPLEMENTARY SUPPORT', href: '/complementary-services', isPage: true },
    { num: '04', text: 'OUR CAPABILITIES', targetId: 'services' },
    { num: '05', text: 'CAMPAIGN PORTFOLIO', targetId: 'portfolio' },
    { num: '06', text: 'CLIENT RESULTS', targetId: 'testimonials' },
    { num: '07', text: 'START A PROJECT', targetId: 'contact' },
  ];

  const handleNavClick = (link) => (e) => {
    e.preventDefault();
    onClose();

    if (link.isPage) {
      navigate(link.href);
      window.scrollTo(0, 0);
      return;
    }

    const scrollToTarget = () => {
      if (link.targetId) {
        const el = document.getElementById(link.targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTarget, 300);
    } else {
      scrollToTarget();
    }
  };

  return (
    <div id="nav-drawer" className={`nav-drawer ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
      <div className="drawer-backdrop" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-body-top">
          <div className="drawer-header">
            <div className="drawer-logo-container">
              <span className="drawer-logo-script">Second Come</span>
              <span className="drawer-logo-sub">AGENCY</span>
            </div>
            <span className="drawer-tag">NAVIGATION</span>
          </div>
          <nav className="drawer-nav">
            <ul className="drawer-menu">
              {links.map((link) => (
                <li key={link.num}>
                  <a
                    href={link.isPage ? link.href : `/#${link.targetId}`}
                    className="drawer-link"
                    onClick={handleNavClick(link)}
                  >
                    <span className="link-num">{link.num}</span>
                    <span className="link-text">{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="drawer-footer">
          <p className="drawer-email">
            <a href="mailto:secondcome33@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              secondcome33@gmail.com
            </a>
          </p>
          <div className="drawer-socials">
            <a href="https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="https://www.linkedin.com/company/secondcome-in/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href="https://www.facebook.com/secondcome.in/" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
            <a href="https://www.youtube.com/@Secondcome" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

