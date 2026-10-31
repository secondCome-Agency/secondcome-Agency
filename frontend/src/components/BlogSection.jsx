import React, { useState, useMemo } from 'react';
import './BlogSection.css';

export const BLOG_POSTS = [
  {
    id: 'your-website-is-your-digital-storefront',
    slug: 'your-website-is-your-digital-storefront',
    url: '/blog/your-website-is-your-digital-storefront.html',
    title: 'Your Website Is Your Digital Storefront. Is It Driving Customers Away?',
    description:
      'Discover how website design, speed, mobile experience and SEO influence customer trust and help turn visitors into potential customers.',
    excerpt:
      'Discover how website design, speed, mobile experience and SEO influence customer trust and help turn visitors into potential customers.',
    category: 'Website Development',
    categoryKey: 'website-development',
    readTime: '8 min read',
    date: 'October 30, 2026',
    coverImage: '/assets/ref_card3_storefront.webp',
    author: {
      name: 'SecondCome Team',
      role: 'Website Development & Strategy',
      initials: 'SC',
    },
    featured: true,
    highlights: [
      'Digital first impressions & customer trust signals',
      'Mobile UX & Core Web Vitals speed optimization',
      'Turning everyday website visitors into paying customers',
    ],
  },
];

export const CATEGORIES = [
  { key: 'all', label: 'All Articles' },
  { key: 'website-development', label: 'Website Development' },
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.categoryKey === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = post.title.toLowerCase().includes(q);
      const inExcerpt = (post.excerpt || post.description || '').toLowerCase().includes(q);
      const inCategory = post.category.toLowerCase().includes(q);
      const inAuthor = post.author.name.toLowerCase().includes(q);

      return inTitle || inExcerpt || inCategory || inAuthor;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post
  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  // Secondary posts
  const secondaryPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((p) => p.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  const handleOpenArticle = (url) => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        {/* Section Header */}
        <div className="blog-header">
          <div className="blog-trust-pill">
            <span className="blog-trust-dot" />
            <span>SECONDCOME BLOG</span>
          </div>

          <h2 className="blog-main-heading">THE SECONDCOME BLOG</h2>
          <span className="blog-script-sub">Perspectives on design, engineering &amp; market leadership</span>
        </div>

        {/* Clean Controls Row: Category Tabs & Search */}
        <div className="blog-controls-row">
          <div className="blog-filter-tabs" role="tablist" aria-label="Article categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={selectedCategory === cat.key}
                className={`blog-tab-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="blog-search-box">
            <svg
              className="blog-search-icon"
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
              type="text"
              className="blog-search-input"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                className="blog-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredPosts.length === 0 && (
          <div className="blog-empty-state">
            <h4>No matching articles found</h4>
            <p>We couldn't find any articles matching "{searchQuery}". Try selecting another category or resetting the search.</p>
            <button
              className="blog-tab-btn active"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Featured Lead Story (Clean Magazine Hero Card) */}
        {featuredPost && (
          <div
            className="blog-featured-card"
            onClick={() => handleOpenArticle(featuredPost.url || `/blog/${featuredPost.slug}`)}
            tabIndex={0}
            role="link"
            aria-label={`Read article: ${featuredPost.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOpenArticle(featuredPost.url || `/blog/${featuredPost.slug}`);
              }
            }}
          >
            <div className="blog-featured-left">
              <div className="blog-meta-row">
                <span className="blog-featured-pill">FEATURED</span>
                <span className="blog-category-badge">{featuredPost.category}</span>
                <span className="blog-read-time">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {featuredPost.readTime}
                </span>
                <span className="blog-date-text">• {featuredPost.date}</span>
              </div>

              <h3 className="blog-featured-title">{featuredPost.title}</h3>

              <p className="blog-featured-excerpt">{featuredPost.description || featuredPost.excerpt}</p>

              <div className="blog-author-byline">
                <div className="blog-author-avatar">{featuredPost.author.initials}</div>
                <div className="blog-author-info">
                  <span className="blog-author-name">{featuredPost.author.name}</span>
                  <span className="blog-author-role">{featuredPost.author.role}</span>
                </div>
              </div>
            </div>

            <div className="blog-featured-right">
              {featuredPost.coverImage && (
                <div className="blog-featured-cover-box">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="blog-featured-cover-img"
                    loading="lazy"
                  />
                  <span className="blog-cover-badge">Storefront Architecture</span>
                </div>
              )}

              <div>
                <span className="blog-takeaways-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#36A6A3" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  KEY STRATEGIC HIGHLIGHTS
                </span>
                <ul className="blog-takeaway-list">
                  {featuredPost.highlights.map((item, idx) => (
                    <li key={idx} className="blog-takeaway-item">
                      <span className="blog-takeaway-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={featuredPost.url || `/blog/${featuredPost.slug}`}
                className="blog-read-article-btn blog-read-article-btn--featured"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Read More</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        {secondaryPosts.length > 0 && (
          <div className="blog-grid">
            {secondaryPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => handleOpenArticle(post.url || `/blog/${post.slug}`)}
                tabIndex={0}
                role="link"
                aria-label={`Read article: ${post.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleOpenArticle(post.url || `/blog/${post.slug}`);
                }}
              >
                {post.coverImage && (
                  <div className="blog-card-cover-box">
                    <img src={post.coverImage} alt={post.title} className="blog-card-cover-img" loading="lazy" />
                  </div>
                )}
                <div className="blog-card-top">
                  <div className="blog-meta-row">
                    <span className="blog-category-badge">{post.category}</span>
                    <span className="blog-read-time">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="blog-card-title">{post.title}</h4>

                  <p className="blog-card-excerpt">{post.description || post.excerpt}</p>
                </div>

                <div className="blog-card-bottom">
                  <span className="blog-date-text">{post.date}</span>

                  <a
                    href={post.url || `/blog/${post.slug}`}
                    className="blog-read-article-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Read More</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
