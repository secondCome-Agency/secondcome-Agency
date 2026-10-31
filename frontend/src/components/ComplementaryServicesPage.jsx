import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ComplementaryServices.css';

export const COMPLEMENTARY_SERVICES_DATA = [
  {
    id: 1,
    num: '01',
    refName: 'Google Reviews Engine- 3k',
    title: 'Google Reviews Engine',
    valueTag: '3k',
    numericValue: 3000,
    category: 'Reputation & SEO',
    tagline: 'Automated 5-star social proof capture & sentiment acceleration',
    shortDesc: 'Automated 5-star review collection via branded tap points and smart WhatsApp filters.',
    description:
      'Turn happy clients into automated 5-star Google reviews. We deploy custom NFC/QR review touchpoints, automated SMS/WhatsApp triggers, and smart feedback filtering to elevate your public reputation score effortlessly.',
    shortDeliverables: [
      'Automated WhatsApp / SMS review triggers',
      'Smart sentiment routing (5★ to Google)',
      'Branded NFC tap cards & counter standees'
    ],
    deliverables: [
      'Automated post-purchase review request engine via WhatsApp / SMS',
      'Smart sentiment filter to route issues privately and 5-stars to Google',
      'Branded printable in-store NFC & QR review tap cards / counter standees',
      'Live review monitoring & automated CEO response templates'
    ],
    highlight: 'Builds authentic social proof that boosts local rank by up to 34%.'
  },
  {
    id: 2,
    num: '02',
    refName: 'Google Business Profile- 2.5k',
    title: 'Google Business Profile',
    valueTag: '2.5k',
    numericValue: 2500,
    category: 'Local Dominance',
    tagline: 'Complete GBP claimed verification, optimization & map dominance',
    shortDesc: 'Full profile verification, geo-tagged imagery, and local category structuring.',
    description:
      'We claim, verify, and fully architect your official Google Business Profile. From geo-tagged imagery and service hierarchies to keyword integration, we ensure your business ranks prominently when prospects search nearby.',
    shortDeliverables: [
      'Verification lock & ownership security',
      'Geo-tagged photo catalog uploads',
      'Direct booking links & FAQ integration'
    ],
    deliverables: [
      'End-to-end profile verification and ownership security lock',
      'Exact-match primary and secondary business category structuring',
      'High-resolution geo-tagged photo uploads (interior, exterior, team)',
      'Service catalog, operating hours, direct booking link & FAQ integration'
    ],
    highlight: 'Transforms high-intent "near me" searches directly into phone calls & visits.'
  },
  {
    id: 3,
    num: '03',
    refName: 'Foundational On-Page SEO- 3.5k',
    title: 'Foundational On-Page SEO',
    valueTag: '3.5k',
    numericValue: 3500,
    category: 'Search Architecture',
    tagline: 'Technical metadata, semantic hierarchy & schema indexing',
    shortDesc: 'High-CTR meta tags, semantic headings, and JSON-LD schema for Google indexing.',
    description:
      'Engineered on-page search infrastructure. We optimize your title tags, meta descriptions, semantic H1-H3 structures, canonical tags, and rich JSON-LD Schema markup so search engines index your brand as an authority.',
    shortDeliverables: [
      'High-CTR editorial titles & meta tags',
      'Structured JSON-LD schema markup',
      'Search Console sync & crawl fix'
    ],
    deliverables: [
      'High-CTR editorial title tags and meta descriptions across core pages',
      'Semantic H1–H3 heading hierarchy alignment and keyword positioning',
      'Structured JSON-LD schema (LocalBusiness, Organization & FAQ schemas)',
      'Google Search Console verification, XML sitemap sync & crawl fix'
    ],
    highlight: 'Essential technical foundation required to rank on page 1 of Google.'
  },
  {
    id: 4,
    num: '04',
    refName: 'Website Core Speed Optimization- 3k',
    title: 'Website Core Speed Optimization',
    valueTag: '3k',
    numericValue: 3000,
    category: 'Speed & Tech',
    tagline: 'Sub-second load times & Google Core Web Vitals optimization',
    shortDesc: 'Sub-second load times via WebP compression, script deferral, and Core Web Vitals tuning.',
    description:
      'Speed equals conversions. We compress and convert heavy assets to next-gen WebP formats, eliminate render-blocking scripts, configure browser caching, and optimize Core Web Vitals (LCP, FID, CLS) for instant loading.',
    shortDeliverables: [
      'Lossless next-gen WebP image conversion',
      'Render-blocking script deferral',
      'Target 90+ Google PageSpeed score'
    ],
    deliverables: [
      'Next-generation WebP image conversion and lossless compression',
      'Render-blocking CSS and JavaScript deferral & lazy loading',
      'Browser caching headers & asset preloading configuration',
      'Target 90+ score on Google PageSpeed Insights for mobile & desktop'
    ],
    highlight: 'A 1-second reduction in page load speed can increase conversions by 27%.'
  },
  {
    id: 5,
    num: '05',
    refName: 'Social Profile & Brand Align- 2k',
    title: 'Social Profile & Brand Align',
    valueTag: '2k',
    numericValue: 2000,
    category: 'Brand & Creative',
    tagline: 'Aesthetic visual harmony across Instagram, LinkedIn & Facebook',
    shortDesc: 'Luxury cover banners, conversion bios, and branded highlight icons across all profiles.',
    description:
      'Eliminate disjointed branding. We redesign and align your public social channels with cohesive luxury cover banners, conversion-focused bios, custom story highlight icons, and a single high-converting link hub.',
    shortDeliverables: [
      'Bespoke banners for LinkedIn & YouTube',
      'High-converting bio copywriting',
      'Custom branded Instagram story highlights'
    ],
    deliverables: [
      'Bespoke luxury header banners for LinkedIn, Facebook, and YouTube',
      'High-converting bio copywriting with distinct value proposition & CTA',
      'Custom branded Instagram highlight covers and story templates',
      'Single centralized luxury link-in-bio hub with tracking parameters'
    ],
    highlight: 'Establishes instant visual credibility the moment a prospect lands on your profile.'
  },
  {
    id: 6,
    num: '06',
    refName: 'High-Impact Creative Posters - 2.5k',
    title: 'High-Impact Creative Posters',
    valueTag: '2.5k',
    numericValue: 2500,
    category: 'Brand & Creative',
    tagline: 'Editorial print & digital promo assets engineered to stop scrolls',
    shortDesc: 'Editorial promotional posters with bespoke typography engineered for print and digital.',
    description:
      'High-concept graphic design created for both physical display and digital marketing. We craft custom typography and luxury visual layouts that deliver your primary marketing message with prestige and punch.',
    shortDeliverables: [
      '3 custom luxury promotional posters',
      'Print-ready 300 DPI CMYK files',
      'Multi-aspect ratios for IG Feed & Stories'
    ],
    deliverables: [
      '3 custom luxury promotional posters tailored to your core offering',
      'High-resolution CMYK print-ready files (300 DPI, vector formats)',
      'Digital multi-aspect ratios optimized for Instagram Stories & Feed',
      'Editable Figma/design source assets for future campaign iterations'
    ],
    highlight: 'Luxury visual storytelling that demands attention both offline and online.'
  },
  {
    id: 7,
    num: '07',
    refName: 'Dynamic QR Touchpoint Integration- 2k',
    title: 'Dynamic QR Touchpoint Integration',
    valueTag: '2k',
    numericValue: 2000,
    category: 'Speed & Tech',
    tagline: 'Smart, trackable QR bridges linking physical collateral to funnels',
    shortDesc: 'Branded dynamic QR codes linking physical print collateral to digital funnels.',
    description:
      'Dynamic, branded QR codes that connect physical posters, packaging, table cards, or business cards directly to your digital booking calendar, WhatsApp automation, or promotional landing page without reprinting.',
    shortDeliverables: [
      'Custom branded dynamic QR code design',
      'Real-time cloud destination rerouting',
      'Google Analytics UTM scan tracking'
    ],
    deliverables: [
      'Custom branded dynamic QR code with agency color integration & logo',
      'Cloud rerouting capability to change destination URL at any time',
      'UTM parameter tagging to track real-world scans inside Google Analytics',
      'High-resolution vector SVG and EPS files for crisp print reproduction'
    ],
    highlight: 'Never reprint marketing materials again when campaign links or offers change.'
  },
  {
    id: 8,
    num: '08',
    refName: 'Website UX & Touchpoint Tweaks - 2.5k',
    title: 'Website UX & Touchpoint Tweaks',
    valueTag: '2.5k',
    numericValue: 2500,
    category: 'Speed & Tech',
    tagline: 'Frictionless mobile navigation & sticky conversion bars',
    shortDesc: 'Frictionless mobile navigation, sticky contact bars, and form optimizations.',
    description:
      'Micro-optimizations that deliver macro-revenue. We audit and enhance mobile touch targets, implement sticky thumb-friendly CTA buttons, eliminate input friction in forms, and refine interactive hover feedback.',
    shortDeliverables: [
      'Sticky thumb navigation bar for mobile',
      'Form field simplification & autofill',
      'Tactile micro-animations on key CTAs'
    ],
    deliverables: [
      'Mobile-first sticky thumb navigation bar for instant contact access',
      'Form friction reduction (field simplification, autofill optimization)',
      'Micro-animations and tactile feedback on interactive buttons',
      'Viewport contrast check and accessibility compliance enhancement'
    ],
    highlight: 'Transforms casual mobile visitors into engaged, booked inquiries.'
  },
  {
    id: 9,
    num: '09',
    refName: 'GMB & Local Authority Booster- 2.5k',
    title: 'GMB & Local Authority Booster',
    valueTag: '2.5k',
    numericValue: 2500,
    category: 'Local Dominance',
    tagline: 'NAP citation consistency & local directory authority building',
    shortDesc: 'Synchronized NAP data across top directories to boost Map Pack proximity rank.',
    description:
      'Solidify your local search dominance. We distribute and synchronize your NAP (Name, Address, Phone) across prominent regional business directories, boosting localized domain authority and Map Pack proximity ranking.',
    shortDeliverables: [
      '20+ verified directory citations',
      'NAP consistency audit & duplicate removal',
      'Geo-targeted keyword seeding'
    ],
    deliverables: [
      '20+ verified citations across top business directories and map engines',
      'NAP consistency audit and deduplication to remove duplicate listings',
      'Geo-targeted local keyword seeding in business descriptions',
      'Map Pack competitive positioning report and ranking audit'
    ],
    highlight: 'Ensures Google trusts your location data above local competitors.'
  },
  {
    id: 10,
    num: '10',
    refName: 'Conversion Journey Optimization- 3.5k',
    title: 'Conversion Journey Optimization',
    valueTag: '3.5k',
    numericValue: 3500,
    category: 'Strategy & Growth',
    tagline: 'Funnel leak diagnosis & psychological conversion triggers',
    shortDesc: 'Customer decision mapping, drop-off reduction, and psychological conversion triggers.',
    description:
      'Comprehensive forensic analysis of how a prospect discovers, navigates, and makes a purchasing decision. We identify friction points, drop-off barriers, and inject urgency and proof triggers to maximize close rates.',
    shortDeliverables: [
      'End-to-end customer decision path mapping',
      'Psychological headline & CTA copywriting',
      'Risk-reversal & guarantee placement'
    ],
    deliverables: [
      'Full customer decision path mapping from first ad click to payment',
      'Headline and CTA copywriting enhancement using conversion psychology',
      'Risk-reversal and guarantee positioning across booking touchpoints',
      'Abandoned session recapture blueprint & lead magnet placement'
    ],
    highlight: 'Plugs silent revenue leaks and extracts more profit from existing traffic.'
  },
  {
    id: 11,
    num: '11',
    refName: 'Offline-to-Digital Synergy Audit- 2.5k',
    title: 'Offline-to-Digital Synergy Audit',
    valueTag: '2.5k',
    numericValue: 2500,
    category: 'Strategy & Growth',
    tagline: 'Turn physical walk-in visitors into high-LTV digital customers',
    shortDesc: 'Turn in-person store or clinic visitors into owned digital retention audiences.',
    description:
      'Most businesses lose 80% of in-person traffic without capturing a digital contact. We audit your store, clinic, or venue touchpoints and implement a seamless capture strategy to build an owned digital retention audience.',
    shortDeliverables: [
      'On-site customer touchpoint inspection',
      'Staff digital contact collection guide',
      'Automated walk-in follow-up flow'
    ],
    deliverables: [
      'On-site inspection of collateral, packaging, and check-out touchpoints',
      'Staff conversation guide & incentive prompt for digital contact collection',
      'Automated SMS/WhatsApp welcome sequence for walk-in prospects',
      'Actionable 10-point omnichannel transformation report'
    ],
    highlight: 'Monetize existing foot traffic into lifetime recurring digital clients.'
  },
  {
    id: 12,
    num: '12',
    refName: '90-Day Strategic Growth Handover- 3k',
    title: '90-Day Strategic Growth Handover',
    valueTag: '3k',
    numericValue: 3000,
    category: 'Strategy & Growth',
    tagline: 'Documented SOPs, performance dashboards & long-term scaling blueprint',
    shortDesc: 'Comprehensive ROI review, team operating SOPs, and next-quarter scaling roadmap.',
    description:
      'At the 90-day milestone, we deliver a comprehensive growth retrospective, complete operating playbook, custom KPI metrics dashboard, and documented SOPs so your brand retains permanent institutional advantage.',
    shortDeliverables: [
      'Executive 90-day ROI & attribution review',
      'Documented team SOP playbook',
      'Next-quarter scaling roadmap & budget'
    ],
    deliverables: [
      'Executive 90-day performance review and ROI attribution report',
      'Custom standard operating procedure (SOP) documentation for your team',
      'Recorded video walkthrough explaining every system and campaign asset',
      'Next-quarter scaling targets, budget recommendations & creative roadmap'
    ],
    highlight: 'Leaves your company with lasting, organized, self-sustaining growth systems.'
  }
];

export default function ComplementaryServicesPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isThreeMonthsModalOpen, setIsThreeMonthsModalOpen] = useState(false);

  const categories = ['ALL', 'Reputation & SEO', 'Local Dominance', 'Speed & Tech', 'Brand & Creative', 'Strategy & Growth'];

  const filteredServices = useMemo(() => {
    return COMPLEMENTARY_SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.refName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalCalculatedValue = useMemo(() => {
    return COMPLEMENTARY_SERVICES_DATA.reduce((acc, curr) => acc + curr.numericValue, 0);
  }, []);

  const handleWhatsAppContact = (serviceTitle = null) => {
    let message = "Hey SecondCome Agency! 👋 I'm interested in the 3-Month Retainer with the 12 Complementary Services Suite (Valued at 32.5k).";
    if (serviceTitle) {
      message = `Hey SecondCome Agency! 👋 I'm reviewing your Complementary Services and specifically interested in "${serviceTitle}" included in the 3-Month package. Could we talk about this?`;
    }
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/919528812309?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="comp-page-root">
      <div className="comp-container">
        {/* ==================================================================
            HERO HEADER WITH TOP-RIGHT CORNER BUTTON ("- 3 MONTHS ONLY")
            ================================================================== */}
        <section className="comp-header-wrapper" aria-label="Complementary Services Overview">
          <div className="comp-header-top-row">
            {/* Left Header Title Lockup */}
            <div className="comp-header-left">
              <div className="comp-eyebrow-pill">
                <span className="comp-eyebrow-dot" />
                <span>INCLUDED WITH EVERY 3-MONTH PARTNERSHIP</span>
              </div>

              <h1 className="comp-main-title">COMPLEMENTARY SERVICES</h1>

              <p className="comp-lead-desc">
                We believe true market dominance requires an uncompromising foundation. Every client partnering with
                Second Come Agency receives our complete 12-pillar acceleration suite—valued at{' '}
                <strong>₹32,500 (32.5k)</strong>—delivered <strong>100% complimentary</strong> to ensure explosive velocity.
              </p>
            </div>

            {/* Right Corner Button: "- 3 MONTHS ONLY" as requested */}
            <div className="comp-corner-action">
              <button
                type="button"
                className="btn-three-months-corner"
                id="btn-three-months-corner"
                onClick={() => setIsThreeMonthsModalOpen(true)}
                title="View 3 Months Only details and eligibility"
              >
                <span className="btn-pulse-beacon" />
                <span className="btn-corner-text">- 3 MONTHS ONLY</span>
                <svg className="btn-corner-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span className="corner-note">Limited-Window Client Benefit</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            METRICS & TOTAL COMBINED VALUE STRIP
            ================================================================== */}
        <div className="comp-metrics-strip" aria-label="Suite Value Metrics">
          <div className="metric-item">
            <span className="metric-label">TOTAL ACCELERATOR VALUE</span>
            <div className="metric-value-row">
              <span className="metric-number">32.5k</span>
              <span className="metric-sub">(₹{totalCalculatedValue.toLocaleString()})</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">YOUR INVESTMENT</span>
            <div className="metric-value-row">
              <span className="metric-strike">₹32,500</span>
              <span className="metric-highlight">₹0 FREE</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">DELIVERABLES INCLUDED</span>
            <div className="metric-value-row">
              <span className="metric-number">12</span>
              <span className="metric-sub">Full Service Pillars</span>
            </div>
          </div>

          <div className="metric-item">
            <span className="metric-label">ELIGIBILITY WINDOW</span>
            <div className="metric-value-row">
              <span className="metric-number">3 Months</span>
              <span className="metric-sub">Active Retainer</span>
            </div>
          </div>
        </div>

        {/* ==================================================================
            FILTER & SEARCH BAR
            ================================================================== */}
        <div className="comp-controls-bar">
          <div className="comp-category-tabs" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`comp-cat-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === 'ALL' ? 'ALL SERVICES (12)' : cat}
              </button>
            ))}
          </div>

          <div className="comp-search-box">
            <svg className="comp-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search reference services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="comp-search-input"
            />
          </div>
        </div>

        {/* ==================================================================
            12 REFERENCE SERVICES CARDS GRID
            ================================================================== */}
        <div className="comp-cards-grid">
          {filteredServices.map((service) => (
            <article className="comp-card" key={service.id} id={`service-${service.id}`}>
              <div className="comp-card-top-bar">
                <span className="comp-card-num">{service.num}</span>
                <span className="comp-card-cat-badge">{service.category}</span>
              </div>

              <div className="comp-card-title-group">
                <h2 className="comp-card-headline">{service.title}</h2>
                <div className="comp-value-tag">
                  <span className="comp-val-strike">Value: {service.valueTag}</span>
                  <span className="comp-val-free">100% INCLUDED</span>
                </div>
              </div>

              <p className="comp-card-desc">{service.shortDesc || service.description}</p>

              <ul className="comp-deliverables-list">
                {(service.shortDeliverables || service.deliverables.slice(0, 3)).map((d, idx) => (
                  <li className="comp-deliverable-item" key={idx}>
                    <svg className="comp-check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="comp-card-footer">
                <button
                  type="button"
                  className="comp-btn-details"
                  onClick={() => setSelectedService(service)}
                >
                  <span>VIEW FULL SPECS</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <span className="comp-card-retainer-pill">3-Month Retainer</span>
              </div>
            </article>
          ))}
        </div>

        {/* ==================================================================
            "WHY 3 MONTHS ONLY?" FEATURE EXPLANATION SECTION
            ================================================================== */}
        <section className="comp-benefit-section" id="why-three-months-section" aria-label="3 Months Retainer Commitment Benefit">
          <div className="comp-benefit-grid">
            <div className="comp-benefit-left">
              <div className="comp-benefit-badge">
                <span>EXCLUSIVE CLIENT BENEFIT</span>
              </div>
              <h2 className="comp-benefit-title">Why "- 3 Months Only"?</h2>
              <p className="comp-benefit-text">
                Real exponential growth doesn&apos;t happen overnight. It takes 90 days of consistent conversion data,
                continuous optimization, and creative momentum. When you commit to a 3-month growth journey with Second
                Come Agency, we absorb all upfront operational friction by gifting you our complete 12-service suite at zero cost.
              </p>

              <div className="comp-benefit-steps">
                <div className="comp-step-card">
                  <span className="comp-step-num">01</span>
                  <div>
                    <h3 className="comp-step-title">Lock In 3-Month Partnership</h3>
                    <p className="comp-step-desc">
                      Enroll in any of our core advertising, development, or brand strategy retainers.
                    </p>
                  </div>
                </div>

                <div className="comp-step-card">
                  <span className="comp-step-num">02</span>
                  <div>
                    <h3 className="comp-step-title">Instant Activation of All 12 Engines</h3>
                    <p className="comp-step-desc">
                      From Google Business Profile verification to Core Speed optimization, our team deploys all 12 services immediately.
                    </p>
                  </div>
                </div>

                <div className="comp-step-card">
                  <span className="comp-step-num">03</span>
                  <div>
                    <h3 className="comp-step-title">Complete 90-Day Scaling Handover</h3>
                    <p className="comp-step-desc">
                      You receive full documented SOPs, assets, rankings, and automated funnels that you own forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comp-benefit-right">
              <div className="comp-action-card-right">
                <span className="comp-action-badge-pill">LIMITED TIME CLIENT ALLOCATION</span>
                <div className="comp-action-price-banner">
                  <span className="comp-price-was">Standard Setup: ₹32,500</span>
                  <div className="comp-price-now">₹0</div>
                </div>
                <p className="comp-action-desc">
                  Claim all 12 complementary services seamlessly integrated into your 3-month agency retainer today.
                </p>

                <button
                  type="button"
                  className="comp-btn-claim-now"
                  onClick={() => handleWhatsAppContact()}
                >
                  <span>CLAIM COMPLEMENTARY SUITE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ==================================================================
          MODAL: SERVICE DETAILS EXPANDER
          ================================================================== */}
      {selectedService && (
        <div className="comp-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="comp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="comp-modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <span className="comp-modal-tag">{selectedService.category} • {selectedService.num}</span>
            <h3 className="comp-modal-title">{selectedService.title}</h3>

            <div className="comp-modal-val-row">
              <span className="comp-modal-badge">Standard Valuation: {selectedService.valueTag}</span>
              <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>
                ✓ 100% Complimentary with 3-Month Retainer
              </span>
            </div>

            <p className="comp-modal-desc">{selectedService.description}</p>

            <div className="comp-modal-section-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>KEY DELIVERABLES & SCOPE</span>
            </div>

            <ul className="comp-modal-deliverables">
              {selectedService.deliverables.map((item, idx) => (
                <li className="comp-modal-item" key={idx}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="comp-modal-cta-row">
              <button
                type="button"
                className="comp-modal-primary-btn"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  handleWhatsAppContact(title);
                }}
              >
                <span>CLAIM THIS SERVICE ON WHATSAPP</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          MODAL: "3 MONTHS ONLY" OFFER EXPLANATION
          ================================================================== */}
      {isThreeMonthsModalOpen && (
        <div className="comp-modal-backdrop" onClick={() => setIsThreeMonthsModalOpen(false)}>
          <div className="comp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="comp-modal-close-btn"
              onClick={() => setIsThreeMonthsModalOpen(false)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <span className="comp-modal-tag">SPECIAL RETAINER PROMOTION</span>
            <h3 className="comp-modal-title">- 3 MONTHS ONLY OFFER</h3>

            <div className="comp-modal-val-row">
              <span className="comp-modal-badge">Total Suite Worth: ₹32,500</span>
              <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>
                Zero Hidden Setup Fees
              </span>
            </div>

            <p className="comp-modal-desc">
              To achieve compounding revenue and establish brand authority, our engineering and creative teams require a
              structured 90-day execution runway. For clients who commit to a 3-month growth partnership, we waive every
              single implementation fee across all 12 complementary services.
            </p>

            <div className="comp-modal-section-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>WHAT IS INCLUDED IN THE 3-MONTH WINDOW?</span>
            </div>

            <ul className="comp-modal-deliverables">
              <li className="comp-modal-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>All 12 Reference Services:</strong> Full setup of Google Reviews, Business Profile, Speed, SEO, Posters &amp; more.</span>
              </li>
              <li className="comp-modal-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Zero Setup or Hidden Charges:</strong> 100% absorbed by Second Come Agency.</span>
              </li>
              <li className="comp-modal-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Permanent Asset Ownership:</strong> All created assets, QR systems, profiles &amp; SOPs remain yours forever.</span>
              </li>
            </ul>

            <div className="comp-modal-cta-row" style={{ flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
              <button
                type="button"
                className="comp-modal-primary-btn"
                style={{ width: '100%' }}
                onClick={() => {
                  setIsThreeMonthsModalOpen(false);
                  handleWhatsAppContact("3-Month Retainer with 12 Complementary Services");
                }}
              >
                <span>DISCUSS YOUR 3-MONTH PLAN ON WHATSAPP</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                type="button"
                style={{
                  background: 'none',
                  border: '1px solid rgba(45, 69, 77, 0.2)',
                  color: 'var(--color-dark-teal, #2D454D)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%'
                }}
                onClick={() => {
                  setIsThreeMonthsModalOpen(false);
                  setTimeout(() => {
                    document.getElementById('why-three-months-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
              >
                <span>VIEW FULL 90-DAY EXECUTION ROADMAP ↓</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
