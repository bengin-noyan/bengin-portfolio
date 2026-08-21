"use client";

import { useEffect, useRef } from "react";

/**
 * Metni harflere bölüp sırayla belirtir (blur + 3B döndürme).
 * Ekran okuyucular için tek parça metin `sr-only` olarak korunur;
 * animasyonlu harfler `aria-hidden` işaretlenir.
 */
export function SplitText({
  text,
  className = "",
  /** Harfler arası gecikme (ms). */
  stagger = 34,
  /** İlk harfin gecikmesi (ms). */
  delay = 0,
  /** Harflere sürekli akan degrade uygular (globals.css · .char-gradient). */
  gradient = false,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  gradient?: boolean;
  as?: "span" | "h1" | "h2";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLElement>("[data-char]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        chars.forEach((c) => {
          c.dataset.char = "shown";
        });
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  const Component = Tag as React.ElementType;
  const words = text.split(" ");
  let index = 0;

  return (
    <Component ref={ref} className={`${gradient ? "char-gradient" : ""} ${className}`}>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {words.map((word, wi) => (
          // Kelimeler bölünmesin diye her kelime tek bir satır-içi blok
          <span key={wi} className="inline-block whitespace-nowrap">
            {[...word].map((char, ci) => (
              <span
                key={ci}
                data-char=""
                style={{ "--char-delay": `${delay + index++ * stagger}ms` } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
            {wi < words.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        ))}
      </span>
    </Component>
  );
}
