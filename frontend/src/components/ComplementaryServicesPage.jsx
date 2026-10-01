import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComplementaryServicesPage() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const featureRef = useRef(null);
  const ctaRef = useRef(null);

  const monthsData = [
    {
      monthNum: '01',
      monthTitle: 'FOUNDATION',
      services: [
        { title: 'Google Reviews', desc: 'Help establish a stronger review presence and customer trust.' },
        { title: 'Google Business Profile', desc: 'Optimize essential business information and digital visibility.' },
        { title: 'Basic SEO', desc: 'Improve foundational on-page SEO elements and discoverability.' },
        { title: 'Website Speed', desc: 'Identify and improve key website performance issues.' },
      ],
    },
    {
      monthNum: '02',
      monthTitle: 'OPTIMIZATION',
      services: [
        { title: 'Social Profile Optimization', desc: 'Improve social profiles for a more consistent and professional brand presence.' },
        { title: 'Creative Posters', desc: 'Create selected promotional creatives for digital and offline communication.' },
        { title: 'QR Integration', desc: 'Connect physical marketing touchpoints with the brand’s digital presence.' },
        { title: 'Website Improvements', desc: 'Make focused improvements to important website sections and customer touchpoints.' },
      ],
    },
    {
      monthNum: '03',
      monthTitle: 'GROWTH',
      services: [
        { title: 'GMB Enhancement', desc: 'Continue refining the Google Business Profile presence.' },
        { title: 'Conversion Optimization', desc: 'Improve important customer journeys and calls-to-action.' },
        { title: 'Offline Optimization', desc: 'Strengthen the connection between offline marketing and digital channels.' },
        { title: 'Digital Presence Refinement', desc: 'Make final strategic improvements based on the business’s needs and observations from the previous two months.' },
      ],
    },
  ];

  const handleExploreSupport = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Hero animation
      gsap.from('.comp-hero-anim', {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Timeline reveal
      gsap.from('.comp-month-card', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Line animation
      gsap.from('.comp-timeline-path', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
      });

      // Feature Section reveal
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

      // CTA reveal
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

  return (
    <div className="comp-services-page" ref={pageRef}>
      {/* HERO SECTION */}
      <section className="comp-hero-section" ref={heroRef}>
        <div className="comp-container">
          <div className="comp-hero-header">
            <span className="comp-hero-eyebrow comp-hero-anim">COMPLEMENTARY SUPPORT</span>
            <h1 className="heading-serif comp-hero-headline comp-hero-anim">
              COMPLEMENTARY<br />SERVICES
            </h1>
            <div className="heading-script comp-hero-script comp-hero-anim">
              A little extra, on us.
            </div>
          </div>

          <div className="comp-hero-body-wrap comp-hero-anim">
            <p className="comp-hero-body">
              Additional support designed to strengthen your digital presence beyond the core project.
            </p>
            <div className="comp-badge-wrapper">
              <div className="comp-period-badge">
                <span className="comp-badge-dot"></span>
                <span>AVAILABLE FOR 3 MONTHS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN VISUAL: 3-MONTH EDITORIAL TIMELINE */}
      <section className="comp-timeline-section" ref={timelineRef}>
        <div className="comp-container">
          <div className="comp-timeline-header">
            <span className="comp-section-label">3-MONTH ROADMAP</span>
            <h2 className="heading-serif comp-section-title">THE SUPPORT STRUCTURE</h2>
          </div>

          <div className="comp-timeline-wrapper">
            <div className="comp-timeline-line-container">
              <div className="comp-timeline-path"></div>
            </div>

            <div className="comp-months-grid">
              {monthsData.map((m, index) => (
                <div className="comp-month-card" key={m.monthNum}>
                  <div className="comp-month-top">
                    <span className="comp-month-num">{m.monthNum}</span>
                    <span className="comp-month-tag">MONTH {m.monthNum}</span>
                    <h3 className="heading-serif comp-month-title">{m.monthTitle}</h3>
                  </div>

                  <div className="comp-month-divider"></div>

                  <ul className="comp-services-list">
                    {m.services.map((item, i) => (
                      <li className="comp-service-item" key={i}>
                        <div className="comp-service-header">
                          <span className="comp-service-bullet"></span>
                          <h4 className="comp-service-name">{item.title}</h4>
                        </div>
                        <p className="comp-service-desc">{item.desc}</p>
                      </li>
                    ))}
                  </ul>

                  {index < monthsData.length - 1 && (
                    <div className="comp-mobile-arrow">
                      <svg width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-MONTH FEATURE SECTION */}
      <section className="comp-feature-section" ref={featureRef}>
        <div className="comp-container">
          <div className="comp-feature-grid">
            <div className="comp-feature-left comp-feature-anim">
              <span className="comp-section-label">EXTENDED ENGAGEMENT</span>
              <h2 className="heading-serif comp-feature-heading">
                THREE MONTHS.<br />
                MORE THAN JUST A WEBSITE.
              </h2>
              <p className="comp-feature-body">
                Your project should not simply end when the main work is delivered. For three months, SecondCome provides complementary support focused on strengthening, refining, and improving your digital presence.
              </p>
            </div>

            <div className="comp-feature-right comp-feature-anim">
              <div className="comp-progression-track">
                <div className="comp-progression-step">
                  <div className="comp-step-num">01</div>
                  <div className="comp-step-content">
                    <h4>Foundation Phase</h4>
                    <p>Building essential trust signals, review presence, and core web health.</p>
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
                    <h4>Optimization Phase</h4>
                    <p>Elevating brand consistency across social, print QR, and UI touchpoints.</p>
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
                    <h4>Growth & Refinement</h4>
                    <p>Maximizing conversions, refining offline-to-online synergy, and strategic polishing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="comp-cta-section" ref={ctaRef}>
        <div className="comp-container">
          <div className="comp-cta-box comp-cta-anim">
            <span className="heading-script comp-cta-script">Begin Your Journey</span>
            <h2 className="heading-serif comp-cta-heading">
              READY TO MAKE MORE OF WHAT YOU ALREADY HAVE?
            </h2>
            <p className="comp-cta-text">
              Explore the complementary support included with your SecondCome experience.
            </p>
            <div className="comp-cta-action">
              <button onClick={handleExploreSupport} className="pill-btn comp-cta-btn">
                <span>EXPLORE YOUR SUPPORT</span>
                <svg className="pill-icon arrow-icon" width="22" height="14" viewBox="0 0 38 20" fill="none">
                  <path d="M23.5 12C25.6 10.8 27.6 9.7 29.7 8.5C31.3 7.6 32.9 6.7 34.5 5.8C35.8 5 37.5 4.3 36.8 2.9C36.1 1.5 33.1 0 29.7 1.8L24.5 4.7C24.2 4.9 23.7 5 23.3 4.8L12.1 1.3C11.5 1.1 10.9 1.1 10.3 1.5L7.3 3.3L15.2 9.9L10 12.8C9.4 13.1 8.7 13.2 8.1 13L4.4 11.8C3.8 11.6 3.2 11.7 2.7 12L1.3 13C0.8 13.4 0.8 14.2 1.3 14.6L5.8 17.8C7.8 19.2 10.2 19.3 12.3 18.2L15.5 16.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
