'use client';
import { useState } from 'react';
import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
export function Newsletter() {
  const [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  return (
    <form
      className="newsletter"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget,
          email = String(new FormData(form).get('email') || '');
        setBusy(true);
        setMessage('');
        try {
          if (site.newsletterEndpoint) {
            if (!site.newsletterEndpoint.startsWith('https://'))
              throw Error('Please use the email link to subscribe.');
            const result = await fetch(site.newsletterEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({ email, subject: 'Vividuss newsletter subscription' }),
            });
            if (!result.ok) throw Error('Could not submit. Please try again or email us.');
            setMessage('Your subscription request has been submitted.');
            form.reset();
          } else {
            window.location.href =
              'mailto:' +
              site.email +
              '?subject=' +
              encodeURIComponent('Newsletter subscription') +
              '&body=' +
              encodeURIComponent('Please subscribe ' + email + ' to Vividuss updates.');
            setMessage('Your email app will open. Send the draft to request a subscription.');
          }
        } catch (error) {
          setMessage(error instanceof Error ? error.message : 'Please try again.');
        } finally {
          setBusy(false);
        }
      }}
    >
      <label htmlFor="newsletter-email">Subscribe for updates</label>
      <div className="newsletter-input">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          autoComplete="email"
        />
        <button type="submit" disabled={busy} aria-label="Subscribe for updates">
          <Icon name="Send" size={18} />
        </button>
      </div>
      <p className="form-message" role="status">
        {message}
      </p>
    </form>
  );
}
