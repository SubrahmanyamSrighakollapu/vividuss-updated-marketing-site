'use client';

import { Icon } from '@/components/ui/Icon';
import { Visual } from '@/components/ui/Visual';
import { Button } from '@/components/ui/Button';
import { processSteps, site } from '@/data/site';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Fact } from '@/types';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}) {
  return (
    <ScrollReveal variant="fade-up" className={'section-heading ' + align}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {children}
    </ScrollReveal>
  );
}

export function Facts({ items, className = '' }: { items: Fact[]; className?: string }) {
  return (
    <StaggerContainer className={'facts ' + className} staggerDelay={0.1}>
      {items.map((f, i) => (
        <StaggerItem key={i} variant="fade-up">
          <div className="fact">
            <Icon name={f.icon} size={30} />
            <div>
              <strong>{f.title}</strong>
              {f.description && <span>{f.description}</span>}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function Stats({ items, className = '' }: { items: string[][]; className?: string }) {
  return (
    <StaggerContainer className={'stats ' + className} staggerDelay={0.12}>
      {items.map(([value, label]) => (
        <StaggerItem key={label} variant="zoom-in">
          <div>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function Process({
  title = 'Simple Process.\nPowerful Results.',
  labels,
  style = 'light',
  compact = false,
}: {
  title?: string;
  labels?: string[];
  style?: string;
  compact?: boolean;
}) {
  const steps = labels || processSteps.map((p) => p.title);
  return (
    <section
      className={
        'process-section ' +
        (style === 'dark' ? 'dark-section' : 'pale-section') +
        ' ' +
        (compact ? 'process-compact' : '')
      }
    >
      <div className="container process-layout">
        <ScrollReveal variant="fade-right" className="process-intro">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>{title}</h2>
          {!compact && (
            <p>
              A clear approach. Complete collaboration.
              <br />
              Exceptional results at every step.
            </p>
          )}
        </ScrollReveal>

        <StaggerContainer className="process-steps" staggerDelay={0.15} as="ol">
          {steps.map((label, index) => (
            <StaggerItem key={label} variant="fade-up" as="li">
              <div className="process-icon">
                <Icon name={processSteps[Math.min(index, 4)].icon} size={30} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{label}</h3>
              <p>{processSteps[Math.min(index, 4)].description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function CTA({
  title = 'Let’s Build Something\nGreat Together',
  text = 'Have an idea? We have the expertise to make it happen.',
  label = 'Let’s Talk',
  image = '/images/mountain-banner.webp',
  script = 'Together,\nWe Grow',
  href = '/contact/',
  className = '',
}: {
  title?: string;
  text?: string;
  label?: string;
  image?: string;
  script?: string;
  href?: string;
  className?: string;
}) {
  return (
    <section className={'cta-section dark-section ' + className}>
      <Visual asset={image} alt="" sizes="100vw" className="cta-background" />
      <div className="container cta-inner">
        <ScrollReveal variant="scale-up" delay={0.1}>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <Button href={href} variant="white">
              {label}
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal variant="zoom-in" delay={0.25}>
          <p className="script">{script}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section pale-section">
      <div className="container contact-section-grid">
        <ScrollReveal variant="fade-right">
          <div>
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>
              Ready to Build
              <br />
              What’s Next
              <br />
              Together?
            </h2>
            <p>
              Tell us about your idea. Our team is ready to turn your vision into a powerful digital
              experience.
            </p>
            <StaggerContainer className="contact-lines" staggerDelay={0.1}>
              <StaggerItem variant="fade-up">
                <a href={'mailto:' + site.email}>
                  <Icon name="Mail" />
                  <span>
                    <small>Email Us</small>
                    {site.email}
                  </span>
                </a>
              </StaggerItem>
              <StaggerItem variant="fade-up">
                <a href={'tel:' + site.phoneHref}>
                  <Icon name="Phone" />
                  <span>
                    <small>Call Us</small>
                    {site.phone}
                  </span>
                </a>
              </StaggerItem>
              <StaggerItem variant="fade-up">
                <div>
                  <Icon name="MapPin" />
                  <span>
                    <small>Visit Us</small>
                    {site.address}
                    <br />
                    {site.city}
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={0.15}>
          <ContactForm compact />
        </ScrollReveal>
      </div>
    </section>
  );
}
