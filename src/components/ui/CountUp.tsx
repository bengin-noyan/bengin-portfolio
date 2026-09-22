"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

// Gorunur olunca sayiyi 0'dan hedefe sayiyor.
// "10+", "2026", "ERP" gibi degerleri kabul ediyor: sadece bastaki rakam kismi
// animasyonlu, kalan karakterler oldugu gibi duruyor. Rakam yoksa direkt yazar.
export function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(() => (target === null ? value : `0${suffix}`));

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }
    if (reduced) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo, hizli baslayip yumusak duruyor
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (progress < 1) frame = window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        frame = window.requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [target, suffix, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {/* ekran okuyucu ara adimlari degil son degeri okusun */}
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
