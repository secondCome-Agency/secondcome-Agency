import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

import heroStrategy from '../assets/hero_growth_strategy.png';
import heroDesign from '../assets/hero_creative_design.png';
import heroWebsite from '../assets/hero_website_digital.png';
import heroAdvertising from '../assets/hero_advertising_leads.png';
import heroAutomation from '../assets/hero_marketing_automation.png';

const COLLAGE_CARDS = [
  {
    id: 'strategy',
    title: 'Business Growth and Strategy',
    img: heroStrategy,
    cardClass: 'card-pos-1',
  },
  {
    id: 'design',
    title: 'Creative and Design',
    img: heroDesign,
    cardClass: 'card-pos-2',
  },
  {
    id: 'website',
    title: 'Website and Digital Service',
    img: heroWebsite,
    cardClass: 'card-pos-3',
  },
  {
    id: 'advertising',
    title: 'Advertising & Lead Generation',
    img: heroAdvertising,
    cardClass: 'card-pos-4',
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    img: heroAutomation,
    cardClass: 'card-pos-5',
  },
];

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle one-time entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-main-headline',
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.1 }
      )
        .fromTo(
          '.hero-script-tagline',
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          '-=0.35'
        )
        .fromTo(
          '.hero-lead-subtitle',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.4'
        )
        .fromTo(
          '.hero-fanned-card',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.07, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          '.hero-floating-pill',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="agency-hero-section" id="hero" ref={heroRef}>
      {/* Background Ambient Lighting */}
      <div className="hero-ambient-glow glow-top" aria-hidden="true"></div>
      <div className="hero-ambient-glow glow-bottom" aria-hidden="true"></div>

      {/* Main Upper-Middle Headline & Tagline */}
      <div className="hero-content-center">
        <h1 className="hero-main-headline">
          <span className="heading-serif">YOUR BRAND. BUILT TO BE</span>
        </h1>

        {/* Script Tagline matching reference font ('Alex Brush', cursive) */}
        <div className="hero-script-tagline-wrapper">
          <span className="hero-script-tagline">
            Ignore to possible
          </span>
        </div>

        <p className="hero-lead-subtitle">
          We build digital experiences that help ambitious brands stand out, connect with their audience, and grow.
        </p>
      </div>

      {/* Reference Overlapping Fanned Card Collage */}
      <div className="hero-reference-collage-wrapper" aria-label="Featured Agency Portfolio">
        <div className="hero-reference-collage">
          {/* Top-Left Floating Badge over Card 1 */}
          <div className="hero-floating-pill pill-pos-top-left" aria-hidden="true">
            <span>@Strategy & Scale</span>
          </div>

          {/* Bottom-Center Floating Badge between Cards */}
          <div className="hero-floating-pill pill-pos-bottom-center" aria-hidden="true">
            <span>@Digital Flagship</span>
          </div>

          {/* Top-Right Floating Badge over Card 5 */}
          <div className="hero-floating-pill pill-pos-top-right" aria-hidden="true">
            <span>@AI & Automation</span>
          </div>

          {COLLAGE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`hero-fanned-card ${card.cardClass}`}
              tabIndex={0}
              role="article"
              aria-label={card.title}
            >
              <div className="hero-fanned-media">
                <img
                  src={card.img}
                  alt={card.title}
                  className="hero-fanned-img"
                  draggable={false}
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
