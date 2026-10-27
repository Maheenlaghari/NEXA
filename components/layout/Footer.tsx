import React from "react";
import Link from "next/link";
import { FooterData } from "@/types";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  data: FooterData;
}

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "linkedin") {
    return (
      <svg
        className="w-3.5 h-3.5 text-slate-600 hover:text-[#141E28] transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
      </svg>
    );
  }
  if (icon === "instagram") {
    return (
      <svg
        className="w-3.5 h-3.5 text-slate-600 hover:text-[#141E28] transition-colors"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  if (icon === "twitter") {
    return (
      <svg
        className="w-3.5 h-3.5 text-slate-600 hover:text-[#141E28] transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return null;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer id="contact" className="w-full bg-white pt-16 pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col group select-none mb-6">
              <span className="text-xl md:text-2xl font-bold tracking-[0.35em] text-[#141E28]">
                {data.logo.title}
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-medium text-slate-500 uppercase mt-0.5">
                {data.logo.subtitle}
              </span>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <ul className="flex flex-col gap-3">
              {data.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-[#141E28] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={data.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-[#141E28] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{data.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={data.contact.emailHref}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-[#141E28] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{data.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{data.contact.location}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex items-start justify-start lg:justify-end gap-3.5">
            {data.socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-800 transition-colors"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>{data.copyright}</span>
          <span>{data.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
