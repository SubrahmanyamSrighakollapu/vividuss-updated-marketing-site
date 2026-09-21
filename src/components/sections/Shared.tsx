import { Icon } from '@/components/ui/Icon';
import { Visual } from '@/components/ui/Visual';
import { Button } from '@/components/ui/Button';
import { processSteps, site } from '@/data/site';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Fact } from '@/types';
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
    <div className={'section-heading ' + align}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      {children}
    </div>
  );
}
export function Facts({ items, className = '' }: { items: Fact[]; className?: string }) {
  return (
    <div className={'facts ' + className}>
      {items.map((f, i) => (
        <div className="fact" key={i}>
          <Icon name={f.icon} size={30} />
          <div>
            <strong>{f.title}</strong>
            {f.description && <span>{f.description}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
export function Stats({ items, className = '' }: { items: string[][]; className?: string }) {
  return (
    <div className={'stats ' + className}>
      {items.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
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
        <div className="process-intro">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>{title}</h2>
          {!compact && (
            <p>
              A clear approach. Complete collaboration.
              <br />
              Exceptional results at every step.
            </p>
          )}
        </div>
        <ol className="process-steps">
          {steps.map((label, index) => (
            <li key={label}>
              <div className="process-icon">
                <Icon name={processSteps[Math.min(index, 4)].icon} size={30} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3>{label}</h3>
              <p>{processSteps[Math.min(index, 4)].description}</p>
            </li>
          ))}
        </ol>
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
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button href={href} variant="white">
            {label}
          </Button>
        </div>
        <p className="script">{script}</p>
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section pale-section">
      <div className="container contact-section-grid">
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
          <div className="contact-lines">
            <a href={'mailto:' + site.email}>
              <Icon name="Mail" />
              <span>
                <small>Email Us</small>
                {site.email}
              </span>
            </a>
            <a href={'tel:' + site.phoneHref}>
              <Icon name="Phone" />
              <span>
                <small>Call Us</small>
                {site.phone}
              </span>
            </a>
            <div>
              <Icon name="MapPin" />
              <span>
                <small>Visit Us</small>
                {site.address}
                <br />
                {site.city}
              </span>
            </div>
          </div>
        </div>
        <ContactForm compact />
      </div>
    </section>
  );
}
