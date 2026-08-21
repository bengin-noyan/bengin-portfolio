"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

/**
 * Tüm bölümlerin ortak kabuğu: numaralı ve harf harf beliren başlık,
 * sağa doğru çizilen ayraç çizgisi, tutarlı boşluk ritmi.
 */
export function Section({
  id,
  index,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  /** Başlığın solundaki sıra numarası, örn. "01" */
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32 ${className}`}
    >
      <div className="flex items-center gap-4">
        <Reveal>
          <span className="font-mono text-sm text-accent">{index}</span>
        </Reveal>

        <SplitText
          as="h2"
          // dil değişince harfleri yeniden kur
          key={title}
          text={title}
          stagger={26}
          delay={80}
          className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
        />

        {/* Sağa doğru açılan ayraç */}
        <Reveal delay={200} className="flex-1 origin-left">
          <span
            aria-hidden="true"
            className="block h-px w-full bg-gradient-to-r from-ink-600 to-transparent"
          />
        </Reveal>
      </div>

      {intro ? (
        <Reveal delay={260}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-muted">
            {intro}
          </p>
        </Reveal>
      ) : null}

      <div className="mt-12">{children}</div>
    </section>
  );
}
