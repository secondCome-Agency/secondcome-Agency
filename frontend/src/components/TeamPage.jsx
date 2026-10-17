import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DepthCarousel from './DepthCarousel.jsx';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveredDetail, setIsHoveredDetail] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Akash',
      role: 'Founder & Chief Brand Strategist',
      tagline: 'High-Impact Luxury Brand Architecture & Executive Storytelling',
      category: 'STRATEGY',
      work: [
        'Brand Architecture & Positioning',
        'High-Impact Executive Storytelling',
        'Omnichannel Brand Identity Systems'
      ],
      img: team1,
      email: 'akashkumar1072008@gmail.com',
      badge: '40+ Enterprise Rebrands'
    },
    {
      id: 2,
      name: 'Anvi sharma',
      role: 'Head of AI & Development',
      tagline: 'Autonomous AI Agents & Enterprise Workflow Architecture',
      category: 'AI & Development',
      work: [
        'Custom Conversational AI Agents',
        'Enterprise Workflow Automations',
        'CRM & Data Pipeline Architecture'
      ],
      img: team2,
      email: 'tanusharma2313@gmail.com',
      badge: '24/7 Autonomous AI'
    },
    {
      id: 3,
      name: 'Suhani maurya',
      role: 'Lead Digital Architect & UI Designer',
      tagline: 'Luxury Web Platforms & Interactive 3D Digital Craft',
      category: 'DESIGN',
      work: [
        'Luxury Web Architecture',
        'Interactive 3D & Micro-Animations',
        'Performance Engineering & UX'
      ],
      img: team3,
      email: 'marcus@secondcomeagency.com',
      badge: 'Bespoke UI/UX'
    },
    {
      id: 4,
      name: 'Tannu bhadoria',
      role: 'VP of secondcome Growth & Performance',
      tagline: 'Omnichannel Paid Media & Conversion Scaling Engine',
      category: 'STRATEGY',
      work: [
        'Omnichannel Acquisition Strategy',
        'Paid Media & Performance Scaling',
        'Conversion Rate Optimization'
      ],
      img: team4,
      email: 'tannubhadoria92@gmail.com',
      badge: '10x Performance Scale'
    },
    {
      id: 5,
      name: 'Rashmi',
      role: 'Director of AI Automation & CRM Pipelines',
      tagline: 'Enterprise CRM Automations & Real-Time Data Pipelines',
      category: 'AI',
      work: [
        'Real-time Analytics Dashboards',
        'Enterprise Data Integrations',
        'Automated Lead Scoring Systems'
      ],
      img: team5,
      email: 'raghuvanshirashmi7037@gmail.com',
      badge: 'Enterprise Systems'
    }
  ];

  const filteredMembers = activeFilter === 'ALL'
    ? teamMembers
    : teamMembers.filter((m) => {
        if (activeFilter === 'STRATEGY') return m.category.includes('STRATEGY');
        if (activeFilter === 'AI') return m.category.includes('AI');
        if (activeFilter === 'DESIGN') return m.category.includes('DESIGN');
        return m.category === activeFilter;
      });

  const activeMember = filteredMembers[activeIndex] || filteredMembers[0] || teamMembers[0];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setActiveIndex(0);
  };

  const methodology = [
    {
      num: '01',
      title: 'Bespoke Discovery & Positioning',
      desc: 'We analyze your brand core, uncover untapped positioning angles, and outline a tailored roadmap built for category dominance.'
    },
    {
      num: '02',
      title: 'Autonomous System Engineering',
      desc: 'Our AI engineers deploy intelligent 24/7 automation systems, turning manual lead generation into automated scale.'
    },
    {
      num: '03',
      title: 'High-Conversion Digital Platforms',
      desc: 'We craft stunning visual identities, interactive web experiences, and high-converting performance growth engines.'
    }
  ];

  return (
    <div className="team-page dark-executive-theme">
      {/* Background Ambient Lights */}
      <div className="team-bg-glow glow-1"></div>
      <div className="team-bg-glow glow-2"></div>

      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-container">
          <div className="trust-pill dark-pill">
            <span className="trust-dot"></span> THE MINDS BEHIND SECOND COME AGENCY
          </div>

          <div className="dual-heading-wrapper" style={{ margin: '1.5rem 0' }}>
            <span className="heading-script team-script-cyan">Visionaries, Engineers & Designers</span>
            <h1 className="heading-serif team-hero-title">THE MASTERS OF BRAND & AUTOMATION</h1>
          </div>

          <p className="team-hero-subtitle">
            We fuse high-end luxury brand positioning, 24/7 autonomous AI engineering, and bespoke digital architecture to engineer radical market growth.
          </p>

          {/* Metric Badges */}
          <div className="team-metrics-grid">
            <div className="metric-box">
              <span className="metric-val">40+</span>
              <span className="metric-lbl">BRANDS REPOSITIONED</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">24/7</span>
              <span className="metric-lbl">AI AUTOMATION</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">10x</span>
              <span className="metric-lbl">AVERAGE ROI</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">BESPOKE DELIVERY</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="team-filter-pills">
            {[
              { id: 'ALL', label: 'ALL MASTERS (5)' },
              { id: 'STRATEGY', label: 'BRAND STRATEGY' },
              { id: 'AI', label: 'AI & AUTOMATION' },
              { id: 'DESIGN', label: 'DESIGN & UI' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase Two-Column Section */}
      <section className="team-grid-section">
        <div className="team-container">
          <div className="team-split-section">
            {/* LEFT SIDE: Team Member Information */}
            <div className="team-detail-col">
              <div
                className="team-detail-card"
                key={activeMember.id}
                onMouseEnter={() => setIsHoveredDetail(true)}
                onMouseLeave={() => setIsHoveredDetail(false)}
              >
                <div className="detail-header-meta">
                  <div className="detail-tags">
                    <span className="detail-category-badge">
                      <span className="detail-category-dot"></span>
                      {activeMember.category}
                    </span>
                    <span className="detail-highlight-badge">{activeMember.badge}</span>
                  </div>
                  <span className="detail-counter">
                    <span className="counter-current">{String(activeIndex + 1).padStart(2, '0')}</span>
                    <span className="counter-sep">/</span>
                    <span className="counter-total">{String(filteredMembers.length).padStart(2, '0')}</span>
                  </span>
                </div>

                <div className="detail-title-group">
                  <h3 className="detail-name heading-serif">{activeMember.name}</h3>
                  <p className="detail-designation">{activeMember.role}</p>
                  <p className="detail-tagline-text">{activeMember.tagline}</p>
                </div>

                <div className="detail-divider"></div>

                <div className="detail-scope-block">
                  <div className="scope-block-header">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan-accent)" strokeWidth="2.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="scope-block-title">CORE SCOPE OF WORK & RESPONSIBILITIES</span>
                  </div>
                  <ul className="detail-scope-list">
                    {activeMember.work.map((item, idx) => (
                      <li key={idx} className="detail-scope-item">
                        <div className="scope-check-circle">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="scope-item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-footer-action">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(activeMember.email)}&su=${encodeURIComponent('Inquiry via Second Come Agency - ' + activeMember.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-connect-btn"
                  >
                    <span>CONNECT WITH {activeMember.name.split(' ')[0].toUpperCase()}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Team Member Carousel Cards */}
            <div className="team-carousel-col">
              <DepthCarousel
                items={filteredMembers}
                cardWidth={320}
                cardHeight={460}
                radius={22}
                tint="#0e181c"
                depth={190}
                spread={85}
                tilt={16}
                tiltDirection="right"
                perspective={1300}
                visibleCards={4}
                falloff={0.22}
                blur={5}
                duration={650}
                ease="power3.out"
                autoplay={true}
                autoplayDelay={4500}
                loop={true}
                showControls={true}
                showIndicators={true}
                isPaused={isHoveredDetail}
                onChange={(idx) => setActiveIndex(idx)}
                renderCard={(item) => (
                  <>
                    <div className="card-portrait-wrapper">
                      <img src={item.img} alt={item.name} className="card-portrait-img" draggable={false} />
                      <div className="card-portrait-gradient"></div>
                      {item.badge && (
                        <span className="card-portrait-badge">{item.badge}</span>
                      )}
                    </div>

                    <div className="card-caption-block">
                      <h3 className="card-member-name heading-serif">{item.name}</h3>
                      <p className="card-member-tagline">{item.tagline || item.role}</p>
                    </div>
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="team-methodology-section">
        <div className="team-container">
          <div className="methodology-header">
            <span className="heading-script team-script-cyan">Precision, Innovation, Scale</span>
            <h2 className="heading-serif methodology-heading">HOW OUR TEAM OPERATES</h2>
          </div>

          <div className="methodology-cards-grid">
            {methodology.map((m) => (
              <div className="dark-methodology-card" key={m.num}>
                <span className="dark-methodology-num">{m.num}</span>
                <h4 className="dark-methodology-title">{m.title}</h4>
                <p className="dark-methodology-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-bottom-cta">
        <div className="team-container" style={{ textAlign: 'center' }}>
          <span className="heading-script team-script-cyan">Let's build something iconic</span>
          <h2 className="heading-serif team-bottom-heading">
            READY TO COLLABORATE WITH OUR TEAM?
          </h2>
          <p className="team-bottom-text">
            Partner with our executive strategists and AI engineers to transform ambitious goals into market-defining execution.
          </p>
          <div className="team-bottom-actions">
            <Link to="/#contact" className="btn-primary btn-cta-light">
              <span>START A PROJECT</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/" className="btn-secondary-cyan">
              RETURN TO HOME
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
