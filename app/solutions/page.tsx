import { metadata as pageMetadata } from '@/lib/seo';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { Process, CTA } from '@/components/sections/Shared';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata = pageMetadata(
  'Ready Digital Solutions & Platforms | Vividuss',
  'Explore turnkey, customizable digital solutions by Vividuss including Matrimony Apps, EdTech LMS, Food & Grocery Delivery, E-Commerce, Real Estate, and Marketplaces.',
  '/solutions/'
);

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero dark-section">
        <div className="container text-center">
          <ScrollReveal variant="fade-down">
            <p className="eyebrow">OUR READY SOLUTIONS</p>
            <h1>
              Turnkey Digital Platforms <br />
              <em>Built for Real Business Growth</em>
            </h1>
            <p className="hero-lead max-w-2xl mx-auto">
              Skip months of development with our pre-architected, fully customizable solution frameworks—spanning EdTech, On-Demand Delivery, Matrimony, Real Estate, E-Commerce, and Marketplaces.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SolutionsSection
        eyebrow="EXPLORE ALL SOLUTIONS"
        title="Customizable Industry Solutions & Products"
        subtitle="Select a solution below to view detailed features, app modules, development methodology, and support plans."
        showFilters={true}
      />

      <Process />

      <CTA
        title={'Have a Custom Solution Idea in Mind?'}
        text="We design and build bespoke software tailored strictly to your unique business workflow."
        label="Discuss Your Project"
        script={'Value to your\nBusiness'}
      />
    </>
  );
}
