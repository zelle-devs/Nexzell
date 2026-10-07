import { notFound } from 'next/navigation';
import NexzellCaseStudyDetail from '@/components/CaseStudiesPageComponents/NexzellCaseSturidesMainWFilters/Nexzellcasestudydetail';
import CaseStudyOwnSuccessStory from '@/components/CaseStudiesPageComponents/CaseStudyOwnSuccessStory/CaseStudyOwnSuccessStory';
import { caseStudiesData } from '@/components/CaseStudiesPageComponents/NexzellCaseSturidesMainWFilters/NexzellCaseSturidesMainWFiltersData';

// Pre-builds one static page per case study
export function generateStaticParams() {
  return caseStudiesData.map((item) => ({ slug: item.slug }));
}

// Unique SEO title/description per case study
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = caseStudiesData.find((c) => c.slug === slug);
  if (!item) return { title: 'Case study not found' };

  return {
    title: `${item.title} | Case Study | Nexzell`,
    description: item.shortDescription,
    openGraph: {
      title: item.title,
      description: item.shortDescription,
      images: [item.image],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseItem = caseStudiesData.find((c) => c.slug === slug);

  if (!caseItem) notFound();

  return (
    <div>
      <NexzellCaseStudyDetail slug={slug} />
      <CaseStudyOwnSuccessStory />
    </div>
  );
}