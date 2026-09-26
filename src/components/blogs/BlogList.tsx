'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts, blogCategories } from '@/data/blogs';
import { BlogCard } from './BlogCard';
import { Icon } from '@/components/ui/Icon';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Newsletter } from '@/components/forms/Newsletter';

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'readTime'>('latest');

  // Filtered and Sorted Posts
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesCategory =
          selectedCategory === 'All Articles' || post.category === selectedCategory;

        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.author.name.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.viewsCount || 0) - (a.viewsCount || 0);
        }
        if (sortBy === 'readTime') {
          const timeA = parseInt(a.readTime) || 0;
          const timeB = parseInt(b.readTime) || 0;
          return timeA - timeB;
        }
        // default latest
        return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero pale-section">
        <div className="container">
          <ScrollReveal variant="fade-down" className="blog-hero__header text-center">
            <span className="eyebrow">OUR INSIGHTS & THOUGHT LEADERSHIP</span>
            <h1>
              Perspectives on Tech, Design & <em>Business Growth</em>
            </h1>
            <p className="blog-hero__desc">
              Articles, architectural deep-dives, and strategy guides written by our engineers and product experts.
            </p>
          </ScrollReveal>

          {/* Search & Toolbar Bar */}
          <ScrollReveal variant="fade-up" delay={0.1} className="blog-toolbar">
            <div className="blog-search-box">
              <Icon name="Search" size={19} className="search-icon" />
              <input
                type="search"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog posts"
              />
              {searchQuery && (
                <button
                  className="search-clear-button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <Icon name="X" size={16} />
                </button>
              )}
            </div>

            <div className="blog-sort-select">
              <label htmlFor="blog-sort">
                <Icon name="Filter" size={16} />
                <span>Sort:</span>
              </label>
              <select
                id="blog-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'readTime')}
              >
                <option value="latest">Latest First</option>
                <option value="popular">Most Popular</option>
                <option value="readTime">Fastest Read</option>
              </select>
            </div>
          </ScrollReveal>

          {/* Category Filter Pills */}
          <ScrollReveal variant="fade-up" delay={0.15} className="blog-categories">
            <div className="category-scroll">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-pill ${selectedCategory === category ? 'is-active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section blog-main-section">
        <div className="container">
          {/* Results Summary */}
          <div className="blog-results-meta">
            <h3>
              {selectedCategory === 'All Articles' ? 'All Articles' : selectedCategory}
              <span className="count-badge">{filteredPosts.length}</span>
            </h3>
            {searchQuery && (
              <p className="search-status">
                Showing results for &ldquo;<strong>{searchQuery}</strong>&rdquo;
              </p>
            )}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div layout className="blog-grid">
              <AnimatePresence>
                {filteredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="empty-state"
            >
              <Icon name="BookOpen" size={40} />
              <h3>No articles found</h3>
              <p>We couldn&apos;t find any articles matching your search criteria or category filter.</p>
              <button
                className="button button--outline"
                onClick={() => {
                  setSelectedCategory('All Articles');
                  setSearchQuery('');
                }}
              >
                Reset Filters & Search
              </button>
            </motion.div>
          )}

          {/* Newsletter Signup Banner */}
          <ScrollReveal variant="fade-up" className="blog-newsletter-card">
            <div className="newsletter-card__content">
              <div className="newsletter-badge">
                <Icon name="Sparkles" size={18} />
                <span>Vividuss Digest</span>
              </div>
              <h2>Stay Ahead of Digital Innovation</h2>
              <p>
                Get our newest engineering deep-dives, UI/UX design teardowns, and tech insights delivered straight to your inbox.
              </p>
            </div>
            <div className="newsletter-card__form">
              <Newsletter />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
