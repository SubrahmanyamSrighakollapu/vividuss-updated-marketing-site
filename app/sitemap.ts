import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { services } from '@/data/services';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    'about/',
    'services/',
    'portfolio/',
    'franchise/',
    'contact/',
    'privacy-policy/',
    'terms-and-conditions/',
    ...services.map((s) => 'services/' + s.slug + '/'),
  ].map((path) => ({
    url: new URL('/' + path, site.url).href,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
