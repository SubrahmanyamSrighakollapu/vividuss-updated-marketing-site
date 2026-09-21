import { metadata as pageMetadata } from '@/lib/seo';
import { Visual } from '@/components/ui/Visual';
import { Stats, Process, CTA } from '@/components/sections/Shared';
import { ProjectGrid } from '@/components/portfolio/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
export const metadata = pageMetadata(
  'Our Portfolio',
  'Explore Vividuss work across web development, mobile applications, branding and digital marketing.',
  '/portfolio/',
);
export default function Portfolio() {
  return (
    <>
      <section className="portfolio-hero pale-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">OUR PORTFOLIO</p>
            <h1>
              Ideas Delivered.
              <br />
              <em>Results Achieved.</em>
            </h1>
            <p>
              Explore the work that reflects our creativity, technical expertise, and commitment to
              delivering real business value.
            </p>
            <Stats
              items={[
                ['40+', 'Projects Delivered'],
                ['30+', 'Happy Clients'],
                ['10+', 'Industries Served'],
              ]}
            />
          </div>
          <div className="portfolio-hero-art">
            <Visual
              asset="/images/portfolio-hero.webp"
              alt="Overlapping business, technology and travel website mockups"
              priority
            />
            <p className="script">
              From Vision
              <br />
              to Value
            </p>
          </div>
        </div>
      </section>
      <ProjectGrid />
      <Process title={'Our Process.\nYour Success.'} style="dark" />
      <Testimonials />
      <CTA
        title={'Have a Project\nin Mind?'}
        text="Let’s collaborate to create something extraordinary."
        label="Let’s Talk"
        script={'Great Ideas\nStart Here'}
        className="cta-tall"
      />
    </>
  );
}
