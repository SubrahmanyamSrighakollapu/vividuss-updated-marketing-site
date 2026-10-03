'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials, franchiseTestimonials } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
import { Visual } from '@/components/ui/Visual';
import { SectionHeading } from './Shared';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Testimonials({
  title = 'What Our Clients Say',
  franchise = false,
}: {
  title?: string;
  franchise?: boolean;
}) {
  const entries = franchise ? franchiseTestimonials : testimonials;
  const [start, setStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) setStart((current) => (current + 1) % entries.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [entries.length, isPaused]);

  return (
    <section
      className="section testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={franchise ? 'PARTNER STORIES' : 'CLIENT STORIES'}
          title={title}
          text={
            franchise
              ? 'Real people. Real journeys. Growing together.'
              : 'Trusted by businesses. Inspired by their success.'
          }
        />

        <motion.div
          key={start}
          className="testimonial-grid"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          {Array.from({ length: Math.min(3, entries.length) }, (_, i) => {
            const index = (start + i) % entries.length;
            const t = entries[index];
            return (
              <div key={t.name}>
                <motion.article
                  className="testimonial-card"
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  style={{ height: '100%' }}
                >
                  <div className="stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, j) => (
                      <Icon name="Star" size={14} key={j} />
                    ))}
                  </div>
                  <Icon name="Quote" className="quote-icon" size={38} />
                  <blockquote>“{t.quote}”</blockquote>
                  <div className="testimonial-person">
                    <Visual
                      asset={
                        t.image || {
                          src: '/images/avatars-sheet.webp',
                          columns: 3,
                          rows: 1,
                          index: index % 3,
                        }
                      }
                      alt={`${t.name}, ${t.role}`}
                    />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </motion.div>

        <ScrollReveal variant="fade-up" delay={0.25} className="carousel-controls">
          <button
            className="icon-button"
            aria-label="Previous testimonials"
            onClick={() => setStart((start + entries.length - 1) % entries.length)}
          >
            <Icon name="ChevronLeft" size={17} />
          </button>
          <div className="dots">
            {entries.map((t, i) => (
              <button
                aria-label={'Show testimonial set ' + (i + 1)}
                aria-pressed={start === i}
                className={start === i ? 'active' : ''}
                key={t.name}
                onClick={() => setStart(i)}
              />
            ))}
          </div>
          <button
            className="icon-button"
            aria-label="Next testimonials"
            onClick={() => setStart((start + 1) % entries.length)}
          >
            <Icon name="ChevronRight" size={17} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
