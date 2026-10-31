import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from './BlogSection.jsx';
import CtaSection from './CtaSection.jsx';
import './BlogSection.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');

  // Scroll to top on load or when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find post by slug or id
  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug || p.id === slug);
  }, [slug]);

  // Find next and previous posts
  const { prevPost, nextPost } = useMemo(() => {
    if (!post) return { prevPost: null, nextPost: null };
    const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id);
    const prev = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
    const next = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
    return { prevPost: prev, nextPost: next };
  }, [post]);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setToastMessage('Article link copied to clipboard!');
        setTimeout(() => setToastMessage(''), 2500);
      });
    } else {
      setToastMessage('Link ready to share');
      setTimeout(() => setToastMessage(''), 2500);
    }
  };

  // 404 / Fallback State
  if (!post) {
    return (
      <div className="blog-post-page-root">
        <div className="blog-post-not-found">
          <span className="blog-trust-pill">
            <span className="blog-trust-dot" />
            <span>ARTICLE NOT FOUND</span>
          </span>
          <h2>The requested article could not be located.</h2>
          <p>It may have been moved, renamed, or temporarily archived.</p>
          <Link to="/blog" className="blog-read-article-btn">
            <span>← Back to all articles</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page-root">
      {/* Top Breadcrumb & Back Bar */}
      <div className="blog-post-topbar-wrap">
        <div className="blog-post-topbar">
          <button
            type="button"
            className="blog-post-back-btn"
            onClick={() => navigate('/blog')}
            aria-label="Back to blog"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </button>

          <nav className="blog-post-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">HOME</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/blog" className="breadcrumb-link">BLOG</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Main Full-Page Article Container */}
      <article className="blog-post-container">
        {/* Article Header */}
        <header className="blog-post-header">
          <div className="blog-meta-row" style={{ marginBottom: '1.25rem' }}>
            <span className="blog-category-badge">{post.category}</span>
            <span className="blog-read-time">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {post.readTime}
            </span>
            <span className="blog-date-text">• Published on {post.date}</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>

          {/* Author Strip */}
          <div className="blog-post-author-strip">
            <div className="blog-author-byline">
              <div className="blog-author-avatar">{post.author.initials}</div>
              <div className="blog-author-info">
                <span className="blog-author-name">{post.author.name}</span>
                <span className="blog-author-role">{post.author.role}</span>
              </div>
            </div>

            <button
              type="button"
              className="blog-post-share-btn"
              onClick={handleShare}
              aria-label="Share article link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              <span>Share Article</span>
            </button>
          </div>
        </header>

        {/* Executive Summary Callout */}
        {post.content.summary && (
          <div className="blog-post-summary-box">
            <span className="blog-post-summary-label">EXECUTIVE SUMMARY</span>
            <p className="blog-post-summary-text">{post.content.summary}</p>
          </div>
        )}

        {/* Key Strategic Highlights Box */}
        {post.highlights && post.highlights.length > 0 && (
          <div className="blog-post-highlights-card">
            <span className="blog-takeaways-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#36A6A3" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              STRATEGIC BLUEPRINT HIGHLIGHTS
            </span>
            <ul className="blog-takeaway-list" style={{ marginBottom: 0 }}>
              {post.highlights.map((item, idx) => (
                <li key={idx} className="blog-takeaway-item">
                  <span className="blog-takeaway-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="blog-post-body">
          {post.content.sections.map((section, sIdx) => (
            <section key={sIdx} className="blog-post-section-block">
              <h2 className="blog-post-section-heading">{section.heading}</h2>
              {section.body.map((para, pIdx) => (
                <p key={pIdx} className="blog-post-paragraph">
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* Stylized Editorial Pullquote */}
          {post.content.quote && (
            <blockquote className="blog-post-quote">
              <div className="blog-post-quote-mark">“</div>
              <p className="blog-post-quote-text">{post.content.quote}</p>
            </blockquote>
          )}

          {/* Key Takeaways */}
          {post.content.takeaways && post.content.takeaways.length > 0 && (
            <div className="blog-post-takeaways-box">
              <h3 className="blog-post-takeaways-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36A6A3" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                ACTIONABLE TAKEAWAYS FOR YOUR BUSINESS
              </h3>
              <div className="blog-post-takeaways-grid">
                {post.content.takeaways.map((item, idx) => (
                  <div key={idx} className="blog-post-takeaway-row">
                    <span className="blog-takeaway-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Author Bio Card */}
        <div className="blog-post-author-card">
          <div className="blog-post-author-card-avatar">{post.author.initials}</div>
          <div className="blog-post-author-card-content">
            <span className="blog-post-author-card-role">WRITTEN BY</span>
            <h4 className="blog-post-author-card-name">{post.author.name}</h4>
            <p className="blog-post-author-card-bio">
              The SecondCome Growth Team architects proprietary lead generation funnels, autonomous AI qualification engines, and high-performance digital platforms for market leaders.
            </p>
          </div>
        </div>

        {/* Prev / Next Article Pagination */}
        <div className="blog-post-pagination">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="blog-pagination-item blog-pagination-item--prev">
              <span className="pagination-sub">← PREVIOUS ARTICLE</span>
              <span className="pagination-title">{prevPost.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="blog-pagination-item blog-pagination-item--next">
              <span className="pagination-sub">NEXT ARTICLE →</span>
              <span className="pagination-title">{nextPost.title}</span>
            </Link>
          )}
        </div>
      </article>

      {/* High-Converting Strategy Session Section */}
      <CtaSection />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="blog-toast" role="alert">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#36A6A3" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

