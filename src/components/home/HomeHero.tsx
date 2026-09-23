'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Stats } from '@/components/sections/Shared';
import { StoryButton } from '@/components/sections/StoryButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const slides = [
  {
    image: '/images/home-hero-image-one.png',
    title: 'Ideas Today.',
    highlight: 'Greater Tomorrows.',
    text: 'We craft innovative digital solutions that help businesses transform, scale, and stay ahead.',
  },
  {
    image: '/images/home-hero-image-two.png',
    title: 'Big Ambitions.',
    highlight: 'Brighter Possibilities.',
    text: 'Strategy, design and technology come together to turn your next big idea into meaningful progress.',
  },
  {
    image: '/images/home-hero-image-three.png',
    title: 'Built for People.',
    highlight: 'Designed for Growth.',
    text: 'Thoughtful experiences. Powerful technology. A digital partner for every step of your journey.',
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="home-hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="home-hero-image-wrapper"
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <Visual
            asset={slide.image}
            alt="Vividuss digital transformation hero illustration"
            className="home-hero-image"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container home-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
        <StaggerContainer className="home-hero-copy" staggerDelay={0.15}>
          <StaggerItem variant="fade-down">
            <p className="eyebrow">YOUR VISION. OUR INNOVATION.</p>
          </StaggerItem>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1>
                {slide.title}
                <br />
                <em>{slide.highlight}</em>
              </h1>
              <p>{slide.text}</p>
            </motion.div>
          </AnimatePresence>

          <StaggerItem variant="fade-up">
            <div className="button-row">
              <Button href="/contact/">Let’s Build Together</Button>
              <StoryButton />
            </div>
          </StaggerItem>

          <StaggerItem variant="zoom-in">
            <Stats
              items={[
                ['250+', 'Happy Clients'],
                ['500+', 'Projects Delivered'],
                ['10+', 'Industries Served'],
                ['5+', 'Years of Excellence'],
              ]}
            />
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal variant="fade-left" delay={0.3} className="hero-pagination">
          <span>0{index + 1}</span>
          <div className="progress-track">
            <motion.span
              animate={{ width: ((index + 1) / slides.length) * 100 + '%' }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span>0{slides.length}</span>
          <button aria-label="Previous hero message" onClick={() => setIndex((index + 2) % 3)}>
            <Icon name="ArrowLeft" size={17} />
          </button>
          <button aria-label="Next hero message" onClick={() => setIndex((index + 1) % 3)}>
            <Icon name="ArrowRight" size={17} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
