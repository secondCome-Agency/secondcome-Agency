import React, { useState } from 'react';

export default function ArticleShare({ article }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2600);
      });
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(`${article.title} | SecondCome Agency`);
  const encodedUrl = encodeURIComponent(currentUrl);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`;

  return (
    <div className="blog-article-footer-box">
      {/* Author Profile Card */}
      <div className="blog-author-card">
        <div className="blog-author-card-avatar" aria-hidden="true">
          {article.author?.initials || 'SC'}
        </div>
        <div className="blog-author-card-details">
          <span className="blog-author-card-label">PUBLISHED BY</span>
          <h3 className="blog-author-card-name">{article.author?.name}</h3>
          <p className="blog-author-card-role">{article.author?.role}</p>
          <p className="blog-author-card-bio">
            {article.author?.bio ||
              'SecondCome is an independent creative studio merging website engineering, creative direction, and autonomous growth engines for ambitious brands.'}
          </p>
        </div>
      </div>

      {/* Share Actions Bar */}
      <div className="blog-share-bar">
        <span className="blog-share-label">SHARE THIS ARTICLE:</span>
        <div className="blog-share-buttons">
          <button
            type="button"
            className="blog-share-btn blog-share-btn--copy"
            onClick={handleCopyLink}
            aria-label="Copy article URL"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Link'}</span>
          </button>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-btn"
            aria-label="Share on LinkedIn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-btn"
            aria-label="Share on X (Twitter)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
            <span>X / Twitter</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-btn"
            aria-label="Share on WhatsApp"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {copied && (
        <div className="blog-copy-toast" role="status" aria-live="polite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36A6A3" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Article link copied to clipboard</span>
        </div>
      )}
    </div>
  );
}

