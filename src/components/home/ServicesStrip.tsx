'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/sections/Shared';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  function move(direction: number) {
    const el = ref.current;
    if (el) {
      el.scrollBy({ left: direction * el.clientWidth * 0.7, behavior: 'smooth' });
      setPage(direction > 0 ? 1 : 0);
    }
  }

  return (
    <section className="section services-strip pale-section">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Solutions That Power Your Growth"
          text="From strategy to execution, we deliver end-to-end digital solutions that drive results."
        />
        
        <ScrollReveal variant="fade-up" delay={0.15}>
          <div className="service-journey" aria-hidden="true">
            <span>Strategy</span>
            <span>Design</span>
            <span>Development</span>
            <span>Growth</span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="service-strip-track" staggerDelay={0.12} ref={ref as any}>
          {services.map((s, i) => (
            <StaggerItem variant="fade-up" key={s.slug}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{ height: '100%' }}
              >
                <Link className="service-tile" href={'/services/' + s.slug + '/'}>
                  <span className={'feature-icon tone-' + (i % 4)}>
                    <Icon name={s.icon} size={32} />
                  </span>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <span className="text-link">
                    Explore Service
                    <Icon name="ArrowUpRight" size={15} />
                  </span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <div className="carousel-controls">
            <button className="icon-button" aria-label="Previous services" onClick={() => move(-1)}>
              <Icon name="ChevronLeft" size={17} />
            </button>
            <div className="dots">
              <span className={page === 0 ? 'active' : ''} />
              <span className={page === 1 ? 'active' : ''} />
            </div>
            <button className="icon-button" aria-label="More services" onClick={() => move(1)}>
              <Icon name="ChevronRight" size={17} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
