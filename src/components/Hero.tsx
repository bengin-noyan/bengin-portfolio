"use client";

import { profile, skillGroups, socials, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon, type IconName } from "./ui/Icon";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";
import { RotatingText } from "./ui/RotatingText";
import { SplitText } from "./ui/SplitText";

/** Şeritte dönecek teknoloji listesi — yetenekler bölümünden türetilir. */
const marqueeItems = skillGroups.flatMap((g) => g.items);

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* Müsaitlik rozeti */}
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-850/70 py-1.5 pr-4 pl-2.5 text-xs font-medium text-fg-muted backdrop-blur">
            <span className="pulse-ring size-2 rounded-full bg-accent" />
            {t(profile.availability)}
          </span>
        </Reveal>

        {/* İsim — harf harf belirir */}
        <SplitText
          as="h1"
          text={profile.name}
          delay={180}
          stagger={38}
          gradient
          className="mt-7 block text-5xl leading-[0.95] font-semibold tracking-tighter text-balance sm:text-7xl lg:text-8xl"
        />

        {/* Ünvan + dönen odak alanları */}
        <Reveal delay={420}>
          <div className="mt-5 space-y-2">
            <p className="flex items-center gap-3 text-xl font-medium text-fg sm:text-2xl lg:text-3xl">
              <span aria-hidden="true" className="h-px w-8 bg-accent sm:w-12" />
              {t(profile.title)}
            </p>

            <p className="flex min-h-[1.75rem] items-center gap-3 pl-11 font-mono text-sm text-accent-2 sm:pl-15 sm:text-base">
              <RotatingText
                // dil değişince listeyi tazele
                key={lang}
                items={t(profile.focus)}
              />
            </p>
          </div>
        </Reveal>

        {/* Özet cümle */}
        <Reveal delay={520}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            {t(profile.tagline)}
          </p>
        </Reveal>

        {/* Konum */}
        <Reveal delay={580}>
          <p className="mt-5 flex items-center gap-2 text-sm text-fg-subtle">
            <Icon name="mapPin" className="size-4" strokeWidth={1.5} />
            {t(profile.location)}
          </p>
        </Reveal>

        {/* Eylem butonları */}
        <Reveal delay={640}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.22}>
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-accent/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/45"
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
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-850/60 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur transition-colors duration-300 hover:border-accent/50 hover:bg-ink-800"
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

        {/* Aşağı kaydır ipucu */}
        <Reveal delay={760}>
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-xs tracking-widest text-fg-subtle uppercase transition-colors hover:text-accent-bright"
          >
            <span className="animate-nudge inline-flex">
              <Icon name="arrowDown" className="size-4" strokeWidth={2} />
            </span>
            {t(ui.scrollHint)}
          </a>
        </Reveal>
      </div>

      {/* Teknoloji şeridi — fare üzerine gelince durur */}
      <Reveal delay={840}>
        <div className="marquee-mask mt-16 flex overflow-hidden border-y border-ink-800/70 py-4">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono text-sm whitespace-nowrap text-fg-subtle transition-colors duration-300 hover:text-accent-bright"
              >
                {item}
                <span aria-hidden="true" className="ml-10 text-accent/50">
                  /
                </span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
