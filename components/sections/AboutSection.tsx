import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutData } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface AboutSectionProps {
  data: AboutData;
}

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-slate-100 group">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded shadow-xs">
                  <span className="text-[10px] md:text-[11px] font-medium tracking-widest text-[#141E28] uppercase">
                    {data.badgeText}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                {data.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#141E28] leading-[1.2] mb-5">
                {data.title.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-md mb-8">
                {data.description}
              </p>
              <div>
                <Link
                  href={data.linkHref}
                  className="group inline-flex items-center gap-2 text-xs md:text-sm font-medium text-[#141E28] hover:text-slate-600 transition-colors"
                >
                  <span>{data.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
