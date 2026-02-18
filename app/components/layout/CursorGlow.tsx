"use client";

import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      cursor.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("active");
    };

    const animate = () => {
      cursorPosRef.current.x += (mouseRef.current.x - cursorPosRef.current.x) * 0.1;
      cursorPosRef.current.y += (mouseRef.current.y - cursorPosRef.current.y) * 0.1;
      
      cursor.style.left = cursorPosRef.current.x + "px";
      cursor.style.top = cursorPosRef.current.y + "px";
      
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-[300px] h-[300px] bg-gradient-radial from-amber-500/15 to-transparent rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] opacity-0 transition-opacity duration-300"
    />
  );
};