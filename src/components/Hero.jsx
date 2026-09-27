import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const archWrapperRef = useRef(null);
  const archPortalRef = useRef(null);
  const scriptRevealRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeTagRef = useRef(null);
  const spinBadgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      // 1. Expand width & height of the arch wrapper to fill full viewport (100vw x 100vh)
      heroTl.to(
        archWrapperRef.current,
        {
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          ease: 'none',
        },
        0
      );

      // 2. Reduce arch top border radius to 0px
      heroTl.to(
        archPortalRef.current,
        {
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          boxShadow: '0 0 0px rgba(0,0,0,0)',
          ease: 'none',
        },
        0
      );

      // 3. Fade out circular spin badge early as user starts scrolling
      heroTl.to(
        spinBadgeRef.current,
        {
          opacity: 0,
          scale: 0.5,
          ease: 'power1.out',
        },
        0
      );

      // 4. Reveal content ONE BY ONE sequentially as user scrolls down inside the gate
      // Step 1: Script text reveals
      heroTl.to(
        scriptRevealRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        0.22
      );

      // Step 2: Subtitle reveals
      heroTl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        0.48
      );

      // Step 3: Pill badge tag reveals
      heroTl.to(
        badgeTagRef.current,
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        },
        0.72
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-scroll-wrapper" ref={wrapperRef}>
      <section className="hero-section" id="hero" ref={heroRef}>
        <div className="hero-canvas-bg"></div>
        <div className="hero-content-container">
          <div id="hero-arch-wrapper" ref={archWrapperRef} className="hero-arch-wrapper">
            <div id="arch-portal" ref={archPortalRef} className="arch-portal">
              <div className="video-overlay"></div>
              <img src="/assets/hero_simple.jpg" className="hero-video" alt="Second Come Agency Minimal Background" />

              <div className="arch-text-content">
                <h1 className="hero-serif-title">We Help Brands Comeback Stronger..</h1>
                <div id="script-reveal" ref={scriptRevealRef} className="script-reveal">Crafted with Vision</div>
                <p id="hero-subtitle" ref={subtitleRef} className="hero-subtitle">
                  We find what your brand is missing &amp; then build it back even stronger.
                </p>
                <div id="hero-badge-tag" ref={badgeTagRef} className="hero-badge-tag">
                  Every brand deserve a comeback.
                </div>
              </div>

              <div className="spin-badge-container" ref={spinBadgeRef}>
                <div className="spin-badge-wrapper">
                  <svg className="spin-badge-svg" viewBox="0 0 160 160">
                    <path id="circlePath" d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" fill="none" />
                    <text className="spin-text">
                      <textPath href="#circlePath" startOffset="0%">
                        SCROLL TO EXPLORE • SECOND COME MARKETING AGENCY •
                      </textPath>
                    </text>
                  </svg>
                  <div className="spin-center-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
