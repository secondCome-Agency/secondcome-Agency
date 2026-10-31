import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogSection from './BlogSection.jsx';
import CtaSection from './CtaSection.jsx';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page-root">
      {/* Editorial Breadcrumb Navigation */}
      <div className="blog-page-breadcrumb-wrap">
        <nav className="blog-page-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link">
            HOME
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-active">BLOG</span>
        </nav>
      </div>

      {/* Main Blog Content Section */}
      <BlogSection />

      {/* Conversion Section */}
      <CtaSection />
    </div>
  );
}
