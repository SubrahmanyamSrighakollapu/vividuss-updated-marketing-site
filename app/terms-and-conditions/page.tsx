import { metadata as pageMetadata } from '@/lib/seo';
import { site } from '@/data/site';
export const metadata = pageMetadata(
  'Terms & Conditions',
  'Information about using the Vividuss marketing website.',
  '/terms-and-conditions/',
);
export default function Terms() {
  return (
    <article className="container legal-page">
      <p className="eyebrow">VIVIDUSS</p>
      <h1>Terms & Conditions</h1>
      <h2>Website information</h2>
      <p>
        This website introduces Vividuss services and franchise opportunities. Enquiries, portfolio
        examples and descriptions are provided for discussion and do not constitute a binding offer
        or contract.
      </p>
      <h2>Project and franchise enquiries</h2>
      <p>
        Service scope, timelines, fees and any franchise arrangement are subject to a separate
        written agreement. Submitting an enquiry does not create a booking, subscription or payment
        obligation.
      </p>
      <h2>Website materials</h2>
      <p>
        Website content, brand materials and imagery may be subject to intellectual property rights.
        Third-party trademarks belong to their respective owners.
      </p>
      <h2>External services</h2>
      <p>
        External links and maps are provided for convenience and are governed by those services’
        terms.
      </p>
      <h2>Questions</h2>
      <p>
        Contact <a href={'mailto:' + site.email}>{site.email}</a> for details about services or
        partnership terms.
      </p>
    </article>
  );
}
