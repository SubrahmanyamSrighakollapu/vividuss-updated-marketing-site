import type { Project } from '@/types';
export const projects: Project[] = [
  {
    slug: 'business-portal',
    title: 'Business Management Portal',
    category: 'Web Application',
    filter: 'Web Applications',
    description:
      'A comprehensive platform to streamline business operations and improve productivity.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 0,
    },
    services: ['Web Development', 'Web Applications'],
    overview:
      'A comprehensive platform to streamline business operations and improve productivity. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce Mobile App',
    category: 'Mobile Application',
    filter: 'Mobile Apps',
    description: 'A feature-rich mobile app for seamless shopping experiences on Android & iOS.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 1,
    },
    services: ['Mobile App Development', 'UI/UX Design'],
    overview:
      'A feature-rich mobile app for seamless shopping experiences on Android & iOS. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
  {
    slug: 'analytics',
    title: 'SaaS Analytics Dashboard',
    category: 'UI/UX Design',
    filter: 'UI/UX Design',
    description: 'A modern and intuitive dashboard with powerful data visualization.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 2,
    },
    services: ['Web Applications', 'UI/UX Design'],
    overview:
      'A modern and intuitive dashboard with powerful data visualization. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
  {
    slug: 'travel',
    title: 'Travel & Tourism Campaign',
    category: 'Digital Marketing',
    filter: 'Digital Marketing',
    description:
      'A 360° digital marketing campaign to boost brand visibility and customer engagement.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 3,
    },
    services: ['Social Media Marketing', 'Graphic Design'],
    overview:
      'A 360° digital marketing campaign to boost brand visibility and customer engagement. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate Platform',
    category: 'Web Development',
    filter: 'Web Applications',
    description: 'A scalable property listing platform with advanced search and booking features.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 4,
    },
    services: ['Web Development', 'SEO Marketing'],
    overview:
      'A scalable property listing platform with advanced search and booking features. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
  {
    slug: 'brand-identity',
    title: 'Brand Identity & Design',
    category: 'Brand Strategy',
    filter: 'Branding',
    description: 'Complete brand identity design including logo, guidelines, and marketing assets.',
    image: {
      src: '/images/project-sheet.webp',
      columns: 3,
      rows: 2,
      index: 5,
    },
    services: ['Graphic Design', 'Poster Design'],
    overview:
      'Complete brand identity design including logo, guidelines, and marketing assets. The project brings together thoughtful design, clear user journeys and a consistent brand experience.',
  },
];
export const projectFilters = [
  'All Projects',
  'Web Applications',
  'Mobile Apps',
  'UI/UX Design',
  'Digital Marketing',
  'Branding',
];
