"use client";

import React, { useState } from "react";
import { ImpactData } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ImpactSectionProps {
  data: ImpactData;
}

export function ImpactSection({ data }: ImpactSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? data.testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === data.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeTestimonial = data.testimonials[currentIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                  {data.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#141E28] leading-[1.2] mb-12">
                  {data.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                {data.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      idx < data.stats.length - 1
                        ? "sm:border-r sm:border-slate-200 sm:pr-6"
                        : ""
                    }`}
                  >
                    <span className="text-3xl sm:text-4xl font-normal text-[#141E28] tracking-tight mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-500 font-normal leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between pt-2">
              <div>
                <span className="text-3xl sm:text-4xl font-serif text-slate-700 leading-none select-none block mb-4">
                  &ldquo;
                </span>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed min-h-[96px] transition-opacity duration-300">
                  {activeTestimonial.quote}
                </p>
                <div className="mt-4">
                  <span className="text-xs font-medium text-slate-600 block">
                    {activeTestimonial.author}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-800 hover:text-black transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-800 hover:text-black transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
