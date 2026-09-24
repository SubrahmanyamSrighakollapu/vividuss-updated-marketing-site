'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import type { Solution } from '@/types';

interface SolutionDetailPageProps {
  solution: Solution;
}

export function SolutionDetailPage({ solution }: SolutionDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'provide' | 'include' | 'handle' | 'expect' | 'support'>(
    'provide'
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToSection = (sectionId: 'provide' | 'include' | 'handle' | 'expect' | 'support') => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -135;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: Array<'provide' | 'include' | 'handle' | 'expect' | 'support'> = [
        'provide',
        'include',
        'handle',
        'expect',
        'support',
      ];
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="solution-detail-page">
      {/* Hero Banner Section */}
      <section className="solution-hero dark-section">
        <div className="container">
          <div className="solution-hero-grid">
            <ScrollReveal variant="fade-right" className="solution-hero-content">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <Icon name="ChevronRight" size={14} />
                <Link href="/solutions/">Solutions</Link>
                <Icon name="ChevronRight" size={14} />
                <span aria-current="page">{solution.title}</span>
              </nav>

              <div className="solution-badge-pill">
                <Icon name={solution.icon} size={18} />
                <span>{solution.category}</span>
                {solution.badge && <span className="hero-sub-badge">• {solution.badge}</span>}
              </div>

              <h1>
                {solution.heroHeadline.map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <em>{line}</em> : line}
                  </span>
                ))}
              </h1>

              <p className="hero-subhead">{solution.heroSubhead}</p>

              <div className="solution-quick-stats">
                {solution.cardHighlights.slice(0, 3).map((feat, i) => (
                  <div key={i} className="quick-stat-item">
                    <Icon name="CheckCheck" size={16} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="button-row">
                <Button href="#enquire" variant="primary">
                  Request Solution Demo & Proposal
                </Button>
                <Button href="/contact/" variant="outline" className="btn-light">
                  Talk to a Solutions Architect
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.15} className="solution-poster-container">
              <div className="solution-poster-card">
                <img
                  src={solution.posterImage}
                  alt={`${solution.title} Solution Poster`}
                  className="solution-poster-img"
                />
                <div className="poster-caption-tag">
                  <Icon name="BadgeCheck" size={18} />
                  <span>Verified Vividuss Ready Solution</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation Anchor Bar */}
      <nav className="solution-nav-bar" aria-label="Solution navigation">
        <div className="container">
          <div className="solution-tabs">
            <button
              onClick={() => scrollToSection('provide')}
              className={`tab-btn ${activeTab === 'provide' ? 'is-active' : ''}`}
            >
              <Icon name="Sparkles" size={16} />
              <span>What We Provide</span>
            </button>
            <button
              onClick={() => scrollToSection('include')}
              className={`tab-btn ${activeTab === 'include' ? 'is-active' : ''}`}
            >
              <Icon name="Layers" size={16} />
              <span>What We Include</span>
            </button>
            <button
              onClick={() => scrollToSection('handle')}
              className={`tab-btn ${activeTab === 'handle' ? 'is-active' : ''}`}
            >
              <Icon name="Settings" size={16} />
              <span>How We Handle It</span>
            </button>
            <button
              onClick={() => scrollToSection('expect')}
              className={`tab-btn ${activeTab === 'expect' ? 'is-active' : ''}`}
            >
              <Icon name="TrendingUp" size={16} />
              <span>What You Can Expect</span>
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className={`tab-btn ${activeTab === 'support' ? 'is-active' : ''}`}
            >
              <Icon name="LifeBuoy" size={16} />
              <span>Support & Maintenance</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section className="section solution-overview-section">
        <div className="container split-grid">
          <ScrollReveal variant="fade-right">
            <p className="eyebrow">SOLUTION OVERVIEW</p>
            <h2>{solution.overview.title}</h2>
            <p className="lead-text">{solution.overview.description}</p>
            <div className="overview-points">
              {solution.overview.points.map((pt, index) => (
                <div key={index} className="point-item">
                  <div className="point-icon">
                    <Icon name="Check" size={16} />
                  </div>
                  <p>{pt}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.1} className="tech-stack-card">
            <h3 className="card-heading">
              <Icon name="Code2" size={20} />
              Technology Architecture
            </h3>
            <p>Engineered with modern, enterprise-grade cloud technologies for high speed, security, and elasticity.</p>
            <div className="tech-badges">
              {solution.techStack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="callout-box">
              <Icon name="ShieldCheck" size={24} />
              <div>
                <strong>Customizable & White-Labeled</strong>
                <p>100% white-labeled source code tailored to your exact branding, workflows, and cloud hosting preferences.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tab Content Section 1: What We Provide */}
      <section className="section pale-section solution-provide-section" id="provide">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-header text-center">
            <p className="eyebrow">SOLUTION CAPABILITIES</p>
            <h2>{solution.whatWeProvide.title}</h2>
            <p className="section-lead">{solution.whatWeProvide.description}</p>
          </ScrollReveal>

          <StaggerContainer className="provide-grid" staggerDelay={0.08}>
            {solution.whatWeProvide.items.map((item, i) => (
              <StaggerItem key={i} variant="scale-up" className="provide-card">
                <div className="card-icon-wrapper">
                  <Icon name={item.icon} size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tab Content Section 2: What We Include */}
      <section className="section solution-include-section" id="include">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-header text-center">
            <p className="eyebrow">MODULE BREAKDOWN</p>
            instruction
            <h2>{solution.whatWeInclude.title}</h2>
            <p className="section-lead">{solution.whatWeInclude.description}</p>
          </ScrollReveal>

          <div className="include-modules-grid">
            {solution.whatWeInclude.modules.map((mod, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 0.1} className="module-card">
                <div className="module-header">
                  <span className="module-number">0{i + 1}</span>
                  <h3>{mod.category}</h3>
                </div>
                <ul className="module-features-list">
                  {mod.features.map((feat, idx) => (
                    <li key={idx}>
                      <Icon name="BadgeCheck" size={18} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content Section 3: How We Handle It */}
      <section className="section dark-section solution-handle-section" id="handle">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-header text-center">
            <p className="eyebrow">OUR METHODOLOGY</p>
            <h2>{solution.howWeHandle.title}</h2>
            <p className="section-lead">{solution.howWeHandle.description}</p>
          </ScrollReveal>

          <div className="steps-timeline">
            {solution.howWeHandle.steps.map((step, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 0.08} className="step-card">
                <div className="step-badge">{step.step}</div>
                <div className="step-icon">
                  <Icon name={step.icon} size={22} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content Section 4: What You Can Expect */}
      <section className="section pale-section solution-expect-section" id="expect">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-header text-center">
            <p className="eyebrow">MEASURABLE OUTCOMES</p>
            <h2>{solution.whatYouCanExpect.title}</h2>
            <p className="section-lead">{solution.whatYouCanExpect.description}</p>
          </ScrollReveal>

          <StaggerContainer className="expect-grid" staggerDelay={0.08}>
            {solution.whatYouCanExpect.outcomes.map((outcome, i) => (
              <StaggerItem key={i} variant="scale-up" className="expect-card">
                <div className="expect-icon">
                  <Icon name={outcome.icon} size={28} />
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tab Content Section 5: Support & Maintenance */}
      <section className="section solution-support-section" id="support">
        <div className="container split-grid">
          <ScrollReveal variant="fade-right">
            <p className="eyebrow">CONTINUOUS SUPPORT & SLA</p>
            <h2>{solution.supportAndMaintenance.title}</h2>
            <p className="lead-text">{solution.supportAndMaintenance.description}</p>
            <div className="support-features-list">
              {solution.supportAndMaintenance.features.map((feat, i) => (
                <div key={i} className="support-item">
                  <div className="support-icon">
                    <Icon name={feat.icon} size={20} />
                  </div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.15} className="support-guarantee-card">
            <Icon name="ShieldCheck" size={48} className="shield-hero-icon" />
            <h3>Our Support Guarantee</h3>
            <p>
              We treat your platform as our own responsibility. You get guaranteed response times, proactive security monitoring, and regular system audits to keep your solution performing perfectly.
            </p>
            <div className="support-specs">
              <div className="spec">
                <strong>99.9% Uptime</strong>
                <span>Service Level Agreement</span>
              </div>
              <div className="spec">
                <strong>24/7 Alerts</strong>
                <span>Automated Monitoring</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section pale-section solution-faq-section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-header text-center">
            <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
            <h2>Questions About This Solution?</h2>
            <p className="section-lead">Here are answers to common questions asked by our clients about implementation and custom options.</p>
          </ScrollReveal>

          <div className="faq-accordion">
            {solution.faq.map((item, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.05} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className={`faq-question ${openFaq === idx ? 'is-open' : ''}`}
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.question}</span>
                  <Icon name={openFaq === idx ? 'Minus' : 'Plus'} size={18} />
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Specific CTA / Enquiry Section */}
      <section className="section dark-section solution-cta-section" id="enquire">
        <div className="container text-center">
          <ScrollReveal variant="scale-up">
            <p className="eyebrow light-eyebrow">READY TO BUILD?</p>
            <h2>Get a Live Demo & Custom Proposal for {solution.title}</h2>
            <p className="cta-lead">
              Let’s discuss your vision, review live demo portals, and provide a tailored cost & timeline estimate for your business.
            </p>

            <div className="cta-button-group">
              <Button href="/contact/" variant="primary">
                Request Live Demo & Proposal
              </Button>
              <a href="tel:+918750749299" className="phone-cta-btn">
                <Icon name="Phone" size={18} />
                <span>Call Us Now: +91 87507 49299</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </article>
  );
}
