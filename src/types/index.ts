export type Asset = string | { src: string; columns: number; rows: number; index: number };
export type Fact = { icon: string; title: string; description: string };
export type Feature = { title: string; description: string; icon: string };
export type Service = {
  slug: string;
  name: string;
  headline: string[];
  description: string;
  image: string;
  script: string;
  introTitle: string;
  introText: string;
  introImage: string;
  features: Feature[];
  accent: string;
  icon: string;
  introFacts: Fact[];
  heroFacts: Fact[];
  introBadge: string;
  introBadgeLabel: string;
  featureTitle: string;
  processTitle: string;
  processStyle: string;
  processLabels: string[];
  technologies: string[];
  stats: string[][];
  projects: string[];
  projectTitle: string;
  testimonialTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  ctaImage: string;
  ctaScript: string;
  heroBadge?: string;
  heroBadgeLabel?: string;
  heroPanel?: string[];
};
export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: string;
  description: string;
  image: Asset;
  services: string[];
  overview: string;
};
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
  color: string;
};

export type SolutionModule = {
  category: string;
  features: string[];
};

export type SolutionOutcome = {
  title: string;
  description: string;
  icon: string;
};

export type SolutionHandleStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type SolutionItem = {
  title: string;
  description: string;
  icon: string;
};

export type SolutionFaq = {
  question: string;
  answer: string;
};

export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  posterImage: string;
  icon: string;
  badge?: string;
  shortDescription: string;
  cardHighlights: string[];
  heroHeadline: string[];
  heroSubhead: string;
  overview: {
    title: string;
    description: string;
    points: string[];
  };
  whatWeProvide: {
    title: string;
    description: string;
    items: SolutionItem[];
  };
  whatWeInclude: {
    title: string;
    description: string;
    modules: SolutionModule[];
  };
  howWeHandle: {
    title: string;
    description: string;
    steps: SolutionHandleStep[];
  };
  whatYouCanExpect: {
    title: string;
    description: string;
    outcomes: SolutionOutcome[];
  };
  supportAndMaintenance: {
    title: string;
    description: string;
    features: SolutionItem[];
  };
  techStack: string[];
  faq: SolutionFaq[];
};

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socialLink?: string;
};

export type BlogTocItem = {
  id: string;
  title: string;
};

export type BlogSection = {
  id: string;
  title: string;
  content: string;
  callout?: {
    type: 'info' | 'tip' | 'quote' | 'code' | 'stat';
    title?: string;
    text: string;
    codeSnippet?: string;
    language?: string;
  };
  listItems?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  isoDate: string;
  author: BlogAuthor;
  featured?: boolean;
  trending?: boolean;
  image: Asset;
  coverImage?: Asset;
  tags: string[];
  keyTakeaways: string[];
  toc: BlogTocItem[];
  sections: BlogSection[];
  relatedSlugs: string[];
  viewsCount?: number;
  likesCount?: number;
};

