import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeComplementarySection() {
  const sectionRef = useRef(null);

  const monthsData = [
    {
      num: '01',
      title: 'FOUNDATION',
      services: [
        'Google Reviews',
        'Google Business Profile',
        'Basic SEO',
        'Website Speed'
      ]
    },
    {
      num: '02',
      title: 'OPTIMIZATION',
      services: [
        'Social Profile Optimization',
        'Creative Posters',
        'QR Integration',
        'Website Improvements'
      ]
    },
    {
      num: '03',
      title: 'GROWTH',
      services: [
        'GMB Enhancement',
        'Conversion Optimization',
        'Offline Optimization',
        'Digital Presence Refinement'
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Header reveal
      gsap.from('.home-comp-header-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Cards sequential reveal
      gsap.from('.home-comp-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 45,
        opacity: 0,
        duration: 0.85,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Timeline line animation
      gsap.from('.home-comp-line-fill', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 1,
        },
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-comp-section" id="complementary-support" ref={sectionRef}>
      <div className="home-comp-container">
        {/* Section Header */}
        <div className="home-comp-header">
          <span className="trust-pill dark-pill home-comp-header-anim">
            <span className="trust-dot"></span> COMPLEMENTARY SUPPORT
          </span>
          <h2 className="heading-serif home-comp-heading home-comp-header-anim">
            MORE THAN JUST THE MAIN PROJECT.
          </h2>
          <p className="home-comp-subhead home-comp-header-anim">
            For the first three months, we help strengthen the digital foundation around your project with focused complementary support.
          </p>
          
          <div className="home-comp-large-badge home-comp-header-anim">
            <span className="large-badge-num">3 MONTHS</span>
            <span className="large-badge-sub">INCLUDED SUPPORT PROGRAM</span>
          </div>

          <div className="home-comp-flow-indicator home-comp-header-anim">
            <span className="flow-nums">01 → 02 → 03</span>
            <span className="flow-text">FOUNDATION → OPTIMIZATION → GROWTH</span>
          </div>
        </div>

        {/* 3-Stage Timeline Grid */}
        <div className="home-comp-timeline-wrap">
          <div className="home-comp-timeline-line">
            <div className="home-comp-line-fill"></div>
          </div>

          <div className="home-comp-cards-grid">
            {monthsData.map((m) => (
              <div className="home-comp-card" key={m.num}>
                <div className="home-comp-card-top">
                  <span className="home-comp-num">{m.num}</span>
                  <span className="home-comp-month-tag">MONTH {m.num}</span>
                  <h3 className="heading-serif home-comp-title">{m.title}</h3>
                </div>

                <div className="home-comp-divider"></div>

                <ul className="home-comp-list">
                  {m.services.map((item, idx) => (
                    <li className="home-comp-item" key={idx}>
                      <span className="home-comp-bullet"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
