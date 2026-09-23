'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Feature } from '@/types';
import { Icon } from '@/components/ui/Icon';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/sections/Shared';
import { StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function FeatureGrid({
  features,
  title,
  slug,
}: {
  features: Feature[];
  title: string;
  slug: string;
}) {
  const [selected, setSelected] = useState<Feature | null>(null);

  return (
    <section className="section features-section pale-section" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title={title}
          text="Thoughtfully crafted solutions. Built around your business."
        />

        <StaggerContainer
          className={'feature-grid ' + (features.length === 8 ? 'four-columns' : '')}
          staggerDelay={0.08}
        >
          {features.map((f, i) => (
            <StaggerItem key={f.title} variant="fade-up">
              <motion.article
                className="feature-card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{ height: '100%' }}
              >
                <span className={'feature-icon tone-' + (i % 4)}>
                  <Icon name={f.icon} size={30} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                <button className="text-link" onClick={() => setSelected(f)}>
                  Learn More <Icon name="ArrowUpRight" size={15} />
                </button>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || 'Our solution'}
      >
        {selected && (
          <>
            <span className="feature-icon">
              <Icon name={selected.icon} size={35} />
            </span>
            <p>{selected.description}</p>
            <h3>Let’s shape the right solution for you.</h3>
            <p>
              Tell us about your goals, audience and timeline. We’ll discuss the approach, scope and
              next steps with you.
            </p>
            <Button href={'/contact/?service=' + slug}>Discuss Your Requirements</Button>
          </>
        )}
      </Modal>
    </section>
  );
}
