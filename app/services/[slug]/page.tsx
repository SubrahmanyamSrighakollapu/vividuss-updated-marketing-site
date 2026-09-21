import { notFound } from 'next/navigation';
import { services, serviceBySlug } from '@/data/services';
import { ServicePage } from '@/components/services/ServicePage';
import { metadata as pageMetadata } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params,
    s = serviceBySlug(slug);
  return s ? pageMetadata(s.name, s.description, '/services/' + slug + '/') : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params,
    s = serviceBySlug(slug);
  if (!s) notFound();
  return <ServicePage service={s} />;
}
