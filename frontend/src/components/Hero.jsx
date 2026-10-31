import React, { useState, useEffect } from 'react';
import './Hero.css';

const PART_1 = 'We make brands';
const PART_2 = 'Impossible to ignore';

const ROTATING_PHRASES = [
  'build brands',
  'create content',
  'design websites',
  'automate the busywork',
  'run your ads',
  'plan your growth',
];

export default function Hero() {
  const [part1Text, setPart1Text] = useState('');
  const [part2Text, setPart2Text] = useState('');
  const [isPart1Complete, setIsPart1Complete] = useState(false);
  const [isHeadingComplete, setIsHeadingComplete] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [suffixText, setSuffixText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Sequential typewriter effect for Part 1 ("Second") then Part 2 ("Come")
  useEffect(() => {
    if (prefersReducedMotion) {
      setPart1Text(PART_1);
      setPart2Text(PART_2);
      setIsPart1Complete(true);
      setIsHeadingComplete(true);
      setSuffixText(ROTATING_PHRASES[0]);
      return;
    }

    let index1 = 0;
    let index2 = 0;

    const startDelay = setTimeout(() => {
      // 1. Type Part 1 ("Second")
      const interval1 = setInterval(() => {
        index1++;
        setPart1Text(PART_1.slice(0, index1));

        if (index1 >= PART_1.length) {
          clearInterval(interval1);
          setIsPart1Complete(true);

          // 2. Pause briefly then type Part 2 ("Come")
          setTimeout(() => {
            const interval2 = setInterval(() => {
              index2++;
              setPart2Text(PART_2.slice(0, index2));

              if (index2 >= PART_2.length) {
                clearInterval(interval2);
                setIsHeadingComplete(true);
              }
            }, 100);
          }, 160);
        }
      }, 100);

      return () => clearInterval(interval1);
    }, 280);

    return () => clearTimeout(startDelay);
  }, [prefersReducedMotion]);

  // Rotating phrases with smooth typing & backspace animation
  useEffect(() => {
    if (!isHeadingComplete || prefersReducedMotion) return;

    const currentTarget = ROTATING_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (suffixText.length < currentTarget.length) {
        timer = setTimeout(() => {
          setSuffixText(currentTarget.slice(0, suffixText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (suffixText.length > 0) {
        timer = setTimeout(() => {
          setSuffixText(currentTarget.slice(0, suffixText.length - 1));
        }, 32);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
        timer = setTimeout(() => { }, 220);
      }
    }

    return () => clearTimeout(timer);
  }, [suffixText, isDeleting, phraseIndex, isHeadingComplete, prefersReducedMotion]);

  const handleStartProject = (e) => {
    e.preventDefault();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('fullName');
        if (nameInput) nameInput.focus();
      }, 400);
    }
  };

  const handleSeeServices = (e) => {
    e.preventDefault();
    const servicesSec = document.getElementById('services');
    if (servicesSec) {
      servicesSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero" id="top" aria-label="Second Come Agency Hero">
      <div className="hero-content">
        <h1 aria-label="Second Come" className="hero-heading-two-parts">
          <span className="hero-heading-part hero-part-1">
            <span>{part1Text}</span>
            {!isPart1Complete && <span className="caret hero-main-caret" aria-hidden="true" />}
          </span>
          <span className="hero-heading-part hero-part-2">
            <span>{part2Text}</span>
            {isPart1Complete && <span className="caret hero-main-caret" aria-hidden="true" />}
          </span>
        </h1>

        <p className="sub">
          More than an agency. Your partner in building brands that stand out.
        </p>

        <div className="rot" aria-live="polite">
          <span className="script">We</span>
          <span>&nbsp;{suffixText}</span>
          <span className="caret" aria-hidden="true" />
        </div>

        <div className="cta">
          <a
            href="#contact"
            className="hero-pill hero-pill-solid"
            onClick={handleStartProject}
          >
            <span>Start a project</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#services"
            className="hero-pill"
            onClick={handleSeeServices}
          >
            <span>See what we do</span>
          </a>
        </div>
      </div>

      <div className="scroll" aria-hidden="true" />
    </header>
  );
}
