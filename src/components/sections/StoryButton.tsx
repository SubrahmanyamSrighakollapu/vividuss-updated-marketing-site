'use client';
import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
const chapters = [
  {
    image: '/images/about-office.webp',
    title: 'A place for ambitious ideas',
    text: 'Vividuss brings strategy, creativity and technology together to help businesses move forward.',
  },
  {
    image: '/images/team.webp',
    title: 'People at the heart of progress',
    text: 'We work closely with our clients, listen to their challenges and build around what matters to them.',
  },
  {
    image: '/images/web-hero.webp',
    title: 'From the first idea to what comes next',
    text: 'Our digital services connect thoughtful design with practical development and purposeful marketing.',
  },
];
export function StoryButton({
  label = 'Explore Our Story',
  className = '',
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false),
    [index, setIndex] = useState(0),
    c = chapters[index];
  return (
    <>
      <button className={'story-button ' + className} onClick={() => setOpen(true)}>
        <span className="play-circle">
          <Icon name="Play" size={15} />
        </span>
        {label}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="The Vividuss Story"
        className="story-modal"
      >
        <Visual asset={c.image} alt={c.title} />
        <div className="story-caption">
          <span className="eyebrow">CHAPTER {String(index + 1).padStart(2, '0')} / 03</span>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
        </div>
        <div className="story-controls">
          <button
            className="icon-button"
            aria-label="Previous chapter"
            onClick={() => setIndex((index + 2) % 3)}
          >
            <Icon name="ArrowLeft" />
          </button>
          <div className="dots">
            {chapters.map((item, i) => (
              <button
                key={item.title}
                aria-label={'Read chapter ' + (i + 1)}
                aria-pressed={index === i}
                className={index === i ? 'active' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            className="icon-button"
            aria-label="Next chapter"
            onClick={() => setIndex((index + 1) % 3)}
          >
            <Icon name="ArrowRight" />
          </button>
          <Button href="/about/" variant="outline">
            Meet Vividuss
          </Button>
        </div>
      </Modal>
    </>
  );
}
