import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { BLOG_CATEGORIES } from '../../data/blog/categories.js';
import { POPULAR_TAGS } from '../../data/blog/tags.js';

export default function BlogSidebar({ currentCategoryKey = '', onSearch, onSelectCategory, onSelectTag }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchInput.trim();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/blog?search=${encodeURIComponent(query)}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (e, catKey) => {
    if (onSelectCategory) {
      e.preventDefault();
      onSelectCategory(catKey);
    } else {
      // If we are on an article page, navigate back to blog listing with category
      // Link handles this natively
    }
  };

  const handleTagClick = (e, tag) => {
    if (onSelectTag) {
      e.preventDefault();
      onSelectTag(tag);
    } else {
      // Navigate to /blog with tag filter
      // Link handles this natively
    }
  };

  return (
    <aside className="blog-sidebar" aria-label="Blog sidebar">
      {/* 1. Search Box */}
      <div className="blog-sidebar-widget blog-sidebar-widget--search">
        <h3 className="blog-sidebar-widget-title">Search Posts</h3>
        <form className="blog-sidebar-search-form" onSubmit={handleSearchSubmit} role="search">
          <label htmlFor="sidebar-search-input" className="sr-only">
            Search blog articles
          </label>
          <div className="blog-sidebar-search-input-wrap">
            <svg
              className="blog-sidebar-search-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="sidebar-search-input"
              type="search"
              className="blog-sidebar-search-input"
              placeholder="Search articles..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button type="submit" className="blog-sidebar-search-btn">
            Search
          </button>
        </form>
      </div>

      {/* 2. Categories Widget */}
      <div className="blog-sidebar-widget blog-sidebar-widget--categories">
        <h3 className="blog-sidebar-widget-title">Categories</h3>
        <ul className="blog-sidebar-cat-list">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = currentCategoryKey === cat.key;
            return (
              <li key={cat.key} className="blog-sidebar-cat-item">
                <Link
                  to={`/blog?category=${cat.key}`}
                  onClick={(e) => handleCategoryClick(e, cat.key)}
                  className={`blog-sidebar-cat-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="blog-sidebar-cat-name">{cat.label}</span>
                  <span className="blog-sidebar-cat-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. Popular Tags Widget */}
      <div className="blog-sidebar-widget blog-sidebar-widget--tags">
        <h3 className="blog-sidebar-widget-title">Popular Tags</h3>
        <div className="blog-sidebar-tags-cloud">
          {POPULAR_TAGS.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${encodeURIComponent(tag)}`}
              onClick={(e) => handleTagClick(e, tag)}
              className="blog-sidebar-tag-pill"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Strategic Advisory Mini-Callout */}
      <div className="blog-sidebar-advisory-card">
        <div className="blog-sidebar-advisory-pill">SECONDCOME STUDIO</div>
        <h4 className="blog-sidebar-advisory-title">Accelerate Your Market Presence</h4>
        <p className="blog-sidebar-advisory-desc">
          Ready to turn your website and social presence into a reliable customer generation engine?
        </p>
        <a href="/#contact" className="blog-sidebar-advisory-btn">
          <span>Book a Strategy Call</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

