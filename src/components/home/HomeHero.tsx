'use client';
import { useState, useEffect } from 'react';
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
    text: 'We craft innovative, AI-powered digital solutions that help businesses transform, scale, and stay ahead.',
  },
  {
    image: '/images/home-hero-image-two.png',
    title: 'Big Ambitions.',
    highlight: 'Brighter Possibilities.',
    text: 'Strategy, design and AI automation come together to turn your next big idea into meaningful progress.',
  },
  {
    image: '/images/home-hero-image-three.png',
    title: 'Built for People.',
    highlight: 'Designed for Growth.',
    text: 'Thoughtful experiences. Intelligent AI automation. A digital partner for every step of your journey.',
  },
];

const aiTags = [
  'AI-ENHANCED PLATFORMS',
  'INTELLIGENT AUTOMATION',
  'PREDICTIVE AI MODELS',
  'GEN-AI INTEGRATION',
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [tagIndex, setTagIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slide = slides[index];
  const isRight = index === 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);
    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setIndex((current) => (current + 1) % slides.length);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % aiTags.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`home-hero ${isRight ? 'is-slide-right' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
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
        <StaggerContainer
          key={index}
          className={`home-hero-copy ${isRight ? 'is-right' : ''}`}
          staggerDelay={0.15}
        >
          <StaggerItem variant="fade-down">
            <div className="hero-eyebrow-row">
              <motion.div
                className="ai-badge-hero"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="ai-sparkle-icon">
                  <Icon name="Sparkles" size={14} />
                </span>
                <div className="ai-badge-text-slider">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={aiTags[tagIndex]}
                      initial={{ y: 12, opacity: 0, filter: 'blur(3px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -12, opacity: 0, filter: 'blur(3px)' }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="ai-badge-text"
                    >
                      {aiTags[tagIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="ai-shimmer-beam" />
              </motion.div>
              <p className="eyebrow">YOUR VISION. OUR INNOVATION.</p>
            </div>
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

          {index === 0 && (
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
          )}
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
          <button
            aria-label="Previous hero message"
            onClick={() => setIndex((current) => (current - 1 + slides.length) % slides.length)}
          >
            <Icon name="ArrowLeft" size={17} />
          </button>
          <button
            aria-label="Next hero message"
            onClick={() => setIndex((current) => (current + 1) % slides.length)}
          >
            <Icon name="ArrowRight" size={17} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
