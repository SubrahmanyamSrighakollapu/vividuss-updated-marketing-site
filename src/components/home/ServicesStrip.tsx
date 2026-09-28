'use client';
import Link from 'next/link';
import { services } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/sections/Shared';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function ServicesStrip() {
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

        <StaggerContainer className="service-strip-grid" staggerDelay={0.08}>
          {services.map((s, i) => (
            <StaggerItem variant="fade-up" key={s.slug} className="service-grid-item">
              <Link className="service-tile" href={'/services/' + s.slug + '/'}>
                <span className={'feature-icon tone-' + (i % 4)}>
                  <Icon name={s.icon} size={26} />
                </span>
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <span className="text-link">
                  Explore Service
                  <Icon name="ArrowUpRight" size={15} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
