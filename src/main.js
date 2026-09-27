import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Smooth Scroll with Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ==========================================================================
// 0. FAITH IBIZA OPENING GATE REVEAL ANIMATION
// ==========================================================================

const openingGate = document.getElementById('opening-gate');
const gateLeft = document.querySelector('.gate-panel--left');
const gateRight = document.querySelector('.gate-panel--right');
const gateBrand = document.querySelector('.gate-brand');

if (openingGate) {
  const gateTl = gsap.timeline({
    onComplete: () => {
      openingGate.style.display = 'none';
    },
  });

  // 1. Brand logo pulse & fade
  gateTl.to(gateBrand, {
    scale: 1.1,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.in',
    delay: 0.2,
  });

  // 2. Gate panels split open vertically
  gateTl.to(gateLeft, {
    xPercent: -100,
    duration: 1.1,
    ease: 'power3.inOut',
  }, '-=0.3');

  gateTl.to(gateRight, {
    xPercent: 100,
    duration: 1.1,
    ease: 'power3.inOut',
  }, '<');

  // 3. Hero Arch Entrance scale in
  gateTl.from('.hero-arch-wrapper', {
    scale: 0.88,
    opacity: 0.7,
    duration: 1.2,
    ease: 'power3.out',
  }, '-=0.9');

  gateTl.from('.hero-serif-title', {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
  }, '-=0.7');
}

// ==========================================================================
// 1. SCROLL-DRIVEN ARCH PORTAL EXPANSION ANIMATION (FAITH IBIZA EXACT PATTERN)
// ==========================================================================

const archWrapper = document.getElementById('hero-arch-wrapper');
const archPortal = document.getElementById('arch-portal');
const scriptReveal = document.getElementById('script-reveal');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroBadgeTag = document.getElementById('hero-badge-tag');
const spinBadge = document.querySelector('.spin-badge-container');
const brandLogo = document.querySelector('.brand-logo-container');

if (archWrapper && archPortal) {
  // GSAP Timeline for Faith Ibiza Unpinned Arch Portal Scroll Expansion
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      pin: false,
    },
  });

  // 1. Expand Arch Portal smoothly from 42vw to 100vw, height to 100vh, radius to 0
  heroTl.to(archWrapper, {
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    ease: 'none',
  }, 0);

  heroTl.to(archPortal, {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    boxShadow: '0 0 0px rgba(0,0,0,0)',
    ease: 'none',
  }, 0);

  // 2. Reveal Script Text ("Crafted with Vision") and Subtitle on scroll
  heroTl.to(scriptReveal, {
    opacity: 1,
    y: 0,
    ease: 'power2.out',
  }, 0.15);

  heroTl.to(heroSubtitle, {
    opacity: 1,
    y: 0,
    ease: 'power2.out',
  }, 0.25);

  heroTl.to(heroBadgeTag, {
    opacity: 1,
    ease: 'power2.out',
  }, 0.35);

  // 3. Fade out circular spin badge as arch expands
  heroTl.to(spinBadge, {
    opacity: 0,
    scale: 0.7,
    ease: 'power1.out',
  }, 0.1);
}

// ==========================================================================
// 2. NAVIGATION DRAWER OVERLAY TOGGLE
// ==========================================================================

const menuBtn = document.getElementById('menu-toggle-btn');
const navDrawer = document.getElementById('nav-drawer');
const drawerBackdrop = document.querySelector('.drawer-backdrop');
const drawerLinks = document.querySelectorAll('.drawer-link');
const pillText = menuBtn?.querySelector('.pill-text');

let isDrawerOpen = false;

function toggleDrawer() {
  isDrawerOpen = !isDrawerOpen;

  if (isDrawerOpen) {
    navDrawer?.classList.add('active');
    navDrawer?.setAttribute('aria-hidden', 'false');
    if (pillText) pillText.textContent = 'CLOSE';
    lenis.stop(); // Stop scroll when drawer is open
  } else {
    navDrawer?.classList.remove('active');
    navDrawer?.setAttribute('aria-hidden', 'true');
    if (pillText) pillText.textContent = 'MENU';
    lenis.start(); // Resume scroll
  }
}

menuBtn?.addEventListener('click', toggleDrawer);
drawerBackdrop?.addEventListener('click', toggleDrawer);

drawerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (isDrawerOpen) toggleDrawer();
  });
});

// ==========================================================================
// 3. AUTOMATIC POLAROID CARD STACK ROTATION CAROUSEL
// ==========================================================================

const polaroidStack = document.getElementById('polaroid-stack');
const cards = Array.from(document.querySelectorAll('.polaroid-card'));

if (cards.length > 0) {
  // Preset card stack position layers
  const stackConfigs = [
    { zIndex: 3, rotate: -5, scale: 1, x: 0, y: 0 },
    { zIndex: 2, rotate: 4, scale: 0.96, x: 15, y: -10 },
    { zIndex: 1, rotate: -2, scale: 0.92, x: -10, y: -20 },
  ];

  let cardIndices = [0, 1, 2]; // Tracks which card is in which stack position layer
  let autoplayTimer = null;

  // Apply initial positions to cards
  function updateCardPositions(animate = true) {
    cards.forEach((card, i) => {
      const posIndex = cardIndices[i];
      const config = stackConfigs[posIndex];

      if (animate) {
        gsap.to(card, {
          zIndex: config.zIndex,
          rotation: config.rotate,
          scale: config.scale,
          x: config.x,
          y: config.y,
          duration: 0.6,
          ease: 'power2.out',
        });
      } else {
        gsap.set(card, {
          zIndex: config.zIndex,
          rotation: config.rotate,
          scale: config.scale,
          x: config.x,
          y: config.y,
        });
      }
    });
  }

  // Automatic Shuffle Step: Front card moves out and drops to back
  function cycleNextCard() {
    // Identify current top card index (where posIndex === 0)
    const topCardIndex = cardIndices.indexOf(0);
    const topCard = cards[topCardIndex];

    // 1. Animate top card sliding out gracefully
    gsap.to(topCard, {
      x: 180,
      rotation: 15,
      opacity: 0.85,
      duration: 0.45,
      ease: 'power2.in',
      onComplete: () => {
        // Shift indices array: top card moves to back (layer 2)
        cardIndices = cardIndices.map((pos) => (pos === 0 ? 2 : pos - 1));

        // Update all z-indices & positions
        updateCardPositions(true);

        // 2. Slide top card smoothly back into the bottom of the stack
        gsap.to(topCard, {
          opacity: 1,
          duration: 0.45,
          ease: 'power2.out',
        });
      },
    });
  }

  // Initialize initial stack positions
  updateCardPositions(false);

  // Autoplay cycle every 3.2 seconds
  function startAutoplay() {
    if (!autoplayTimer) {
      autoplayTimer = setInterval(cycleNextCard, 3200);
    }
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Start autoplay when section is reached
  ScrollTrigger.create({
    trigger: '.polaroid-section',
    start: 'top 75%',
    onEnter: startAutoplay,
    onLeaveBack: stopAutoplay,
  });

  // Pause on hover, resume on mouse leave
  polaroidStack?.addEventListener('mouseenter', stopAutoplay);
  polaroidStack?.addEventListener('mouseleave', startAutoplay);
  polaroidStack?.addEventListener('click', cycleNextCard);
}

// Entrance animation for Section 2 elements
gsap.from('.trust-pill', {
  scrollTrigger: {
    trigger: '.polaroid-section',
    start: 'top 80%',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power3.out',
});

gsap.from('.dual-heading-wrapper', {
  scrollTrigger: {
    trigger: '.polaroid-section',
    start: 'top 75%',
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: 'power3.out',
});

gsap.from('.polaroid-card', {
  scrollTrigger: {
    trigger: '.polaroid-section',
    start: 'top 70%',
  },
  opacity: 0,
  y: 60,
  stagger: 0.2,
  duration: 1.2,
  ease: 'back.out(1.4)',
});

// Back to Top button smooth scroll
const backToTopBtn = document.getElementById('back-to-top');
backToTopBtn?.addEventListener('click', () => {
  lenis.scrollTo(0, { duration: 1.5 });
});
