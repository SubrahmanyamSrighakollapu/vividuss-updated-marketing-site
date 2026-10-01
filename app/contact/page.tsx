import { metadata as pageMetadata } from '@/lib/seo';
import { site } from '@/data/site';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { Facts } from '@/components/sections/Shared';
import { ContactLocationsMap } from '@/components/sections/ContactLocationsMap';
import { ContactFaqSection } from '@/components/sections/ContactFaqSection';
import { RequestCallbackCard } from '@/components/ui/RequestCallbackCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export const metadata = pageMetadata(
  'Contact Us',
  'Reach out to Vividuss for web development, mobile apps, WhatsApp CRM, marketing, or franchise opportunities in Hyderabad.',
  '/contact/',
);

export default function Contact() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="contact-hero pale-section">
        <div className="container split-grid">
          <ScrollReveal variant="fade-right">
            <p className="eyebrow">LET’S CONNECT</p>
            <h1>
              Let’s Turn Your Ideas
              <br />
              Into <em>Reality.</em>
            </h1>
            <p>
              Have a project in mind, a question, or want to explore digital transformation?
              <br />
              Our team in Hyderabad is here to listen and help you scale.
            </p>
            <Facts
              className="hero-facts"
              items={[
                { icon: 'MessagesSquare', title: 'Quick Response', description: '< 2 Hours SLA' },
                { icon: 'ShieldCheck', title: '100% Confidential', description: 'NDA Guaranteed' },
                { icon: 'Handshake', title: 'Dedicated Support', description: 'Solution Architects' },
              ]}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.15} className="contact-hero-art">
            <Visual
              asset="/images/contact.webp"
              alt="Friendly customer support specialist at Vividuss"
              priority
            />
            <div className="contact-promises">
              {[
                ['Clock3', 'Quick Response'],
                ['Headphones', 'Expert Technical Support'],
                ['HeartHandshake', 'Long-Term Partnership'],
              ].map(([icon, text]) => (
                <span key={text}>
                  <Icon name={icon} size={18} />
                  {text}
                </span>
              ))}
            </div>
            <p className="script">
              Great Conversations
              <br />
              Start Here
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section: Perfectly Balanced Height (Form on right, direct channels on left) */}
      <section className="section contact-main" id="contact-form">
        <div className="container contact-main-grid">
          <ScrollReveal variant="fade-right" className="contact-info-col">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              We’d Love to Hear
              <br />
              from You
            </h2>
            <p className="contact-lead-text">
              Tell us about your project vision or business inquiry. Our team responds to all incoming requests within 2 business hours.
            </p>

            <div className="contact-quick-methods">
              <a href={'tel:' + site.phoneHref} className="quick-method-card">
                <div className="method-icon-box">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="method-text">
                  <small>Call Us Directly</small>
                  <strong>{site.phone}</strong>
                  <span>Mon – Sat, 9 AM – 6 PM IST</span>
                </div>
                <Icon name="ArrowUpRight" size={18} className="method-arrow" />
              </a>

              <a href={'mailto:' + site.email} className="quick-method-card">
                <div className="method-icon-box email">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="method-text">
                  <small>Drop Us an Email</small>
                  <strong>{site.email}</strong>
                  <span>Fast SLA for Inquiry Responses</span>
                </div>
                <Icon name="ArrowUpRight" size={18} className="method-arrow" />
              </a>

              <a
                href={'https://wa.me/' + site.phoneHref.replace(/[^0-9]/g, '')}
                target="_blank"
                rel="noreferrer"
                className="quick-method-card whatsapp"
              >
                <div className="method-icon-box wa">
                  <Icon name="MessageSquare" size={20} />
                </div>
                <div className="method-text">
                  <small>Chat on WhatsApp</small>
                  <strong>Instant Support Desk</strong>
                  <span>Connect with an expert live</span>
                </div>
                <Icon name="ArrowUpRight" size={18} className="method-arrow" />
              </a>
            </div>

            <div className="contact-social-wrap">
              <p className="social-heading">Follow Our Journey</p>
              <SocialLinks />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={0.15}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Office Locations & Support Cards Row (3-Column Horizontal Grid Below Form) */}
      <section className="section office-cards-section pale-section">
        <div className="container">
          <ScrollReveal variant="fade-up" className="section-heading center">
            <p className="eyebrow">OUR HYDERABAD OFFICES</p>
            <h2>Official Addresses & Direct Support</h2>
            <p>Visit our corporate headquarters, reach our registered seat, or request an immediate call back.</p>
          </ScrollReveal>

          <StaggerContainer className="office-three-grid" staggerDelay={0.1}>
            {/* Card 1: Corresponding & Corporate Office */}
            <StaggerItem variant="fade-up" className="office-col-card primary-office">
              <div className="office-card-header">
                <span className="card-badge corporate-badge">
                  <Icon name="Building2" size={14} />
                  Corporate Headquarters
                </span>
                <span className="pill-tag">Primary</span>
              </div>
              <div className="office-card-body">
                <h3>{site.correspondingAddress.company}</h3>
                <p className="address-text">
                  <strong>{site.correspondingAddress.building}</strong>, {site.correspondingAddress.unit}
                  <br />
                  {site.correspondingAddress.area}
                  <br />
                  <span className="highlight-city">{site.correspondingAddress.city}</span>
                </p>
                <div className="card-footer-actions">
                  <a
                    href={
                      'https://www.google.com/maps/search/?api=1&query=' +
                      encodeURIComponent(site.correspondingAddress.mapQuery)
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-btn"
                  >
                    <span>Get Directions</span>
                    <Icon name="ArrowUpRight" size={16} />
                  </a>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: Registered Office */}
            <StaggerItem variant="fade-up" className="office-col-card registered-office">
              <div className="office-card-header">
                <span className="card-badge registered-badge">
                  <Icon name="MapPin" size={14} />
                  Registered Office
                </span>
              </div>
              <div className="office-card-body">
                <h3>Registered Address</h3>
                <p className="address-text">
                  <strong>{site.registeredAddress.line1}</strong>
                  <br />
                  {site.registeredAddress.line2}
                  <br />
                  <span className="highlight-city">{site.registeredAddress.city}</span>
                </p>
                <div className="card-footer-actions">
                  <a
                    href={
                      'https://www.google.com/maps/search/?api=1&query=' +
                      encodeURIComponent(site.registeredAddress.mapQuery)
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-btn"
                  >
                    <span>View Location</span>
                    <Icon name="ArrowUpRight" size={16} />
                  </a>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3: Request A Call Back */}
            <StaggerItem variant="fade-up" className="office-col-card callback-col">
              <RequestCallbackCard
                title="REQUEST A CALL BACK"
                description="Speak directly with a solution architect or support agent."
                showWhatsApp
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Map Explorer Section */}
      <ContactLocationsMap />

      {/* Contact FAQ Section */}
      <ContactFaqSection />

      {/* Conversation CTA */}
      <section className="section conversation-cta pale-section">
        <ScrollReveal variant="scale-up" className="container">
          <div>
            <p className="eyebrow">LET’S CREATE SOMETHING GREAT</p>
            <h2>Have a Project in Mind?</h2>
            <p>
              Your next big idea deserves the right digital engineering partner.
              <br />
              Let’s bring it to life together.
            </p>
            <Button href="#contact-form">Start a Conversation</Button>
          </div>
          <Icon name="Send" size={105} />
          <p className="script">
            From Hello
            <br />
            to Something Great.
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
