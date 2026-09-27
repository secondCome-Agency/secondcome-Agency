import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"

gsap.registerPlugin(ScrollTrigger);

export default function PolaroidSection() {
  const [cardIndices, setCardIndices] = useState([0, 1, 2]);

  const cardsData = [
    { id: 1, title: 'Identity & Brand Strategy', num: '01', img: image4 },
    { id: 2, title: 'AI Automations & Scaling', num: '02', img: '/assets/polaroid2.jpg' },
    { id: 3, title: 'High-Performance Web Platforms', num: '03', img: image5 },
  ];

  const stackConfigs = [
    { zIndex: 3, rotate: -5, scale: 1, x: 0, y: 0 },
    { zIndex: 2, rotate: 4, scale: 0.96, x: 15, y: -10 },
    { zIndex: 1, rotate: -2, scale: 0.92, x: -10, y: -20 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCardIndices((prev) => prev.map((pos) => (pos === 0 ? 2 : pos - 1)));
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const cycleCard = () => {
    setCardIndices((prev) => prev.map((pos) => (pos === 0 ? 2 : pos - 1)));
  };

  return (
    <section className="polaroid-section" id="about">
      <div className="section-container">
        <div className="polaroid-text-col">
          <div className="trust-pill">
            <span className="trust-dot"></span> ABOUT SECOND COME AGENCY
          </div>

          <div className="dual-heading-wrapper">
            <h2 className="heading-serif">WHO WE ARE</h2>
            <span className="heading-script">Driven by vision & precision</span>
          </div>

          <p className="body-description">
            SecondCome is a modern digital growth agency helping businesses build, grow, and automate their digital presence.
            We combine performance marketing, website development, branding, business growth, and AI automation.
            Our approach focuses on creative strategy, meaningful digital experiences, and measurable business results.
            We aim to be more than just another agency, becoming a long-term growth partner for ambitious businesses.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <span className="feature-num">01.</span>
              <span className="feature-text">Real ideas, bold execution, measurable impact.</span>
            </div>
            <div className="feature-item">
              <span className="feature-num">02.</span>
              <span className="feature-text">Enterprise CRM & 24/7 AI automation pipelines</span>
            </div>
            <div className="feature-item">
              <span className="feature-num">03.</span>
              <span className="feature-text">Digital experiences designed to move businesses forward.</span>
            </div>
          </div>

          <div className="cta-wrapper">
            <Link to="/team" className="btn-primary">
              <span>WORK WITH OUR TEAM</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>


        <div className="polaroid-card-col">
          <div className="polaroid-stack" id="polaroid-stack" onClick={cycleCard}>
            {cardsData.map((card, i) => {
              const pos = cardIndices[i];
              const config = stackConfigs[pos];
              return (
                <div
                  key={card.id}
                  className={`polaroid-card card-${card.id}`}
                  style={{
                    zIndex: config.zIndex,
                    transform: `rotate(${config.rotate}deg) translate(${config.x}px, ${config.y}px) scale(${config.scale})`,
                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  <div className="polaroid-frame">
                    <img src={card.img} alt={card.title} className="polaroid-img" />
                    <div className="polaroid-caption">
                      <span className="caption-num">{card.num}</span>
                      <span className="caption-text">{card.title}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
