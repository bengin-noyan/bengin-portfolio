"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

/**
 * Görünür olduğunda sayıyı 0'dan hedefe sayar.
 * "10+", "2026", "ERP" gibi değerleri kabul eder: yalnızca baştaki rakam
 * bloğu animasyonlanır, kalan karakterler (ör. "+") olduğu gibi korunur.
 * Rakam içermeyen değerler doğrudan yazılır.
 */
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
      // easeOutExpo — hızlı başlayıp yumuşak duran sayaç
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
      {/* Ekran okuyucu son değeri okusun, ara adımları değil */}
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
