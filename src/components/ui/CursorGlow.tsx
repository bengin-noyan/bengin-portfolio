"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/motion";

/**
 * İmleci gecikmeli takip eden yumuşak ışık lekesi.
 * Sadece fare/trackpad olan cihazlarda ve hareket azaltma kapalıyken çalışır.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const active = fine && !reduced;

  useEffect(() => {
    if (!active) return;

    // Hedef ve mevcut konum — aradaki fark yumuşak takibi verir.
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frame = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible && ref.current) {
        visible = true;
        ref.current.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      if (ref.current) ref.current.style.opacity = "0";
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 -z-10 size-[34rem] rounded-full opacity-0 blur-[110px] transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 16%, transparent) 0%, transparent 65%)",
        willChange: "transform",
      }}
    />
  );
}
