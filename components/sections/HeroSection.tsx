import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroData } from "@/types";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center py-12 md:py-0 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            <span className="hero-tagline-reveal text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-5">
              {data.tagline}
            </span>
            <h1 className="hero-heading-reveal text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-[#141E28] leading-[1.12] mb-6">
              {data.title.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-text-reveal text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-lg mb-9">
              {data.description}
            </p>
            <div className="hero-btn-reveal">
              <Link
                href={data.ctaButton.href}
                className="group inline-flex items-center gap-2.5 bg-[#141E28] text-white text-xs md:text-sm font-medium px-6 py-3 rounded-full hover:bg-[#1E2D3D] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>{data.ctaButton.text}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-6 relative">
            <div className="absolute w-[360px] h-[360px] rounded-full bg-slate-100/70 blur-3xl -z-10 pointer-events-none" />
            <div className="hero-arch-reveal shrink-0">
              <div className="relative w-[320px] sm:w-[360px] lg:w-[390px] aspect-[3/4] rounded-t-[190px] rounded-b-2xl overflow-hidden shadow-sm bg-slate-100 transition-all duration-300 hover:shadow-md hero-float-motion">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="hero-indicator-reveal hidden sm:flex flex-col items-center justify-center text-[11px] font-mono tracking-widest text-slate-400 select-none shrink-0">
              <span className="writing-mode-vertical rotate-180">
                {data.slideIndicator}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
