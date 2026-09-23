'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { Icon } from '@/components/ui/Icon';
import { Newsletter } from '@/components/forms/Newsletter';
import { SocialLinks } from './SocialLinks';
import { navLinks, site } from '@/data/site';
import { services } from '@/data/services';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export function Footer() {
  return (
    <footer className="footer">
      <StaggerContainer className="container footer-grid" staggerDelay={0.1}>
        <StaggerItem variant="fade-up" className="footer-brand">
          <Logo light />
          <p>
            Innovative digital solutions to help
            <br />
            your business transform, scale,
            <br />
            and stay ahead.
          </p>
          <SocialLinks />
        </StaggerItem>

        <StaggerItem variant="fade-up">
          <h3>Quick Links</h3>
          <ul>
            {navLinks
              .filter((l) => l.href !== '/services/')
              .map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
          </ul>
        </StaggerItem>

        <StaggerItem variant="fade-up">
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={'/services/' + s.slug + '/'}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </StaggerItem>

        <StaggerItem variant="fade-up">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link href="/about/#our-journey">Our Journey</Link>
            </li>
            <li>
              <Link href="/privacy-policy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions/">Terms & Conditions</Link>
            </li>
            <li>
              <a href="/sitemap.xml">Sitemap</a>
            </li>
          </ul>
          <Newsletter />
        </StaggerItem>
      </StaggerContainer>

      <ScrollReveal variant="fade-up" delay={0.25} className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <span>Built with purpose. Designed for growth.</span>
        <a href="#top" className="back-top" aria-label="Back to top">
          <Icon name="ArrowUp" size={18} />
        </a>
      </ScrollReveal>
    </footer>
  );
}
