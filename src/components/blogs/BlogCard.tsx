'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/types';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const [bookmarked, setBookmarked] = useState(false);

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="blog-card blog-card--featured"
      >
        <div className="blog-card__image-wrap">
          <Visual asset={post.image} alt={post.title} priority />
          <div className="blog-card__badges">
            <span className="blog-badge blog-badge--featured">Featured Article</span>
            <span className="blog-badge blog-badge--category">{post.category}</span>
          </div>
        </div>
        <div className="blog-card__content">
          <div className="blog-card__meta">
            <span className="meta-item">
              <Icon name="CalendarDays" size={15} />
              {post.date}
            </span>
            <span className="meta-dot">•</span>
            <span className="meta-item">
              <Icon name="Clock3" size={15} />
              {post.readTime}
            </span>
            {post.viewsCount && (
              <>
                <span className="meta-dot">•</span>
                <span className="meta-item">
                  <Icon name="Eye" size={15} />
                  {post.viewsCount} views
                </span>
              </>
            )}
          </div>
          <h2 className="blog-card__title">
            <Link href={`/blogs/${post.slug}/`}>{post.title}</Link>
          </h2>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          <div className="blog-card__footer">
            <div className="blog-card__author">
              <div className="author-avatar">
                <Visual asset={post.author.avatar} alt={post.author.name} />
              </div>
              <div className="author-info">
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>
            <div className="blog-card__actions">
              <button
                className={`icon-button ${bookmarked ? 'is-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setBookmarked(!bookmarked);
                }}
                aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                title={bookmarked ? 'Bookmarked' : 'Bookmark'}
              >
                <Icon name="Bookmark" size={18} />
              </button>
              <Link href={`/blogs/${post.slug}/`} className="button button--primary button--sm">
                Read Article <Icon name="ArrowUpRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="blog-card"
    >
      <Link href={`/blogs/${post.slug}/`} className="blog-card__image-link">
        <div className="blog-card__image-wrap">
          <Visual asset={post.image} alt={post.title} />
          <span className="blog-badge blog-badge--category">{post.category}</span>
        </div>
      </Link>

      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="meta-item">
            <Icon name="CalendarDays" size={14} />
            {post.date}
          </span>
          <span className="meta-dot">•</span>
          <span className="meta-item">
            <Icon name="Clock3" size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="blog-card__title">
          <Link href={`/blogs/${post.slug}/`}>{post.title}</Link>
        </h3>

        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="blog-card__footer">
          <div className="blog-card__author">
            <div className="author-avatar author-avatar--sm">
              <Visual asset={post.author.avatar} alt={post.author.name} />
            </div>
            <div className="author-info">
              <strong>{post.author.name}</strong>
            </div>
          </div>

          <div className="blog-card__actions">
            <button
              className={`icon-button icon-button--sm ${bookmarked ? 'is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setBookmarked(!bookmarked);
              }}
              aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
            >
              <Icon name="Bookmark" size={16} />
            </button>
            <Link href={`/blogs/${post.slug}/`} className="text-link">
              Read <Icon name="ArrowUpRight" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
