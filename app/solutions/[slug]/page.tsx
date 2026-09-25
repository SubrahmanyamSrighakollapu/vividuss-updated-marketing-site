import { notFound } from 'next/navigation';
import { solutions, solutionBySlug } from '@/data/solutions';
import { SolutionDetailPage } from '@/components/solutions/SolutionDetailPage';
import { metadata as pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  return solution
    ? pageMetadata(
        `${solution.title} | Vividuss Ready Solutions`,
        solution.shortDescription,
        `/solutions/${slug}/`
      )
    : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionBySlug(slug);
  if (!solution) notFound();

  return <SolutionDetailPage solution={solution} />;
}
