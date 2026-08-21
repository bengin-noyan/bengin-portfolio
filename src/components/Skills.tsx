"use client";

import { skillGroups, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

export function Skills() {
  const { t } = useLang();

  return (
    <Section id="skills" index="02" title={t(ui.sectionSkills)}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={gi} delay={gi * 110}>
            <Spotlight
              tilt
              maxTilt={6}
              className="group h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600 hover:bg-ink-900/70"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-fg">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-[2]"
                />
                {t(group.title)}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <Reveal key={item} as="li" delay={gi * 110 + 120 + ii * 55}>
                    <span className="inline-block rounded-lg border border-ink-700/70 bg-ink-850/60 px-2.5 py-1.5 font-mono text-xs text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-bright">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
