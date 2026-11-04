import React from 'react';
import { Link } from 'react-router-dom';
import TableOfContents from './TableOfContents.jsx';
import ArticleFaq from './ArticleFaq.jsx';
import ArticleShare from './ArticleShare.jsx';
import BlogSidebar from './BlogSidebar.jsx';
import ArticleDiagram from './ArticleDiagrams.jsx';
import { getAdjacentArticles } from '../../data/blog/index.js';

export default function ArticleRenderer({ article }) {
  if (!article) return null;

  const { prev, next } = getAdjacentArticles(article.slug);

  return (
    <div className="blog-article-page-wrap">
      {/* 1. Breadcrumb Navigation Bar */}
      <div className="blog-article-crumb-bar">
        <div className="blog-article-crumb-inner">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="blog-crumb-link">
              Home
            </Link>
            <span className="blog-crumb-sep">/</span>
            <Link to="/blog" className="blog-crumb-link">
              Blog
            </Link>
            <span className="blog-crumb-sep">/</span>
            <Link
              to={`/blog?category=${article.categoryKey}`}
              className="blog-crumb-link"
            >
              {article.category}
            </Link>
            <span className="blog-crumb-sep">/</span>
            <span className="blog-crumb-current" aria-current="page">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Main Article Content Container (Two-Column Layout) */}
      <div className="blog-article-container">
        <div className="blog-article-layout-grid">
          {/* ========================================================== */}
          {/* LEFT COLUMN: Main Editorial Article                        */}
          {/* ========================================================== */}
          <main className="blog-article-main-column">
            <article className="blog-article-post">
              {/* Article Header */}
              <header className="blog-article-header">
                <div className="blog-article-badge-row">
                  <Link
                    to={`/blog?category=${article.categoryKey}`}
                    className="blog-category-tag"
                  >
                    {article.category}
                  </Link>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-article-read-time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {article.readingTime}
                  </span>
                  <span className="blog-meta-dot">•</span>
                  <time dateTime={article.publishedDateISO} className="blog-article-date">
                    {article.publishedDate}
                  </time>
                </div>

                <h1 className="blog-article-main-title">{article.title}</h1>

                <p className="blog-article-lede">{article.lede || article.description}</p>

                {/* Author Information Strip */}
                <div className="blog-article-author-strip">
                  <div className="blog-author-byline">
                    <div className="blog-author-avatar" aria-hidden="true">
                      {article.author?.initials || 'SC'}
                    </div>
                    <div className="blog-author-info">
                      <span className="blog-author-name">{article.author?.name}</span>
                      <span className="blog-author-role">{article.author?.role}</span>
                    </div>
                  </div>

                  {article.tags && article.tags.length > 0 && (
                    <div className="blog-article-header-tags">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="blog-header-tag-pill"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Large Featured Cover Image */}
                <div className="blog-article-cover-wrap">
                  <img
                    src={article.coverImage}
                    alt={article.coverAlt || article.title}
                    className="blog-article-cover-img"
                    loading="eager"
                  />
                </div>
              </header>

              {/* Table of Contents */}
              {article.toc && article.toc.length > 0 && (
                <TableOfContents items={article.toc} />
              )}

              {/* Key Takeaway Callout (If defined at article root) */}
              {article.keyTakeaway && (
                <aside className="blog-takeaway-box" aria-label="Key Takeaway">
                  <div className="blog-takeaway-header">
                    <span className="blog-takeaway-tag">{article.keyTakeaway.label || 'KEY TAKEAWAY'}</span>
                  </div>
                  <p className="blog-takeaway-body">{article.keyTakeaway.text}</p>
                </aside>
              )}

              {/* Article Main Body Content */}
              <div className="blog-article-body">
                {article.sections &&
                  article.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="blog-article-section"
                    >
                      <h2 className="blog-article-h2">{section.heading}</h2>

                      {/* Primary Paragraphs */}
                      {section.paragraphs &&
                        section.paragraphs.map((para, pIdx) => (
                          <p key={pIdx} className="blog-article-p">
                            {para}
                          </p>
                        ))}

                      {/* Section Takeaway Callout */}
                      {section.takeaway && (
                        <aside className="blog-takeaway-box" aria-label="Section Takeaway">
                          <div className="blog-takeaway-header">
                            <span className="blog-takeaway-tag">{section.takeaway.label || 'KEY TAKEAWAY'}</span>
                          </div>
                          <p className="blog-takeaway-body">{section.takeaway.text}</p>
                        </aside>
                      )}

                      {/* Subsections (H3s) */}
                      {section.subsections &&
                        section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="blog-article-subsection">
                            <h3 className="blog-article-h3">{sub.heading}</h3>
                            {sub.paragraphs &&
                              sub.paragraphs.map((subPara, spIdx) => (
                                <p key={spIdx} className="blog-article-p">
                                  {subPara}
                                </p>
                              ))}
                          </div>
                        ))}

                      {/* Lists: Ordered or Unordered */}
                      {section.list && (
                        <div className="blog-article-list-wrap">
                          {section.list.type === 'ordered' ? (
                            <ol className="blog-article-ol">
                              {section.list.items.map((item, lIdx) => (
                                <li key={lIdx} className="blog-article-li">
                                  {item}
                                </li>
                              ))}
                            </ol>
                          ) : (
                            <ul className="blog-article-ul">
                              {section.list.items.map((item, lIdx) => (
                                <li key={lIdx} className="blog-article-li">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Paragraphs following list */}
                      {section.paragraphsAfterList &&
                        section.paragraphsAfterList.map((para, palIdx) => (
                          <p key={palIdx} className="blog-article-p">
                            {para}
                          </p>
                        ))}

                      {/* Diagram or Illustration */}
                      {section.diagram && (
                        <ArticleDiagram type={section.diagram} />
                      )}

                      {/* Comparison Table */}
                      {section.table && (
                        <div className="blog-table-responsive-wrapper">
                          <table className="blog-editorial-table">
                            {section.table.caption && (
                              <caption className="sr-only">
                                {section.table.caption}
                              </caption>
                            )}
                            <thead>
                              <tr>
                                {section.table.headers.map((th, thIdx) => (
                                  <th key={thIdx}>{th}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Paragraphs following table */}
                      {section.paragraphsAfterTable &&
                        section.paragraphsAfterTable.map((para, patIdx) => (
                          <p key={patIdx} className="blog-article-p">
                            {para}
                          </p>
                        ))}
                    </section>
                  ))}
              </div>

              {/* FAQ Section */}
              {article.faqs && article.faqs.length > 0 && (
                <ArticleFaq faqs={article.faqs} />
              )}

              {/* In-Article Conversion Banner */}
              {article.cta && (
                <div className="blog-article-cta-box">
                  <span className="blog-article-cta-pill">SECONDCOME PARTNERSHIP</span>
                  <h3 className="blog-article-cta-heading">{article.cta.heading}</h3>
                  <p className="blog-article-cta-text">{article.cta.text}</p>
                  <a href={article.cta.buttonHref || '/#contact'} className="blog-article-cta-btn">
                    <span>{article.cta.buttonText || 'Talk to SecondCome'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              )}

              {/* Author & Share Footer */}
              <ArticleShare article={article} />

              {/* Next / Prev Article Navigation */}
              <nav className="blog-article-pagination" aria-label="Article navigation">
                {prev ? (
                  <Link to={`/blog/${prev.slug}`} className="blog-pagination-card blog-pagination-card--prev">
                    <span className="blog-pagination-sub">← PREVIOUS ARTICLE</span>
                    <span className="blog-pagination-title">{prev.title}</span>
                  </Link>
                ) : (
                  <div className="blog-pagination-placeholder" />
                )}

                {next && (
                  <Link to={`/blog/${next.slug}`} className="blog-pagination-card blog-pagination-card--next">
                    <span className="blog-pagination-sub">NEXT ARTICLE →</span>
                    <span className="blog-pagination-title">{next.title}</span>
                  </Link>
                )}
              </nav>
            </article>
          </main>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Sticky Sidebar                               */}
          {/* ========================================================== */}
          <BlogSidebar currentCategoryKey={article.categoryKey} />
        </div>
      </div>
    </div>
  );
}

