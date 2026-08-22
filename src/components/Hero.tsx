"use client";

import { profile, socials, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon, type IconName } from "./ui/Icon";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";
import { SplitText } from "./ui/SplitText";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-4xl px-6 text-center sm:px-8">
        {/* Portre — dosya verilmediyse hiç çizilmez (bozuk görsel çıkmasın) */}
        {profile.photo ? (
          <Reveal className="mx-auto mb-8 block w-fit">
            <div className="animate-float relative size-28 sm:size-36">
              {/* Dönen aurora halkası: 2px'lik degrade çerçeve */}
              <div className="animate-ring absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,var(--color-accent),var(--color-accent-2),var(--color-accent-3),var(--color-accent))] opacity-80 blur-[1px]" />
              <div className="absolute -inset-6 -z-10 rounded-full bg-accent/20 blur-2xl" />
              {/* Statik export'ta next/image optimizasyonu kapalı; plain img daha öngörülebilir. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={t(profile.photoAlt) || `${profile.name} — ${t(profile.title)}`}
                width={288}
                height={288}
                decoding="async"
                className="relative size-full rounded-full border-2 border-ink-950 object-cover"
              />
            </div>
          </Reveal>
        ) : null}

        {/* İsim — harf harf belirir */}
        <SplitText
          as="h1"
          text={profile.name}
          delay={180}
          stagger={38}
          gradient
          className="block text-5xl leading-[0.95] font-semibold tracking-tighter text-balance sm:text-7xl lg:text-8xl"
        />

        {/* Ünvan */}
        <Reveal delay={420}>
          <p className="mt-5 flex items-center justify-center gap-3 text-xl font-medium text-fg sm:text-2xl lg:text-3xl">
            <span aria-hidden="true" className="h-px w-8 bg-accent sm:w-12" />
            {t(profile.title)}
          </p>
        </Reveal>

        {/* Özet cümle */}
        <Reveal delay={520}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {t(profile.tagline)}
          </p>
        </Reveal>

        {/* Eylem butonları */}
        <Reveal delay={640}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.22}>
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-ink-950 shadow-lg shadow-accent/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/45"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                {t(ui.heroPrimary)}
                <Icon
                  name="arrowDown"
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
            </Magnetic>

            {profile.resumeUrl ? (
              <Magnetic strength={0.18}>
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName}
                  className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-850/60 px-6 py-3.5 text-base font-semibold text-fg backdrop-blur transition-colors duration-300 hover:border-accent/50 hover:bg-ink-800"
                >
                  <Icon name="download" className="size-4" />
                  {t(ui.heroSecondary)}
                </a>
              </Magnetic>
            ) : null}

            {/* Sosyal bağlantılar */}
            <div className="ml-1 flex items-center gap-1">
              {socials.map((s) => (
                <Magnetic key={s.label} strength={0.35}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    title={s.label}
                    className="grid size-11 place-items-center rounded-xl text-fg-subtle transition-colors duration-300 hover:bg-ink-850 hover:text-accent-bright"
                  >
                    <Icon name={s.icon as IconName} className="size-5" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
