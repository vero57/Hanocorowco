"use client";

import { useRef } from "react";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { target: 200, label: "Projects", suffix: "+" },
  { target: 50, label: "Clients", suffix: "+" },
  { target: 8, label: "Years", suffix: "+" },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useCounter(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">
              TENTANG KAMI
            </span>
            <h2 id="about-title" className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Kami Adalah<br />
              <span className="text-gradient">Storyteller Digital</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Sejak 2015, kami telah membantu lebih dari 200+ brand mewujudkan visi digital mereka.
              Dengan tim yang berpengalaman dan passion yang tinggi, kami percaya setiap brand
              memiliki cerita unik yang layak diceritakan dengan cara yang extraordinary.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="block font-display text-4xl font-bold text-gradient counter">
                    0
                  </span>
                  <span className="text-sm text-gray-500 mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right relative">
            <div className="relative aspect-square">
              {/* Abstract Shape Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-3xl transform rotate-3 animate-float" />

              {/* Main Image Container */}
              <div className="relative z-10 h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-48 h-48 text-amber-500/30" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-display text-2xl text-white/80">
                    &quot;Design is intelligence made visible.&quot;
                  </p>
                  <p className="text-amber-400 text-sm mt-2">— Alina Wheeler</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-black p-6 rounded-2xl shadow-2xl shadow-amber-500/30 animate-float-delayed">
                <span className="block text-3xl font-bold">8+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};