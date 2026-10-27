import React from "react";
import Link from "next/link";
import { ServicesData } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, FileText, HeartPulse, Lightbulb, Globe } from "lucide-react";

interface ServicesSectionProps {
  data: ServicesData;
}

export function ServicesSection({ data }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "file-text":
        return <FileText className="w-5 h-5 text-slate-700 stroke-[1.6]" />;
      case "heart-pulse":
        return <HeartPulse className="w-5 h-5 text-slate-700 stroke-[1.6]" />;
      case "lightbulb":
        return <Lightbulb className="w-5 h-5 text-slate-700 stroke-[1.6]" />;
      case "globe":
        return <Globe className="w-5 h-5 text-slate-700 stroke-[1.6]" />;
      default:
        return <FileText className="w-5 h-5 text-slate-700 stroke-[1.6]" />;
    }
  };

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
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
                <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-sm mb-8">
                  {data.description}
                </p>
              </div>
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

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {data.services.map((service) => (
                  <div key={service.id} className="flex flex-col items-start group">
                    <div className="mb-4 p-2.5 rounded-lg bg-slate-50 transition-colors group-hover:bg-slate-100">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-[#141E28] mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
