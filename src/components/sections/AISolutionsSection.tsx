'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/sections/Shared';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const aiCapabilities = [
  {
    id: 'matchmaking',
    icon: 'Sparkles',
    badge: 'AI Recommendation',
    title: 'AI-Powered Matchmaking & Personalization',
    subtitle: 'Intelligent algorithms that analyze behavior, preferences, and compatibility.',
    description:
      'We build multi-parameter AI engines that power modern matrimony, recruitment, and e-commerce platforms with smart profile matching, personalized content feeds, and intent prediction.',
    metrics: [
      { label: 'Match Accuracy', value: '98.4%' },
      { label: 'User Engagement', value: '+3.5x' },
      { label: 'Algorithmic Speed', value: '<50ms' },
    ],
    features: [
      'Multi-factor affinity & preference scoring',
      'Real-time behavioral recommendation feeds',
      'Automated candidate-job matching algorithms',
      'Community & sub-caste targeted suggestions',
    ],
    accentColor: '#f4a800',
  },
  {
    id: 'whatsapp-ai',
    icon: 'Bot',
    badge: 'Generative AI CRM',
    title: 'Automated AI Chatbots & WhatsApp CRM',
    subtitle: '24/7 intelligent conversational agents integrated into customer channels.',
    description:
      'Empower your customer support and lead generation with generative AI assistants that handle inquiries, process bookings, qualify leads, and trigger automated CRM workflows.',
    metrics: [
      { label: 'Response Time', value: 'Instant' },
      { label: 'Support Automation', value: '85%' },
      { label: 'Lead Conversion', value: '+42%' },
    ],
    features: [
      'Multi-lingual NLP & voice-to-text processing',
      'Automated WhatsApp lead qualification bots',
      'Seamless human agent handoff triggers',
      'Instant catalog lookup & automated booking',
    ],
    accentColor: '#25D366',
  },
  {
    id: 'analytics',
    icon: 'BrainCircuit',
    badge: 'Predictive Intelligence',
    title: 'Predictive Analytics & Decision Intelligence',
    subtitle: 'Turn raw operational data into foresight and automated growth actions.',
    description:
      'Our data science models analyze historical user trends to predict churn, forecast sales revenue, automate inventory stocking, and present interactive executive intelligence dashboards.',
    metrics: [
      { label: 'Forecast Precision', value: '94%' },
      { label: 'Churn Reduction', value: '38%' },
      { label: 'Data Latency', value: 'Real-Time' },
    ],
    features: [
      'Automated revenue & demand forecasting',
      'Real-time churn risk & retention alerts',
      'Student performance & test score predictive analytics',
      'Smart pricing & dynamic yield optimization',
    ],
    accentColor: '#3b82f6',
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    badge: 'Vision & Security AI',
    title: 'AI Verification & Anti-Fraud Protection',
    subtitle: 'Bank-grade automated ID verification, moderation, and anomaly detection.',
    description:
      'Protect your platform with AI computer vision models that verify government documents (Aadhaar/PAN/ID), detect fake profiles, audit nudity, and block fraudulent transactions.',
    metrics: [
      { label: 'ID Verification', value: '< 30 Sec' },
      { label: 'Fraud Detection', value: '99.9%' },
      { label: 'Auto Moderation', value: '24/7' },
    ],
    features: [
      'Optical Character Recognition (OCR) document scanning',
      'Biometric face match & liveness detection',
      'AI nudity, spam & profanity auto-moderation',
      'Suspicious transaction anomaly alerts',
    ],
    accentColor: '#8b5cf6',
  },
];

export function AISolutionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = aiCapabilities[activeTab];

  return (
    <section className="section ai-solutions-section dark-section" id="ai-innovation">
      <div className="container">
        <SectionHeading
          eyebrow="AI-POWERED ACCELERATION"
          title="Leveraging Artificial Intelligence to Power Business Growth"
          text="At Vividuss, we integrate cutting-edge AI models, predictive analytics, and automated machine intelligence directly into your web, mobile, and enterprise platforms."
        />

        {/* AI Capability Selector Pills */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <div className="ai-tabs-track">
            {aiCapabilities.map((cap, i) => (
              <button
                key={cap.id}
                onClick={() => setActiveTab(i)}
                className={`ai-tab-btn ${activeTab === i ? 'is-active' : ''}`}
                type="button"
              >
                <Icon name={cap.icon} size={18} />
                <span>{cap.title.split('&')[0]}</span>
                {activeTab === i && (
                  <motion.span
                    layoutId="aiTabHighlight"
                    className="ai-tab-glow"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured Interactive AI Capability Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCap.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="ai-feature-card"
          >
            <div className="ai-feature-grid">
              <div className="ai-feature-content">
                <div className="ai-badge-row">
                  <span className="ai-badge-pill">
                    <Icon name="Sparkles" size={13} />
                    {activeCap.badge}
                  </span>
                  <span className="ai-tag-tech">Integrated Machine Intelligence</span>
                </div>

                <h2>{activeCap.title}</h2>
                <p className="ai-subtitle">{activeCap.subtitle}</p>
                <p className="ai-desc">{activeCap.description}</p>

                <div className="ai-feature-list">
                  {activeCap.features.map((feat, idx) => (
                    <div key={idx} className="ai-feature-item">
                      <span className="ai-check-icon">
                        <Icon name="Check" size={12} />
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="ai-cta-row">
                  <Button href="/contact/" variant="white">
                    Integrate AI into Your Product
                  </Button>
                  <Button href="/solutions/" variant="outline" className="ai-secondary-btn">
                    View AI-Ready Solutions
                  </Button>
                </div>
              </div>

              {/* AI Metrics & Neural Visualization Card */}
              <div className="ai-visual-card">
                <div className="ai-neural-header">
                  <div className="neural-indicator">
                    <span className="pulse-dot" />
                    <span>Neural Network Active</span>
                  </div>
                  <span className="ai-engine-tag">Vividuss AI Engine v3.4</span>
                </div>

                {/* Live AI Metrics Display */}
                <div className="ai-metrics-grid">
                  {activeCap.metrics.map((m) => (
                    <div key={m.label} className="ai-metric-box">
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Simulated Neural Terminal / Live Stream */}
                <div className="ai-terminal">
                  <div className="terminal-bar">
                    <span className="t-dot red" />
                    <span className="t-dot yellow" />
                    <span className="t-dot green" />
                    <span className="t-title">live_ai_stream.log</span>
                  </div>
                  <div className="terminal-code">
                    <p>
                      <span className="code-key">&gt; initializing</span> AI model context...
                    </p>
                    <p>
                      <span className="code-success">&gt; [OK]</span> {activeCap.badge} algorithm loaded
                    </p>
                    <p>
                      <span className="code-val">&gt; accuracy_score:</span> {activeCap.metrics[0].value} | latency: 12ms
                    </p>
                    <p className="code-highlight">
                      &gt; status: <strong>Executing Intelligent Optimization</strong>
                    </p>
                  </div>
                </div>

                <div className="ai-card-glow-bg" style={{ background: activeCap.accentColor }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 4 AI Impact Cards Grid */}
        <StaggerContainer className="ai-pillars-grid" staggerDelay={0.08}>
          {[
            {
              icon: 'Zap',
              title: 'Speed to Market',
              desc: 'Deploy pre-trained AI modules for matching, CRM bots, and document verification in days.',
            },
            {
              icon: 'ShieldAlert',
              title: 'Enterprise Security',
              desc: 'Bank-grade encryption, privacy-first data handling, and strict compliance controls.',
            },
            {
              icon: 'TrendingUp',
              title: 'Measurable ROI',
              desc: 'Drive up to 4x higher conversion rates and automate up to 80% of routine operations.',
            },
            {
              icon: 'Sliders',
              title: 'Tailored for Your Business',
              desc: 'Custom fine-tuned machine learning models trained specifically for your industry needs.',
            },
          ].map((pillar) => (
            <StaggerItem key={pillar.title} variant="fade-up" className="ai-pillar-item">
              <div className="ai-pillar-card">
                <span className="pillar-icon">
                  <Icon name={pillar.icon} size={24} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
