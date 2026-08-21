"use client";

import { useEffect, useRef } from "react";

/**
 * Kaydırdıkça içeriği yumuşak biçimde belirir hâle getirir.
 * Kütüphane kullanmaz — IntersectionObserver + CSS geçişi.
 * `prefers-reduced-motion` açıksa animasyon globals.css tarafından kapatılır.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  /** Milisaniye cinsinden gecikme — sıralı beliriş için. */
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
        observer.disconnect(); // bir kez göster, tekrar gizleme
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
