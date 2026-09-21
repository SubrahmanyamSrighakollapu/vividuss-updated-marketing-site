# Design implementation

The twelve supplied desktop screenshots were reviewed individually. The explicit seven-service list is the source of truth for navigation; inconsistent extra menu items in individual screenshots were normalized to the requested pages.

| Reference                                   | Implementation                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| updated_home.png                            | Large V hero, floating badges, brand strip, story collage, seven-service carousel, slanted industry images, project gallery, process, testimonials, mountain CTA    |
| updated_about.png                           | Full-width reception image with dark left overlay, three-column story collage, mission/vision/values, impact band, reasons, collaboration image and enquiry section |
| updated_portfolio.png                       | Mockup hero, statistics, filter pills and search, six projects, dark process band, testimonials, tall mountain CTA                                                  |
| updated_franchise.png                       | Storefront hero, benefit cards, four-step journey, entrepreneur image, statistics, eight reasons, partner testimonials and CTA                                      |
| updated_contact.png                         | Support specialist hero, feature panel, contact cards, complete enquiry form, office map band and conversation CTA                                                  |
| updated_services_web_development.png        | Laptop hero, custom solutions, dark process, technology logos and website project cards                                                                             |
| updated_services_mobile_app_development.png | Phone hero, six mobile services, dark process, mobile technology logos and projects                                                                                 |
| updated_services_whatsapp_crm.png           | Green accents, messaging hero, eight CRM features, green process, six industries and mint CTA                                                                       |
| updated_services_social_media_marketing.png | Social creator hero, eight platform offerings, metrics, light process and campaigns                                                                                 |
| updated_services_seo_marketing.png          | Search/laptop hero, six SEO services, metrics, light process and projects                                                                                           |
| updated_services_graphic_design.png         | Creative workstation, brand stationery, six categories, four project cards and lightbulb CTA                                                                        |
| updated_services_poster_design.png          | Three-poster hero, eight offerings, metrics, four-step process and five poster previews                                                                             |

## Responsive behavior

Desktop layouts use a 1,280px content width. Navigation becomes a collapsible menu below 700px. Split sections stack; grids become two columns or one where appropriate. Services, testimonials, industries and posters support horizontal touch scrolling. Forms retain visible labels and become single column at narrow widths. Small screens receive adapted art placement rather than a scaled-down desktop canvas.

## Assets and content

All 22 WebP images are local. The website does not rely on image CDNs or Google Fonts. Imagery was generated specifically around the references; exact stock originals and editable design files were not provided.

Portfolio imagery, client avatars, office scenes and the franchise storefront are visual concepts. Statistics and testimonial copy follow the supplied mockups and should be verified by the business owner.

The contact details remain editable sample content. Social URLs were not supplied, so social symbols are decorative until configured.

## Functional adaptations

- “Explore Our Story” opens a three-chapter visual story because no video file was supplied.
- Portfolio buttons open project summaries rather than nonexistent external case studies.
- Forms default to explicit email drafts, with optional external provider configuration.
- The brochure is downloadable HTML; users can print it to PDF.
- Privacy and terms pages describe static-site behavior. They are starter copy, not a business-specific legal policy.
- An additional Services overview provides a destination for the main navigation item.
