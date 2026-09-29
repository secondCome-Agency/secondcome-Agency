import React from 'react';

export default function CaseStudiesSection() {
  const cases = [
    { client: 'AURA LIFESTYLE', metric: '+1,050% ROI', desc: 'Scaled D2C revenue from $100k/mo to $1.2M/mo in 90 days via multi-channel ad engine.' },
    { client: 'VALKYRIE WEAR', metric: '14.2M VIEWS', desc: 'Viral cinematic video campaign generating 45,000+ waitlist signups in 14 days.' },
    { client: 'NEXUS CAPITAL', metric: '$18.9M REVENUE', desc: 'Luxury rebrand and institutional platform architecture repositioning client for Series B.' },
    { client: 'SOLARIS YACHTS', metric: '8.4x CONVERSION', desc: 'Bespoke 3D web experience increasing high-net-worth consultation bookings by 840%.' },
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
              <div className="case-metric">{c.metric}</div>
              <p className="case-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
