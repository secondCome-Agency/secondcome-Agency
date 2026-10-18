import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './DepthCarousel.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpeg';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Akash',
    displayRole: 'Strategy Executer',
    pillTag: 'CHIEF EXECUTIVE OFFICER',
    bio: 'Akash helped build SecondCome Agency around the idea that ambitious businesses need bespoke luxury positioning, market-defining digital platforms, and autonomous systems. His focus is on turning overlooked brands into unforgettable market leaders, blending high-impact storytelling with measurable revenue architecture.',
    category: 'STRATEGY',
    img: team1,
    email: 'akashkumar1072008@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
  {
    id: 2,
    name: 'Anvi Sharma',
    displayRole: 'Developer',
    pillTag: 'CHIEF TECHNOLOGY OFFICER',
    bio: 'Anvi leads systems engineering, autonomous AI workflows, and CRM pipeline infrastructure at SecondCome. Her focus is on deploying intelligent conversational agents and automated data pipelines that eliminate operational friction and scale client acquisition 24/7.',
    category: 'AI',
    img: team2,
    email: 'tanusharma2313@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
  {
    id: 3,
    name: 'Sheetal sharma',
    displayRole: 'Marketing & sales',
    pillTag: 'Editor & Marketing',
    bio: 'Sheetal focuses on web platforms, editorial typography, and interactive micro-animations that elevate brands to luxury standards. Her human-centered design craft bridges aesthetics with high-performance conversion engineering to deliver unforgettable digital touchpoints.',
    category: 'Editing',
    img: team6,
    email: 'marcus@secondcomeagency.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
  {
    id: 4,
    name: 'Tannu Bhadoria',
    displayRole: 'COO',
    pillTag: 'CHIEF OPERATING OFFICER',
    bio: 'Tannu directs omnichannel media acquisition, operational coordination, and conversion rate optimization. She ensures strategic campaigns run with precision, managing high-performance ad spend into predictable scaling funnels for high-growth enterprises.',
    category: 'STRATEGY',
    img: team4,
    email: 'tannubhadoria92@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
  {
    id: 5,
    name: 'Rashmi',
    displayRole: 'Director of CRM',
    pillTag: 'DIRECTOR OF AI AUTOMATION',
    bio: 'Rashmi engineers intelligent enterprise CRM architectures, real-time analytics dashboards, and automated lead nurturing systems. Her data-driven pipelines ensure every inbound interaction is captured, scored, and converted efficiently.',
    category: 'AI',
    img: team5,
    email: 'raghuvanshirashmi7037@gmail.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
  {
    id: 6,
    name: 'Suhani Maurya',
    displayRole: 'Design Lead',
    pillTag: 'LEAD DIGITAL ARCHITECT',
    bio: 'Suhani focuses on bespoke web platforms, editorial typography, and interactive micro-animations that elevate brands to luxury standards. Her human-centered design craft bridges aesthetics with high-performance conversion engineering to deliver unforgettable digital touchpoints.',
    category: 'DESIGN',
    img: team3,
    email: 'marcus@secondcomeagency.com',
    socials: {
      linkedin: 'https://www.linkedin.com/company/secondcome-in/',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/secondcome.in?stkn=cG04MDh6cXpyZnlt'
    }
  },
];

const METHODOLOGY = [
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

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredMembers = useMemo(() => {
    if (activeFilter === 'ALL') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter((m) => {
      if (activeFilter === 'STRATEGY') return m.category.includes('STRATEGY');
      if (activeFilter === 'AI') return m.category.includes('AI');
      if (activeFilter === 'DESIGN') return m.category.includes('DESIGN');
      return m.category === activeFilter;
    });
  }, [activeFilter]);

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

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

      {/* Alternating Executive Spotlight Rows (Reference Image Layout) */}
      <section className="team-spotlight-section">
        <div className="team-container">
          <div className="team-spotlight-list">
            {filteredMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <React.Fragment key={member.id}>
                  <div className={`team-spotlight-row ${isEven ? 'row-normal' : 'row-reversed'}`}>
                    {/* Circle Portrait Frame */}
                    <div className="team-spotlight-photo-col">
                      <div className="team-circle-frame">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="team-circle-img"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="team-spotlight-content-col">
                      <div className="team-spotlight-pill">
                        <span>{member.pillTag}</span>
                      </div>

                      <h2 className="team-spotlight-name">
                        {member.name} – <span className="team-role-highlight">{member.displayRole}</span>
                      </h2>

                      <p className="team-spotlight-bio">
                        {member.bio}
                      </p>

                      <div className="team-spotlight-actions">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}&su=${encodeURIComponent('Executive Inquiry - ' + member.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-spotlight-btn"
                        >
                          <span>View Profile</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </a>

                        <div className="team-spotlight-socials">
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} LinkedIn`}
                            className="spotlight-social-btn"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                            </svg>
                          </a>
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} Twitter`}
                            className="spotlight-social-btn"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                          <a
                            href={member.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} Instagram`}
                            className="spotlight-social-btn"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < filteredMembers.length - 1 && (
                    <div className="team-spotlight-divider" aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
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
            {METHODOLOGY.map((m) => (
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
