import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function OpeningGate() {
  const gateRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const brandRef = useRef(null);

  useEffect(() => {
    const gateTl = gsap.timeline({
      onComplete: () => {
        if (gateRef.current) gateRef.current.style.display = 'none';
      },
    });

    gateTl.to(brandRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
      delay: 0.2,
    });

    gateTl.to(leftPanelRef.current, {
      xPercent: -100,
      duration: 1.1,
      ease: 'power3.inOut',
    }, '-=0.3');

    gateTl.to(rightPanelRef.current, {
      xPercent: 100,
      duration: 1.1,
      ease: 'power3.inOut',
    }, '<');
  }, []);

  return (
    <div id="opening-gate" ref={gateRef} className="opening-gate">
      <div ref={leftPanelRef} className="gate-panel gate-panel--left"></div>
      <div ref={rightPanelRef} className="gate-panel gate-panel--right"></div>
      <div ref={brandRef} className="gate-brand">
        <span className="gate-script">Second Come</span>
        <span className="gate-sub">AGENCY</span>
      </div>
    </div>
  );
}
