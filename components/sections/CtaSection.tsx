import React from "react";
import Link from "next/link";
import { CtaData } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  data: CtaData;
}

export function CtaSection({ data }: CtaSectionProps) {
  return (
    <section className="w-full bg-[#16222F] text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-lg">
              <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-slate-400 uppercase mb-3 block">
                {data.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-white tracking-tight leading-snug">
                {data.title}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-xs leading-relaxed">
                {data.description}
              </p>
              <div>
                <Link
                  href={data.buttonHref}
                  className="group inline-flex items-center gap-2 bg-white text-[#141E28] hover:bg-slate-100 text-xs md:text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm"
                >
                  <span>{data.buttonText}</span>
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
