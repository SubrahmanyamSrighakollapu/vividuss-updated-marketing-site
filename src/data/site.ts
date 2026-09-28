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
  { label: 'Blogs', href: '/blogs/' },
  { label: 'Franchise', href: '/franchise/' },
  { label: 'Contact', href: '/contact/' },
];
export const processSteps = [
  { title: 'Discover', description: 'Understand your goals and challenges', icon: 'Search' },
  { title: 'Plan', description: 'Create the right strategy and roadmap', icon: 'ClipboardList' },
  { title: 'Design', description: 'Craft engaging experiences', icon: 'PenTool' },
  { title: 'Develop', description: 'Build with precision and best practices', icon: 'Code2' },
  { title: 'Deliver', description: 'Launch, measure and grow', icon: 'Rocket' },
];
export const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'CEO, NextGen Solutions',
    quote:
      'Vividuss transformed our digital presence. Their team is professional, innovative and highly reliable.',
    initials: 'RK',
    color: 'blue',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, HexaLab',
    quote: 'Excellent experience working with Vividuss. They delivered beyond our expectations.',
    initials: 'PS',
    color: 'rose',
  },
  {
    name: 'Arjun Mehta',
    role: 'Founder, GrowthX',
    quote:
      'A trusted technology partner. Their strategic approach and dedication made a real difference.',
    initials: 'AM',
    color: 'teal',
  },
];
export const franchiseTestimonials = [
  {
    name: 'Amit Sharma',
    role: 'Delhi',
    quote:
      'Vividuss gave me the perfect opportunity to start my own business with full support. The team is always there whenever I need help.',
    initials: 'AS',
    color: 'blue',
  },
  {
    name: 'Sneha Patel',
    role: 'Ahmedabad',
    quote:
      'A trusted brand with excellent systems and marketing support. Highly recommended for anyone looking for a business opportunity.',
    initials: 'SP',
    color: 'rose',
  },
  {
    name: 'Rahul Mehta',
    role: 'Pune',
    quote:
      'The onboarding process was smooth and the support is amazing. I’m proud to be a Vividuss franchise partner.',
    initials: 'RM',
    color: 'teal',
  },
];
