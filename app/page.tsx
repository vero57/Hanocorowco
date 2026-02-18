"use client";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { initSdk } from "@/lib/sdk";

export default function Home() {
  useScrollAnimation();

  useEffect(() => {
    initSdk();
  }, []);

  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <SectionDivider />
      <Services />
      <Portfolio />
      <Team />
      <SectionDivider />
      <Testimonials />
      <Contact />
    </main>
  );
}