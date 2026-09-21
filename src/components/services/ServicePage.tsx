import { services } from '@/data/services';
import type { Service } from '@/types';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Facts, Stats, Process, SectionHeading, CTA } from '@/components/sections/Shared';
import { FeatureGrid } from './FeatureGrid';
import { ProjectShowcase } from '@/components/portfolio/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
const technologyFiles: Record<string, string> = {
  HTML: 'html5',
  CSS: 'css',
  JavaScript: 'javascript',
  React: 'react',
  'Node.js': 'nodedotjs',
  PHP: 'php',
  Laravel: 'laravel',
  WordPress: 'wordpress',
  Swift: 'swift',
  Kotlin: 'kotlin',
  Flutter: 'flutter',
  'React Native': 'react',
  Firebase: 'firebase',
  Xcode: 'xcode',
  'Android Studio': 'androidstudio',
  MongoDB: 'mongodb',
};
export function ServicePage({ service: s }: { service: Service }) {
  const isWhatsApp = s.slug === 'whatsapp-crm';
  return (
    <div className={'service-page service-' + s.slug + ' accent-' + s.accent}>
      <section className="service-hero pale-section">
        <div className="container service-hero-grid">
          <div className="service-hero-copy">
            <p className="eyebrow">{s.name.toUpperCase()}</p>
            <h1>
              {s.headline.map((line, i) => (
                <span key={line} className={i === s.headline.length - 1 ? 'accent-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p>{s.description}</p>
            <div className="button-row">
              <Button href={'/contact/?service=' + s.slug}>Get Started</Button>
              <Button href="/portfolio/" variant="outline">
                View Our Work
              </Button>
            </div>
            <Facts items={s.heroFacts} className="hero-facts" />
          </div>
          <div className="service-hero-art">
            <Visual asset={s.image} alt={s.name + ' creative showcase'} priority />
            <p className="script hero-art-script">{s.script}</p>
            {s.heroBadge && (
              <div className="hero-metric">
                <Icon name="TrendingUp" size={23} />
                <div>
                  <strong>{s.heroBadge}</strong>
                  <span>{s.heroBadgeLabel}</span>
                </div>
              </div>
            )}
            {s.heroPanel && (
              <div className="hero-checklist">
                {s.heroPanel.map((t) => (
                  <span key={t}>
                    <Icon name="CheckCheck" size={16} />
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="section service-intro">
        <div className="container split-grid">
          <div className="service-intro-art">
            <Visual asset={s.introImage} alt={s.name + ' design and production'} />
            <div className="experience-badge">
              <strong>{s.introBadge}</strong>
              <span>{s.introBadgeLabel}</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">BUILT FOR YOUR BUSINESS</p>
            <h2>{s.introTitle}</h2>
            <p>{s.introText}</p>
            <Facts items={s.introFacts} className="intro-facts" />
          </div>
        </div>
      </section>
      <FeatureGrid features={s.features} title={s.featureTitle} slug={s.slug} />
      {!!s.stats.length && (
        <div className="results-bar">
          <div className="container">
            <Stats items={s.stats} />
          </div>
        </div>
      )}
      <Process title={s.processTitle} labels={s.processLabels} style={s.processStyle} />
      {!!s.technologies.length && (
        <section className="section technology-section">
          <div className="container">
            <SectionHeading
              eyebrow="OUR TECH STACK"
              title="Technologies We Work With"
              text="The right tools. A strong foundation. Built for what’s next."
            />
            <div className="technology-list">
              {s.technologies.map((tech) => (
                <div key={tech}>
                  {technologyFiles[tech] ? (
                    <img
                      src={'/icons/' + technologyFiles[tech] + '.svg'}
                      alt=""
                      width={42}
                      height={42}
                      loading="lazy"
                    />
                  ) : (
                    <Icon name={tech === 'AWS' ? 'Globe' : 'Code2'} size={42} />
                  )}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {isWhatsApp ? (
        <section className="section whatsapp-industries">
          <div className="container">
            <SectionHeading
              title="Perfect for Every Industry"
              text="Connect with customers, whatever your business."
            />
            <Facts
              items={[
                { icon: 'ShoppingCart', title: 'E-Commerce', description: 'Sales & Support' },
                { icon: 'GraduationCap', title: 'Education', description: 'Student Engagement' },
                { icon: 'HeartPulse', title: 'Healthcare', description: 'Patient Communication' },
                { icon: 'Building2', title: 'Real Estate', description: 'Lead Management' },
                { icon: 'Plane', title: 'Travel & Hospitality', description: 'Bookings & Updates' },
                { icon: 'Briefcase', title: 'Services', description: 'Customer Relationships' },
              ]}
            />
          </div>
        </section>
      ) : (
        <ProjectShowcase
          title={s.projectTitle}
          slugs={s.projects}
          compact
          poster={s.slug === 'poster-design'}
        />
      )}
      <Testimonials title={s.testimonialTitle} />
      <CTA
        href={'/contact/?service=' + s.slug}
        title={s.ctaTitle}
        text={s.ctaText}
        label={s.ctaLabel}
        image={s.ctaImage}
        script={s.ctaScript}
        className={isWhatsApp ? 'whatsapp-cta' : ''}
      />
    </div>
  );
}
export function ServiceDirectory() {
  return (
    <>
      <section className="directory-hero pale-section">
        <div className="container">
          <p className="eyebrow">OUR SERVICES</p>
          <h1>
            One Partner.
            <br />
            <em>Every Digital Possibility.</em>
          </h1>
          <p>
            From your first website to your next stage of growth, discover the expertise to move
            your business forward.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container service-directory">
          {services.map((s, i) => (
            <article key={s.slug}>
              <Visual asset={s.image} alt={s.name + ' showcase'} />
              <div>
                <span className="eyebrow">0{i + 1} / OUR EXPERTISE</span>
                <h2>{s.name}</h2>
                <p>{s.description}</p>
                <Button href={'/services/' + s.slug + '/'} variant="outline">
                  Explore {s.name}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
