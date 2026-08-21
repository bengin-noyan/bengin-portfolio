"use client";

import { useCallback, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/motion";

/**
 * İçindeki öğeyi imlece doğru hafifçe çeker — "mıknatıs" düğme etkisi.
 * Dokunmatik cihazlarda ve hareket azaltma açıkken devre dışıdır.
 */
export function Magnetic({
  children,
  /** Çekim gücü: 0.2 ≈ hafif, 0.5 ≈ belirgin. */
  strength = 0.28,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const active = fine && !reduced;

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLSpanElement>) => {
      if (frame.current) return;
      const { clientX, clientY } = e;

      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = (clientX - (rect.left + rect.width / 2)) * strength;
        const dy = (clientY - (rect.top + rect.height / 2)) * strength;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
    },
    [strength],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0, 0, 0)";
  }, []);

  return (
    <span
      ref={ref}
      onPointerMove={active ? onMove : undefined}
      onPointerLeave={active ? onLeave : undefined}
      className={`inline-block transition-transform duration-500 ${className}`}
      style={{ willChange: active ? "transform" : undefined }}
    >
      {children}
    </span>
  );
}
