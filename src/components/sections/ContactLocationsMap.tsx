'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ContactLocationsMap() {
  const [activeTab, setActiveTab] = useState<'corresponding' | 'registered'>('corresponding');

  const activeLocation =
    activeTab === 'corresponding'
      ? {
          title: 'Corresponding & Corporate Office',
          company: site.correspondingAddress.company,
          building: site.correspondingAddress.building,
          unit: site.correspondingAddress.unit,
          area: site.correspondingAddress.area,
          city: site.correspondingAddress.city,
          full: site.correspondingAddress.full,
          query: site.correspondingAddress.mapQuery,
          badge: 'Primary Corporate Headquarters',
        }
      : {
          title: 'Registered Office',
          company: 'Vividuss',
          building: site.registeredAddress.line1,
          unit: site.registeredAddress.line2,
          area: site.registeredAddress.city,
          city: 'Hyderabad, Telangana, India',
          full: site.registeredAddress.full,
          query: site.registeredAddress.mapQuery,
          badge: 'Official Registered Seat',
        };

  return (
    <section className="contact-locations-section">
      <div className="container">
        <ScrollReveal variant="fade-up" className="section-heading center">
          <p className="eyebrow">MAP EXPLORER</p>
          <h2>Find Us in Hyderabad</h2>
          <p>
            Switch between our Corporate Headquarters in Kukatpally and Registered Office in Mothi Nagar to view location details and turn-by-turn directions.
          </p>

          <div className="location-pills-row" role="tablist" aria-label="Office Locations">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'corresponding'}
              className={'location-pill ' + (activeTab === 'corresponding' ? 'active' : '')}
              onClick={() => setActiveTab('corresponding')}
            >
              <Icon name="Building2" size={17} />
              <span>Corporate Office — Kukatpally (500072)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'registered'}
              className={'location-pill ' + (activeTab === 'registered' ? 'active' : '')}
              onClick={() => setActiveTab('registered')}
            >
              <Icon name="MapPin" size={17} />
              <span>Registered Office — Mothi Nagar (500018)</span>
            </button>
          </div>
        </ScrollReveal>

        <div className="map-showcase-card">
          <div className="map-showcase-sidebar">
            <span className="showcase-badge">
              <Icon name="BadgeCheck" size={15} />
              {activeLocation.badge}
            </span>
            <h3>{activeLocation.title}</h3>
            {activeLocation.company && (
              <p className="company-tag">{activeLocation.company}</p>
            )}

            <div className="showcase-address">
              <Icon name="MapPin" size={20} className="pin" />
              <div>
                <strong>{activeLocation.building}</strong>
                {activeLocation.unit && <span>, {activeLocation.unit}</span>}
                <br />
                {activeLocation.area && <span>{activeLocation.area}<br /></span>}
                <span className="city">{activeLocation.city}</span>
              </div>
            </div>

            <div className="showcase-details">
              <div className="detail-row">
                <Icon name="Clock3" size={16} />
                <span>Mon – Sat: 9:00 AM – 6:00 PM IST</span>
              </div>
              <div className="detail-row">
                <Icon name="Phone" size={16} />
                <a href={'tel:' + site.phoneHref}>{site.phone}</a>
              </div>
              <div className="detail-row">
                <Icon name="Mail" size={16} />
                <a href={'mailto:' + site.email}>{site.email}</a>
              </div>
            </div>

            <div className="showcase-cta">
              <Button
                variant="primary"
                href={
                  'https://www.google.com/maps/search/?api=1&query=' +
                  encodeURIComponent(activeLocation.query)
                }
                icon="ArrowUpRight"
              >
                Open Directions in Google Maps
              </Button>
            </div>
          </div>

          <div className="map-showcase-frame">
            <iframe
              key={activeLocation.query}
              title={'Map of ' + activeLocation.title}
              src={
                'https://maps.google.com/maps?q=' +
                encodeURIComponent(activeLocation.query) +
                '&z=15&output=embed'
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
