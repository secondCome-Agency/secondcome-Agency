import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

// 5 Genuine SecondCome Service Assets
import heroDesign from '../assets/hero_creative_design.png';
import heroWebsite from '../assets/hero_website_digital.png';
import heroAutomation from '../assets/hero_marketing_automation.png';
import heroAdvertising from '../assets/hero_advertising_leads.png';
import heroStrategy from '../assets/hero_growth_strategy.png';

gsap.registerPlugin(ScrollTrigger);

/**
 * 5 Core SecondCome Agency Services Config
 * Editable entries so images and details can be easily swapped or expanded.
 */
export const SERVICES_CONFIG = [
  {
    id: 'creative',
    number: '01',
    title: 'CREATIVE & DESIGN',
    category: 'Brand Identity & Visuals',
    description: 'Brand identity, campaign creatives, graphic design, and social media content.',
    image: heroDesign,
    posClass: 'pos-1-left',
    alt: 'SecondCome - Creative & Design Service Visual',
  },
  {
    id: 'website',
    number: '02',
    title: 'WEBSITE DEVELOPMENT',
    category: 'Digital Flagships & Platforms',
    description: 'Websites, responsive layouts, landing pages, and e-commerce experiences.',
    image: heroWebsite,
    posClass: 'pos-2-lower-left',
    alt: 'SecondCome - Website Development Service Visual',
  },
  {
    id: 'automation',
    number: '03',
    title: 'AI AUTOMATION',
    category: 'Intelligent Systems & Workflows',
    description: 'Intelligent workflows, business automation, integrations, and productivity systems.',
    image: heroAutomation,
    posClass: 'pos-3-center',
    alt: 'SecondCome - AI Automation Service Visual',
  },
  {
    id: 'advertising',
    number: '04',
    title: 'ADVERTISING & LEAD GENERATION',
    category: 'Performance Marketing & Scale',
    description: 'Digital campaigns, ad creatives, lead generation, and performance marketing.',
    image: heroAdvertising,
    posClass: 'pos-4-lower-right',
    alt: 'SecondCome - Advertising & Lead Generation Service Visual',
  },
  {
    id: 'growth',
    number: '05',
    title: 'BUSINESS GROWTH & STRATEGY',
    category: 'Brand Positioning & Scale',
    description: 'Business analytics, brand positioning, growth planning, and conversion optimization.',
    image: heroStrategy,
    posClass: 'pos-5-right',
    alt: 'SecondCome - Business Growth & Strategy Service Visual',
  },
];

export default function Hero() {
  const containerRef = useRef(null);
  const introStageRef = useRef(null);
  const visualCanvasRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  // Smooth scroll helper for navigation links
  const handleNavClick = (targetId) => (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.2, offset: -20 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Master Coordinated Timeline matching reference recording
      const masterTl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
      });
      window.__heroTl = masterTl;

      // 1. Initial State: Intro Letters S M A spread wide and oversized
      gsap.set('.sma-intro-overlay', { autoAlpha: 1 });
      gsap.set('.hero-service-image-card', { autoAlpha: 0, y: 35, scale: 0.98 });
      gsap.set('.hero-sub-statement', { autoAlpha: 0, y: 15 });
      gsap.set('.hero-cursive-title', { autoAlpha: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' });
      gsap.set('.hero-diagonal-line', { scaleX: 0, transformOrigin: 'left center' });

      // Letters reveal with controlled clipping masks & wipe
      gsap.set(['.sma-col-s', '.sma-col-m', '.sma-col-a'], {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        autoAlpha: 0,
      });

      // 2. SNAPPY & CRISP OPENING SEQUENCE (Substantially decreased opening time)
      masterTl
        // Fast, dynamic wipe reveal of S, M, A (0.3s each, overlapping by 0.22s)
        .to('.sma-col-s', {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power2.out',
        })
        .to('.sma-col-m', {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power2.out',
        }, '-=0.22')
        .to('.sma-col-a', {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power2.out',
        }, '-=0.22')
        // Brief, punchy hold (0.35s)
        .to({}, { duration: 0.35 })

        // 3. FAST DISSOLVE INTO THE ALTERNATING CARDS
        .to('.sma-col-s', {
          x: '10vw',
          scale: 0.2,
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power3.inOut',
        }, 'converge')
        .to('.sma-col-m', {
          scale: 0.2,
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power3.inOut',
        }, 'converge')
        .to('.sma-col-a', {
          x: '-10vw',
          scale: 0.2,
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power3.inOut',
        }, 'converge')
        .to('.sma-intro-sublabel', {
          autoAlpha: 0,
          y: -15,
          duration: 0.3,
          ease: 'power2.inOut',
        }, 'converge')
        .to('.sma-intro-overlay', {
          autoAlpha: 0,
          duration: 0.45,
          ease: 'power2.inOut',
        }, 'converge+=0.15')

        // 4. Staggered Entrance of 5 Alternating Service Images
        .to('.hero-service-image-card', {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.05,
          ease: 'power3.out',
        }, 'converge+=0.1')

        // 5. Reveal Supporting Center Text ("Making the ordinary")
        .to('.hero-sub-statement', {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
        }, 'converge+=0.15')

        // 6. Oversized Diagonal "SecondCome" Script Reveal
        .to('.hero-cursive-title', {
          autoAlpha: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 0.75,
          ease: 'power2.out',
        }, 'converge+=0.2')
        .to('.hero-diagonal-line', {
          scaleX: 1,
          duration: 0.65,
          ease: 'power2.out',
        }, 'converge+=0.3');

      // Scroll-driven Parallax Depth
      const parallaxCards = gsap.utils.toArray('.hero-service-image-card');
      if (parallaxCards.length && visualCanvasRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
          animation: gsap.timeline()
            // Upside cards (1, 3, 5) drift smoothly
            .to('.hero-service-image-card:nth-child(odd)', { y: -35, ease: 'none' }, 0)
            // Downside cards (2, 4) drift slightly deeper
            .to('.hero-service-image-card:nth-child(even)', { y: -70, ease: 'none' }, 0)
            // Script headline gently drifts
            .to('.hero-cursive-headline-lockup', { y: -50, ease: 'none' }, 0),
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="secondcome-reference-hero" id="hero" ref={containerRef} aria-label="SecondCome Agency Hero">
      {/* =========================================================================
          1. OPENING SMA TYPOGRAPHIC INTRO OVERLAY (Recreated from reference video)
          ========================================================================= */}
      <div className="sma-intro-overlay" ref={introStageRef} aria-hidden="true">
        <div className="sma-intro-container">
          {/* Column 1: S + SECOND COME */}
          <div className="sma-intro-col sma-col-s">
            <div className="sma-oversized-letter sma-font-s">S</div>
            <div className="sma-intro-sublabel">SECOND COME</div>
          </div>

          {/* Column 2: M + MARKETING */}
          <div className="sma-intro-col sma-col-m">
            <div className="sma-oversized-letter sma-font-m">M</div>
            <div className="sma-intro-sublabel">MARKETING</div>
          </div>

          {/* Column 3: A + AGENCY */}
          <div className="sma-intro-col sma-col-a">
            <div className="sma-oversized-letter sma-font-a">A</div>
            <div className="sma-intro-sublabel">AGENCY</div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          3. MAIN EDITORIAL VISUAL COMPOSITION (5 Services & Scattered Layout)
          ========================================================================= */}
      <div className="hero-editorial-canvas" ref={visualCanvasRef}>
        {/* Supporting Text: Positioned directly above Center Visual */}
        <div className="hero-statement-wrapper">
          <p className="hero-sub-statement">Making the ordinary</p>
        </div>

        {/* 5 Service Visuals positioned in staggered editorial rhythm */}
        <div className="hero-service-images-layer" aria-label="Our Agency Capabilities">
          {SERVICES_CONFIG.map((service) => (
            <article
              key={service.id}
              className={`hero-service-image-card ${service.posClass} ${activeService === service.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              onClick={handleNavClick('services')}
              tabIndex={0}
              role="region"
              aria-label={`${service.number} ${service.title}`}
            >
              <div className="service-image-frame">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-editorial-img"
                  loading="eager"
                  draggable={false}
                />
                {/* Subtle Editorial Label Tag */}
                <div className="service-editorial-tag">
                  <span className="tag-number">{service.number}</span>
                  <span className="tag-separator">/</span>
                  <span className="tag-title">{service.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================================
            4. MAIN HEADLINE: Large Diagonal Cursive "SecondCome" with Underline
            ========================================================================= */}
        <div className="hero-cursive-headline-lockup" aria-hidden="true">
          <div className="hero-cursive-title-wrapper">
            <h1 className="hero-cursive-title">SecondCome</h1>
            <div className="hero-diagonal-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
