import React, { useState, useEffect } from 'react';

/**
 * Numbered Table of Contents with active section observation
 * and smooth scroll offset so headers are never obscured by the fixed navbar.
 */
export default function TableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 90;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <nav className="blog-toc-box" aria-label="Table of contents">
      <div className="blog-toc-header">
        <span className="blog-toc-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" />
            <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" />
            <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" />
          </svg>
        </span>
        <strong className="blog-toc-title">Table of Contents</strong>
      </div>
      <ol className="blog-toc-list">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className={`blog-toc-item ${isActive ? 'is-active' : ''}`}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="blog-toc-link"
              >
                <span className="blog-toc-num">{String(index + 1).padStart(2, '0')}.</span>
                <span className="blog-toc-label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

