"use client";

import { about, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

export function About() {
  const { t } = useLang();
  const paragraphs = t(about.paragraphs);
  const hasStats = about.stats.length > 0;

  return (
    <Section id="about" title={t(ui.sectionAbout)}>
      {/* Kart sütunu kapalıysa ızgarayı iki sütunda tutmak sağda ölü bir
          boşluk bırakıyordu; tek sütuna düşüp metni okunur genişlikte tutuyoruz. */}
      <div
        className={
          hasStats
            ? "grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16"
            : "mx-auto max-w-3xl"
        }
      >
        {/* Metin — paragraflar sırayla belirir */}
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 130}>
              <p className="text-center text-base leading-[1.85] text-fg-muted sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Rakamlar — görünürken sayarak artar */}
        {hasStats ? (
          <div className="grid grid-cols-2 gap-4 self-start">
            {about.stats.map((stat, i) => (
              <Reveal
                key={stat.value + i}
                delay={140 + i * 100}
                // Tek sayida kart varsa sonuncusu satiri tam kaplasin,
                // yoksa 2'li izgarada yarim bosluk asili kalir.
                className={
                  about.stats.length % 2 === 1 && i === about.stats.length - 1
                    ? "col-span-2"
                    : ""
                }
              >
                <Spotlight
                  tilt
                  maxTilt={7}
                  className="surface edge-light h-full rounded-2xl border border-ink-800 bg-ink-900/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600"
                >
                  <CountUp
                    value={stat.value}
                    className="bg-gradient-to-br from-accent-bright to-accent-2 bg-clip-text font-mono text-3xl font-semibold tracking-tight text-transparent"
                  />
                  <div className="mt-2 text-base leading-snug text-fg-subtle">
                    {t(stat.label)}
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
