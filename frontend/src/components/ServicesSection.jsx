import React, { useState } from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      num: '01 / ADS & LEADS',
      headline: 'Advertising & Lead Generation',
      subHeadline: 'Google Ads • YouTube Ads • LinkedIn Ads • Lead Generation Campaigns • Retargeting Campaigns • Campaign Optimization',
      desc: 'High-converting performance marketing, target lead acquisition engines, and precision multi-channel ad campaigns.',
      img: image3,
      tags: ['Google Ads', 'YouTube Ads', 'LinkedIn Ads', 'Lead Generation Campaigns', 'Retargeting Campaigns', 'Campaign Optimization']
    },
    {
      id: 2,
      num: '02 / WEB & DIGITAL',
      headline: 'Website & Digital Services',
      subHeadline: 'Website Development • Landing Pages • Website Redesign • Website Maintenance • E-commerce Setup • Website SEO Optimization',
      desc: 'Lightning-fast digital platforms, high-converting landing pages, e-commerce setups, and continuous SEO optimization.',
      img: image5,
      tags: ['Website Development', 'Landing Pages', 'Website Redesign', 'Website Maintenance', 'E-commerce Setup', 'Website SEO Optimization']
    },
    {
      id: 3,
      num: '03 / CREATIVE & DESIGN',
      headline: 'Creative & Design',
      subHeadline: 'Social Media Posts • Business Cards • Brochures • Flyers • Posters • Banners • Packaging • Presentations',
      desc: 'Bespoke brand graphics, luxury print collateral, executive presentation decks, and high-impact social media assets.',
      img: image1,
      tags: ['Social Media Posts', 'Business Cards', 'Brochures', 'Flyers', 'Posters', 'Banners', 'Packaging', 'Presentations']
    },
    {
      id: 4,
      num: '04 / GROWTH & STRATEGY',
      headline: 'Business Growth & Strategy',
      subHeadline: 'Marketing Strategy • Competitor Analysis • Market Research • Target Audience Research • Brand Positioning • Marketing Funnel • Sales Funnel Strategy • Customer Acquisition • Reputation Management • Marketing Consultation',
      desc: 'Comprehensive market intelligence, brand positioning frameworks, customer acquisition funnels, and executive consultation.',
      img: image4,
      tags: [
        'Marketing Strategy',
        'Competitor Analysis',
        'Market Research',
        'Target Audience Research',
        'Brand Positioning',
        'Marketing Funnel',
        'Sales Funnel Strategy',
        'Customer Acquisition',
        'Reputation Management',
        'Marketing Consultation'
      ]
    },
    {
      id: 5,
      num: '05 / AUTOMATION',
      headline: 'Marketing Automation',
      subHeadline: 'WhatsApp Automation • Lead Automation • Follow-ups • Email Automation • Social Media Automation • Review Automation • Form Automation • E-commerce Automation • Funnel Automation • Reporting Automation',
      desc: 'Autonomous 24/7 lead follow-up systems, WhatsApp automations, smart CRM workflows, and automated reporting engines.',
      img: image2,
      tags: [
        'WhatsApp Automation',
        'Lead Automation',
        'Follow-ups',
        'Email Automation',
        'Social Media Automation',
        'Review Automation',
        'Form Automation',
        'E-commerce Automation',
        'Funnel Automation',
        'Reporting Automation'
      ]
    }
  ];

  return (
    <section className="exact-services-section" id="services">
      <div className="services-inner-container">
        {/* Section Heading */}
        <div className="services-section-header">
          <span className="services-badge-pill">[ OUR CAPABILITIES ]</span>
          <h2 className="services-main-heading">CORE CAPABILITIES & SOLUTIONS</h2>
          <span className="services-script-sub">Engineered to accelerate modern market leaders</span>
        </div>

        {/* 3-Column Luxury Cards Grid */}
        <div className="services-luxury-grid">
          {servicesData.map((s) => (
            <div className="luxury-service-card" key={s.id}>
              <div className="luxury-card-img-wrapper">
                <img src={s.img} alt={s.headline} className="luxury-card-img" />
                <span className="luxury-card-badge">{s.num}</span>
              </div>
              <div className="luxury-card-body">
                <h3 className="luxury-card-title">{s.headline}</h3>
                <p className="luxury-card-desc">{s.desc}</p>

                <div className="card-footer-action">
                  <button className="btn-card-explore" onClick={() => setSelectedService(s)}>
                    <span>EXPLORE KEY SERVICES</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Detail Modal - Non-Scrollable */}
      {selectedService && (
        <div className="service-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setSelectedService(null)} aria-label="Close modal">
              ✕
            </button>
            <span className="modal-badge">{selectedService.num}</span>
            <h3 className="modal-headline">{selectedService.headline}</h3>

            <div className="modal-subheadline-block">
              <span className="subheadline-title">KEY CAPABILITIES OVERVIEW</span>
              <p className="modal-subheadline-text">{selectedService.subHeadline}</p>
            </div>

            <div className="modal-tags-grid">
              {selectedService.tags.map((tag, idx) => (
                <div className="modal-tag-card" key={idx}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#76e3d9" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <a href="#contact" className="btn-card-action" onClick={() => setSelectedService(null)}>
                <span>BOOK THIS SERVICE NOW</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


