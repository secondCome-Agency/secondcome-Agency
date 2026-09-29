import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Akash',
      role: 'Founder & Chief Brand Strategist',
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
    : teamMembers.filter((m) => m.category === activeFilter);

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
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Showcase Grid */}
      <section className="team-grid-section">
        <div className="team-container">
          <div className="executive-team-grid">
            {filteredMembers.map((member) => (
              <div
                className={`executive-card ${hoveredCard === member.id ? 'is-active' : ''}`}
                key={member.id}
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="executive-image-container">
                  <img src={member.img} alt={member.name} className="executive-img" />
                  <div className="executive-image-gradient"></div>
                  <span className="executive-badge-pill">{member.badge}</span>
                </div>

                <div className="executive-card-content">
                  <h3 className="executive-name">{member.name}</h3>
                  <p className="executive-role-sub">{member.role}</p>

                  <div className="executive-scope">
                    <span className="scope-title">CORE SCOPE OF WORK</span>
                    <ul className="scope-list">
                      {member.work.map((item, idx) => (
                        <li key={idx}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan-accent)" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="executive-card-action">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}&su=${encodeURIComponent('Inquiry via Second Come Agency - ' + member.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="executive-connect-btn"
                    >
                      <span>CONNECT WITH {member.name.split(' ')[0].toUpperCase()}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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



