import React from 'react';

export default function CaseStudiesSection() {
  const cases = [
    { client: 'SecondCome Agency', category: 'Brand Identity + Digital Experience', desc: 'Building a distinctive identity and immersive digital presence for a new-generation creative agency.' },
    { client: 'MoneyMate', category: 'Fintech Web Application', desc: 'Designing a clearer, more engaging experience for personal finance management.' },
    { client: 'E-Commerce Experience', category: 'Digital Commerce', desc: 'Creating a seamless shopping journey focused on product discovery and user experience.' },
    { client: 'LMS Platform', category: 'EdTech Experience', desc: 'Designing a modern learning environment that brings courses and learners together.' },
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
          {cases.concat(cases).map((c, idx) => (
            <div className="case-card" key={idx}>
              <span className="case-client">{c.client}</span>
              <div className="case-metric">{c.category}</div>
              <p className="case-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
