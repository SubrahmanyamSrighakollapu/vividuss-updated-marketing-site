'use client';
import { useState } from 'react';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { Stats } from '@/components/sections/Shared';
import { StoryButton } from '@/components/sections/StoryButton';
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
  const [index, setIndex] = useState(0),
    slide = slides[index];
  return (
    <section className="home-hero">
      <Visual
        asset={slide.image}
        alt="Vividuss digital transformation hero illustration"
        className="home-hero-image"
        priority
        sizes="100vw"
      />
      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">YOUR VISION. OUR INNOVATION.</p>
          <h1>
            {slide.title}
            <br />
            <em>{slide.highlight}</em>
          </h1>
          <p>{slide.text}</p>
          <div className="button-row">
            <Button href="/contact/">Let’s Build Together</Button>
            <StoryButton />
          </div>
          <Stats
            items={[
              ['250+', 'Happy Clients'],
              ['500+', 'Projects Delivered'],
              ['10+', 'Industries Served'],
              ['5+', 'Years of Excellence'],
            ]}
          />
        </div>
        <div className="hero-pagination">
          <span>0{index + 1}</span>
          <div className="progress-track">
            <span style={{ width: ((index + 1) / slides.length) * 100 + '%' }} />
          </div>
          <span>0{slides.length}</span>
          <button aria-label="Previous hero message" onClick={() => setIndex((index + 2) % 3)}>
            <Icon name="ArrowLeft" size={17} />
          </button>
          <button aria-label="Next hero message" onClick={() => setIndex((index + 1) % 3)}>
            <Icon name="ArrowRight" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
