import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Navbar from './components/Navbar.jsx';
import NavDrawer from './components/NavDrawer.jsx';
import HeroA from './components/hero/HeroA.jsx';
import PolaroidSection from './components/PolaroidSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CaseStudiesSection from './components/CaseStudiesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import CtaSection from './components/CtaSection.jsx';
import Footer from './components/Footer.jsx';
import TeamPage from './components/TeamPage.jsx';
import ComplementaryServicesPage from './components/ComplementaryServicesPage.jsx';
import BlogPage from './components/BlogPage.jsx';
import BlogPostPage from './components/BlogPostPage.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <HeroA ctaHref="#about" />
      <PolaroidSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    window.__lenis = lenis;

    return () => {
      window.__lenis = null;
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar isDrawerOpen={isDrawerOpen} onToggleDrawer={handleToggleDrawer} />
      <NavDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/complementary-services" element={<ComplementaryServicesPage />} />
          <Route path="/complementary" element={<ComplementaryServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/insights" element={<BlogPage />} />
          <Route path="/insights/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
