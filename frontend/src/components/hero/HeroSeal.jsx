import React from 'react';

/**
 * HeroSeal Component
 * Replaces the abstract wireframe ScMark with an editorial luxury agency seal
 * and live client availability indicator.
 */
export default function HeroSeal({ className = '' }) {
  return (
    <div className={`sc-seal-wrap ${className}`} aria-label="Second Come Agency Official Seal">
      {/* Live Client Availability Pill */}
      <div className="sc-seal-status">
        <span className="sc-status-pulse" aria-hidden="true" />
        <span className="sc-status-text">Accepting Select Clients</span>
      </div>

      {/* Rotating Circular Luxury Brand Seal */}
      <div className="sc-seal-emblem">
        <svg
          className="sc-seal-svg"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <defs>
            {/* Circular path for rotating text (clockwise) */}
            <path
              id="scSealPath"
              d="M 100, 100 m -66, 0 a 66,66 0 1,1 132,0 a 66,66 0 1,1 -132,0"
            />
          </defs>

          {/* Concentric Decorative Rings */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
            className="sc-seal-orbit"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="sc-seal-inner-ring"
          />

          {/* Rotating Text Along Circle */}
          <g className="sc-seal-spin">
            <text
              className="sc-seal-path-text"
              fill="currentColor"
              fontSize="8.4"
              letterSpacing="2.8"
              fontWeight="700"
            >
              <textPath href="#scSealPath" startOffset="0%">
                SECOND COME AGENCY • BRAND ACCELERATION • 
              </textPath>
            </text>
          </g>

          {/* Center Monogram Shield */}
          <circle
            cx="100"
            cy="100"
            r="44"
            className="sc-seal-center-bg"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="sc-seal-center-border"
          />

          {/* SC Monogram in Luxury Serif */}
          <text
            x="100"
            y="98"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="currentColor"
            className="sc-seal-monogram"
          >
            SC
          </text>

          {/* Est. 2024 Sub-label */}
          <text
            x="100"
            y="119"
            textAnchor="middle"
            fill="currentColor"
            className="sc-seal-year"
          >
            EST. 2024
          </text>
        </svg>
      </div>
    </div>
  );
}

