"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderData } from "@/types";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  data: HeaderData;
}

export function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col group select-none">
          <span className="text-xl md:text-2xl font-bold tracking-[0.35em] text-[#141E28]">
            {data.logo.title}
          </span>
          <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-medium text-slate-500 uppercase mt-0.5">
            {data.logo.subtitle}
          </span>
        </Link>

        <nav className="hidden md:flex items-center bg-white rounded-full px-2 py-1.5 shadow-[0_2px_14px_rgba(0,0,0,0.05)] border border-slate-100 gap-1">
          {data.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#EBF2FE] text-[#141E28]"
                    : "text-slate-600 hover:text-[#141E28] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href={data.ctaButton.href}
            className="group inline-flex items-center gap-2 bg-[#141E28] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1E2D3D] transition-colors shadow-sm"
          >
            <span>{data.ctaButton.text}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-black focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {data.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#EBF2FE] text-[#141E28]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <Link
              href={data.ctaButton.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#141E28] text-white text-sm font-medium px-5 py-3 rounded-full"
            >
              <span>{data.ctaButton.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
