import { notFound } from 'next/navigation';
import { blogPosts, getBlogBySlug } from '@/data/blogs';
import { BlogDetail } from '@/components/blogs/BlogDetail';
import { metadata as pageMetadata, jsonLd } from '@/lib/seo';
import { site } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  return post ? pageMetadata(post.title, post.excerpt, `/blogs/${slug}/`) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article JSON-LD for enhanced SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blogs/${slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
      />
      <BlogDetail post={post} />
    </>
  );
}
