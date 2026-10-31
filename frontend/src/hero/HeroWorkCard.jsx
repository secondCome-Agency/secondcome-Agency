import React from 'react';

/**
 * HeroWorkCard Component
 * An editorial floating preview card of luxury client work.
 */
export default function HeroWorkCard({
  image = '/assets/ref_card1_perfume.webp',
  tag = 'FEATURED ARCHITECTURE',
  title = 'Haute Parfumerie & D2C',
  onClickHref = '#case-studies',
}) {
  return (
    <a href={onClickHref} className="sc-work-card" aria-label={`View ${title}`}>
      <div className="sc-work-card-media">
        <img src={image} alt={title} className="sc-work-card-img" />
        <div className="sc-work-card-glass">
          <span className="sc-work-card-tag">{tag}</span>
          <span className="sc-work-card-title">{title}</span>
        </div>
      </div>
      <div className="sc-work-card-arrow" aria-hidden="true">
        <span>Explore Work</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </a>
  );
}
