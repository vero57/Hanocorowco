"use client";

import { useState } from "react";

const categories = [
  { value: "all", label: "Semua" },
  { value: "branding", label: "Branding" },
  { value: "web", label: "Web Design" },
  { value: "ui", label: "UI/UX" },
];

const portfolioItems = [
  {
    category: "branding",
    gradient: "from-amber-600 to-orange-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
      </svg>
    ),
    title: "Luxuria Brand",
    subtitle: "Brand Identity",
  },
  {
    category: "web",
    gradient: "from-purple-600 to-pink-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <rect x="10" y="20" width="80" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="35" x2="90" y2="35" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="27" r="3" fill="currentColor" />
        <circle cx="30" cy="27" r="3" fill="currentColor" />
      </svg>
    ),
    title: "TechFlow App",
    subtitle: "Web Application",
  },
  {
    category: "ui",
    gradient: "from-blue-600 to-cyan-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <rect x="25" y="10" width="50" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="80" r="5" fill="currentColor" />
      </svg>
    ),
    title: "FinanceGo",
    subtitle: "Mobile UI/UX",
  },
  {
    category: "branding",
    gradient: "from-green-600 to-teal-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
      </svg>
    ),
    title: "EcoLife",
    subtitle: "Brand Identity",
  },
  {
    category: "web",
    gradient: "from-red-600 to-rose-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M30 50 L45 65 L70 35" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "TaskMaster",
    subtitle: "Web Platform",
  },
  {
    category: "ui",
    gradient: "from-indigo-600 to-violet-600",
    icon: (
      <svg className="w-24 h-24 text-white/30 mb-4" viewBox="0 0 100 100">
        <rect x="15" y="25" width="70" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="25" y="35" width="20" height="30" fill="currentColor" opacity="0.5" />
        <rect x="55" y="35" width="20" height="20" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Dashboard Pro",
    subtitle: "UI Design System",
  },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState(portfolioItems);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === "all") {
      setItems(portfolioItems);
    } else {
      setItems(portfolioItems.filter((item) => item.category === filter));
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-amber-400 tracking-[0.3em] text-sm font-medium">PORTFOLIO</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Karya <span className="text-gradient">Terbaik</span> Kami
          </h2>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilter(category.value)}
              className={`px-6 py-2 rounded-full border text-sm transition-all hover:border-amber-500 hover:text-amber-400 ${
                activeFilter === category.value
                  ? "active bg-amber-500 text-black border-amber-500"
                  : "border-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="portfolio-item reveal-scale group relative overflow-hidden rounded-3xl aspect-square"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {item.icon}
                <h3 className="text-white font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.subtitle}</p>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-3 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-400 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};