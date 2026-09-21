import { metadata as pageMetadata } from '@/lib/seo';
import { site } from '@/data/site';
import { Visual } from '@/components/ui/Visual';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { Facts } from '@/components/sections/Shared';
export const metadata = pageMetadata(
  'Contact Us',
  'Have a project in mind? Talk to the Vividuss team about web development, mobile apps, marketing, design or franchise opportunities.',
  '/contact/',
);
export default function Contact() {
  return (
    <>
      <section className="contact-hero pale-section">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">LET’S CONNECT</p>
            <h1>
              Let’s Turn Your Ideas
              <br />
              Into <em>Reality.</em>
            </h1>
            <p>
              Have a project in mind, a question, or just want to say hello?
              <br />
              We’re here to listen and help you move forward.
            </p>
            <Facts
              className="hero-facts"
              items={[
                { icon: 'MessagesSquare', title: 'Let’s Talk', description: 'We’re All Ears' },
                { icon: 'Lightbulb', title: 'Share Your Vision', description: 'Big Ideas Welcome' },
                { icon: 'Handshake', title: 'Build Together', description: 'Great Things Ahead' },
              ]}
            />
          </div>
          <div className="contact-hero-art">
            <Visual
              asset="/images/contact.webp"
              alt="Friendly customer support specialist in a bright office"
              priority
            />
            <div className="contact-promises">
              {[
                ['Clock3', 'Quick Response'],
                ['Headphones', 'Expert Support'],
                ['HeartHandshake', 'Long-Term Partnership'],
              ].map(([icon, text]) => (
                <span key={text}>
                  <Icon name={icon} size={19} />
                  {text}
                </span>
              ))}
            </div>
            <p className="script">
              Great Conversations
              <br />
              Start Here
            </p>
          </div>
        </div>
      </section>
      <section className="section contact-main" id="contact-form">
        <div className="container contact-main-grid">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>
              We’d Love to Hear
              <br />
              from You
            </h2>
            <p>
              Reach out through any of the channels below.
              <br />
              Our team will be happy to assist you.
            </p>
            <div className="contact-cards">
              <a
                href={
                  'https://www.google.com/maps/search/?api=1&query=' +
                  encodeURIComponent(site.mapQuery)
                }
                target="_blank"
                rel="noreferrer"
              >
                <span className="feature-icon">
                  <Icon name="MapPin" />
                </span>
                <span>
                  <strong>Visit Our Office</strong>
                  <span>
                    {site.address}
                    <br />
                    {site.city}
                  </span>
                </span>
                <Icon name="ArrowUpRight" size={18} />
              </a>
              <a href={'tel:' + site.phoneHref}>
                <span className="feature-icon">
                  <Icon name="Phone" />
                </span>
                <span>
                  <strong>Give Us a Call</strong>
                  <span>
                    {site.phone}
                    <br />
                    Monday – Saturday, 9:00 AM – 6:00 PM
                  </span>
                </span>
                <Icon name="ArrowUpRight" size={18} />
              </a>
              <a href={'mailto:' + site.email}>
                <span className="feature-icon">
                  <Icon name="Mail" />
                </span>
                <span>
                  <strong>Drop Us an Email</strong>
                  <span>
                    {site.email}
                    <br />
                    We’d love to hear about your project.
                  </span>
                </span>
                <Icon name="ArrowUpRight" size={18} />
              </a>
            </div>
            <p className="social-heading">Follow Our Journey</p>
            <SocialLinks />
            <div className="contact-decoration" aria-hidden="true">
              <Icon name="Globe" size={170} />
              <Icon name="MapPin" size={37} />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="location-section">
        <div className="location-copy dark-section">
          <div>
            <p className="eyebrow">FIND US HERE</p>
            <h2>Visit Our Office</h2>
            <p>
              Let’s meet, exchange ideas, and
              <br />
              build something meaningful.
            </p>
            <p>
              <Icon name="MapPin" size={18} />
              {site.address}
              <br />
              {site.city}
            </p>
            <Button
              variant="white"
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                encodeURIComponent(site.mapQuery)
              }
            >
              Get Directions
            </Button>
          </div>
        </div>
        <iframe
          title="Map of the Madhapur area in Hyderabad"
          src={
            'https://maps.google.com/maps?q=' +
            encodeURIComponent(site.mapQuery) +
            '&z=14&output=embed'
          }
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
      <section className="section conversation-cta pale-section">
        <div className="container">
          <div>
            <p className="eyebrow">LET’S CREATE SOMETHING GREAT</p>
            <h2>Have a Project in Mind?</h2>
            <p>
              Your next big idea deserves the right partner.
              <br />
              Let’s bring it to life.
            </p>
            <Button href="#contact-form">Start a Conversation</Button>
          </div>
          <Icon name="Send" size={105} />
          <p className="script">
            From Hello
            <br />
            to Something Great.
          </p>
        </div>
      </section>
    </>
  );
}
