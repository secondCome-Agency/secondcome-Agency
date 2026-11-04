import React from 'react';

/**
 * Responsive, crisp SVG illustrations and diagrams matching SecondCome's
 * editorial brand palette: Deep Teal (#003F3A), Dark Teal (#0B2928),
 * Turquoise (#36A6A3), Soft Mint (#DDF3E8), and Off-White (#F5FBF5).
 */
export function DiagramResponsiveScreen() {
  return (
    <figure className="blog-article-figure" aria-label="Desktop and mobile responsive viewport comparison">
      <div className="blog-svg-wrapper">
        <svg
          viewBox="0 0 680 160"
          className="blog-diagram-svg"
          role="img"
          aria-label="A desktop screen and a phone showing unified editorial responsive layout"
        >
          <rect width="680" height="160" fill="#DDF3E8" rx="8" />
          {/* Desktop display */}
          <rect x="110" y="22" width="280" height="110" rx="6" fill="#F5FBF5" stroke="#003F3A" strokeWidth="3" />
          <rect x="130" y="38" width="110" height="12" rx="2" fill="#003F3A" />
          <rect x="130" y="60" width="200" height="8" rx="2" fill="#36A6A3" />
          <rect x="130" y="76" width="160" height="8" rx="2" fill="#36A6A3" />
          <rect x="130" y="98" width="70" height="16" rx="4" fill="#003F3A" />
          <rect x="215" y="132" width="70" height="12" rx="2" fill="#003F3A" />

          {/* Mobile display */}
          <rect x="460" y="16" width="84" height="128" rx="12" fill="#F5FBF5" stroke="#003F3A" strokeWidth="3" />
          <rect x="474" y="36" width="56" height="10" rx="2" fill="#003F3A" />
          <rect x="474" y="54" width="56" height="6" rx="1.5" fill="#36A6A3" />
          <rect x="474" y="66" width="44" height="6" rx="1.5" fill="#36A6A3" />
          <rect x="474" y="78" width="50" height="6" rx="1.5" fill="#36A6A3" />
          <rect x="474" y="106" width="56" height="16" rx="4" fill="#003F3A" />
        </svg>
      </div>
      <figcaption className="blog-article-figcaption">
        A website that holds together on both screens keeps more of the prospective clients you already attracted.
      </figcaption>
    </figure>
  );
}

export function DiagramConversionFunnel() {
  return (
    <figure className="blog-article-figure" aria-label="From initial visit to qualified customer enquiry">
      <div className="blog-svg-wrapper">
        <svg
          viewBox="0 0 680 160"
          className="blog-diagram-svg"
          role="img"
          aria-label="Three structured bars showing the conversion journey: Visit, Trust, and Enquire"
        >
          <rect width="680" height="160" fill="#DDF3E8" rx="8" />
          {/* Top Bar: Visit */}
          <rect x="40" y="20" width="600" height="38" rx="4" fill="#36A6A3" />
          <text x="340" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0B2928" letterSpacing="0.08em">
            STEP 1: VISIT (First Impression &amp; Speed)
          </text>

          {/* Middle Bar: Trust */}
          <rect x="120" y="62" width="440" height="38" rx="4" fill="#1B7C79" />
          <text x="340" y="86" textAnchor="middle" fontSize="14" fontWeight="700" fill="#F5FBF5" letterSpacing="0.08em">
            STEP 2: TRUST (Proof, Case Studies &amp; Clarity)
          </text>

          {/* Bottom Bar: Enquire */}
          <rect x="200" y="104" width="280" height="38" rx="4" fill="#003F3A" />
          <text x="340" y="128" textAnchor="middle" fontSize="14" fontWeight="700" fill="#F5FBF5" letterSpacing="0.08em">
            STEP 3: ENQUIRE (Frictionless CTAs)
          </text>
        </svg>
      </div>
      <figcaption className="blog-article-figcaption">
        Each step represents an opportunity to either build customer confidence or lose them to a competitor.
      </figcaption>
    </figure>
  );
}

export function DiagramFiveLayers() {
  return (
    <figure className="blog-article-figure" aria-label="Five essential layers of a high-performing website">
      <div className="blog-svg-wrapper">
        <svg
          viewBox="0 0 680 340"
          className="blog-diagram-svg"
          role="img"
          aria-label="Five stacked layers: Foundation, Structure, Content, Design, and Conversion"
        >
          <rect width="680" height="340" fill="#F5FBF5" stroke="#C3DCCF" strokeWidth="1" rx="8" />

          {/* Layer 1: Foundation */}
          <rect x="40" y="266" width="600" height="54" rx="4" fill="#003F3A" />
          <text x="64" y="291" fontSize="15" fontWeight="700" fill="#F5FBF5">
            1. Foundation
          </text>
          <text x="64" y="309" fontSize="12" fill="#DDF3E8">
            Hosting infrastructure, Core Web Vitals, HTTPS security, and caching
          </text>

          {/* Layer 2: Structure */}
          <rect x="80" y="202" width="520" height="54" rx="4" fill="#1B7C79" />
          <text x="104" y="227" fontSize="15" fontWeight="700" fill="#F5FBF5">
            2. Structure
          </text>
          <text x="104" y="245" fontSize="12" fill="#F5FBF5">
            Intuitive navigation hierarchy, URL taxonomy, and responsive screen adaptation
          </text>

          {/* Layer 3: Content */}
          <rect x="120" y="138" width="440" height="54" rx="4" fill="#36A6A3" />
          <text x="144" y="163" fontSize="15" fontWeight="700" fill="#0B2928">
            3. Content
          </text>
          <text x="144" y="181" fontSize="12" fill="#0B2928">
            Commercial search-ready copy, verified case studies, and clear positioning
          </text>

          {/* Layer 4: Design */}
          <rect x="160" y="74" width="360" height="54" rx="4" fill="#DDF3E8" stroke="#003F3A" strokeWidth="1.5" />
          <text x="184" y="99" fontSize="15" fontWeight="700" fill="#0B2928">
            4. Design
          </text>
          <text x="184" y="117" fontSize="12" fill="#003F3A">
            A cohesive editorial aesthetic, typographic hierarchy, and brand authority
          </text>

          {/* Layer 5: Conversion */}
          <rect x="200" y="14" width="280" height="50" rx="4" fill="#F5FBF5" stroke="#003F3A" strokeWidth="2" />
          <text x="224" y="38" fontSize="15" fontWeight="700" fill="#003F3A">
            5. Conversion
          </text>
          <text x="224" y="54" fontSize="12" fill="#1B7C79">
            Strategic calls to action and multi-channel booking pathways
          </text>
        </svg>
      </div>
      <figcaption className="blog-article-figcaption">
        Build from the bottom up: each architectural layer provides the foundation for the next.
      </figcaption>
    </figure>
  );
}

export function DiagramSocialHamsterWheel() {
  return (
    <figure className="blog-article-figure" aria-label="Social media activity versus strategic revenue architecture">
      <div className="blog-svg-wrapper">
        <svg
          viewBox="0 0 680 180"
          className="blog-diagram-svg"
          role="img"
          aria-label="Comparison between high-volume posting and low-friction conversion funnels"
        >
          <rect width="680" height="180" fill="#F5FBF5" stroke="#C3DCCF" strokeWidth="1" rx="8" />

          {/* Box 1: The Daily Trap */}
          <rect x="30" y="24" width="295" height="132" rx="6" fill="#DDF3E8" stroke="#1B7C79" strokeWidth="1.5" />
          <text x="50" y="52" fontSize="14" fontWeight="800" fill="#003F3A" letterSpacing="0.06em">
            THE DAILY POSTING TRAP
          </text>
          <text x="50" y="76" fontSize="12" fill="#0B2928">
            • 7 posts/week chasing audio trends
          </text>
          <text x="50" y="96" fontSize="12" fill="#0B2928">
            • Thousands of passive views &amp; likes
          </text>
          <text x="50" y="116" fontSize="12" fill="#0B2928">
            • Exhausted creative team
          </text>
          <text x="50" y="138" fontSize="13" fontWeight="700" fill="#B91C1C">
            Result: High Burnout, Zero Pipeline
          </text>

          {/* Box 2: The Revenue Funnel */}
          <rect x="355" y="24" width="295" height="132" rx="6" fill="#003F3A" />
          <text x="375" y="52" fontSize="14" fontWeight="800" fill="#F5FBF5" letterSpacing="0.06em">
            STRATEGIC REVENUE FUNNEL
          </text>
          <text x="375" y="76" fontSize="12" fill="#DDF3E8">
            • 2-3 deep authority assets per week
          </text>
          <text x="375" y="96" fontSize="12" fill="#DDF3E8">
            • Verified case transformations &amp; proof
          </text>
          <text x="375" y="116" fontSize="12" fill="#DDF3E8">
            • Low-friction DM &amp; website bridges
          </text>
          <text x="375" y="138" fontSize="13" fontWeight="700" fill="#36A6A3">
            Result: Predictable High-Value Pipeline
          </text>
        </svg>
      </div>
      <figcaption className="blog-article-figcaption">
        Moving from vanity volume to commercial authority transforms social media from an expense into a growth driver.
      </figcaption>
    </figure>
  );
}

export function DiagramFourPillars() {
  return (
    <figure className="blog-article-figure" aria-label="The 4-Pillar Content Engine Architecture">
      <div className="blog-svg-wrapper">
        <svg
          viewBox="0 0 680 190"
          className="blog-diagram-svg"
          role="img"
          aria-label="Four distinct pillars of content: Proof, Philosophy, Utility, and Conversion"
        >
          <rect width="680" height="190" fill="#DDF3E8" rx="8" />

          {/* Pillar 1 */}
          <rect x="25" y="22" width="145" height="146" rx="6" fill="#F5FBF5" stroke="#003F3A" strokeWidth="1.5" />
          <text x="97" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#003F3A">
            PILLAR 1
          </text>
          <text x="97" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B2928">
            Proof &amp; Case
          </text>
          <text x="97" y="98" textAnchor="middle" fontSize="11" fill="#64748B">
            Metrics, client
          </text>
          <text x="97" y="114" textAnchor="middle" fontSize="11" fill="#64748B">
            transformations &amp;
          </text>
          <text x="97" y="130" textAnchor="middle" fontSize="11" fill="#64748B">
            real outcomes
          </text>

          {/* Pillar 2 */}
          <rect x="185" y="22" width="145" height="146" rx="6" fill="#F5FBF5" stroke="#003F3A" strokeWidth="1.5" />
          <text x="257" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#003F3A">
            PILLAR 2
          </text>
          <text x="257" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B2928">
            Philosophy
          </text>
          <text x="257" y="98" textAnchor="middle" fontSize="11" fill="#64748B">
            Contrarian views,
          </text>
          <text x="257" y="114" textAnchor="middle" fontSize="11" fill="#64748B">
            strategic vision &amp;
          </text>
          <text x="257" y="130" textAnchor="middle" fontSize="11" fill="#64748B">
            market perspective
          </text>

          {/* Pillar 3 */}
          <rect x="345" y="22" width="145" height="146" rx="6" fill="#F5FBF5" stroke="#003F3A" strokeWidth="1.5" />
          <text x="417" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#003F3A">
            PILLAR 3
          </text>
          <text x="417" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0B2928">
            Tactical Utility
          </text>
          <text x="417" y="98" textAnchor="middle" fontSize="11" fill="#64748B">
            Step-by-step
          </text>
          <text x="417" y="114" textAnchor="middle" fontSize="11" fill="#64748B">
            teardowns &amp;
          </text>
          <text x="417" y="130" textAnchor="middle" fontSize="11" fill="#64748B">
            actionable playbooks
          </text>

          {/* Pillar 4 */}
          <rect x="505" y="22" width="150" height="146" rx="6" fill="#003F3A" />
          <text x="580" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#36A6A3">
            PILLAR 4
          </text>
          <text x="580" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#F5FBF5">
            Conversion
          </text>
          <text x="580" y="98" textAnchor="middle" fontSize="11" fill="#DDF3E8">
            Frictionless DMs,
          </text>
          <text x="580" y="114" textAnchor="middle" fontSize="11" fill="#DDF3E8">
            strategic calls &amp;
          </text>
          <text x="580" y="130" textAnchor="middle" fontSize="11" fill="#DDF3E8">
            website bridges
          </text>
        </svg>
      </div>
      <figcaption className="blog-article-figcaption">
        The 4-Pillar Content Engine: Balanced distribution that moves cold prospects into high-intent inbound pipeline.
      </figcaption>
    </figure>
  );
}

export default function ArticleDiagram({ type }) {
  switch (type) {
    case 'responsiveScreen':
      return <DiagramResponsiveScreen />;
    case 'conversionFunnel':
      return <DiagramConversionFunnel />;
    case 'fiveLayers':
      return <DiagramFiveLayers />;
    case 'socialHamsterWheel':
      return <DiagramSocialHamsterWheel />;
    case 'fourPillars':
      return <DiagramFourPillars />;
    default:
      return null;
  }
}

