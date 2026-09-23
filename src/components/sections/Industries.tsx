'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { industries } from '@/data/industries';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function Industries() {
  const [index, setIndex] = useState<number | null>(null);
  const selected = index !== null ? industries[index] : null;

  return (
    <section className="section industries-section" id="industries">
      <div className="container industries-layout">
        <ScrollReveal variant="fade-right">
          <div>
            <p className="eyebrow">INDUSTRIES WE SERVE</p>
            <h2>
              Expertise Across
              <br />
              Every Industry
            </h2>
            <p>Purpose-built digital solutions for the way your business works.</p>
            <button className="button button--outline" onClick={() => setIndex(0)}>
              Explore Industries
              <Icon name="ArrowRight" size={17} />
            </button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="industry-panels" staggerDelay={0.08}>
          {industries.map((industry, i) => (
            <StaggerItem key={industry.name} variant="scale-up">
              <motion.button
                className="industry-panel"
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <Visual
                  asset={{ src: '/images/industries-sheet.webp', columns: 5, rows: 1, index: i }}
                  alt={industry.name}
                />
                <span>
                  <Icon name={industry.icon} size={26} />
                  <strong>{industry.name}</strong>
                </span>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Modal
        open={!!selected}
        onClose={() => setIndex(null)}
        title={selected?.name || 'Industries'}
      >
        {selected && (
          <>
            <p>{selected.description}</p>
            <p>
              From a fresh website to connected marketing campaigns, we help your business deliver a
              clear, consistent digital experience.
            </p>
            <Button href="/contact/">Explore a Solution</Button>
          </>
        )}
      </Modal>
    </section>
  );
}
