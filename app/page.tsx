import { metadata as pageMetadata } from '@/lib/seo';
import { HomeHero } from '@/components/home/HomeHero';
import { ServicesStrip } from '@/components/home/ServicesStrip';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { StoryButton } from '@/components/sections/StoryButton';
import { Facts, Process, CTA } from '@/components/sections/Shared';
import { Industries } from '@/components/sections/Industries';
import { ProjectShowcase } from '@/components/portfolio/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export const metadata = pageMetadata(
  'Ideas Today. Greater Tomorrows.',
  'Vividuss brings web and mobile development, design and digital marketing together to help your business grow.',
);

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="trust-strip">
        <div className="container">
          <ScrollReveal variant="fade-down">
            <p>Trusted by brands that believe in better</p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.08} className="trust-logos">
            {[
              ['Gem', 'PALMCO'],
              ['Layers', 'NextGen'],
              ['Puzzle', 'HexaLab'],
              ['Sparkles', 'LightAI'],
              ['Globe', 'GlobalTech'],
              ['TrendingUp', 'Fastline'],
            ].map(([icon, name]) => (
              <StaggerItem key={name} variant="scale-up" as="span">
                <Icon name={icon} size={29} />
                {name}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section home-about">
        <div className="container split-grid">
          <ScrollReveal variant="fade-right" className="home-about-art">
            <Visual
              asset="/images/team.webp"
              alt="Vividuss creative team collaborating in a bright office"
              className="team-photo"
            />
            <Visual
              asset="/images/building.webp"
              alt="Modern office architecture"
              className="building-photo"
            />
            <div className="image-story">
              <StoryButton />
            </div>
            <div className="small-stat">
              <Icon name="BadgeCheck" size={31} />
              <strong>
                Built on Trust.
                <br />
                Driven by Results.
              </strong>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.15}>
            <p className="eyebrow">ABOUT VIVIDUSS</p>
            <h2>
              Your Trusted Partner
              <br />
              in Digital Success
            </h2>
            <p>
              We are a passionate team of innovators, designers, and developers committed to
              transforming ideas into meaningful digital experiences.
            </p>
            <p>
              At Vividuss, we combine strategy, creativity and technology to deliver solutions that
              add real value to your business.
            </p>
            <Facts
              className="vertical-facts"
              items={[
                {
                  icon: 'Lightbulb',
                  title: 'Innovation at Our Core',
                  description: 'Fresh ideas. Smarter solutions.',
                },
                {
                  icon: 'Users',
                  title: 'Client-Centric Approach',
                  description: 'Your goals guide everything we do.',
                },
                {
                  icon: 'Rocket',
                  title: 'Results That Matter',
                  description: 'Built for impact and lasting growth.',
                },
              ]}
            />
            <div className="button-row">
              <Button href="/about/" variant="outline">
                Discover Our Story
              </Button>
              <p className="script">
                Value to your
                <br />
                Business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServicesStrip />
      <SolutionsSection
        eyebrow="READY SOLUTIONS"
        title="Solutions Built to Scale Your Business"
        subtitle="Explore our industry-focused digital products engineered for high performance, top security, and instant deployment."
        limit={6}
      />
      <Industries />
      <ProjectShowcase />
      <Process compact />
      <Testimonials />
      <CTA
        title={'Let’s Build Something\nGreat Together'}
        text="Have an idea? We have the expertise to make it happen."
        label="Start a Conversation"
        script={'Your Next Chapter\nStarts Here'}
      />
    </>
  );
}
