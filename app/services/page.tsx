import React from "react";
import { siteContent } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import { Microscope, Baby, Stethoscope, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const additionalOfferings = [
    {
      title: "Diagnostic Laboratory",
      description:
        "Advanced diagnostics and imaging tests delivered with rapid turnaround and clinical precision.",
      icon: <Microscope className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Pediatric Healthcare",
      description:
        "Specialized clinical attention for children, from newborns to adolescents, in a comforting setting.",
      icon: <Baby className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Preventive Screenings",
      description:
        "Comprehensive cardiovascular, metabolic, and health screening programs designed for early prevention.",
      icon: <Stethoscope className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Specialist Consultations",
      description:
        "Direct access to leading medical specialists across cardiology, neurology, and internal medicine.",
      icon: <Sparkles className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141E28]">
      <Header data={siteContent.header} />
      <main className="flex-1">
        <section className="w-full pt-12 pb-8 md:py-16 bg-[#FAFAF9] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
              SERVICES AND SPECIALTIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141E28] leading-[1.2] mb-5">
              Comprehensive care for every stage of life.
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              From preventive care to specialized treatment, our services are designed to support your health, today and tomorrow.
            </p>
          </div>
        </section>

        <ServicesSection data={siteContent.services} />

        <section className="w-full py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-xl mb-12">
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                  EXTENDED CARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141E28] leading-[1.2]">
                  Specialized medical offerings tailored to your needs.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {additionalOfferings.map((item) => (
                  <div
                    key={item.title}
                    className="p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 flex flex-col items-start"
                  >
                    <div className="mb-5 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#141E28] mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CtaSection data={siteContent.cta} />
      </main>
      <Footer data={siteContent.footer} />
    </div>
  );
}
