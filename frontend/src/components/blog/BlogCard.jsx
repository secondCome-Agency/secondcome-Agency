import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ article, featured = false }) {
  if (!article) return null;

  if (featured) {
    return (
      <article className="blog-featured-card">
        <div className="blog-featured-card-grid">
          {/* Visual Cover Box */}
          <Link to={`/blog/${article.slug}`} className="blog-featured-cover-link">
            <div className="blog-featured-cover-box">
              <img
                src={article.coverImage}
                alt={article.coverAlt || article.title}
                className="blog-featured-cover-img"
                loading="eager"
              />
              <span className="blog-featured-badge">FEATURED ARTICLE</span>
            </div>
          </Link>

          {/* Editorial Content */}
          <div className="blog-featured-content">
            <div className="blog-card-meta-row">
              <span className="blog-category-tag">{article.category}</span>
              <span className="blog-meta-dot">•</span>
              <span className="blog-card-read-time">{article.readingTime}</span>
              <span className="blog-meta-dot">•</span>
              <span className="blog-card-date">{article.publishedDate}</span>
            </div>

            <h2 className="blog-featured-title">
              <Link to={`/blog/${article.slug}`} className="blog-featured-title-link">
                {article.title}
              </Link>
            </h2>

            <p className="blog-featured-desc">
              {article.lede || article.description}
            </p>

            <div className="blog-featured-footer">
              <div className="blog-author-byline">
                <div className="blog-author-avatar-sm" aria-hidden="true">
                  {article.author?.initials || 'SC'}
                </div>
                <div className="blog-author-info-sm">
                  <span className="blog-author-name-sm">{article.author?.name}</span>
                  <span className="blog-author-role-sm">{article.author?.role}</span>
                </div>
              </div>

              <Link to={`/blog/${article.slug}`} className="blog-read-more-btn">
                <span>Read Full Article</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="blog-standard-card">
      <Link to={`/blog/${article.slug}`} className="blog-standard-card-cover-wrap">
        <div className="blog-standard-card-cover">
          <img
            src={article.coverImage}
            alt={article.coverAlt || article.title}
            className="blog-standard-card-img"
            loading="lazy"
          />
          <span className="blog-category-tag blog-category-tag--floating">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="blog-standard-card-body">
        <div className="blog-card-meta-row">
          <span className="blog-card-date">{article.publishedDate}</span>
          <span className="blog-meta-dot">•</span>
          <span className="blog-card-read-time">{article.readingTime}</span>
        </div>

        <h3 className="blog-standard-card-title">
          <Link to={`/blog/${article.slug}`} className="blog-card-title-link">
            {article.title}
          </Link>
        </h3>

        <p className="blog-standard-card-desc">
          {article.description}
        </p>

        <div className="blog-standard-card-footer">
          <span className="blog-standard-card-author">By {article.author?.name}</span>
          <Link to={`/blog/${article.slug}`} className="blog-card-read-link">
            <span>Read More</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

