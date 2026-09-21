'use client';
import { useState } from 'react';
import { industries } from '@/data/industries';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
export function Industries() {
  const [index, setIndex] = useState<number | null>(null),
    selected = index !== null ? industries[index] : null;
  return (
    <section className="section industries-section" id="industries">
      <div className="container industries-layout">
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
        <div className="industry-panels">
          {industries.map((industry, i) => (
            <button key={industry.name} className="industry-panel" onClick={() => setIndex(i)}>
              <Visual
                asset={{ src: '/images/industries-sheet.webp', columns: 5, rows: 1, index: i }}
                alt={industry.name}
              />
              <span>
                <Icon name={industry.icon} size={26} />
                <strong>{industry.name}</strong>
              </span>
            </button>
          ))}
        </div>
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
