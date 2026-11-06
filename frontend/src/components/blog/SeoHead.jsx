import { useEffect } from 'react';

/**
 * Headless SEO manager that cleanly updates document title,
 * meta tags, canonical link, Open Graph metadata, and JSON-LD schema.
 */
export default function SeoHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/assets/ref_card3_storefront.webp',
  article = null,
}) {
  useEffect(() => {
    // 1. Update Title
    const originalTitle = document.title;
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Open Graph Tags
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', article ? 'article' : 'website');
    if (ogImage) {
      const fullImg = ogImage.startsWith('http')
        ? ogImage
        : `${window.location.origin}${ogImage}`;
      setMetaTag('property', 'og:image', fullImg);
    }

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Structured Data
    const schemaScriptId = 'secondcome-schema-jsonld';
    let schemaScript = document.getElementById(schemaScriptId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', schemaScriptId);
      document.head.appendChild(schemaScript);
    }

    let schemaData = {};
    if (article) {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        image: ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`,
        datePublished: article.publishedDateISO || '2026-10-31',
        dateModified: article.publishedDateISO || '2026-10-31',
        author: {
          '@type': 'Organization',
          name: article.author?.name || 'SecondCome Agency',
          url: 'https://secondcome.in',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SecondCome Agency',
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/favicon.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      };
    } else {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title,
        description: description,
        url: currentUrl,
        publisher: {
          '@type': 'Organization',
          name: 'SecondCome Agency',
          url: 'https://secondcome.in',
        },
      };
    }

    schemaScript.textContent = JSON.stringify(schemaData);

    return () => {
      // Clean up title on unmount if needed
      document.title = originalTitle;
    };
  }, [title, description, keywords, canonicalUrl, ogImage, article]);

  return null;
}

