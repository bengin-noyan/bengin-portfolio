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

  return (
    <Section id="about" index="01" title={t(ui.sectionAbout)}>
      <div className="grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
        {/* Metin — paragraflar sırayla belirir */}
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 130}>
              <p className="border-l-2 border-ink-800 pl-5 text-base leading-[1.85] text-fg-muted transition-colors duration-500 hover:border-accent/60 sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Rakamlar — görünürken sayarak artar */}
        {about.stats.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 self-start">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.value + i} delay={140 + i * 100}>
                <Spotlight
                  tilt
                  maxTilt={7}
                  className="edge-light h-full rounded-2xl border border-ink-800 bg-ink-900/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600"
                >
                  <CountUp
                    value={stat.value}
                    className="bg-gradient-to-br from-accent-bright to-accent-2 bg-clip-text font-mono text-3xl font-semibold tracking-tight text-transparent"
                  />
                  <div className="mt-2 text-sm leading-snug text-fg-subtle">
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
