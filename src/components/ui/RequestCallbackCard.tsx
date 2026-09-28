'use client';

import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';

interface RequestCallbackCardProps {
  title?: string;
  description?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  variant?: 'light' | 'dark' | 'glass' | 'accent';
  className?: string;
  showWhatsApp?: boolean;
}

export function RequestCallbackCard({
  title = 'REQUEST A CALL BACK',
  description = 'Our specialized support agents are available to assist with complex inquiries and custom business proposals.',
  phone = site.phone,
  phoneHref = site.phoneHref,
  email = site.email,
  variant = 'light',
  className = '',
  showWhatsApp = false,
}: RequestCallbackCardProps) {
  return (
    <div className={`request-callback-card ${variant} ${className}`}>
      <h3 className="callback-title">{title}</h3>
      <p className="callback-desc">{description}</p>
      
      <div className="callback-actions">
        <a href={`tel:${phoneHref}`} className="callback-btn call-btn">
          <Icon name="Phone" size={18} />
          <span>Call Now ({phone})</span>
        </a>

        <a href={`mailto:${email}`} className="callback-btn email-btn">
          <Icon name="Mail" size={18} />
          <span>Email Support</span>
        </a>

        {showWhatsApp && (
          <a
            href={`https://wa.me/${phoneHref.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="callback-btn wa-btn"
          >
            <Icon name="MessageSquare" size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
}
