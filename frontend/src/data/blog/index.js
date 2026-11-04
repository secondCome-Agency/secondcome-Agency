import { websiteStorefrontArticle } from './articles/websiteStorefront.js';
import { instagramGrowthArticle } from './articles/instagramGrowth.js';
import { BLOG_CATEGORIES } from './categories.js';
import { POPULAR_TAGS } from './tags.js';

/**
 * MASTER BLOG REGISTRY
 *
 * To add a new article to the SecondCome website:
 * 1. Create a new article file in `src/data/blog/articles/yourArticleSlug.js`
 * 2. Import it below and add it to the `BLOG_ARTICLES` array.
 * 3. It will automatically appear on `/blog` and render under `/blog/:slug`!
 */
export const BLOG_ARTICLES = [
  websiteStorefrontArticle,
  instagramGrowthArticle,
];

export { BLOG_CATEGORIES, POPULAR_TAGS };

/**
 * Retrieve all published blog articles
 */
export function getAllArticles() {
  return BLOG_ARTICLES;
}

/**
 * Retrieve a single article by its URL slug or ID
 */
export function getArticleBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().replace(/\.html$/, '');
  return BLOG_ARTICLES.find(
    (article) =>
      article.slug.toLowerCase() === cleanSlug ||
      article.id.toLowerCase() === cleanSlug
  ) || null;
}

/**
 * Retrieve the primary featured article
 */
export function getFeaturedArticle() {
  return BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0] || null;
}

/**
 * Filter and search articles by category, tag, and query text
 */
export function filterArticles({ category = 'all', tag = '', search = '' } = {}) {
  return BLOG_ARTICLES.filter((article) => {
    // 1. Category match
    if (category && category !== 'all') {
      const matchCat =
        article.categoryKey.toLowerCase() === category.toLowerCase() ||
        article.category.toLowerCase() === category.toLowerCase();
      if (!matchCat) return false;
    }

    // 2. Tag match
    if (tag && tag.trim()) {
      const searchTag = tag.trim().toLowerCase();
      const hasTag = article.tags && article.tags.some((t) => t.toLowerCase() === searchTag);
      if (!hasTag) return false;
    }

    // 3. Search query match
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      const inTitle = article.title.toLowerCase().includes(q);
      const inDesc = (article.description || article.lede || '').toLowerCase().includes(q);
      const inCategory = article.category.toLowerCase().includes(q);
      const inAuthor = article.author?.name.toLowerCase().includes(q);
      const inTags = article.tags?.some((t) => t.toLowerCase().includes(q));
      if (!inTitle && !inDesc && !inCategory && !inAuthor && !inTags) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Retrieve adjacent (previous and next) articles for article pagination
 */
export function getAdjacentArticles(currentSlug) {
  const currentIndex = BLOG_ARTICLES.findIndex(
    (a) => a.slug === currentSlug || a.id === currentSlug
  );
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? BLOG_ARTICLES[currentIndex - 1] : null;
  const next = currentIndex < BLOG_ARTICLES.length - 1 ? BLOG_ARTICLES[currentIndex + 1] : null;

  return { prev, next };
}

