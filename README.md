# Vividuss — Updated Marketing Site

A responsive **Next.js + TypeScript** implementation of the 12 supplied Vividuss screen designs, with locally bundled fonts and 22 generated, optimized WebP images.

The project exports to static HTML, CSS and JavaScript. It has **no database, API routes, authentication or application backend**.

## Quick start

Use Node.js 22.13+ or Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, if execution policy blocks `npm.ps1`, use `npm.cmd ci` and `npm.cmd run dev` instead. No global packages are required.

## Production build

```sh
npm run build
npm run check:export
npm start
```

`npm start` serves the generated `out/` directory locally at `http://localhost:3000`. It is a file server for reviewing the export; it does not add a backend.

Upload **the contents of `out/`** to any static web host. The ZIP includes a tested copy of `out/`, so you can also deploy those files directly. Rebuild after editing source or environment variables. Do not use `next start` for this static export.

Other commands:

```sh
npm run typecheck
npm run format
npm run format:check
npm start -- --port 8080
```

## Pages

| Page                   | Route                                        |
| ---------------------- | -------------------------------------------- |
| Home                   | `/`                                          |
| About                  | `/about/`                                    |
| Services overview      | `/services/`                                 |
| Web Development        | `/services/web-development/`                 |
| Mobile App Development | `/services/mobile-app-development/`          |
| WhatsApp CRM           | `/services/whatsapp-crm/`                    |
| Social Media Marketing | `/services/social-media-marketing/`          |
| SEO Marketing          | `/services/seo-marketing/`                   |
| Graphic Design         | `/services/graphic-design/`                  |
| Poster Design          | `/services/poster-design/`                   |
| Portfolio              | `/portfolio/`                                |
| Franchise              | `/franchise/`                                |
| Contact                | `/contact/`                                  |
| Privacy / Terms        | `/privacy-policy/`, `/terms-and-conditions/` |

Also includes a 404 page, robots.txt, sitemap, favicon and downloadable, self-contained HTML franchise brochure.

## Where to edit

| Content                                          | Location                          |
| ------------------------------------------------ | --------------------------------- |
| Contact details, social links and shared copy    | `src/data/site.ts`                |
| Seven service definitions and page variations    | `src/data/services.ts`            |
| Portfolio records and categories                 | `src/data/projects.ts`            |
| Industry records                                 | `src/data/industries.ts`          |
| Page layouts                                     | `app/`                            |
| Reusable navigation, forms, dialogs and sections | `src/components/`                 |
| Typography, colors, layouts and breakpoints      | `app/globals.css`                 |
| Local images and technology icons                | `public/images/`, `public/icons/` |
| Static export configuration                      | `next.config.ts`                  |

Components and data are typed. Formatting is managed with Prettier. Comments divide the stylesheet into layout, home, service, contact, franchise and responsive sections.

## Forms and business details

The screenshots contain example contact details, statistics, client names and testimonials. They are reproduced as design content. **Replace and verify these in the data files before public use**, particularly the sample Gmail address and incomplete example phone number. Generated team, office, portfolio and portrait images are illustrative; they are not documentary photographs or evidence of actual client work.

By default, an enquiry or newsletter submission prepares a draft in the visitor’s email application. The visitor must send that draft. The interface explains this and never reports a delivered message in email-draft mode.

To use an existing hosted form service without adding a backend, copy `.env.example` to `.env.local` and set:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-provider.example/contact
NEXT_PUBLIC_NEWSLETTER_FORM_ENDPOINT=https://your-provider.example/newsletter
```

Endpoints must accept cross-origin HTTPS JSON POST requests. Enquiries send `name`, `email`, `country`, `phone`, `company`, `service`, and `message`; newsletter requests send `email` and `subject`. A 2xx response is treated as accepted by the provider. Configure delivery and anti-spam rules with that provider. Keep both endpoint variables empty to retain email drafts. NEXT_PUBLIC values are public: never put API secrets in them.

Add actual social URLs in `site.social`. Until configured, social symbols remain decorative, with no fake links.

The contact map shows the Madhapur area from the supplied design. Set your real address and map query in site.ts.

## Interactions

- Accessible service dropdown and mobile menu.
- Portfolio category filtering, keyword search, empty state and project detail dialogs.
- Service detail dialogs and enquiry links that preselect the requested service.
- Working service/project/testimonial controls and poster previews.
- An illustrated three-chapter story dialog. No video was supplied, so the control is explicitly labeled as a story.
- Native form validation, transparent delivery status, and enquiry privacy links.
- A downloadable franchise brochure that opens in a browser and can be printed.
- Keyboard focus indicators, native dialogs with Escape dismissal, skip link and reduced-motion support.

## Design and assets

See `docs/design-implementation.md` for the page-to-reference mapping and `docs/image-manifest.json` for the asset inventory and prompts. Original PNG intermediates and design screenshots are not included; optimized local WebP images are included.

The visual implementation follows the supplied layouts, section ordering, navy/amber palette and green WhatsApp variation. Generated imagery and responsive reflow are adaptations; this is not a claim of pixel-identical reproduction of flattened screenshots.

See `docs/third-party-notices.md` and `docs/validation.md` for dependencies and checks.

## Static hosting example

For Nginx, point the document root at the exported out folder:

```nginx
server {
    listen 80;
    server_name your-real-domain.com;
    root /var/www/vividuss;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
    error_page 404 /404.html;
}
```

Every public route has its own index.html; no single-page-app rewrite is required.
