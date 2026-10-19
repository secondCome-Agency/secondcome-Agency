import React, { useRef, useEffect, useState, useCallback, useLayoutEffect } from 'react';

export default function CaseStudiesSection() {
  const projects = [
    {
      name: 'Travelling',
      client: 'Travelling Platform',
      category: 'Travel & Exploration',
      desc: 'Discover beautiful destinations and unforgettable travel experiences with curated guides and seamless destination exploration.',
      image: null,
      liveUrl: 'https://travelling-eta-three.vercel.app/',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'Wedding Venue',
      client: 'Wedding Venue',
      category: 'Venue & Events Platform',
      desc: 'Digital showcase and reservation experience tailored for luxury wedding venues, ceremony spaces, and celebration planning.',
      image: null,
      liveUrl: '', // Add live URL once deployed
      githubUrl: 'https://github.com/secondCome-Agency/wedding-venue',
    },
    {
      name: 'Interior',
      client: 'Interior Design',
      category: 'Architectural Portfolio',
      desc: 'Modern architectural interior portfolio showcasing bespoke living spaces, renovations, and aesthetic design concepts.',
      image: null,
      liveUrl: '', // Add live URL once deployed
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    // Preserved existing projects
    {
      name: 'Real Estate',
      client: 'Rainbasera',
      category: 'Real Estate Web Application',
      desc: 'Designing a clearer, more engaging experience for personal property dealing.',
      image: null,
      liveUrl: 'https://real-estate-ctdh.vercel.app/',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'E-Commerce Experience',
      client: 'E-Commerce Experience',
      category: 'Digital Commerce',
      desc: 'Creating a seamless shopping journey focused on product discovery and user experience.',
      image: null,
      liveUrl: 'https://example.com/ecommerce',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
    {
      name: 'LMS Platform',
      client: 'LMS Platform',
      category: 'EdTech Experience',
      desc: 'Designing a modern learning environment that brings courses and learners together.',
      image: null,
      liveUrl: 'https://example.com/lms',
      githubUrl: 'https://github.com/secondCome-Agency',
    },
  ];

  // Render 3 sets of cards to create seamless infinite bidirectional scrolling
  const tripleProjects = [...projects, ...projects, ...projects];

  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const [isDragging, setIsDragging] = useState(false);

  // Reliable initial calculation so auto-scroll starts on frame 0 without waiting
  const getFallbackWidth = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 480;
    return 7 * (isMobile ? (300 + 40) : (400 + 40));
  };

  const initialW = getFallbackWidth();
  const posRef = useRef(-initialW);
  const singleSetWidthRef = useRef(initialW);
  const cardStepRef = useRef(initialW / 7);

  // Interaction tracking refs
  const isPointerDownRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const velocityRef = useRef(0);

  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const pauseUntilRef = useRef(0);
  const stepAnimationRef = useRef(null);

  // Measure precise dimensions from DOM
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const cards = cardRefs.current;
    const N = projects.length; // 7

    let measuredW = 0;
    if (cards[0] && cards[N]) {
      const diff = cards[N].offsetLeft - cards[0].offsetLeft;
      if (diff > 200) measuredW = diff;
    }
    if (!measuredW && trackRef.current.scrollWidth > 300) {
      measuredW = trackRef.current.scrollWidth / 3;
    }
    if (!measuredW) {
      measuredW = getFallbackWidth();
    }

    singleSetWidthRef.current = measuredW;

    let measuredStep = 0;
    if (cards[0] && cards[1]) {
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      if (step > 50) measuredStep = step;
    }
    cardStepRef.current = measuredStep || (measuredW / N);
  }, [projects.length]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    measure();

    const t1 = setTimeout(measure, 60);
    const t2 = setTimeout(measure, 300);
    const t3 = setTimeout(measure, 1000);

    const handleResize = () => {
      measure();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', handleResize);
    };
  }, [measure]);

  // Main animation loop
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (now) => {
      const rawDt = (now - lastTime) / 1000;
      const dt = Math.min(Math.max(rawDt, 0), 0.1);
      lastTime = now;

      // Always guarantee W is valid
      const W = singleSetWidthRef.current || getFallbackWidth();

      if (isPointerDownRef.current) {
        // Direct manipulation while dragging
        pauseUntilRef.current = now + 1200;
      } else if (stepAnimationRef.current) {
        // Smooth programmatic step (arrows / keyboard)
        const { startTime, fromX, toX, duration } = stepAnimationRef.current;
        const progress = Math.min(1, (now - startTime) / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        posRef.current = fromX + (toX - fromX) * ease;

        if (progress >= 1) {
          posRef.current = toX;
          stepAnimationRef.current = null;
          pauseUntilRef.current = now + 1200;
        }
      } else if (Math.abs(velocityRef.current) > 5) {
        // Inertia coasting after release
        posRef.current += velocityRef.current * dt;
        velocityRef.current *= Math.pow(0.92, dt * 60);
        pauseUntilRef.current = now + 1200;
      } else {
        velocityRef.current = 0;

        // Auto-scrolling: runs continuously unless user is actively hovering or interacting
        const isPaused = isHoveredRef.current || isFocusedRef.current || now < pauseUntilRef.current;
        if (!isPaused) {
          // Speed matches original 45s cycle for 1 set of cards
          const speed = W / 45;
          posRef.current -= speed * dt;
        }
      }

      // Infinite loop wrapping within [-2W, -W)
      while (posRef.current <= -2 * W) {
        posRef.current += W;
        if (stepAnimationRef.current) {
          stepAnimationRef.current.fromX += W;
          stepAnimationRef.current.toX += W;
        }
      }
      while (posRef.current > -W) {
        posRef.current -= W;
        if (stepAnimationRef.current) {
          stepAnimationRef.current.fromX -= W;
          stepAnimationRef.current.toX -= W;
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Trackpad / mouse horizontal wheel support
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      if (isHorizontal) {
        e.preventDefault();
        const delta = e.shiftKey ? e.deltaY : e.deltaX;
        posRef.current -= delta;
        velocityRef.current = 0;
        stepAnimationRef.current = null;
        pauseUntilRef.current = performance.now() + 1400;

        const W = singleSetWidthRef.current || getFallbackWidth();
        while (posRef.current <= -2 * W) posRef.current += W;
        while (posRef.current > -W) posRef.current -= W;

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`;
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Navigation step helper for arrow controls and keyboard
  const stepByCard = useCallback((direction) => {
    const W = singleSetWidthRef.current || getFallbackWidth();
    const step = cardStepRef.current || (W / projects.length) || 440;
    const fromX = posRef.current;
    const toX = fromX - direction * step;

    velocityRef.current = 0;
    stepAnimationRef.current = {
      startTime: performance.now(),
      fromX,
      toX,
      duration: 450,
    };
    pauseUntilRef.current = performance.now() + 1400;
  }, [projects.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    stepByCard(-1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    stepByCard(1);
  };

  // Pointer event handlers
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (e.target.closest('.case-nav-btn')) return;

    isPointerDownRef.current = true;
    hasDraggedRef.current = false;
    dragDistanceRef.current = 0;
    pointerStartXRef.current = e.clientX;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    stepAnimationRef.current = null;

    try {
      marqueeRef.current?.setPointerCapture(e.pointerId);
    } catch (_) { }
  };

  const handlePointerMove = (e) => {
    if (!isPointerDownRef.current) return;

    const dx = e.clientX - lastPointerXRef.current;
    dragDistanceRef.current += Math.abs(dx);

    if (dragDistanceRef.current > 6) {
      hasDraggedRef.current = true;
      setIsDragging(true);
    }

    const now = performance.now();
    const dt = (now - lastPointerTimeRef.current) / 1000;
    if (dt > 0.001) {
      const instVel = dx / dt;
      velocityRef.current = velocityRef.current * 0.3 + instVel * 0.7;
    }
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = now;

    posRef.current += dx;

    const W = singleSetWidthRef.current || getFallbackWidth();
    while (posRef.current <= -2 * W) posRef.current += W;
    while (posRef.current > -W) posRef.current -= W;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current.toFixed(2)}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);

    try {
      marqueeRef.current?.releasePointerCapture(e.pointerId);
    } catch (_) { }

    if (hasDraggedRef.current) {
      velocityRef.current = Math.max(-1800, Math.min(1800, velocityRef.current));
      if (Math.abs(velocityRef.current) < 30) velocityRef.current = 0;
      pauseUntilRef.current = performance.now() + 1400;
    } else {
      velocityRef.current = 0;
    }
  };

  const handleClickCapture = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 50);
    }
  };

  const handlePointerEnter = (e) => {
    // Only pause on actual mouse hover (ignore mobile touch taps)
    if (e.pointerType === 'mouse') {
      isHoveredRef.current = true;
    }
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse') {
      isHoveredRef.current = false;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepByCard(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepByCard(1);
    }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-header-wrap">
        <span className="trust-pill"><span className="trust-dot"></span> PROVEN RECORD</span>
        <h2 className="heading-serif">FEATURED CASE STUDIES</h2>
        <span className="heading-script">Real metrics. Unmatched growth.</span>
      </div>

      <div
        className={`case-marquee ${isDragging ? 'is-dragging' : ''}`}
        ref={marqueeRef}
        tabIndex={0}
        role="region"
        aria-label="Featured projects carousel. Use arrow keys or drag to browse projects."
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onFocusCapture={() => { isFocusedRef.current = true; }}
        onBlurCapture={() => {
          isFocusedRef.current = false;
          pauseUntilRef.current = performance.now() + 1000;
        }}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className="case-nav-btn case-nav-prev"
          onClick={handlePrev}
          aria-label="Previous case studies"
          title="Previous projects"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="case-track" ref={trackRef}>
          {tripleProjects.map((item, idx) => (
            <div
              className="case-card"
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
            >
              <div className="case-card-header">
                <span className="case-client">{item.client || item.name}</span>
                <span className="case-card-badge">{item.category}</span>
              </div>

              {item.image && (
                <div className="case-card-img-wrap">
                  <img src={item.image} alt={item.name} className="case-card-img" loading="lazy" />
                </div>
              )}

              <div className="case-metric">{item.name}</div>
              <p className="case-desc">{item.desc}</p>

              <div className="case-card-actions">
                {item.liveUrl ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn-live"
                    aria-label={`Live Demo of ${item.name}`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    className="case-btn case-btn-disabled"
                    disabled
                    title="Live Demo URL coming soon"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Demo Soon</span>
                  </button>
                )}

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-btn case-btn-code"
                    aria-label={`View code for ${item.name} on GitHub`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="case-nav-btn case-nav-next"
          onClick={handleNext}
          aria-label="Next case studies"
          title="Next projects"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}
