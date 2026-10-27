import React from "react";
import { siteContent } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import { Heart, Award, Users, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Compassion",
      description:
        "Treating every individual with empathy, dignity, and personal understanding.",
      icon: <Heart className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Clinical Excellence",
      description:
        "Applying the latest medical innovations and evidence based protocols.",
      icon: <Award className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Patient Centered",
      description:
        "Listening attentively to your goals and designing individualized care journeys.",
      icon: <Users className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Accessibility",
      description:
        "Ensuring top tier healthcare is seamless to reach for everyone in our community.",
      icon: <ShieldCheck className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141E28]">
      <Header data={siteContent.header} />
      <main className="flex-1">
        <section className="w-full pt-12 pb-8 md:py-16 bg-[#FAFAF9] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
              OUR MISSION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141E28] leading-[1.2] mb-5">
              Healthcare with a human approach.
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              At Nexa, we believe that great care goes beyond treatment. It is about people, listening, understanding, and supporting you at every step.
            </p>
          </div>
        </section>

        <AboutSection data={siteContent.about} />

        <section className="w-full py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-xl mb-12">
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                  OUR VALUES
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141E28] leading-[1.2]">
                  Guiding principles behind our care.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((val) => (
                  <div
                    key={val.title}
                    className="p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 flex flex-col items-start"
                  >
                    <div className="mb-5 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                      {val.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#141E28] mb-2 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ImpactSection data={siteContent.impact} />
        <CtaSection data={siteContent.cta} />
      </main>
      <Footer data={siteContent.footer} />
    </div>
  );
}
