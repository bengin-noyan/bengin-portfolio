"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

/**
 * Tüm bölümlerin ortak kabuğu: harf harf beliren başlık,
 * sağa doğru çizilen ayraç çizgisi, tutarlı boşluk ritmi.
 */
export function Section({
  id,
  title,
  srTitle,
  intro,
  children,
  className = "",
}: {
  id: string;
  /** Boş bırakılırsa başlık satırı çizilmez; yalnızca ekran okuyucu görür. */
  title?: string;
  /** Başlık gizliyken ekran okuyucunun okuyacağı ad. */
  srTitle?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32 ${className}`}
    >
      {title ? (
        <div className="flex flex-col items-center gap-4">
          <SplitText
            as="h2"
            // dil değişince harfleri yeniden kur
            key={title}
            text={title}
            className="block text-center text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
            stagger={26}
            delay={80}
          />

          {/* Başlığın altındaki kısa, iki yana sönümlenen ayraç */}
          <Reveal delay={200}>
            <span
              aria-hidden="true"
              className="block h-px w-24 bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            />
          </Reveal>
        </div>
      ) : (
        /* Başlık gizli ama bölüm adsız kalmasın */
        <h2 className="sr-only">{srTitle}</h2>
      )}

      {intro ? (
        <Reveal delay={260}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-fg-muted">
            {intro}
          </p>
        </Reveal>
      ) : null}

      <div className="mt-12">{children}</div>
    </section>
  );
}
