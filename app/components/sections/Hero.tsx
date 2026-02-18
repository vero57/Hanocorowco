"use client";

import { useEffect, useRef } from "react";
import { ParallaxShape } from "@/components/ui/ParallaxShape";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero text reveal animation
    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll(".hero-text-reveal span");
      spans.forEach((span, index) => {
        (span as HTMLElement).style.animationDelay = `${0.5 + index * 0.2}s`;
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Geometric Shapes */}
      <ParallaxShape className="top-1/4 left-20 w-32 h-32" speed={0.05}>
        <polygon points="50,5 95,97.5 5,97.5" fill="none" stroke="#d4af37" strokeWidth="1" />
      </ParallaxShape>
      <ParallaxShape className="bottom-1/4 right-20 w-24 h-24" speed={0.08}>
        <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="1" />
      </ParallaxShape>
      <ParallaxShape className="top-1/3 right-1/3 w-16 h-16" speed={0.03}>
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          fill="none"
          stroke="#d4af37"
          strokeWidth="1"
          transform="rotate(45 50 50)"
        />
      </ParallaxShape>

      {/* Left: Text */}
      <div className="relative z-10 flex-1 max-w-2xl px-6 lg:px-8 flex flex-col items-start justify-center md:ml-16 lg:ml-24">
        <div className="mb-6 overflow-hidden">
          <p
            className="text-amber-400 tracking-[0.3em] text-sm font-medium opacity-0 translate-y-full"
            style={{ animation: "heroReveal 1s 0.3s forwards" }}
          >
            CREATIVE DIGITAL AGENCY
          </p>
        </div>

        <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-left">
          <span className="hero-text-reveal">
            <span style={{ animationDelay: "0.5s" }}>Crafting</span>
          </span>{" "}
          <span className="hero-text-reveal">
            <span style={{ animationDelay: "0.7s" }}>Digital</span>
          </span>
          <br />
          <span className="hero-text-reveal">
            <span style={{ animationDelay: "0.9s" }}>Experiences</span>
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 opacity-0 text-left"
          style={{ animation: "heroReveal 1s 1.2s forwards" }}
        >
          We transform ideas into stunning digital realities. Premium design meets cutting-edge
          technology for brands that dare to stand out.
        </p>

        <div
          className="flex flex-col sm:flex-row items-start gap-4 opacity-0"
          style={{ animation: "heroReveal 1s 1.5s forwards" }}
        >
          <Button href="#portfolio" variant="primary">
            Lihat Portfolio
          </Button>
          <Button href="#contact" variant="secondary">
            Mulai Proyek
          </Button>
        </div>
      </div>

      {/* Right: Stacked Images */}
      <div className="relative flex-1 items-center justify-center mt-12 md:mt-0 hidden md:flex">
        <div className="group relative w-72 h-96">
          <img
            src="/img1.jpg"
            alt="Stack 1"
            className="absolute left-0 top-0 w-48 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:-translate-x-6 group-hover:-rotate-6 z-30"
            style={{ zIndex: 3 }}
          />
          <img
            src="/img2.jpg"
            alt="Stack 2"
            className="absolute left-8 top-8 w-48 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:translate-x-6 group-hover:rotate-6 z-20"
            style={{ zIndex: 2 }}
          />
          <img
            src="/img3.jpg"
            alt="Stack 3"
            className="absolute left-16 top-16 w-48 h-64 object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:translate-y-6 group-hover:rotate-3 z-10"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};