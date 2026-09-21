'use client';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { services } from '@/data/services';
import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
export function ContactForm({ compact = false }: { compact?: boolean }) {
  const id = useId(),
    [service, setService] = useState(''),
    [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('service');
    if (query) {
      const match = services.find((s) => s.slug === query || s.name === query);
      if (match) setService(match.name);
      else if (query === 'franchise') setService('Franchise Partnership');
    }
  }, []);
  const field = (name: string) => id + '-' + name;
  return (
    <form
      id="enquiry-form"
      className={'contact-form ' + (compact ? 'compact' : '')}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setBusy(true);
        setMessage('');
        const data = Object.fromEntries(new FormData(form).entries());
        if (data.website) {
          setBusy(false);
          return;
        }
        delete data.website;
        try {
          if (site.contactEndpoint) {
            if (!site.contactEndpoint.startsWith('https://'))
              throw Error('Please contact us by email.');
            const result = await fetch(site.contactEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify(data),
            });
            if (!result.ok)
              throw Error('Your enquiry could not be submitted. Please try again or email us.');
            setMessage('Your enquiry has been submitted. Thank you for getting in touch.');
            form.reset();
            setService('');
          } else {
            const body = [
              'Name: ' + data.name,
              'Email: ' + data.email,
              'Phone: ' + data.country + ' ' + data.phone,
              'Company: ' + data.company,
              'Service: ' + data.service,
              '',
              'Message:',
              String(data.message),
            ].join('\n');
            window.location.href =
              'mailto:' +
              site.email +
              '?subject=' +
              encodeURIComponent('Vividuss enquiry — ' + data.service) +
              '&body=' +
              encodeURIComponent(body);
            setMessage(
              'Your email app will open with your enquiry. Send the draft to complete your request. If it does not open, email ' +
                site.email +
                '.',
            );
          }
        } catch (error) {
          setMessage(
            error instanceof Error ? error.message : 'Something went wrong. Please email us.',
          );
        } finally {
          setBusy(false);
        }
      }}
    >
      <h2>Tell Us About Your Project</h2>
      <p>We’d love to hear from you. Let’s build something great.</p>
      <div className="form-fields">
        <div className="field">
          <label htmlFor={field('name')}>
            Full Name <span>*</span>
          </label>
          <input
            id={field('name')}
            name="name"
            autoComplete="name"
            placeholder="Enter your full name"
            required
            maxLength={100}
          />
        </div>
        <div className="field">
          <label htmlFor={field('email')}>
            Email Address <span>*</span>
          </label>
          <input
            id={field('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={field('phone')}>Phone Number</label>
          <div className="phone-field">
            <select name="country" aria-label="Country calling code" defaultValue="+91">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
              <option>+61</option>
              <option>+971</option>
              <option>+65</option>
            </select>
            <input
              id={field('phone')}
              name="phone"
              type="tel"
              autoComplete="tel-national"
              placeholder="Phone number"
              maxLength={25}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor={field('company')}>Company Name</label>
          <input
            id={field('company')}
            name="company"
            autoComplete="organization"
            placeholder="Your company name"
            maxLength={150}
          />
        </div>
        <div className="field full">
          <label htmlFor={field('service')}>
            Service You’re Interested In <span>*</span>
          </label>
          <select
            id={field('service')}
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Franchise Partnership</option>
            <option>Other / Let’s Talk</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor={field('message')}>
            Your Message <span>*</span>
          </label>
          <textarea
            id={field('message')}
            name="message"
            rows={compact ? 3 : 4}
            placeholder="Tell us a little about your project..."
            required
            maxLength={5000}
          />
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={field('website')}>Website</label>
          <input id={field('website')} name="website" autoComplete="off" tabIndex={-1} />
        </div>
      </div>
      <button className="button button--primary" type="submit" disabled={busy}>
        {busy ? 'Submitting…' : 'Send Message'}
        <Icon name="Send" size={17} />
      </button>
      <p className="form-privacy">
        <Icon name="LockKeyhole" size={13} />
        By submitting, you agree to our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>
      <p className="form-message" role="status">
        {message}
      </p>
    </form>
  );
}
