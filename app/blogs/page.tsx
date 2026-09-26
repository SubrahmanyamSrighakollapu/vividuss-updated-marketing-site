import { metadata as pageMetadata } from '@/lib/seo';
import { BlogList } from '@/components/blogs/BlogList';

export const metadata = pageMetadata(
  'Blogs & Insights',
  'Explore Vividuss articles, architectural deep-dives, UI/UX strategy guides, and AI trends in digital product engineering.',
  '/blogs/',
);

export default function BlogsPage() {
  return <BlogList />;
}
