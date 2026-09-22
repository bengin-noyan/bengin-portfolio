"use client";

import { useEffect, useRef } from "react";

// Scroll'da icerigi yumusakca gosteriyor. Kutuphane yok, IntersectionObserver
// + CSS gecisi. prefers-reduced-motion acikken globals.css animasyonu kapatiyor.
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  // ms cinsinden gecikme, sirayla belirsinler diye
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect(); // bir kez goster, tekrar gizleme
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Component>
  );
}
