import React, { useState } from 'react';

export default function TopAnnouncementBar({ onExplore }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-announcement-bar" role="banner" aria-label="Complementary Support Announcement">
      <div className="top-announcement-inner">
        <div className="top-announcement-left">
          <span className="announcement-pill-tag">COMPLIMENTARY SUPPORT</span>
          <div className="announcement-text-content">
            <span className="announcement-title">
              Get 3 Months of Complementary Digital Support With Your Project.
            </span>
            <span className="announcement-sub">
              SEO · Google Business · Social Optimization · Website Improvements · Growth Support
            </span>
          </div>
        </div>

        <div className="top-announcement-right">
          <button onClick={onExplore} className="announcement-cta-btn">
            <span>EXPLORE SUPPORT</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="announcement-close-btn"
            aria-label="Dismiss announcement"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
