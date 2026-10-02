import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComplementaryServicesPage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);
  const featureRef = useRef(null);
  const calculatorRef = useRef(null);
  const ctaRef = useRef(null);

  // Interactive States
  const [activeMonthFilter, setActiveMonthFilter] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [businessType, setBusinessType] = useState('local');
  const [primaryGoal, setPrimaryGoal] = useState('trust');
  const [simulatedWeek, setSimulatedWeek] = useState(6);
  const [activeFaq, setActiveFaq] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);

  const monthsData = [
    {
      monthNum: '01',
      monthTitle: 'FOUNDATION',
      tagline: 'Establishing baseline trust, search indexation, and core performance.',
      icon: '🛡️',
      color: '#76e3d9',
      badgeText: 'WEEKS 1–4',
      services: [
        {
          id: 'm1-1',
          title: 'Google Reviews Engine',
          desc: 'Establish a systematic review collection process and customer trust badges.',
          impact: 'High Trust',
          scope: ['Review collection funnel setup', 'Google Review link shortener & QR', 'Customer sentiment response guide', 'Trust badge widgets for website'],
          estValue: '$650',
          previewType: 'reviews'
        },
        {
          id: 'm1-2',
          title: 'Google Business Profile',
          desc: 'Complete GBP overhaul, category verification, visual assets, and local SEO keywords.',
          impact: 'Local Visibility',
          scope: ['Category & attribute optimization', 'Cover & photo asset optimization', 'Geotagged business listing verification', 'Weekly post scheduling setup'],
          estValue: '$500',
          previewType: 'gmb'
        },
        {
          id: 'm1-3',
          title: 'Foundational On-Page SEO',
          desc: 'Schema markups, meta titles, target keywords, and initial crawl optimization.',
          impact: 'Search Index',
          scope: ['Meta tags & open graph optimization', 'JSON-LD structured data schema', 'Sitemap generation & Search Console submit', 'H1-H3 header structure audit'],
          estValue: '$750',
          previewType: 'seo'
        },
        {
          id: 'm1-4',
          title: 'Website Core Speed Optimization',
          desc: 'Asset compression, caching policies, and Core Web Vitals performance boost.',
          impact: 'Sub-second Load',
          scope: ['WebP image compression pipeline', 'Font loading optimization (FOUT/FOIT)', 'JS script deferral & chunk cleanup', 'Lighthouse score target: 90+'],
          estValue: '$600',
          previewType: 'speed'
        },
      ],
    },
    {
      monthNum: '02',
      monthTitle: 'OPTIMIZATION',
      tagline: 'Elevating brand consistency, lead touchpoints, and print-to-digital synergy.',
      icon: '⚡',
      color: '#A0EFE9',
      badgeText: 'WEEKS 5–8',
      services: [
        {
          id: 'm2-1',
          title: 'Social Profile & Brand Align',
          desc: 'Synchronize visual identity, bio links, and key banners across all platforms.',
          impact: 'Brand Cohesion',
          scope: ['Unified avatar & banner design', 'Link-in-bio custom mini landing page', 'Highlight cover icons for Instagram', 'Cross-platform handle consistency'],
          estValue: '$450',
          previewType: 'social'
        },
        {
          id: 'm2-2',
          title: 'High-Impact Creative Posters',
          desc: 'Custom digital banners, social templates, and printable promo collaterals.',
          impact: 'Visual Prestige',
          scope: ['3 Custom high-res promo poster designs', 'Social media launch carousel assets', 'Print-ready vector PDF & CMYK files', 'Editable Canva/Figma asset kit'],
          estValue: '$700',
          previewType: 'creatives'
        },
        {
          id: 'm2-3',
          title: 'Dynamic QR Touchpoint Integration',
          desc: 'Bridge offline customer traffic directly to digital review or menu endpoints.',
          impact: 'Offline Funnel',
          scope: ['Branded dynamic QR codes with analytics', 'Printable table tent / desk card layouts', 'Direct-to-WhatsApp or Call link routing', 'Scan track & conversion reporting'],
          estValue: '$400',
          previewType: 'qr'
        },
        {
          id: 'm2-4',
          title: 'Website UX & Touchpoint Tweaks',
          desc: 'Fine-tuning critical conversion pages, mobile nav, and friction points.',
          impact: 'Higher Conversion',
          scope: ['Mobile navigation & sticky bar polish', 'Form field simplification & validation', 'CTA contrast & tap-target optimization', 'Micro-interactions on interactive cards'],
          estValue: '$650',
          previewType: 'ux'
        },
      ],
    },
    {
      monthNum: '03',
      monthTitle: 'GROWTH',
      tagline: 'Maximizing conversion velocity, local authority, and long-term polish.',
      icon: '🚀',
      color: '#6B9E9B',
      badgeText: 'WEEKS 9–12',
      services: [
        {
          id: 'm3-1',
          title: 'GMB & Local Authority Booster',
          desc: 'Geo-targeted Q&A setup, product catalog listing, and citation audit.',
          impact: 'Map Pack Rank',
          scope: ['Local citation consistency audit', 'GBP FAQ section population', 'Service catalog pricing cards', 'Review response automation template'],
          estValue: '$550',
          previewType: 'gmb-adv'
        },
        {
          id: 'm3-2',
          title: 'Conversion Journey Optimization',
          desc: 'A/B micro-testing recommendations and heatmapped CTA adjustments.',
          impact: 'Revenue Velocity',
          scope: ['Form conversion funnel audit', 'Exit-intent or sticky bar strategy', 'Value proposition message polish', 'Analytics event tracking confirmation'],
          estValue: '$800',
          previewType: 'cro'
        },
        {
          id: 'm3-3',
          title: 'Offline-to-Digital Synergy Audit',
          desc: 'Evaluating total customer touchpoint journey from physical to digital response.',
          impact: 'Omnichannel',
          scope: ['Customer journey map review', 'Print marketing QR performance audit', 'Follow-up email/SMS template advice', 'Cross-channel brand alignment report'],
          estValue: '$500',
          previewType: 'omni'
        },
        {
          id: 'm3-4',
          title: '90-Day Strategic Growth Handover',
          desc: 'Comprehensive performance recap report and future expansion roadmap.',
          impact: 'Long-term Scale',
          scope: ['3-Month analytics baseline report', 'SEO ranking benchmark comparison', 'Custom maintenance checklist', '1-on-1 strategic growth consultation call'],
          estValue: '$600',
          previewType: 'roadmap'
        },
      ],
    },
  ];

  // Calculated ROI Values
  const calculateROI = () => {
    let base = 2700;
    if (businessType === 'ecommerce') base += 850;
    if (businessType === 'corporate') base += 1400;

    let multiplier = 1.0;
    if (primaryGoal === 'speed') multiplier = 1.15;
    if (primaryGoal === 'leads') multiplier = 1.25;

    const totalVal = Math.round(base * multiplier);
    return {
      totalVal: `$${totalVal.toLocaleString()}`,
      boostPct: primaryGoal === 'leads' ? '+38%' : primaryGoal === 'speed' ? '+65%' : '+45%',
      hoursSaved: '45+ Hours',
      m1Val: `$${Math.round(totalVal * 0.35)}`,
      m2Val: `$${Math.round(totalVal * 0.33)}`,
      m3Val: `$${Math.round(totalVal * 0.32)}`,
    };
  };

  const roiStats = calculateROI();

  // FAQ Data
  const faqs = [
    {
      q: 'Is there any hidden cost or catch with the 3 months of complementary support?',
      a: 'Zero hidden costs. Every client who partners with SecondCome Agency for a website build or core project automatically receives this 3-month growth engine completely free as standard.'
    },
    {
      q: 'When does the 3-month complementary support period officially start?',
      a: 'The clock begins on the exact date your main website or core digital deliverable goes live. Month 01 starts immediately upon launch so we build momentum straight away.'
    },
    {
      q: 'Can we request customizations to the 3-month support schedule?',
      a: 'Absolutely. While we follow our proven 3-phase framework (Foundation → Optimization → Growth), we tailor specific tasks based on your business priorities, industry, and existing digital footprint.'
    },
    {
      q: 'What happens after the 3-month complementary period finishes?',
      a: 'You retain full 100% ownership of all assets, setups, and accounts created. You can manage them independently with the handover checklist we provide, or opt into our extended retainer care packages if desired.'
    }
  ];

  // Canvas Particle Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create glowing particles
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#76e3d9' : '#A0EFE9',
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background glow follow cursor
      const radial = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      radial.addColorStop(0, 'rgba(118, 227, 217, 0.08)');
      radial.addColorStop(1, 'rgba(21, 36, 41, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Connect near particles with faint glowing lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(118, 227, 217, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      gsap.from('.comp-hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.comp-month-card', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
      });

      gsap.from('.comp-calc-anim', {
        scrollTrigger: {
          trigger: calculatorRef.current,
          start: 'top 80%',
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.comp-feature-anim', {
        scrollTrigger: {
          trigger: featureRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.comp-cta-anim', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Navigate to contact form
  const handleExploreSupport = (e) => {
    e?.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const inputEl = document.getElementById('fullName');
          if (inputEl) inputEl.focus();
        }, 400);
      }
    }, 300);
  };

  // Filter months for tab view
  const filteredMonths = activeMonthFilter === 'all'
    ? monthsData
    : monthsData.filter((m) => m.monthNum === activeMonthFilter);

  // Before / After Drag logic
  const handleMoveSlider = (e) => {
    if (!isDraggingSlider) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div className="comp-services-page" ref={pageRef}>

      {/* HERO SECTION WITH CANVAS & STATS */}
      <section className="comp-hero-section" ref={heroRef}>
        <canvas ref={canvasRef} className="comp-hero-canvas"></canvas>
        <div className="comp-container relative z-10">

          <div className="comp-hero-top-badge comp-hero-anim">
            <span className="comp-badge-sparkle">✨</span>
            <span>INCLUDED FREE WITH EVERY PROJECT</span>
            <span className="comp-badge-live-pulse"></span>
          </div>

          <div className="comp-hero-header">
            <h1 className="heading-serif comp-hero-headline comp-hero-anim">
              COMPLEMENTARY<br />
              <span className="comp-gradient-text">CONCIERGE ENGINE</span>
            </h1>
            <div className="heading-script comp-hero-script comp-hero-anim">
              90 days of continuous growth, on us.
            </div>
          </div>

          <div className="comp-hero-body-wrap comp-hero-anim">
            <p className="comp-hero-body">
              Your website launch is just the beginning. For 90 days after delivery, our team works relentlessly behind the scenes to optimize your search presence, user conversion, social cohesion, and brand prestige.
            </p>
            <div className="comp-hero-actions">
              <button onClick={() => {
                const el = document.getElementById('comp-calculator');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="pill-btn comp-action-primary">
                <span>CALCULATE INCLUDED VALUE</span>
                <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button onClick={() => {
                const el = document.getElementById('comp-roadmap');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} className="comp-action-secondary">
                <span>VIEW 3-MONTH ROADMAP</span>
              </button>
            </div>
          </div>

          {/* DYNAMIC IMPACT MATRIX STATS BAR */}
          <div className="comp-hero-stats-grid comp-hero-anim">
            <div className="comp-stat-card">
              <div className="comp-stat-val">$2,800+</div>
              <div className="comp-stat-lbl">Estimated Free Value</div>
              <div className="comp-stat-sub">Zero additional fees</div>
            </div>
            <div className="comp-stat-card">
              <div className="comp-stat-val">90 Days</div>
              <div className="comp-stat-lbl">Dedicated Concierge</div>
              <div className="comp-stat-sub">3 structured monthly sprints</div>
            </div>
            <div className="comp-stat-card">
              <div className="comp-stat-val">12+</div>
              <div className="comp-stat-lbl">Key Micro-Deliverables</div>
              <div className="comp-stat-sub">SEO, GBP, UX & QR funnels</div>
            </div>
            <div className="comp-stat-card">
              <div className="comp-stat-val">100%</div>
              <div className="comp-stat-lbl">Asset Ownership</div>
              <div className="comp-stat-sub">All setups remain yours forever</div>
            </div>
          </div>

        </div>
      </section>

      {/* ROADMAP SECTION WITH MONTH TABS & INTERACTIVE CARDS */}
      <section className="comp-timeline-section" id="comp-roadmap" ref={timelineRef}>
        <div className="comp-container">
          
          <div className="comp-timeline-header-wrap">
            <div>
              <span className="comp-section-label">THE 90-DAY STRATEGIC ARCHITECTURE</span>
              <h2 className="heading-serif comp-section-title">3 MONTHS. TOTAL TRANSMUTATION.</h2>
            </div>

            {/* MONTH FILTER TABS */}
            <div className="comp-tabs-bar">
              <button 
                className={`comp-tab-btn ${activeMonthFilter === 'all' ? 'is-active' : ''}`}
                onClick={() => setActiveMonthFilter('all')}
              >
                <span>ALL PHASES (01–03)</span>
              </button>
              <button 
                className={`comp-tab-btn ${activeMonthFilter === '01' ? 'is-active' : ''}`}
                onClick={() => setActiveMonthFilter('01')}
              >
                <span>MONTH 01: FOUNDATION</span>
              </button>
              <button 
                className={`comp-tab-btn ${activeMonthFilter === '02' ? 'is-active' : ''}`}
                onClick={() => setActiveMonthFilter('02')}
              >
                <span>MONTH 02: OPTIMIZATION</span>
              </button>
              <button 
                className={`comp-tab-btn ${activeMonthFilter === '03' ? 'is-active' : ''}`}
                onClick={() => setActiveMonthFilter('03')}
              >
                <span>MONTH 03: GROWTH</span>
              </button>
            </div>
          </div>

          <div className="comp-months-grid">
            {filteredMonths.map((m) => (
              <div className="comp-month-card" key={m.monthNum}>
                
                <div className="comp-month-card-badge">
                  <span>{m.badgeText}</span>
                </div>

                <div className="comp-month-top">
                  <div className="comp-month-icon-wrap">
                    <span className="comp-month-icon">{m.icon}</span>
                    <span className="comp-month-num">{m.monthNum}</span>
                  </div>
                  <div>
                    <span className="comp-month-tag">PHASE {m.monthNum}</span>
                    <h3 className="heading-serif comp-month-title">{m.monthTitle}</h3>
                  </div>
                </div>

                <p className="comp-month-tagline">{m.tagline}</p>
                <div className="comp-month-divider"></div>

                <div className="comp-services-list">
                  {m.services.map((item) => (
                    <div 
                      className="comp-service-item" 
                      key={item.id}
                      onClick={() => setSelectedServiceModal(item)}
                    >
                      <div className="comp-service-header">
                        <span className="comp-service-bullet"></span>
                        <h4 className="comp-service-name">{item.title}</h4>
                        <span className="comp-service-pill">{item.impact}</span>
                      </div>
                      <p className="comp-service-desc">{item.desc}</p>
                      
                      <div className="comp-service-footer">
                        <span className="comp-service-value">Est. Val: {item.estValue}</span>
                        <span className="comp-service-inspect-btn">
                          INSPECT & SCOPE 
                          <svg width="14" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DYNAMIC VALUE CALCULATOR SECTION */}
      <section className="comp-calculator-section" id="comp-calculator" ref={calculatorRef}>
        <div className="comp-container">
          <div className="comp-calc-box comp-calc-anim">
            
            <div className="comp-calc-header">
              <span className="comp-section-label">INTERACTIVE ESTIMATOR</span>
              <h2 className="heading-serif comp-calc-title">CALCULATE YOUR INCLUDED COMPLEMENTARY VALUE</h2>
              <p className="comp-calc-sub">See how much value SecondCome injects directly into your business during your first 90 days after launch.</p>
            </div>

            <div className="comp-calc-grid">
              
              {/* Controls */}
              <div className="comp-calc-controls">
                
                <div className="comp-calc-group">
                  <label className="comp-calc-label">1. SELECT YOUR BUSINESS MODEL</label>
                  <div className="comp-calc-options">
                    <button 
                      className={`comp-calc-opt ${businessType === 'local' ? 'is-selected' : ''}`}
                      onClick={() => setBusinessType('local')}
                    >
                      🏢 Local Business / Clinic / Studio
                    </button>
                    <button 
                      className={`comp-calc-opt ${businessType === 'ecommerce' ? 'is-selected' : ''}`}
                      onClick={() => setBusinessType('ecommerce')}
                    >
                      🛍️ E-Commerce / Storefront
                    </button>
                    <button 
                      className={`comp-calc-opt ${businessType === 'corporate' ? 'is-selected' : ''}`}
                      onClick={() => setBusinessType('corporate')}
                    >
                      🏛️ Corporate / Professional Services
                    </button>
                  </div>
                </div>

                <div className="comp-calc-group">
                  <label className="comp-calc-label">2. SELECT PRIMARY 90-DAY GROWTH GOAL</label>
                  <div className="comp-calc-options">
                    <button 
                      className={`comp-calc-opt ${primaryGoal === 'trust' ? 'is-selected' : ''}`}
                      onClick={() => setPrimaryGoal('trust')}
                    >
                      ⭐ Build Instant Trust & Local Reviews
                    </button>
                    <button 
                      className={`comp-calc-opt ${primaryGoal === 'speed' ? 'is-selected' : ''}`}
                      onClick={() => setPrimaryGoal('speed')}
                    >
                      ⚡ Blazing Site Speed & Core Vitals
                    </button>
                    <button 
                      className={`comp-calc-opt ${primaryGoal === 'leads' ? 'is-selected' : ''}`}
                      onClick={() => setPrimaryGoal('leads')}
                    >
                      🎯 Maximize Customer Inquiries & CTR
                    </button>
                  </div>
                </div>

              </div>

              {/* Output Card */}
              <div className="comp-calc-output-card">
                <div className="comp-calc-output-top">
                  <span className="comp-calc-output-tag">TOTAL INCLUDED VALUE</span>
                  <div className="comp-calc-big-val">{roiStats.totalVal}</div>
                  <span className="comp-calc-zero-fee">100% Free with your SecondCome Project</span>
                </div>

                <div className="comp-calc-breakdown">
                  <div className="comp-breakdown-row">
                    <span>Month 01 (Foundation)</span>
                    <span className="font-mono">{roiStats.m1Val}</span>
                  </div>
                  <div className="comp-breakdown-row">
                    <span>Month 02 (Optimization)</span>
                    <span className="font-mono">{roiStats.m2Val}</span>
                  </div>
                  <div className="comp-breakdown-row">
                    <span>Month 03 (Growth)</span>
                    <span className="font-mono">{roiStats.m3Val}</span>
                  </div>
                </div>

                <div className="comp-calc-perks">
                  <div className="comp-perk-badge">
                    <span className="comp-perk-icon">📈</span>
                    <span>Est. Growth Boost: <strong>{roiStats.boostPct}</strong></span>
                  </div>
                  <div className="comp-perk-badge">
                    <span className="comp-perk-icon">⏱️</span>
                    <span>Agency Time Saved: <strong>{roiStats.hoursSaved}</strong></span>
                  </div>
                </div>

                <button onClick={handleExploreSupport} className="pill-btn comp-calc-cta-btn">
                  <span>CLAIM WITH YOUR PROJECT</span>
                  <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE WEEK-BY-WEEK SIMULATOR */}
      <section className="comp-simulator-section">
        <div className="comp-container">
          
          <div className="comp-simulator-header">
            <span className="comp-section-label">INTERACTIVE TIMELINE SCRUBBER</span>
            <h2 className="heading-serif comp-section-title">THE 12-WEEK CONCIERGE PROGRESSION</h2>
            <p className="comp-simulator-sub">Drag the slider or click a week to preview what gets executed at every step of your 90-day journey.</p>
          </div>

          <div className="comp-simulator-box">
            
            {/* Week Scrubber Bar */}
            <div className="comp-scrubber-controls">
              <label className="comp-scrubber-label">CURRENT TIMELINE: <strong>WEEK {simulatedWeek} OF 12</strong></label>
              <input 
                type="range" 
                min="1" 
                max="12" 
                value={simulatedWeek} 
                onChange={(e) => setSimulatedWeek(parseInt(e.target.value))}
                className="comp-week-range-slider"
              />
              <div className="comp-scrubber-ticks">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((w) => (
                  <button 
                    key={w} 
                    className={`comp-tick-btn ${simulatedWeek === w ? 'is-active' : ''}`}
                    onClick={() => setSimulatedWeek(w)}
                  >
                    W{w}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Output Dashboard */}
            <div className="comp-simulator-dashboard">
              
              <div className="comp-sim-col">
                <span className="comp-sim-phase-badge">
                  {simulatedWeek <= 4 ? 'PHASE 01: FOUNDATION' : simulatedWeek <= 8 ? 'PHASE 02: OPTIMIZATION' : 'PHASE 03: GROWTH'}
                </span>
                <h3 className="heading-serif comp-sim-week-title">Week {simulatedWeek} Milestones</h3>
                
                <ul className="comp-sim-checklist">
                  {simulatedWeek <= 4 && (
                    <>
                      <li className="is-done">✓ Audit Google Business Profile baseline & reviews</li>
                      <li className="is-done">✓ Configure website Schema Markups & OpenGraph metadata</li>
                      <li className="is-in-progress">⚙️ Compress hero image pipelines & defer render-blocking scripts</li>
                      <li>○ Generate Google Review shortlink & client response playbook</li>
                    </>
                  )}
                  {simulatedWeek > 4 && simulatedWeek <= 8 && (
                    <>
                      <li className="is-done">✓ Review Month 01 GBP & SEO traffic indexation stats</li>
                      <li className="is-done">✓ Design custom brand social banners & Instagram highlight covers</li>
                      <li className="is-in-progress">⚙️ Generate dynamic QR codes for print collaterals & menus</li>
                      <li>○ Refine mobile navigation bar & sticky contact CTA buttons</li>
                    </>
                  )}
                  {simulatedWeek > 8 && (
                    <>
                      <li className="is-done">✓ Complete Month 02 Conversion audit & mobile tap-target tweaks</li>
                      <li className="is-done">✓ Launch GMB product catalog & geotagged post cadence</li>
                      <li className="is-in-progress">⚙️ Audit offline-to-digital QR funnel analytics & conversion rates</li>
                      <li>○ Handover 90-day comprehensive SEO & brand metrics report</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="comp-sim-col comp-sim-visual-box">
                <div className="comp-sim-screen-header">
                  <span className="comp-dot red"></span>
                  <span className="comp-dot yellow"></span>
                  <span className="comp-dot green"></span>
                  <span className="comp-sim-screen-title">SecondCome Concierge Engine • Live Status Preview</span>
                </div>
                
                <div className="comp-sim-screen-body">
                  <div className="comp-sim-metric-row">
                    <span>Core Web Vitals Speed Score</span>
                    <span className="comp-metric-highlight font-mono">{simulatedWeek * 6 + 28} / 100</span>
                  </div>
                  <div className="comp-sim-bar-bg">
                    <div className="comp-sim-bar-fill" style={{ width: `${Math.min(100, simulatedWeek * 6 + 28)}%` }}></div>
                  </div>

                  <div className="comp-sim-metric-row mt-4">
                    <span>Search Indexation & Trust Signals</span>
                    <span className="comp-metric-highlight font-mono">{Math.min(100, simulatedWeek * 8 + 15)}% Complete</span>
                  </div>
                  <div className="comp-sim-bar-bg">
                    <div className="comp-sim-bar-fill cyan" style={{ width: `${Math.min(100, simulatedWeek * 8 + 15)}%` }}></div>
                  </div>

                  <div className="comp-sim-status-banner mt-6">
                    <span className="comp-pulse-ring"></span>
                    <span>Status: Active Monitoring & Optimization in progress</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BEFORE VS AFTER INTERACTIVE COMPARISON */}
      <section className="comp-comparison-section">
        <div className="comp-container">
          
          <div className="comp-comparison-header">
            <span className="comp-section-label">THE TRANSFORMATIONAL DIFFERENCE</span>
            <h2 className="heading-serif comp-section-title">WITHOUT VS WITH SECONDCOME CONCIERGE</h2>
            <p className="comp-simulator-sub">Drag the interactive slider to see how your digital presence transforms over 90 days.</p>
          </div>

          <div 
            className="comp-slider-container"
            onMouseDown={() => setIsDraggingSlider(true)}
            onMouseUp={() => setIsDraggingSlider(false)}
            onMouseLeave={() => setIsDraggingSlider(false)}
            onMouseMove={handleMoveSlider}
            onTouchStart={() => setIsDraggingSlider(true)}
            onTouchEnd={() => setIsDraggingSlider(false)}
            onTouchMove={handleMoveSlider}
          >
            {/* After Side (Right / Base) */}
            <div className="comp-slider-pane comp-pane-after">
              <span className="comp-pane-label is-after">WITH SECONDCOME 90-DAY CONCIERGE ✨</span>
              <div className="comp-pane-content">
                <div className="comp-pane-card">
                  <div className="comp-card-badge green">90+ Lighthouse Score</div>
                  <h3>Blazing Fast & Conversion Focused</h3>
                  <p>Optimized Core Web Vitals, active Google Reviews strategy, synchronized social branding, dynamic QR touchpoints, and continuous monthly tweaks.</p>
                  <ul className="comp-check-list">
                    <td>✓ 4.9★ Google Business Profile Rating</td>
                    <td>✓ Sub-second Page Load Times</td>
                    <td>✓ High-converting Mobile UX & Sticky CTAs</td>
                    <td>✓ 100% Asset & Schema Indexing</td>
                  </ul>
                </div>
              </div>
            </div>

            {/* Before Side (Left / Clipped) */}
            <div className="comp-slider-pane comp-pane-before" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
              <span className="comp-pane-label is-before">WITHOUT CONCIERGE SUPPORT ⚠️</span>
              <div className="comp-pane-content">
                <div className="comp-pane-card before-card">
                  <div className="comp-card-badge red">Static / Forgotten Website</div>
                  <h3>Stagnant Launch & Missed Reviews</h3>
                  <p>Website is launched but left untouched. No review strategy, unoptimized search profiles, slow image assets, and zero post-launch growth momentum.</p>
                  <ul className="comp-check-list-warn">
                    <td>⚠️ Low Google Reviews & Zero Schema Markup</td>
                    <td>⚠️ Slow Mobile Load Times & High Bounce Rate</td>
                    <td>⚠️ Disconnected Social Profiles & Offline Touchpoints</td>
                    <td>⚠️ No Ongoing Growth or Performance Analytics</td>
                  </ul>
                </div>
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div className="comp-slider-handle" style={{ left: `${sliderPos}%` }}>
              <div className="comp-handle-line"></div>
              <div className="comp-handle-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURE SPOTLIGHT SECTION */}
      <section className="comp-feature-section" ref={featureRef}>
        <div className="comp-container">
          <div className="comp-feature-grid">
            <div className="comp-feature-left comp-feature-anim">
              <span className="comp-section-label">EXTENDED DEDICATED ENGAGEMENT</span>
              <h2 className="heading-serif comp-feature-heading">
                THREE MONTHS.<br />
                MORE THAN JUST A WEBSITE.
              </h2>
              <p className="comp-feature-body">
                We believe exceptional digital agencies should stand beside their creations long after the code is deployed. For three full months, SecondCome acts as your dedicated digital caretaker, ensuring your brand thrives in the wild.
              </p>
              <div className="comp-feature-badges">
                <div className="comp-f-badge">
                  <span className="comp-f-num">01</span>
                  <span>Structured Sprints</span>
                </div>
                <div className="comp-f-badge">
                  <span className="comp-f-num">02</span>
                  <span>Zero Lock-In</span>
                </div>
                <div className="comp-f-badge">
                  <span className="comp-f-num">03</span>
                  <span>Direct Team Access</span>
                </div>
              </div>
            </div>

            <div className="comp-feature-right comp-feature-anim">
              <div className="comp-progression-track">
                <div className="comp-progression-step">
                  <div className="comp-step-num">01</div>
                  <div className="comp-step-content">
                    <h4>Foundation & Indexation Phase</h4>
                    <p>Building essential trust signals, review presence, schema markup, and core Web Vitals speed.</p>
                  </div>
                </div>

                <div className="comp-step-connector">
                  <svg width="16" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20m0 0l-5-5m5 5l5-5" />
                  </svg>
                </div>

                <div className="comp-progression-step">
                  <div className="comp-step-num">02</div>
                  <div className="comp-step-content">
                    <h4>Optimization & Brand Cohesion Phase</h4>
                    <p>Elevating brand consistency across social handles, print QR touchpoints, and conversion UI polish.</p>
                  </div>
                </div>

                <div className="comp-step-connector">
                  <svg width="16" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20m0 0l-5-5m5 5l5-5" />
                  </svg>
                </div>

                <div className="comp-progression-step">
                  <div className="comp-step-num">03</div>
                  <div className="comp-step-content">
                    <h4>Growth Velocity & Handover Phase</h4>
                    <p>Maximizing customer inquiries, local map pack authority, and strategic long-term roadmap delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="comp-faq-section">
        <div className="comp-container">
          <div className="comp-faq-header">
            <span className="comp-section-label">CLEAR ANSWERS</span>
            <h2 className="heading-serif comp-section-title">COMPLEMENTARY SUPPORT FAQ</h2>
          </div>

          <div className="comp-faq-accordion">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`comp-faq-item ${activeFaq === i ? 'is-open' : ''}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="comp-faq-question">
                  <h3>{faq.q}</h3>
                  <span className="comp-faq-toggle">{activeFaq === i ? '−' : '+'}</span>
                </div>
                {activeFaq === i && (
                  <div className="comp-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="comp-cta-section" ref={ctaRef}>
        <div className="comp-container">
          <div className="comp-cta-box comp-cta-anim">
            <span className="heading-script comp-cta-script">Begin Your Transformation</span>
            <h2 className="heading-serif comp-cta-heading">
              READY TO ELEVATE YOUR BRAND WITH 90 DAYS OF INCLUDED CONCIERGE CARE?
            </h2>
            <p className="comp-cta-text">
              Partner with SecondCome Agency. Get a world-class digital experience plus 3 months of complementary growth engineering.
            </p>
            <div className="comp-cta-action">
              <button onClick={handleExploreSupport} className="pill-btn comp-cta-btn">
                <span>START YOUR PROJECT WITH FREE CONCIERGE</span>
                <svg className="pill-icon arrow-icon" width="22" height="14" viewBox="0 0 38 20" fill="none">
                  <path d="M23.5 12C25.6 10.8 27.6 9.7 29.7 8.5C31.3 7.6 32.9 6.7 34.5 5.8C35.8 5 37.5 4.3 36.8 2.9C36.1 1.5 33.1 0 29.7 1.8L24.5 4.7C24.2 4.9 23.7 5 23.3 4.8L12.1 1.3C11.5 1.1 10.9 1.1 10.3 1.5L7.3 3.3L15.2 9.9L10 12.8C9.4 13.1 8.7 13.2 8.1 13L4.4 11.8C3.8 11.6 3.2 11.7 2.7 12L1.3 13C0.8 13.4 0.8 14.2 1.3 14.6L5.8 17.8C7.8 19.2 10.2 19.3 12.3 18.2L15.5 16.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE INSPECTION MODAL */}
      {selectedServiceModal && (
        <div className="comp-modal-overlay" onClick={() => setSelectedServiceModal(null)}>
          <div className="comp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="comp-modal-close" onClick={() => setSelectedServiceModal(null)}>✕</button>
            
            <div className="comp-modal-header">
              <span className="comp-modal-pill">{selectedServiceModal.impact}</span>
              <h3 className="heading-serif comp-modal-title">{selectedServiceModal.title}</h3>
              <p className="comp-modal-desc">{selectedServiceModal.desc}</p>
            </div>

            <div className="comp-modal-body">
              <div className="comp-modal-scope-box">
                <h4>DELIVERABLE SCOPE & CHECKLIST</h4>
                <ul>
                  {selectedServiceModal.scope.map((item, index) => (
                    <li key={index}>
                      <span className="comp-check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="comp-modal-meta-grid">
                <div className="comp-modal-meta-item">
                  <span className="meta-lbl">ESTIMATED MONETARY VALUE</span>
                  <span className="meta-val highlight">{selectedServiceModal.estValue}</span>
                </div>
                <div className="comp-modal-meta-item">
                  <span className="meta-lbl">INCLUDED FREE</span>
                  <span className="meta-val">100% Covered</span>
                </div>
              </div>
            </div>

            <div className="comp-modal-footer">
              <button onClick={handleExploreSupport} className="pill-btn comp-modal-action">
                <span>INQUIRE ABOUT THIS PACKAGE</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
