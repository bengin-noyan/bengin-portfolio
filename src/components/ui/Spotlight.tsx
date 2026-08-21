"use client";

import { useCallback, useRef } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/motion";

/**
 * Kartın üzerinde farenin bulunduğu noktaya ışık ve kenarlık parıltısı taşır.
 * CSS tarafı `.spotlight` sınıfında (globals.css); burada sadece --mx / --my yazılır.
 *
 * `tilt` açıkken kart imlece göre hafifçe 3B eğilir.
 */
export function Spotlight({
  children,
  className = "",
  tilt = false,
  /** Maksimum eğilme açısı (derece). */
  maxTilt = 5,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  maxTilt?: number;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const interactive = fine && !reduced;

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!interactive || frame.current) return;

      const { clientX, clientY } = e;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = 0;
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);

        if (tilt) {
          // Merkeze göre -1..1 aralığında konum
          const px = (x / rect.width - 0.5) * 2;
          const py = (y / rect.height - 0.5) * 2;
          el.style.setProperty("--ry", `${px * maxTilt}deg`);
          el.style.setProperty("--rx", `${-py * maxTilt}deg`);
        }
      });
    },
    [interactive, tilt, maxTilt],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      onPointerMove={interactive ? onMove : undefined}
      onPointerLeave={interactive ? onLeave : undefined}
      className={`spotlight ${tilt && interactive ? "tilt" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
