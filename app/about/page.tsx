import { metadata as pageMetadata } from '@/lib/seo';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { StoryButton } from '@/components/sections/StoryButton';
import { Stats, Facts, SectionHeading, ContactSection } from '@/components/sections/Shared';
export const metadata = pageMetadata(
  'About Us',
  'Meet Vividuss — a team driven by ideas and built for impact. Discover our story, values and digital expertise.',
  '/about/',
);
const values = [
  {
    icon: 'Target',
    title: 'Our Mission',
    description:
      'To empower businesses with innovative, reliable and scalable digital solutions that create meaningful impact.',
  },
  {
    icon: 'Lightbulb',
    title: 'Our Vision',
    description:
      'To be a trusted global technology partner, shaping a smarter, more connected digital future.',
  },
  {
    icon: 'Gem',
    title: 'Our Values',
    description:
      'Integrity, innovation, collaboration and excellence. The principles behind every relationship and every solution.',
  },
];
export default function About() {
  return (
    <>
      <section className="about-hero dark-section">
        <Visual
          asset="/images/about-office.webp"
          alt="Modern Vividuss office reception"
          priority
          sizes="100vw"
        />
        <div className="container about-hero-inner">
          <p className="eyebrow">ABOUT VIVIDUSS</p>
          <h1>
            Driven by Ideas.
            <br />
            Built for <em>Impact.</em>
          </h1>
          <p>
            We’re a team of thinkers, creators, and problem-solvers
            <br />
            passionate about building the future of business.
          </p>
          <div className="button-row">
            <Button href="#our-journey" variant="white">
              Our Journey
            </Button>
            <StoryButton />
          </div>
          <Stats
            items={[
              ['5+', 'Years of Excellence'],
              ['250+', 'Happy Clients'],
              ['40+', 'Expert Professionals'],
            ]}
          />
        </div>
        <p className="script about-hero-script">
          People. Purpose.
          <br />
          Possibilities.
        </p>
      </section>
      <section className="section about-story" id="our-journey">
        <div className="container story-grid">
          <div className="story-text">
            <p className="eyebrow">OUR STORY</p>
            <h2>
              A Digital Partner
              <br />
              for What’s Next
            </h2>
            <p>
              Vividuss was founded with a simple belief: technology should create value, not
              complexity.
            </p>
            <p>
              From a small team with big ideas to a growing digital solutions company, our journey
              has been driven by a passion for helping businesses succeed.
            </p>
            <p>
              We combine creativity, technology and strategic thinking to build experiences that
              make a difference.
            </p>
            <p className="script">
              Your Growth.
              <br />
              Our Purpose.
            </p>
          </div>
          <div className="story-building">
            <Visual
              asset="/images/building.webp"
              alt="Glass office building reaching toward the sky"
            />
            <StoryButton label="Discover Our Journey" />
          </div>
          <div className="story-mosaic">
            <Visual asset="/images/team.webp" alt="Collaborative Vividuss team" />
            <div className="principles-card dark-section">
              <Icon name="Sparkles" size={28} />
              <h3>
                Big ideas.
                <br />
                Shared ambition.
                <br />
                <em>Real impact.</em>
              </h3>
            </div>
            <Visual asset="/images/web-hero.webp" alt="Website design on a studio desk" />
          </div>
        </div>
      </section>
      <section className="section pale-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT DRIVES US"
            title="Purpose in Everything We Do"
            text="A clear vision. A shared mission. Values that guide the way."
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <article key={v.title}>
                <span className="card-number">0{i + 1}</span>
                <span className="feature-icon">
                  <Icon name={v.icon} size={32} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-impact dark-section">
        <Visual asset="/images/mountain-banner.webp" alt="" sizes="100vw" />
        <div className="container">
          <p className="eyebrow">OUR IMPACT IN NUMBERS</p>
          <Stats
            items={[
              ['5+', 'Years of Excellence'],
              ['250+', 'Happy Clients'],
              ['40+', 'Expert Professionals'],
              ['10+', 'Industries Served'],
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHY VIVIDUSS"
            title={'More Than a Service Provider.\nA Partner in Your Success.'}
          />
          <Facts
            className="why-facts"
            items={[
              {
                icon: 'Users',
                title: 'Experienced Team',
                description: 'Skilled professionals with a passion for innovation.',
              },
              {
                icon: 'Lightbulb',
                title: 'Innovative Thinking',
                description: 'Fresh perspectives that solve real business challenges.',
              },
              {
                icon: 'Target',
                title: 'Client-First Approach',
                description: 'Your goals and your success always come first.',
              },
              {
                icon: 'Handshake',
                title: 'Long-Term Partnership',
                description: 'Reliable support that grows with your business.',
              },
            ]}
          />
        </div>
      </section>
      <section className="section vision-section pale-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">TOGETHER, WE BUILD</p>
            <h2>
              Turning Your Vision
              <br />
              Into Digital Success
            </h2>
            <p>
              We believe the best results come from genuine collaboration. We listen closely, think
              boldly and work alongside you to create solutions that deliver lasting value.
            </p>
            <p>
              Whether you’re starting something new or taking your business to the next level, we’re
              here to help.
            </p>
            <Button href="/services/" variant="outline">
              Explore Our Expertise
            </Button>
          </div>
          <Visual
            asset="/images/team.webp"
            alt="Vividuss team working together on a digital project"
          />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
