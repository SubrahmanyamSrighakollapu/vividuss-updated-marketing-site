'use client';

import { useState } from 'react';
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import type { Solution } from '@/types';

interface SolutionsSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  limit?: number;
  showFilters?: boolean;
}

export function SolutionsSection({
  title = 'Ready-to-Deploy Industry Solutions',
  subtitle = 'Discover our battle-tested, custom-engineered digital platforms tailored to transform businesses across diverse industries.',
  eyebrow = 'OUR READY SOLUTIONS',
  limit,
  showFilters = true,
}: SolutionsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Matchmaking & Social',
    'EdTech & Learning',
    'On-Demand Delivery',
    'E-Commerce & Retail',
    'Real Estate',
    'Recruitment & HR',
    'Marketplace',
    'Automotive',
    'Classifieds',
    'Events & Entertainment',
    'Enterprise Solutions',
  ];

  const filteredSolutions = solutions.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const displayedSolutions =
    limit && selectedCategory === 'All' ? filteredSolutions.slice(0, limit) : filteredSolutions;

  return (
    <section className="section solutions-section pale-section" id="solutions">
      <div className="container">
        <ScrollReveal variant="fade-up" className="section-header text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="section-lead">{subtitle}</p>
        </ScrollReveal>

        {showFilters && (
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="solutions-filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-tab ${selectedCategory === cat ? 'is-active' : ''}`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        <StaggerContainer key={selectedCategory} className="solutions-grid" staggerDelay={0.08}>
          {displayedSolutions.map((solution: Solution) => (
            <StaggerItem key={solution.slug} variant="scale-up" className="solution-card-wrapper">
              <div className="solution-card">
                <div className="solution-card-image">
                  <img
                    src={solution.posterImage}
                    alt={solution.title}
                    loading="lazy"
                  />
                  <div className="solution-image-overlay" />
                  {solution.badge && <span className="solution-badge">{solution.badge}</span>}
                  <div className="solution-category-pill">
                    <Icon name={solution.icon} size={16} />
                    <span>{solution.category}</span>
                  </div>
                </div>

                <div className="solution-card-body">
                  <h3 className="solution-title">
                    <Link href={`/solutions/${solution.slug}/`}>{solution.title}</Link>
                  </h3>
                  <p className="solution-tagline">{solution.tagline}</p>
                  <p className="solution-description">{solution.shortDescription}</p>

                  <div className="solution-highlights">
                    {solution.cardHighlights.map((highlight, idx) => (
                      <div key={idx} className="highlight-tag">
                        <Icon name="Check" size={13} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="solution-card-footer">
                    <Button href={`/solutions/${solution.slug}/`} variant="outline" className="solution-btn">
                      Explore Solution Details
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {displayedSolutions.length === 0 && (
          <div className="no-solutions-msg">
            <Icon name="Search" size={36} />
            <p>No solution cards listed under "{selectedCategory}" at the moment.</p>
            <Button href="/contact/" variant="primary">
              Request Custom {selectedCategory} Solution
            </Button>
          </div>
        )}

        {limit && selectedCategory === 'All' && solutions.length > limit && (
          <ScrollReveal variant="fade-up" delay={0.2} className="solutions-cta-row">
            <Button href="/solutions/" variant="primary">
              View All {solutions.length} Industry Solutions
            </Button>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
