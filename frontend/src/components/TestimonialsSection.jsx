import React, { useEffect, useRef, useState } from 'react';

export default function TestimonialsSection() {
  const quoteText = "Your business already has a story. We just think it can be told better. SecondCome brings together creative thinking, sharp design, technology, and strategy to turn ordinary ideas into experiences that make people stop, look, and stay. No unnecessary noise. No copy-paste formulas. Just work with a point of view";
  const words = quoteText.split(' ');
  const logos = ['REFRAME', 'REBUILD', 'RETURN'];

  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start reveal when section top reaches 85% of viewport
      // Complete reveal when section center reaches 40% of viewport
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.35;

      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="testimonial-container">
        <div
          className="testimonial-quote-mark"
          style={{
            filter: `blur(${(1 - scrollProgress) * 10}px)`,
            opacity: 0.1 + scrollProgress * 0.25,
            transition: 'filter 0.1s linear, opacity 0.1s linear'
          }}
        >
          “
        </div>

        <blockquote
          className="testimonial-text scroll-reveal-quote"
          style={{
            filter: `blur(${(1 - scrollProgress) * 16}px)`,
            opacity: 0.2 + scrollProgress * 0.8,
            transform: `translateY(${(1 - scrollProgress) * 20}px) scale(${0.97 + scrollProgress * 0.03})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {words.map((word, index) => {
            // Word-by-word staggered reveal calculation
            const wordStart = index / words.length;
            const wordEnd = (index + 1) / words.length;

            // Normalize progress for this specific word
            let wordProgress = (scrollProgress - wordStart * 0.7) / 0.3;
            wordProgress = Math.min(Math.max(wordProgress, 0), 1);

            const wordBlur = (1 - wordProgress) * 14;
            const wordOpacity = 0.15 + wordProgress * 0.85;

            return (
              <span
                key={index}
                className="scroll-word"
                style={{
                  filter: `blur(${wordBlur}px)`,
                  opacity: wordOpacity,
                  display: 'inline-block',
                  marginRight: '0.3em',
                  transition: 'filter 0.15s ease-out, opacity 0.15s ease-out',
                  willChange: 'filter, opacity'
                }}
              >
                {word}
              </span>
            );
          })}
        </blockquote>

        <div
          className="testimonial-author"
          style={{
            filter: `blur(${(1 - scrollProgress) * 12}px)`,
            opacity: Math.max(0, (scrollProgress - 0.4) / 0.6),
            transform: `translateY(${(1 - scrollProgress) * 15}px)`,
            transition: 'filter 0.2s ease-out, opacity 0.2s ease-out'
          }}
        >
          <span className="author-name">Anvi Sharma</span>
          <span className="author-title">Managing Director, SECONDCOME</span>
        </div>

        <div className="logos-grid">
          {logos.map((logo, idx) => (
            <span className="logo-item" key={idx}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
