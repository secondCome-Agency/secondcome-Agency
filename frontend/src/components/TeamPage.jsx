import React from 'react';
import './TeamPageEditorial.css';

// ============================================================================
// SECONDCOME AGENCY — TEAM ROSTER PHOTOGRAPHS
// ============================================================================
// To assign or replace a photograph:
// Update the `image` property in TEAM_MEMBERS_SPEC below.
// If an image has not yet been provided, set `image: null` — an obvious temporary
// placeholder rectangle will be rendered automatically without fabricating a person.
// ============================================================================
import team1 from '../assets/team1.jpg'; // Akash (Strategy Executer / CEO)
import team2 from '../assets/team2.jpg'; // Anvi Sharma (CTO)
import team3 from '../assets/team3.jpg'; // Suhani Maurya (Design Lead)
import team4 from '../assets/team4.jpg'; // Tannu Bhadoria (COO)
import team5 from '../assets/team5.jpg'; // Rashmi (Director of CRM)
import team6 from '../assets/team6.jpeg'; // Sheetal Sharma (Marketing & Sales)

// ============================================================================
// ============================================================================
// ASYMMETRICAL EDITORIAL CANVAS GEOMETRY — BALANCED DISTANCE SPECIFICATION
// ============================================================================
export const TEAM_MEMBERS_SPEC = [
  {
    id: 'portrait-a',
    code: 'A',
    name: 'Akash',
    signature: 'Akash',
    role: 'Strategy Executer / Founder',
    description: 'Bespoke luxury positioning & revenue architecture.',
    image: team1,
    imagePosition: 'center 10%',
    portraitPosition: { left: '6%', top: '5%' },
    portraitSize: { width: '37%', height: '20%' },
    zIndex: 3,
    signaturePosition: { left: '6%', top: '25.5%', textAlign: 'left' },
    descPosition: { left: '6%', top: '27.8%', textAlign: 'left', maxWidth: '37cqi' },
    blueBlock: { left: '2.5%', top: '15%', width: '7.5%', height: '11%', zIndex: 2 },
  },
  {
    id: 'portrait-b',
    code: 'B',
    name: 'Tannu Bhadoria',
    signature: 'Tannu Bhadoria',
    role: 'Chief Operating Officer',
    description: 'Omnichannel acquisition & operational scale.',
    image: team4,
    imagePosition: 'center 10%',
    portraitPosition: { left: '56%', top: '12%' },
    portraitSize: { width: '37%', height: '21%' },
    zIndex: 3,
    signaturePosition: { left: '56%', top: '33.5%', textAlign: 'left' },
    descPosition: { left: '56%', top: '35.8%', textAlign: 'left', maxWidth: '37cqi' },
    blueBlock: { left: '85%', top: '7%', width: '7.5%', height: '10.5%', zIndex: 2 },
  },
  {
    id: 'portrait-c',
    code: 'C',
    name: 'Anvi Sharma',
    signature: 'Anvi Sharma',
    role: 'Chief Technology Officer',
    description: 'Autonomous AI workflows & systems engineering.',
    image: team2,
    imagePosition: 'center 10%',
    portraitPosition: { left: '10%', top: '37%' },
    portraitSize: { width: '38%', height: '21%' },
    zIndex: 4,
    signaturePosition: { left: '10%', top: '58.5%', textAlign: 'left' },
    descPosition: { left: '10%', top: '60.8%', textAlign: 'left', maxWidth: '37cqi' },
    blueBlock: { left: '6.5%', top: '46%', width: '7.5%', height: '11%', zIndex: 3 },
  },
  {
    id: 'portrait-f',
    code: 'F',
    name: 'Suhani Maurya',
    signature: 'Suhani Maurya',
    role: 'Lead Digital Architect',
    description: 'Bespoke UI platforms & editorial typography.',
    image: team3,
    imagePosition: 'center 10%',
    portraitPosition: { left: '56%', top: '43%' },
    portraitSize: { width: '35%', height: '20%' },
    zIndex: 3,
    signaturePosition: { left: '56%', top: '63.5%', textAlign: 'left' },
    descPosition: { left: '56%', top: '65.8%', textAlign: 'left', maxWidth: '35cqi' },
    blueBlock: { left: '83%', top: '51%', width: '7.5%', height: '11%', zIndex: 2 },
  },
  {
    id: 'portrait-d',
    code: 'D',
    name: 'Sheetal Sharma',
    signature: 'Sheetal Sharma',
    role: 'Editor & Marketing Lead',
    description: 'Conversion storytelling & brand narrative.',
    image: team6,
    imagePosition: 'center 10%',
    portraitPosition: { left: '6%', top: '68%' },
    portraitSize: { width: '37%', height: '20%' },
    zIndex: 4,
    signaturePosition: { left: '6%', top: '88.5%', textAlign: 'left' },
    descPosition: { left: '6%', top: '90.8%', textAlign: 'left', maxWidth: '37cqi' },
    blueBlock: { left: '2.5%', top: '76%', width: '7.5%', height: '11%', zIndex: 3 },
  },
  {
    id: 'portrait-e',
    code: 'E',
    name: 'Rashmi',
    signature: 'Rashmi',
    role: 'Director of CRM & AI Automation',
    description: 'Enterprise data pipelines & predictive lead systems.',
    image: team5,
    imagePosition: 'center 10%',
    portraitPosition: { left: '54%', top: '71%' },
    portraitSize: { width: '37%', height: '20%' },
    zIndex: 5,
    signaturePosition: { left: '54%', top: '91.5%', textAlign: 'left' },
    descPosition: { left: '54%', top: '93.8%', textAlign: 'left', maxWidth: '37cqi' },
    blueBlock: { left: '83%', top: '80%', width: '7.5%', height: '11%', zIndex: 4 },
  },
];

export default function TeamPage() {
  return (
    <div className="secondcome-team-editorial-root">
      {/* ==================================================================
          TOP HEADER: Earlier Team Page Title Section
          ================================================================== */}
      <section className="editorial-team-header" aria-label="Team Overview">
        <div className="editorial-trust-pill">
          <span className="editorial-trust-dot" />
          <span>THE MINDS BEHIND SECOND COME AGENCY</span>
        </div>

        <div className="editorial-title-group">
          <span className="editorial-script-subtitle">Visionaries, Engineers & Designers</span>
          <h1 className="editorial-hero-title">THE MASTERS OF BRAND & AUTOMATION</h1>
        </div>

        <p className="editorial-hero-lead">
          We fuse high-end luxury brand positioning, 24/7 autonomous AI engineering, and bespoke digital architecture to engineer radical market growth.
        </p>
      </section>

      {/* 860 × 1680 Editorial Canvas with Generous Breathing Room */}
      <div className="reference-editorial-canvas" aria-label="SecondCome Agency Team Roster">
        {/* ==================================================================
            1. TOP INTRODUCTION (Upper-Right Quadrant: x=56%, y=1%, width=40%)
            ================================================================== */}
        <section className="editorial-top-intro" aria-label="Team Philosophy">
          <div className="intro-text-group">
            <p className="intro-line">Growing together, timeless and enduring,</p>
            <p className="intro-line">Inquiring relentlessly, tracing to the source,</p>
            <p className="intro-line">Probing every question to its deepest core.</p>
          </div>
          <div className="intro-gap" />
          <div className="intro-text-group">
            <p className="intro-line">Embracing innovation head-on,</p>
            <p className="intro-line">Driven by action and transformation,</p>
            <p className="intro-line">Giving this ever-shifting era its answer.</p>
          </div>
        </section>

        {/* ==================================================================
            2. BLUE RECTANGLES & PORTRAIT COLLAGE WITH SIGNATURE OVERLAYS
            ================================================================== */}
        {TEAM_MEMBERS_SPEC.map((member) => (
          <React.Fragment key={member.id}>
            {/* Graphic Rectangular Accent Block matching Featured Studio cards (--color-dark-teal #2D454D) */}
            {member.blueBlock && (
              <div
                className="editorial-blue-rect"
                aria-hidden="true"
                style={{
                  left: member.blueBlock.left,
                  top: member.blueBlock.top,
                  width: member.blueBlock.width,
                  height: member.blueBlock.height,
                  zIndex: member.blueBlock.zIndex,
                }}
              />
            )}

            {/* Asymmetrical Sharp-Cornered Rectangular Grayscale Portrait */}
            <div
              className="editorial-portrait-frame"
              style={{
                left: member.portraitPosition.left,
                top: member.portraitPosition.top,
                width: member.portraitSize.width,
                height: member.portraitSize.height,
                zIndex: member.zIndex,
              }}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  className="editorial-portrait-photo"
                  style={{ objectPosition: member.imagePosition || 'center' }}
                  loading="eager"
                  draggable={false}
                />
              ) : (
                <div className="editorial-placeholder-box" role="status">
                  <span className="placeholder-lbl">PORTRAIT PENDING</span>
                  <span className="placeholder-sublbl">{member.name}</span>
                </div>
              )}
            </div>

            {/* Editorial Signature-Style Name */}
            <div
              className="editorial-member-signature"
              aria-hidden="true"
              style={{
                left: member.signaturePosition.left,
                top: member.signaturePosition.top,
                textAlign: member.signaturePosition.textAlign || 'left',
                zIndex: 10 + member.zIndex,
              }}
            >
              {member.signature || member.name}
            </div>

            {/* Small Restrained Role & Description */}
            <div
              className="editorial-member-meta"
              style={{
                left: member.descPosition.left,
                top: member.descPosition.top,
                textAlign: member.descPosition.textAlign || 'left',
                maxWidth: member.descPosition.maxWidth || '24cqi',
                zIndex: 10 + member.zIndex,
              }}
            >
              <div className="meta-role-line">{member.role}</div>
              {member.description && (
                <div className="meta-desc-line">{member.description}</div>
              )}
            </div>
          </React.Fragment>
        ))}

        {/* ==================================================================
            3. BOTTOM BRANDING (x=63%, y=78%)
            ================================================================== */}
        {/* <section className="editorial-bottom-branding" aria-label="SecondCome Agency Branding">
          <div className="branding-wordmark-row">
            <span className="wordmark-blue">secondcome</span>
          </div>
          <div className="branding-chinese-title">STUDIO COLLECTIVE</div>
          <div className="branding-chinese-sub">Luxury Brand Acceleration & Intelligent Systems</div>
          <div className="branding-agency-tag">SECONDCOME AGENCY // 2026</div>
        </section> */}
      </div>
    </div>
  );
}
