'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { services } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/sections/Shared';
export function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null),
    [page, setPage] = useState(0);
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
        <div className="service-journey" aria-hidden="true">
          <span>Strategy</span>
          <span>Design</span>
          <span>Development</span>
          <span>Growth</span>
        </div>
        <div className="service-strip-track" ref={ref}>
          {services.map((s, i) => (
            <Link className="service-tile" href={'/services/' + s.slug + '/'} key={s.slug}>
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
          ))}
        </div>
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
      </div>
    </section>
  );
}
