"use client";

import { useEffect, useRef } from "react";

export const useCounter = (sectionRef: React.RefObject<HTMLElement | null>) => {
  const countersRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const counters = sectionRef.current.querySelectorAll(".counter");
    countersRef.current = Array.from(counters) as HTMLElement[];

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target as HTMLElement;
            const target = parseInt(counter.getAttribute("data-target") || "0");
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.textContent = Math.floor(current) + "+";
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target + "+";
              }
            };

            updateCounter();
            counterObserver.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => counterObserver.observe(counter));

    return () => {
      countersRef.current.forEach((counter) => counterObserver.unobserve(counter));
    };
  }, [sectionRef]);
};