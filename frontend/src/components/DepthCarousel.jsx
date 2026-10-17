'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import './DepthCarousel.css';

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/seed/depth1/800/1000', alt: 'Slide 1' },
  { image: 'https://picsum.photos/seed/depth2/800/1000', alt: 'Slide 2' },
  { image: 'https://picsum.photos/seed/depth3/800/1000', alt: 'Slide 3' },
  { image: 'https://picsum.photos/seed/depth4/800/1000', alt: 'Slide 4' },
  { image: 'https://picsum.photos/seed/depth5/800/1000', alt: 'Slide 5' },
  { image: 'https://picsum.photos/seed/depth6/800/1000', alt: 'Slide 6' }
];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeItem = it => (typeof it === 'string' ? { image: it, alt: '' } : it);

const DepthCarousel = ({
  items = DEFAULT_ITEMS,
  renderCard,
  cardWidth = 320,
  cardHeight = 460,
  radius = 20,
  tint = '#0e181c',
  depth = 190,
  spread = 85,
  tilt = 16,
  tiltDirection = 'right',
  perspective = 1300,
  visibleCards = 4,
  falloff = 0.22,
  blur = 5,
  duration = 650,
  ease = 'power3.out',
  autoplay = true,
  autoplayDelay = 4500,
  loop = true,
  showControls = true,
  showIndicators = true,
  enableWheel = false,
  isPaused = false,
  onChange,
  className = ''
}) => {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);
  const count = data.length;

  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef({});
  const onChangeRef = useRef(onChange);

  const dragRef = useRef(null);
  const wheelTimerRef = useRef(null);
  const autoTimerRef = useRef(null);
  const reducedRef = useRef(false);

  const isHoveredRef = useRef(false);
  const isFocusedRef = useRef(false);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const [active, setActive] = useState(0);

  onChangeRef.current = onChange;
  cfgRef.current = {
    count,
    depth,
    spread,
    tilt,
    tiltDirection,
    visibleCards,
    falloff,
    blur,
    duration,
    ease,
    loop,
    cardWidth,
    autoplay,
    autoplayDelay
  };

  const layout = useCallback(pos => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    const sc = scaleRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;
        if (d > n / 2) d -= n;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.18, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';

      const ov = overlayRefs.current[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.85).toFixed(3);
    }
  }, []);

  const notify = useCallback(
    idx => {
      setActive(idx);
      onChangeRef.current?.(idx, data[idx]);
    },
    [data]
  );

  const tweenTo = useCallback(
    (target, animate) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const proxy = { p: posRef.current };
      const dur = animate && !reducedRef.current ? cfg.duration / 1000 : 0;
      tweenRef.current = gsap.to(proxy, {
        p: target,
        duration: dur,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          const n = cfg.count;
          if (n > 0) posRef.current = ((posRef.current % n) + n) % n;
          layout(posRef.current);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      const idx = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);
      let delta = idx - posRef.current;
      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;
        if (delta > n / 2) delta -= n;
      }
      tweenTo(posRef.current + delta, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        notify(idx);
      }
    },
    [tweenTo, notify]
  );

  const navigateBy = useCallback(step => setFocus(focusRef.current + step, true), [setFocus]);

  // Autoplay management with timer resets
  const startAutoplay = useCallback(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    const cfg = cfgRef.current;
    if (!cfg.autoplay || reducedRef.current || cfg.count < 2) return;
    autoTimerRef.current = window.setInterval(() => {
      if (!isHoveredRef.current && !isFocusedRef.current && !isPausedRef.current) {
        navigateBy(1);
      }
    }, Math.max(cfg.autoplayDelay, 1000));
  }, [navigateBy]);

  const restartAutoplay = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  // Handle manual navigation actions (each resets the autoplay timer)
  const handlePrev = useCallback(() => {
    navigateBy(-1);
    restartAutoplay();
  }, [navigateBy, restartAutoplay]);

  const handleNext = useCallback(() => {
    navigateBy(1);
    restartAutoplay();
  }, [navigateBy, restartAutoplay]);

  const handleDotClick = useCallback(
    idx => {
      setFocus(idx, true);
      restartAutoplay();
    },
    [setFocus, restartAutoplay]
  );

  // Reset focus and relayout when items list updates (e.g. filtering)
  useEffect(() => {
    posRef.current = 0;
    focusRef.current = 0;
    setActive(0);
    layout(0);
    restartAutoplay();
  }, [count, layout, restartAutoplay]);

  // Responsive scaling observer
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      if (!entries || !entries[0]) return;
      const w = entries[0].contentRect.width;
      const cfg = cfgRef.current;
      const needed = cfg.cardWidth + Math.abs(cfg.spread) * 2 + 80;
      scaleRef.current = clamp(w / needed, 0.48, 1);
      layout(posRef.current);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [layout]);

  // Wheel interaction (optional horizontal navigation)
  useEffect(() => {
    if (!enableWheel) return;
    const el = rootRef.current;
    if (!el) return;
    const onWheel = e => {
      const cfg = cfgRef.current;
      if (cfg.count < 2) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        tweenRef.current?.kill();
        const delta = e.deltaX;
        const step = clamp(delta / (cfg.cardWidth * 0.9), -0.6, 0.6);
        posRef.current += step;
        layout(posRef.current);
        if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
        wheelTimerRef.current = setTimeout(() => {
          setFocus(Math.round(posRef.current), true);
          restartAutoplay();
        }, 130);
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [enableWheel, layout, setFocus, restartAutoplay]);

  // Pointer / Touch drag controls
  const onPointerDown = useCallback(e => {
    if (e.target.closest('a, button, input, textarea')) return;
    const cfg = cfgRef.current;
    if (cfg.count < 2) return;
    tweenRef.current?.kill();
    dragRef.current = {
      x: e.clientX,
      startPos: posRef.current,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    e => {
      const drag = dragRef.current;
      if (!drag) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;
        try {
          rootRef.current?.setPointerCapture(drag.id);
        } catch (_) {}
      }
      if (!drag.moved) return;
      const now = performance.now();
      const dt = Math.max(now - drag.lastT, 1);
      drag.v = (e.clientX - drag.lastX) / dt;
      drag.lastX = e.clientX;
      drag.lastT = now;
      posRef.current = drag.startPos - dx / stepPx;
      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;
    if (!drag) return;
    if (drag.id !== undefined && rootRef.current?.hasPointerCapture?.(drag.id)) {
      try {
        rootRef.current.releasePointerCapture(drag.id);
      } catch (_) {}
    }
    dragRef.current = null;
    if (!drag.moved) return;
    const cfg = cfgRef.current;
    const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
    const projected = posRef.current - (drag.v * 180) / stepPx;
    setFocus(Math.round(projected), true);
    restartAutoplay();
  }, [setFocus, restartAutoplay]);

  const onKeyDown = useCallback(
    e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  const onCardClick = useCallback(
    (index, e) => {
      if (dragRef.current?.moved) return;
      if (index !== focusRef.current) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        setFocus(index, true);
        restartAutoplay();
      }
    },
    [setFocus, restartAutoplay]
  );

  // Setup autoplay lifecycle with hover and focus listeners
  useEffect(() => {
    reducedRef.current = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!autoplay || reducedRef.current || count < 2) return;
    const root = rootRef.current;

    const onEnter = () => {
      isHoveredRef.current = true;
    };
    const onLeave = () => {
      isHoveredRef.current = false;
      restartAutoplay();
    };
    const onFocusIn = () => {
      isFocusedRef.current = true;
    };
    const onFocusOut = () => {
      isFocusedRef.current = false;
      restartAutoplay();
    };

    root?.addEventListener('mouseenter', onEnter);
    root?.addEventListener('mouseleave', onLeave);
    root?.addEventListener('focusin', onFocusIn);
    root?.addEventListener('focusout', onFocusOut);

    startAutoplay();

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      root?.removeEventListener('mouseenter', onEnter);
      root?.removeEventListener('mouseleave', onLeave);
      root?.removeEventListener('focusin', onFocusIn);
      root?.removeEventListener('focusout', onFocusOut);
    };
  }, [autoplay, autoplayDelay, count, startAutoplay, restartAutoplay]);

  // Restart autoplay when external pause state is lifted
  useEffect(() => {
    if (!isPaused) {
      restartAutoplay();
    }
  }, [isPaused, restartAutoplay]);

  useEffect(() => {
    layout(posRef.current);
  }, [layout, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count]);

  useEffect(
    () => () => {
      tweenRef.current?.kill();
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className={`depth-carousel ${className}`.trim()}
      style={{ '--dc-perspective': `${perspective}px` }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Executive Team Carousel"
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      onKeyDown={onKeyDown}
    >
      <div className="depth-carousel__stage" ref={stageRef}>
        {data.map((item, i) => (
          <div
            key={item.id ?? i}
            className={`depth-carousel__card ${active === i ? 'is-active' : ''}`}
            ref={el => (cardRefs.current[i] = el)}
            style={{ width: cardWidth, height: cardHeight, borderRadius: radius }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={active !== i}
            onClick={e => onCardClick(i, e)}
          >
            {renderCard ? (
              renderCard(item, i, active === i)
            ) : (
              <img className="depth-carousel__img" src={item.image} alt={item.alt || ''} draggable={false} />
            )}
            <span
              className="depth-carousel__tint"
              ref={el => (overlayRefs.current[i] = el)}
              style={{ background: tint }}
            />
          </div>
        ))}
      </div>

      {showControls && count > 1 && (
        <>
          <button
            type="button"
            className="depth-carousel__arrow depth-carousel__arrow--prev"
            aria-label="Previous team member"
            onClick={handlePrev}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="depth-carousel__arrow depth-carousel__arrow--next"
            aria-label="Next team member"
            onClick={handleNext}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="depth-carousel__dots" role="tablist" aria-label="Team members">
          {data.map((item, i) => (
            <button
              key={item.id ?? i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to ${item.name || `slide ${i + 1}`}`}
              className={`depth-carousel__dot${active === i ? ' is-active' : ''}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DepthCarousel;
