import React from "react";
import { siteContent } from "@/data/content";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#141E28]">
      <Header data={siteContent.header} />
      <main className="flex-1">
        <HeroSection data={siteContent.hero} />
        <ServicesSection data={siteContent.services} />
        <AboutSection data={siteContent.about} />
        <ImpactSection data={siteContent.impact} />
        <CtaSection data={siteContent.cta} />
      </main>
      <Footer data={siteContent.footer} />
    </div>
  );
}
