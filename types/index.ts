export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderData {
  logo: {
    title: string;
    subtitle: string;
  };
  navItems: NavItem[];
  ctaButton: {
    text: string;
    href: string;
  };
}

export interface HeroData {
  tagline: string;
  title: string[];
  description: string;
  ctaButton: {
    text: string;
    href: string;
  };
  imageSrc: string;
  imageAlt: string;
  slideIndicator: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesData {
  tagline: string;
  title: string[];
  description: string;
  linkText: string;
  linkHref: string;
  services: ServiceItem[];
}

export interface AboutData {
  badgeText: string;
  tagline: string;
  title: string[];
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
}

export interface ImpactData {
  tagline: string;
  title: string[];
  stats: StatItem[];
  testimonials: TestimonialItem[];
}

export interface CtaData {
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  location: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  logo: {
    title: string;
    subtitle: string;
  };
  navItems: NavItem[];
  contact: ContactInfo;
  socials: SocialLink[];
  copyright: string;
  slogan: string;
}

export interface PageContent {
  header: HeaderData;
  hero: HeroData;
  services: ServicesData;
  about: AboutData;
  impact: ImpactData;
  cta: CtaData;
  footer: FooterData;
}
