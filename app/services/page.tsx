import { ServiceDirectory } from '@/components/services/ServicePage';
import { metadata as pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Our Services',
  'Explore web development, mobile apps, WhatsApp CRM, social media, SEO and creative design services.',
  '/services/',
);
export default function Services() {
  return <ServiceDirectory />;
}
