'use client';

import { Icon } from '@/components/ui/Icon';
import { Visual } from '@/components/ui/Visual';
import { Button } from '@/components/ui/Button';
import { processSteps, site } from '@/data/site';
import { ContactForm } from '@/components/forms/ContactForm';
import { RequestCallbackCard } from '@/components/ui/RequestCallbackCard';
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
  title = 'Engineered for Execution.\nBuilt for Impact.',
  labels,
  style = 'light',
  compact = false,
}: {
  title?: string;
  labels?: string[];
  style?: string;
  compact?: boolean;
}) {
  const stepItems = labels
    ? labels.map((l, i) => ({
        title: l,
        description: processSteps[i]?.description || 'Engineered with precision, security, and digital best practices.',
        icon: processSteps[i]?.icon || 'CheckCircle2',
      }))
    : processSteps;

  return (
    <section
      className={
        'section process-section process-flow-section ' +
        (style === 'dark' ? 'dark-section' : 'pale-section') +
        ' ' +
        (compact ? 'process-compact' : '')
      }
      id="process"
    >
      <div className="container">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title={title.replace('\n', ' ')}
          text="A transparent, battle-tested 6-step flow designed to take your ideas from concept to market leadership."
        />

        <div className="process-modern-container">
          <StaggerContainer className="process-modern-grid" staggerDelay={0.08}>
            {stepItems.map((step, index) => {
              return (
                <StaggerItem key={step.title} variant="fade-up" className="process-modern-item">
                  <article className="process-modern-step">
                    <div className="process-modern-marker" aria-hidden="true">
                      <span className="process-modern-number">0{index + 1}</span>
                      <span className={'process-modern-icon tone-' + (index % 4)}>
                        <Icon name={step.icon} size={23} />
                      </span>
                    </div>
                    <div className="process-modern-copy">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          <div className="process-route-turn" aria-hidden="true">
            <span className="process-route-orbit">
              <Icon name="ArrowDownLeft" size={19} />
            </span>
            <span className="process-route-label">Next phase</span>
          </div>
        </div>
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
                    <small>Corporate Office</small>
                    {site.correspondingAddress.building}, {site.correspondingAddress.unit}
                    <br />
                    {site.correspondingAddress.city}
                  </span>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <div style={{ marginTop: '24px' }}>
              <RequestCallbackCard variant="glass" showWhatsApp />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={0.15}>
          <ContactForm compact />
        </ScrollReveal>
      </div>
    </section>
  );
}
