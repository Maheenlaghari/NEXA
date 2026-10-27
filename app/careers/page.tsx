import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaSection } from "@/components/sections/CtaSection";
import { Reveal } from "@/components/ui/Reveal";
import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  ShieldPlus,
  ArrowRight,
  MapPin,
  Star,
} from "lucide-react";

export default function CareersPage() {
  const perks = [
    {
      title: "Modern Clinical Facilities",
      description:
        "Practice in contemporary, technologically equipped medical suites designed for high quality care.",
      icon: <Briefcase className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Continuous Education",
      description:
        "Regular clinical seminars, sponsored certifications, and professional development support.",
      icon: <GraduationCap className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Supportive Culture",
      description:
        "A collaborative clinical environment built on mutual respect, empathy, and team wellbeing.",
      icon: <HeartHandshake className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
    {
      title: "Comprehensive Benefits",
      description:
        "Competitive compensation, medical coverage, wellness programs, and flexible clinical scheduling.",
      icon: <ShieldPlus className="w-5 h-5 text-slate-700 stroke-[1.6]" />,
    },
  ];

  const openings = [
    {
      title: "General Physician",
      department: "Internal Medicine",
      type: "Full Time",
      location: "Lahore, Pakistan",
    },
    {
      title: "Registered Clinical Nurse",
      department: "Patient Care",
      type: "Full Time",
      location: "Lahore, Pakistan",
    },
    {
      title: "Pediatric Care Specialist",
      department: "Pediatrics",
      type: "Full Time",
      location: "Lahore, Pakistan",
    },
    {
      title: "Mental Health Counselor",
      department: "Behavioral Health",
      type: "Full Time",
      location: "Lahore, Pakistan",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141E28]">
      <Header data={siteContent.header} />
      <main className="flex-1">
        <section className="w-full pt-12 pb-8 md:py-16 bg-[#FAFAF9] border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
              CAREERS AT NEXA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141E28] leading-[1.2] mb-5">
              Build a meaningful career in healthcare.
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              Join a dedicated team of physicians, medical specialists, and clinical staff united in delivering compassionate, patient centered care.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-xl mb-12">
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                  OUR ENVIRONMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141E28] leading-[1.2]">
                  Why medical professionals choose Nexa Healthcare.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="p-8 rounded-2xl bg-[#FAFAF9] border border-slate-100 flex flex-col items-start"
                  >
                    <div className="mb-5 p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                      {perk.icon}
                    </div>
                    <h3 className="text-lg font-medium text-[#141E28] mb-2 tracking-tight">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#FAFAF9] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                    OUR COMMUNITY
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal tracking-tight text-[#141E28] leading-[1.2] max-w-xl">
                    Where clinical excellence meets genuine camaraderie.
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                  Hear firsthand from the caregivers, specialists, and analysts who make Nexa a supportive beacon for regional medicine.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-8 text-[#141E28]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#141E28] text-[#141E28]" />
                      ))}
                    </div>
                    <blockquote className="text-xl sm:text-2xl text-[#141E28] font-normal leading-relaxed mb-8">
                      &ldquo;Nexa gave me the freedom to practice patient centered medicine without the relentless bureaucratic fatigue of traditional hospitals. When leadership prioritizes nurse to patient ratios, the care standard naturally soars.&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                      <Image
                        src="/images/hero.jpg"
                        alt="Fatima Al Zahra portrait"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#141E28]">
                        Fatima Al Zahra, RN
                      </h4>
                      <p className="text-xs text-slate-500 font-normal">
                        Head of Inpatient Care &bull; 4 Years at Nexa
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="bg-[#141E28] text-white rounded-3xl p-7 md:p-8 flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold mb-4 block">
                        RESIDENCY & RESEARCH
                      </span>
                      <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6 font-normal">
                        &ldquo;The clinical technology infrastructure allows us to spot pediatric diagnostic patterns months ahead. It is the most forward thinking medical institution I have worked in.&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-700/60">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-600 bg-slate-700">
                        <Image
                          src="/images/doctor.svg"
                          alt="Dr. Tariq Mahmood portrait"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Dr. Tariq Mahmood
                        </h4>
                        <p className="text-xs text-slate-400 font-normal">
                          Lead Pediatrician & Clinical Fellow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-xs group">
                    <Image
                      src="/images/lounge.jpg"
                      alt="Architectural Wellness Lounge"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center">
                      <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-[11px] font-medium tracking-wide">
                        Architectural Wellness Lounge &bull; Lahore Central Campus
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-xl mb-12">
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] text-[#8C877D] uppercase mb-4 block">
                  OPEN ROLES
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141E28] leading-[1.2]">
                  Current clinical opportunities.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {openings.map((job) => (
                  <div
                    key={job.title}
                    className="p-6 md:p-8 rounded-2xl bg-[#FAFAF9] border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xs transition-shadow"
                  >
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h3 className="text-xl font-medium text-[#141E28] tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 font-medium text-slate-700">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-[#141E28] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#1E2D3D] transition-colors"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
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
