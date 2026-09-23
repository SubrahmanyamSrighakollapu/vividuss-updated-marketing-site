'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials, franchiseTestimonials } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
import { Visual } from '@/components/ui/Visual';
import { SectionHeading } from './Shared';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function Testimonials({
  title = 'What Our Clients Say',
  franchise = false,
}: {
  title?: string;
  franchise?: boolean;
}) {
  const entries = franchise ? franchiseTestimonials : testimonials;
  const [start, setStart] = useState(0);

  return (
    <section className="section testimonials-section">
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

        <StaggerContainer className="testimonial-grid" staggerDelay={0.12}>
          {entries.map((_, i) => {
            const index = (start + i) % entries.length;
            const t = entries[index];
            return (
              <StaggerItem key={t.name + i} variant="fade-up">
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
                      asset={{ src: '/images/avatars-sheet.webp', columns: 3, rows: 1, index }}
                      alt="Illustrative client portrait"
                    />
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

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
