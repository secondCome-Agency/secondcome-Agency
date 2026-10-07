import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import Navbar from './components/Navbar.jsx';
import NavDrawer from './components/NavDrawer.jsx';
import Hero from './components/Hero.jsx';
import PolaroidSection from './components/PolaroidSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import CaseStudiesSection from './components/CaseStudiesSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import CtaSection from './components/CtaSection.jsx';
import Footer from './components/Footer.jsx';
import TeamPage from './components/TeamPage.jsx';
import ComplementaryServicesPage from './components/ComplementaryServicesPage.jsx';
import TopAnnouncementBar from './components/TopAnnouncementBar.jsx';
import HomeComplementarySection from './components/HomeComplementarySection.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <PolaroidSection />
      <ServicesSection />
      <HomeComplementarySection />
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

    return () => {
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

