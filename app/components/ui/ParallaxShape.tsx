"use client";

import { useEffect, useRef } from "react";

interface ParallaxShapeProps {
  className?: string;
  speed?: number;
  children: React.ReactNode;
}

export const ParallaxShape = ({ className = "", speed = 0.05, children }: ParallaxShapeProps) => {
  const shapeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      
      shape.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [speed]);

  return (
    <svg
      ref={shapeRef}
      className={`parallax-shape absolute pointer-events-none opacity-10 ${className}`}
      viewBox="0 0 100 100"
    >
      {children}
    </svg>
  );
};