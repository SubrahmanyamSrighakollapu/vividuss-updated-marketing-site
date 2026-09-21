import { metadata as pageMetadata } from '@/lib/seo';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { StoryButton } from '@/components/sections/StoryButton';
import { Stats, SectionHeading, CTA } from '@/components/sections/Shared';
import { Testimonials } from '@/components/sections/Testimonials';
export const metadata = pageMetadata(
  'Franchise Opportunities',
  'Explore the Vividuss franchise opportunity and build a technology business with operational and marketing support.',
  '/franchise/',
);
const benefits = [
  [
    'Code2',
    'No Technical Knowledge Needed',
    'Focus on growing your business. Our experts take care of delivery.',
  ],
  ['Headphones', 'Full Backend Support', 'A dedicated team to help you at every stage.'],
  ['Briefcase', 'Ready-to-Sell Services', 'A portfolio of in-demand digital services.'],
  ['Store', 'Complete Business Setup', 'Guidance and resources to help you get started.'],
  ['Megaphone', 'Marketing & Lead Support', 'Tools and support to connect with customers.'],
  ['BadgeCheck', 'Trusted Brand Advantage', 'Build with the confidence of an established brand.'],
];
const reasons = [
  ['Low Investment', 'An accessible opportunity to begin your entrepreneurial journey.'],
  ['No Technical Expertise', 'Our delivery team brings the technical knowledge.'],
  ['Multiple Revenue Streams', 'Offer web, app, marketing and creative services.'],
  ['Proven Business Model', 'A structured approach, with support at each step.'],
  ['Complete Training', 'Build the confidence to sell and manage your business.'],
  ['Marketing Support', 'Access brand assets and campaign guidance.'],
  ['Ongoing Assistance', 'A team you can turn to as your business grows.'],
  ['Scalable Opportunity', 'Expand your services and customer relationships.'],
];
export default function Franchise() {
  return (
    <>
      <section className="franchise-hero pale-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">GROW WITH VIVIDUSS</p>
            <h1>
              Own a Profitable
              <br />
              Tech Business
              <br />
              with <em>Vividuss</em>
            </h1>
            <p>
              Start your entrepreneurial journey with a trusted digital solutions brand. We bring
              the expertise. You bring the ambition.
            </p>
            <div className="button-row">
              <Button href="/contact/?service=franchise">Explore the Opportunity</Button>
              <StoryButton />
            </div>
            <Stats
              items={[
                ['3000+', 'Business Connections'],
                ['Pan India', 'Presence'],
                ['Proven', 'Business Model'],
              ]}
            />
          </div>
          <div className="franchise-hero-art">
            <Visual
              asset="/images/franchise.webp"
              alt="Vividuss franchise storefront concept"
              priority
            />
            <p className="script">
              Your Business.
              <br />
              Our Expertise.
            </p>
            <div className="franchise-brand-badge">
              <Icon name="BadgeCheck" size={31} />
              <span>
                A Trusted Brand.
                <br />
                <strong>A Stronger Future.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section franchise-benefits" id="opportunity">
        <div className="container benefits-layout">
          <div>
            <p className="eyebrow">WHY FRANCHISE WITH US</p>
            <h2>
              Your Business.
              <br />
              Our Expertise.
              <br />
              <span className="accent-text">Shared Success.</span>
            </h2>
            <p>
              Everything you need to build a successful digital services business, backed by a team
              that’s invested in your growth.
            </p>
            <Button
              href="/downloads/vividuss-franchise-brochure.html"
              download
              variant="outline"
              icon="Download"
            >
              Download Brochure
            </Button>
          </div>
          <div className="benefits-grid">
            {benefits.map(([icon, title, text]) => (
              <article key={title}>
                <Icon name={icon} size={31} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section franchise-journey pale-section">
        <div className="container">
          <SectionHeading
            eyebrow="YOUR JOURNEY STARTS HERE"
            title="Start Your Vividuss Franchise in 4 Simple Steps"
          />
          <ol>
            {[
              ['FileText', 'Apply', 'Share your details and interest.'],
              ['MessagesSquare', 'Discussion', 'Let’s explore the opportunity together.'],
              ['Handshake', 'Onboarding', 'Get trained, equipped and ready.'],
              ['Rocket', 'Launch & Grow', 'Start your business with our support.'],
            ].map(([icon, title, text], i) => (
              <li key={title}>
                <span className="step-number">0{i + 1}</span>
                <Icon name={icon} size={36} />
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section franchise-growth">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">BUILT FOR ENTREPRENEURS</p>
            <h2>
              Be Your Own Boss.
              <br />
              Build Your Own Future.
            </h2>
            <p>
              Turn your ambition into action. With Vividuss, you get the freedom of running your own
              business and the strength of a team behind you.
            </p>
            <p>
              From your first conversation to your next milestone, we’re here to help you build with
              confidence.
            </p>
            <Button href="/contact/?service=franchise">Become a Partner</Button>
            <p className="script">
              Let’s Grow
              <br />
              Together.
            </p>
          </div>
          <div className="founder-art">
            <Visual
              asset="/images/founder.webp"
              alt="Entrepreneur building a business at his laptop"
            />
            <div className="floating-benefit">
              <Icon name="Wallet" />
              <span>Flexible Investment</span>
            </div>
            <div className="floating-benefit">
              <Icon name="TrendingUp" />
              <span>Recurring Revenue</span>
            </div>
            <div className="floating-benefit">
              <Icon name="ChartColumn" />
              <span>High-Demand Services</span>
            </div>
          </div>
        </div>
      </section>
      <section className="results-bar">
        <div className="container">
          <Stats
            items={[
              ['9+', 'Years of Experience'],
              ['60+', 'Projects Delivered'],
              ['50+', 'Partners & Associates'],
              ['3000+', 'Business Connections'],
            ]}
          />
        </div>
      </section>
      <section className="section franchise-reasons">
        <div className="container">
          <SectionHeading
            eyebrow="THE VIVIDUSS ADVANTAGE"
            title="8 Reasons to Partner with Vividuss"
            text="A powerful opportunity. A partnership built to last."
          />
          <div className="reason-grid">
            {reasons.map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials title="What Our Franchise Partners Say" franchise />
      <CTA
        href="/contact/?service=franchise"
        title={'Be Part of\nSomething Bigger'}
        text="Take the first step towards your entrepreneurial future."
        label="Let’s Connect"
        script={'Your Journey.\nOur Partnership.'}
      />
    </>
  );
}
