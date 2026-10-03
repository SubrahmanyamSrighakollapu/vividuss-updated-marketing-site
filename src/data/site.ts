export const site = {
  name: 'Vividuss',
  tagline: 'Value to your business',
  description: 'Innovative digital solutions that help businesses transform, scale and stay ahead.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vividuss.com',
  email: 'Contact@vividuss.com',
  phone: '+91 8750749299',
  phoneHref: '+918750749299',
  registeredAddress: {
    title: 'Registered Address',
    line1: '403, Saharsa Heights',
    line2: 'Mothi Nagar',
    city: 'Hyderabad 500018',
    full: '403, Saharsa Heights, Mothi Nagar, Hyderabad 500018',
    mapQuery: '403 Saharsa Heights Mothi Nagar Hyderabad 500018',
  },
  correspondingAddress: {
    title: 'Corresponding Address',
    company: 'KBS PVT LTD',
    building: 'Manjeera Trinity Corporate',
    unit: '1010, 10th Floor',
    area: 'KPHB Phase 3, Kukatpally',
    city: 'Hyderabad, Telangana 500072',
    full: 'KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th Floor, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    mapQuery: 'Manjeera Trinity Corporate KPHB Phase 3 Kukatpally Hyderabad Telangana 500072',
  },
  address: 'KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th Floor, KPHB Phase 3, Kukatpally',
  city: 'Hyderabad, Telangana 500072',
  mapQuery: 'Manjeera Trinity Corporate KPHB Phase 3 Kukatpally Hyderabad Telangana 500072',
  social: { linkedin: '', twitter: '', facebook: '', instagram: '', youtube: '' },
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT || '',
  newsletterEndpoint: process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ENDPOINT || '',
};
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Solutions', href: '/solutions/' },
  { label: 'Portfolio', href: '/portfolio/' },
  // { label: 'Blogs', href: '/blogs/' },
  { label: 'Franchise', href: '/franchise/' },
  // { label: 'Contact', href: '/contact/' },
];
export const processSteps = [
  {
    title: 'Discovery & Audit',
    description: 'In-depth goal alignment, target market analysis, and technical feasibility audit.',
    icon: 'Search',
  },
  {
    title: 'Strategy & Roadmap',
    description: 'Crafting clear technical roadmaps, system architecture, and user journey blueprints.',
    icon: 'ClipboardList',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive, accessible user interfaces and interactive prototypes.',
    icon: 'PenTool',
  },
  {
    title: 'Agile Engineering',
    description: 'Building clean code, high-performance APIs, and scalable web/mobile backends.',
    icon: 'Code2',
  },
  {
    title: 'Quality & Security QA',
    description: 'Automated testing, security hardening, multi-device QA, and performance tuning.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Launch & Continuous Growth',
    description: 'Seamless cloud deployment, continuous integration, analytics, and scale optimization.',
    icon: 'Rocket',
  },
];
export const testimonials = [
  {
    name: 'Arun Kumar',
    role: 'Founder & Managing Director, Landvest',
    quote:
      'Vividuss understood our vision and translated it into a polished digital experience. Their strategic approach, attention to detail, and dependable execution made them a valuable technology partner for Landvest.',
    image: '/images/arunkumar-landvest.jpeg',
    initials: 'AK',
    color: 'blue',
  },
  {
    name: 'K. Krishna Chaitanya',
    role: 'Director, Flybyte',
    quote:
      'The Vividuss team brought clarity, creativity, and strong technical execution to our project. They worked closely with us at every stage and delivered a solution that supports Flybyte’s growth.',
    image: '/images/chaitanya-flybyte.jpeg',
    initials: 'KC',
    color: 'rose',
  },
  {
    name: 'Shyam',
    role: 'MDGPay',
    quote:
      'Vividuss helped us build a dependable digital experience around speed, usability, and trust. Their technical expertise and responsive approach made the entire journey from planning to launch smooth and effective.',
    image: '/images/Shyam-mdgpay.jpeg',
    initials: 'S',
    color: 'teal',
  },
  {
    name: 'Manohar',
    role: 'Director, Mdigimart',
    quote:
      'Working with Vividuss gave us the technical confidence to move faster. The team understood our priorities, communicated clearly, and built a reliable solution designed for long-term scale.',
    image: '/images/manohar-mdigimart.jpeg',
    initials: 'M',
    color: 'blue',
  },
];
const legacyFranchiseTestimonials = [
  {
    name: 'Amit Sharma',
    role: 'Delhi',
    quote:
      'Vividuss gave me the perfect opportunity to start my own business with full support. The team is always there whenever I need help.',
    image: null,
    initials: 'AS',
    color: 'blue',
  },
  {
    name: 'Sneha Patel',
    role: 'Ahmedabad',
    quote:
      'A trusted brand with excellent systems and marketing support. Highly recommended for anyone looking for a business opportunity.',
    image: null,
    initials: 'SP',
    color: 'rose',
  },
  {
    name: 'Rahul Mehta',
    role: 'Pune',
    quote:
      'The onboarding process was smooth and the support is amazing. I’m proud to be a Vividuss franchise partner.',
    image: null,
    initials: 'RM',
    color: 'teal',
  },
];

// Partner Stories now feature the same verified client profiles used across the site.
export const franchiseTestimonials = testimonials;

void legacyFranchiseTestimonials;
