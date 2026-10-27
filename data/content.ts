import { PageContent } from "@/types";

export const siteContent: PageContent = {
  header: {
    logo: {
      title: "N E X A",
      subtitle: "HEALTHCARE",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
    ],
    ctaButton: {
      text: "Get in Touch",
      href: "/contact",
    },
  },
  hero: {
    tagline: "BETTER CARE, BRIGHTER TOMORROWS",
    title: ["Modern healthcare", "for what matters", "most."],
    description:
      "We provide compassionate, high quality care backed by innovation, helping you live healthier, stronger, and fuller lives.",
    ctaButton: {
      text: "Explore Our Services",
      href: "/services",
    },
    imageSrc: "/images/hero.jpg",
    imageAlt: "Healthcare specialist providing caring attention to a pediatric patient",
    slideIndicator: "01 / 02",
  },
  services: {
    tagline: "OUR SERVICES",
    title: ["Comprehensive care for", "every stage of life."],
    description:
      "From preventive care to specialized treatment, our services are designed to support your health, today and tomorrow.",
    linkText: "View All Services",
    linkHref: "/services",
    services: [
      {
        id: "primary_care",
        title: "Primary Care",
        description: "Routine checkups, wellness visits, and ongoing support.",
        icon: "file-text",
      },
      {
        id: "speciality_care",
        title: "Speciality Care",
        description: "Expert care for complex conditions and advanced needs.",
        icon: "heart-pulse",
      },
      {
        id: "mental_health",
        title: "Mental Health",
        description: "Compassionate support for your emotional wellbeing.",
        icon: "lightbulb",
      },
      {
        id: "womens_health",
        title: "Women's Health",
        description: "Personalized care for every stage of life.",
        icon: "globe",
      },
    ],
  },
  about: {
    badgeText: "HEALTH IS A HUMAN RIGHT.",
    tagline: "ABOUT NEXA",
    title: ["Healthcare with a", "human approach."],
    description:
      "At Nexa, we believe that great care goes beyond treatment. It is about people, listening, understanding, and supporting you at every step.",
    linkText: "Learn More",
    linkHref: "/about",
    imageSrc: "/images/about.jpg",
    imageAlt: "Spacious modern hospital atrium and reception lounge",
  },
  impact: {
    tagline: "OUR IMPACT",
    title: ["Real people.", "Real progress."],
    stats: [
      {
        value: "98%",
        label: "Patient Satisfaction Rate",
      },
      {
        value: "25+",
        label: "Years of Trusted Care",
      },
      {
        value: "15K+",
        label: "Lives Improved Each Year",
      },
    ],
    testimonials: [
      {
        id: "1",
        quote:
          "The team at Nexa truly cares. From my first visit to ongoing treatment, I have always felt supported, respected and in good hands.",
        author: "Sarah L.",
      },
      {
        id: "2",
        quote:
          "Exceptional physicians and staff who take time to listen. The standard of medical attention and care here is unmatched.",
        author: "Michael R.",
      },
      {
        id: "3",
        quote:
          "A genuinely patient centered experience that makes managing your health reassuring, smooth and personal.",
        author: "Elena M.",
      },
    ],
  },
  cta: {
    tagline: "GET STARTED",
    title: "Your health journey starts here.",
    description:
      "Book an appointment, find a specialist, or get in touch with our team.",
    buttonText: "Contact Us",
    buttonHref: "/contact",
  },
  footer: {
    logo: {
      title: "N E X A",
      subtitle: "HEALTHCARE",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Careers", href: "/careers" },
    ],
    contact: {
      phone: "+92 300 123 4567",
      phoneHref: "tel:+923001234567",
      email: "hello@nexahealth.com",
      emailHref: "mailto:hello@nexahealth.com",
      location: "Lahore, Pakistan",
    },
    socials: [
      { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
      { platform: "Twitter", href: "https://twitter.com", icon: "twitter" },
    ],
    copyright: "© 2026 Nexa Healthcare. All rights reserved.",
    slogan: "Better Care, Brighter Tomorrows",
  },
};
