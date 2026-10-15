"use client";

import { skillGroups, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

// Gruplari ayiran tek sey ust kenardaki aksan cizgisi. Kendi renklerimi
// kullaniyorum, boylece tema degisince onlar da uyuyor.
const ACCENT_RULES = [
  "from-accent",
  "from-accent-2",
  "from-accent-3",
  "from-accent-bright",
];

// Alti sutunluk izgarada genis ve dar satirlar sirayla diziliyor. Hepsi esit
// kutu olunca tablo gibi duruyordu. Listede olmayan grup sayisinda hepsi esit
// genislige duser.
const LAYOUTS: Record<number, string[]> = {
  // 3+3 / 2+2+2
  5: ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"],
  // 3+3 / 2+2+2 / 3+3. Tablette iki sutun var, tek kalan son grup tam satira yayiliyor.
  7: [
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-3",
    "sm:col-span-2 lg:col-span-3",
  ],
};

export function Skills() {
  const { t } = useLang();
  const spans = LAYOUTS[skillGroups.length] ?? skillGroups.map(() => "lg:col-span-2");

  return (
    <Section id="skills" title={t(ui.sectionSkills)}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((group, gi) => {
          const rule = ACCENT_RULES[gi % ACCENT_RULES.length];

          return (
            <Reveal key={gi} delay={gi * 110} className={spans[gi]}>
              <Spotlight
                tilt
                maxTilt={5}
                className="surface group relative h-full overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600 hover:bg-ink-900/70"
              >
                {/* ust kenardaki aksan cizgisi, gruba gore renk degisiyor */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${rule} to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <h3 className="text-center text-lg font-semibold tracking-tight text-balance text-fg">
                  {t(group.title)}
                </h3>

                <ul className="mt-6 flex flex-wrap justify-center gap-2">
                  {group.items.map((item, ii) => (
                    <Reveal key={item} as="li" delay={gi * 110 + 120 + ii * 45}>
                      <span className="inline-block rounded-lg bg-ink-800/70 px-3 py-1.5 font-mono text-sm tracking-tight text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-800 hover:text-fg">
                        {item}
                      </span>
                    </Reveal>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
