'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/data/site';
import { services } from '@/data/services';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
        setSub(false);
      }
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  return (
    <header
      className={`header ${scrolled ? 'is-scrolled' : ''}`}
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          setSub(false);
        }
      }}
    >
      <div className="container header-inner">
        <Logo />
        <button
          className="icon-button menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <Icon name={open ? 'X' : 'Menu'} />
        </button>
        <nav
          id="primary-navigation"
          className={open ? 'navigation is-open' : 'navigation'}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <div
              className={'nav-item ' + (link.label === 'Services' ? 'nav-services' : '')}
              key={link.href}
            >
              <div className="nav-label">
                <Link
                  href={link.href}
                  className={
                    (
                      link.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(link.href.slice(0, -1))
                    )
                      ? 'active'
                      : ''
                  }
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
                {link.label === 'Services' && (
                  <button
                    aria-label="Show services"
                    aria-expanded={sub}
                    aria-controls="services-menu"
                    onClick={() => setSub(!sub)}
                  >
                    <Icon name="ChevronDown" size={14} />
                  </button>
                )}
              </div>
              {link.label === 'Services' && (
                <div id="services-menu" className={'services-menu ' + (sub ? 'is-open' : '')}>
                  {services.map((service) => (
                    <Link key={service.slug} href={'/services/' + service.slug + '/'}>
                      <Icon name={service.icon} size={19} />
                      <span>{service.name}</span>
                      <Icon name="ArrowUpRight" size={14} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button href="/contact/" className="mobile-contact">
            Get in Touch
          </Button>
        </nav>
        <Button href="/contact/" className="header-contact">
          Get in Touch
        </Button>
      </div>
    </header>
  );
}
