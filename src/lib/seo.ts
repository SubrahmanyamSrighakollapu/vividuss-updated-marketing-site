import type { Metadata } from 'next';
import { site } from '@/data/site';
export function metadata(title: string, description: string, path = '/'): Metadata {
  return {
    title: title + ' | Vividuss',
    description,
    alternates: { canonical: new URL(path, site.url).toString() },
    openGraph: {
      title: title + ' | Vividuss',
      description,
      url: new URL(path, site.url).toString(),
      type: 'website',
      siteName: 'Vividuss',
    },
    twitter: { card: 'summary', title, description },
  };
}
export const jsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, String.fromCharCode(92) + 'u003c');
