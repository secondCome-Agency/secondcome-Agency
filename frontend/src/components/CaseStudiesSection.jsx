import React from 'react';

export default function CaseStudiesSection() {
  const projects = [
    {
      name: 'Travelling',
      client: 'Travelling Platform',
      category: 'Travel & Exploration',
      desc: 'Discover beautiful destinations and unforgettable travel experiences with curated guides and seamless destination exploration.',
      image: null,
      liveUrl: 'https://travelling-eta-three.vercel.app/',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'Wedding Venue',
      client: 'Wedding Venue',
      category: 'Venue & Events Platform',
      desc: 'Digital showcase and reservation experience tailored for luxury wedding venues, ceremony spaces, and celebration planning.',
      image: null,
      liveUrl: '', // Add live URL once deployed
      githubUrl: 'https://github.com/secondCome-Agency/wedding-venue',
    },
    {
      name: 'Interior',
      client: 'Interior Design',
      category: 'Architectural Portfolio',
      desc: 'Modern architectural interior portfolio showcasing bespoke living spaces, renovations, and aesthetic design concepts.',
      image: null,
      liveUrl: '', // Add live URL once deployed
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    // Preserved existing projects
    {
      name: 'MoneyMate',
      client: 'MoneyMate',
      category: 'Fintech Web Application',
      desc: 'Designing a clearer, more engaging experience for personal finance management.',
      image: null,
      liveUrl: 'https://example.com/moneymate',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'E-Commerce Experience',
      client: 'E-Commerce Experience',
      category: 'Digital Commerce',
      desc: 'Creating a seamless shopping journey focused on product discovery and user experience.',
      image: null,
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'LMS Platform',
      client: 'LMS Platform',
      category: 'EdTech Experience',
      desc: 'Designing a modern learning environment that brings courses and learners together.',
      image: null,
      liveUrl: 'https://example.com/lms',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'SecondCome Agency',
      client: 'SecondCome Agency',
      category: 'Brand Identity + Digital Experience',
      desc: 'Building a distinctive identity and immersive digital presence for a new-generation creative agency.',
      image: null,
      liveUrl: 'https://example.com/secondcome',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header-wrap">
        <span className="trust-pill"><span className="trust-dot"></span> PROVEN RECORD</span>
        <h2 className="heading-serif">FEATURED CASE STUDIES</h2>
        <span className="heading-script">Real metrics. Unmatched growth.</span>
      </div>

      <div className="case-marquee">
        <div className="case-track">
          {projects.concat(projects).map((item, idx) => (
            <div className="case-card" key={idx}>
              <div className="case-card-header">
                <span className="case-client">{item.client || item.name}</span>
                <span className="case-card-badge">{item.category}</span>
              </div>

              {item.image && (
                <div className="case-card-img-wrap">
                  <img src={item.image} alt={item.name} className="case-card-img" loading="lazy" />
                </div>
              )}

              <div className="case-metric">{item.name}</div>
              <p className="case-desc">{item.desc}</p>

              <div className="case-card-actions">
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn-live"
                    aria-label={`Live Demo of ${item.name}`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="case-btn case-btn-disabled"
                    disabled
                    title="Live Demo URL coming soon"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Demo Soon</span>
                  </button>
                )}

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn-code"
                    aria-label={`View code for ${item.name} on GitHub`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
