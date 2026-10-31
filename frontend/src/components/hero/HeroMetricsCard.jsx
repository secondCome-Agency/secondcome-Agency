import React from 'react';

/**
 * HeroMetricsCard Component
 * An editorial agency impact metrics card proving real commercial results.
 */
export default function HeroMetricsCard() {
  return (
    <div className="sc-metrics-card" aria-label="SecondCome Agency Performance Metrics">
      <div className="sc-metric-item">
        <span className="sc-metric-num">+340%</span>
        <span className="sc-metric-label">Avg. 12-Mo Revenue Acceleration</span>
      </div>
      <div className="sc-metric-divider" aria-hidden="true" />
      <div className="sc-metric-meta">
        <span className="sc-metric-dot" aria-hidden="true" />
        <span className="sc-metric-clients">14+ Enterprise & Luxury Brands Scaled</span>
      </div>
    </div>
  );
}

