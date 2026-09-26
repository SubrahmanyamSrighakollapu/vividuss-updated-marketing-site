'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/types';
import { getRelatedPosts } from '@/data/blogs';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { BlogCard } from './BlogCard';
import { CTA } from '@/components/sections/Shared';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function BlogDetail({ post }: { post: BlogPost }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTocId, setActiveTocId] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(post.likesCount || 120);
  const [hasLiked, setHasLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  // Scroll Progress Tracker & Active TOC Item Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Check TOC active item
      const sectionElements = post.toc
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      let currentActiveId = '';
      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          currentActiveId = el.id;
        }
      }
      if (currentActiveId) {
        setActiveTocId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.toc]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      {/* Scroll Progress Bar at Top of Page */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <article className="blog-detail-page">
        {/* Detail Hero Banner */}
        <header className="blog-detail-hero pale-section">
          <div className="container">
            {/* Breadcrumb Navigation */}
            <nav className="blog-breadcrumbs" aria-label="Breadcrumbs">
              <Link href="/">Home</Link>
              <Icon name="ChevronRight" size={14} />
              <Link href="/blogs/">Blogs</Link>
              <Icon name="ChevronRight" size={14} />
              <span className="current-crumb">{post.category}</span>
            </nav>

            <div className="blog-detail-hero__header">
              <div className="blog-detail-meta-top">
                <span className="blog-badge blog-badge--category">{post.category}</span>
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

              <h1 className="blog-detail-title">{post.title}</h1>
              <p className="blog-detail-subtitle">{post.subtitle}</p>

              {/* Author & Share Bar */}
              <div className="blog-detail-author-bar">
                <div className="author-card-inline">
                  <div className="author-avatar">
                    <Visual asset={post.author.avatar} alt={post.author.name} />
                  </div>
                  <div className="author-details">
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                  </div>
                </div>

                <div className="share-bar">
                  <button
                    className={`share-button ${copied ? 'is-copied' : ''}`}
                    onClick={handleCopyLink}
                    title="Copy Article Link"
                  >
                    <Icon name={copied ? 'Check' : 'Copy'} size={17} />
                    <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                  </button>

                  <a
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon-button"
                    title="Share on Twitter / X"
                    aria-label="Share on Twitter / X"
                  >
                    <Icon name="Twitter" size={17} />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon-button"
                    title="Share on LinkedIn"
                    aria-label="Share on LinkedIn"
                  >
                    <Icon name="Linkedin" size={17} />
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-icon-button"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <Icon name="Facebook" size={17} />
                  </a>

                  <button
                    className={`share-icon-button ${bookmarked ? 'is-active' : ''}`}
                    onClick={() => setBookmarked(!bookmarked)}
                    title={bookmarked ? 'Bookmarked' : 'Bookmark article'}
                    aria-label={bookmarked ? 'Bookmarked' : 'Bookmark article'}
                  >
                    <Icon name="Bookmark" size={17} />
                  </button>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="blog-detail-cover">
              <Visual asset={post.coverImage || post.image} alt={post.title} priority />
            </div>
          </div>
        </header>

        {/* Main Content & Sidebar Grid */}
        <section className="section blog-detail-body">
          <div className="container blog-detail-grid">
            {/* Sticky Sidebar */}
            <aside className="blog-sidebar">
              {/* Table of Contents */}
              <div className="blog-toc-card">
                <div className="toc-header">
                  <Icon name="BookOpen" size={18} />
                  <h3>Table of Contents</h3>
                </div>
                <nav className="toc-list">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`toc-item ${activeTocId === item.id ? 'is-active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) {
                          const yOffset = -100;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                          setActiveTocId(item.id);
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Author Teaser */}
              <div className="blog-sidebar-author">
                <div className="sidebar-author-avatar">
                  <Visual asset={post.author.avatar} alt={post.author.name} />
                </div>
                <h4>Written by {post.author.name}</h4>
                <p>{post.author.bio}</p>
                {post.author.socialLink && (
                  <a
                    href={post.author.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sidebar-connect-link"
                  >
                    Connect on LinkedIn <Icon name="ArrowUpRight" size={14} />
                  </a>
                )}
              </div>
            </aside>

            {/* Main Article Content */}
            <main className="blog-prose">
              {/* Key Takeaways Box */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="key-takeaways-box">
                  <div className="takeaways-header">
                    <Icon name="Sparkles" size={20} className="takeaways-icon" />
                    <h3>Key Takeaways</h3>
                  </div>
                  <ul>
                    {post.keyTakeaways.map((point, index) => (
                      <li key={index}>
                        <Icon name="Check" size={16} className="point-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dynamic Article Sections */}
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="article-section">
                  <h2>{section.title}</h2>
                  <div className="section-content">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* List Items if any */}
                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="article-bullet-list">
                      {section.listItems.map((item, idx) => (
                        <li key={idx}>
                          <Icon name="ChevronRight" size={16} className="bullet-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Callout Box if present */}
                  {section.callout && (
                    <div className={`article-callout callout--${section.callout.type}`}>
                      {section.callout.title && <h4>{section.callout.title}</h4>}
                      <p>{section.callout.text}</p>

                      {/* Code Snippet block if applicable */}
                      {section.callout.codeSnippet && (
                        <div className="code-block-wrapper">
                          <div className="code-block-header">
                            <span>{section.callout.language || 'code'}</span>
                            <button
                              className="code-copy-btn"
                              onClick={() =>
                                handleCopyCode(
                                  section.callout?.codeSnippet || '',
                                  section.id,
                                )
                              }
                            >
                              <Icon
                                name={copiedCodeId === section.id ? 'Check' : 'Copy'}
                                size={14}
                              />
                              <span>{copiedCodeId === section.id ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <pre className="code-block">
                            <code>{section.callout.codeSnippet}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </section>
              ))}

              {/* Tags List */}
              <div className="article-tags-wrap">
                <span className="tags-label">
                  <Icon name="Tags" size={16} /> Tags:
                </span>
                <div className="tags-list">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Engagement Footer */}
              <div className="article-feedback-bar">
                <div className="like-action">
                  <button
                    className={`like-button ${hasLiked ? 'is-liked' : ''}`}
                    onClick={handleLike}
                    aria-label="Like or applaud article"
                  >
                    <Icon name="ThumbsUp" size={18} />
                    <span>{hasLiked ? 'Liked!' : 'Applaud'}</span>
                    <strong className="likes-count">{likes}</strong>
                  </button>
                  <p>Found this insightful? Show your appreciation!</p>
                </div>

                <div className="bottom-share-actions">
                  <button className="button button--outline button--sm" onClick={handleCopyLink}>
                    <Icon name={copied ? 'Check' : 'Share2'} size={15} />
                    {copied ? 'Link Copied!' : 'Share Article'}
                  </button>
                </div>
              </div>

              {/* Expanded Author Profile */}
              <div className="author-bio-card">
                <div className="author-bio-avatar">
                  <Visual asset={post.author.avatar} alt={post.author.name} />
                </div>
                <div className="author-bio-content">
                  <span className="author-badge">ARTICLE AUTHOR</span>
                  <h3>{post.author.name}</h3>
                  <p className="author-role">{post.author.role}</p>
                  <p className="author-description">{post.author.bio}</p>
                  {post.author.socialLink && (
                    <a
                      href={post.author.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="author-social-link"
                    >
                      <Icon name="Linkedin" size={16} /> Follow on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </main>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="section related-blogs-section pale-section">
            <div className="container">
              <ScrollReveal variant="fade-up" className="section-title-row">
                <div>
                  <span className="eyebrow">KEEP READING</span>
                  <h2>Related Insights & Articles</h2>
                </div>
                <Link href="/blogs/" className="button button--outline">
                  View All Blogs
                </Link>
              </ScrollReveal>

              <div className="blog-grid related-grid">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.slug} post={rPost} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Call To Action */}
        <CTA
          title={'Turn Innovation Into\nReal Business Growth'}
          text="Looking to implement custom AI solutions, scale your web architecture, or refresh your design systems? Let’s connect."
          label="Schedule a Consultation"
          script={'Transform Your\nDigital Vision'}
          className="cta-tall"
        />
      </article>
    </>
  );
}
