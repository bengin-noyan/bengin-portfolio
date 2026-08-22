"use client";

import { certifications, education, experience, languages, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

export function Experience() {
  const { t } = useLang();

  return (
    <Section id="experience" title={t(ui.sectionExperience)}>
      {experience.length > 0 ? (
        /* Dikey zaman çizelgesi */
        <ol className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company + i} as="li" delay={i * 130}>
              <Spotlight className="surface edge-light rounded-2xl border border-ink-800 bg-ink-900/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600 sm:p-7">
                <div className="flex flex-col items-center gap-2 text-center">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">
                    {t(job.role)}
                    <span className="text-accent"> · </span>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/co inline-flex items-center gap-1 text-accent-bright transition-colors hover:text-accent-2"
                      >
                        {job.company}
                        <Icon
                          name="arrowUpRight"
                          className="size-3.5 transition-transform duration-300 group-hover/co:translate-x-0.5 group-hover/co:-translate-y-0.5"
                          strokeWidth={2}
                        />
                      </a>
                    ) : (
                      <span className="text-accent-bright">{job.company}</span>
                    )}
                  </h3>

                  <span className="text-center font-mono text-sm text-fg-subtle">
                    {t(job.period)}
                    {job.location ? (
                      <span className="block text-xs text-fg-subtle/70">
                        {t(job.location)}
                      </span>
                    ) : null}
                  </span>
                </div>

                <ul className="mx-auto mt-5 max-w-3xl space-y-3">
                  {t(job.highlights).map((line, li) => (
                    <Reveal key={li} as="li" delay={i * 130 + 140 + li * 80}>
                      <span className="block text-center text-base leading-relaxed text-fg-muted">
                        {line}
                      </span>
                    </Reveal>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {job.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-ink-800/70 px-2 py-1 font-mono text-xs text-fg-subtle transition-colors duration-200 hover:text-accent-bright"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </ol>
      ) : null}

      {/* Eğitim */}
      {education.length > 0 ? (
        <div id="education" className={experience.length > 0 ? "mt-16" : ""}>
          <Reveal>
            <h3 className="text-center text-base font-semibold tracking-widest text-fg-subtle uppercase">
              {t(ui.sectionEducation)}
            </h3>
          </Reveal>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={i} delay={i * 110}>
                <Spotlight
                  tilt
                  maxTilt={5}
                  className="surface h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600"
                >
                  <div className="text-center text-base font-medium text-fg">
                    {t(item.school)}
                  </div>
                  <div className="mt-1 text-center text-base text-fg-muted">{t(item.degree)}</div>
                  <div className="mt-2 text-center font-mono text-sm text-accent-2">
                    {item.period}
                  </div>
                  {item.note ? (
                    <div className="mt-2 text-center text-sm leading-relaxed text-fg-subtle">
                      {t(item.note)}
                    </div>
                  ) : null}
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      {/* Diller & sertifikalar */}
      {languages.length > 0 || certifications.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {languages.length > 0 ? (
            <Reveal>
              <Spotlight
                tilt
                maxTilt={5}
                className="surface h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600"
              >
                <h3 className="text-center text-base font-semibold tracking-widest text-fg-subtle uppercase">
                  {t(ui.sectionLanguages)}
                </h3>
                <ul className="mt-4 space-y-2">
                  {languages.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-center gap-3 text-base"
                    >
                      <span className="text-fg">{t(item.name)}</span>
                      <span className="font-mono text-sm text-accent-2">
                        {t(item.level)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ) : null}

          {certifications.length > 0 ? (
            <Reveal delay={110}>
              <Spotlight
                tilt
                maxTilt={5}
                className="surface h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600"
              >
                <h3 className="text-center text-base font-semibold tracking-widest text-fg-subtle uppercase">
                  {t(ui.sectionCertifications)}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {certifications.map((item, i) => (
                    <li key={i} className="text-center text-base text-fg-muted">
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
}
