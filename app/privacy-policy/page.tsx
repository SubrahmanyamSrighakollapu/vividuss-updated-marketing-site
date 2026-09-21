import { metadata as pageMetadata } from '@/lib/seo';
import { site } from '@/data/site';
export const metadata = pageMetadata(
  'Privacy Policy',
  'How this static Vividuss website handles enquiry information.',
  '/privacy-policy/',
);
export default function Privacy() {
  return (
    <article className="container legal-page">
      <p className="eyebrow">VIVIDUSS</p>
      <h1>Privacy Policy</h1>
      <p>
        This website is a static marketing website. It does not have its own database or user
        accounts.
      </p>
      <h2>Information you choose to share</h2>
      <p>
        Enquiry forms ask for your contact details and project information. In the default
        configuration, submitting a form prepares a draft in your email application. Your request
        reaches the recipient when you send that email.
      </p>
      <p>
        If the website owner configures an external form service, submitted details are sent
        directly to that provider to deliver your request. The provider’s privacy terms also apply.
      </p>
      <h2>Third-party content</h2>
      <p>
        The contact page embeds Google Maps. Loading or interacting with that map may share
        technical information, such as your IP address, with Google. External links open services
        governed by their own policies.
      </p>
      <h2>Cookies and analytics</h2>
      <p>
        This codebase does not include analytics, advertising trackers or a marketing cookie system.
        Fonts and website imagery are served locally.
      </p>
      <h2>Contact</h2>
      <p>
        For questions about an enquiry or your information, email{' '}
        <a href={'mailto:' + site.email}>{site.email}</a>.
      </p>
    </article>
  );
}
