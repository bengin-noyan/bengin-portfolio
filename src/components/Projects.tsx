"use client";

import { projects, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

type Project = (typeof projects)[number];

/** Görsel verilmediğinde başlıktan türetilen, her projede farklı bir kapak. */
function coverStyle(title: string): React.CSSProperties {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) % 360;
  }
  return {
    backgroundImage: `radial-gradient(120% 120% at 20% 0%, hsl(${hash} 82% 58% / 0.5) 0%, transparent 55%), radial-gradient(120% 120% at 85% 100%, hsl(${(hash + 70) % 360} 82% 56% / 0.42) 0%, transparent 55%)`,
  };
}

/** Kapak alanı: verilen görsel ya da üretilen degrade + baş harfler. */
function Cover({ project, tall }: { project: Project; tall?: boolean }) {
  const ratio = tall ? "aspect-[16/10]" : "aspect-[16/9]";

  if (project.image) {
    return (
      <div className={`${ratio} relative overflow-hidden bg-ink-850`}>
        {/* Statik export'ta next/image optimizasyonu kapalı; plain img daha öngörülebilir. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        {/* Üzerinden geçen parlama */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/10 opacity-0 group-hover:animate-sheen group-hover:opacity-100"
        />
      </div>
    );
  }

  return (
    <div
      className={`${ratio} relative grid place-items-center overflow-hidden bg-ink-850`}
      style={coverStyle(project.title)}
    >
      <div className="bg-grid absolute inset-0 opacity-25 transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
      <span className="relative font-mono text-4xl font-bold tracking-tighter text-white/85 transition-transform duration-700 ease-out group-hover:scale-110 sm:text-5xl">
        {project.title
          .replace(/[^\p{L}\p{N} ]/gu, " ")
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((w) => w[0])
          .join("")}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/10 opacity-0 group-hover:animate-sheen group-hover:opacity-100"
      />
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLang();

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {project.links.demo ? (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-medium text-accent-bright transition-colors duration-200 hover:border-accent/70 hover:bg-accent/20"
        >
          {t(ui.liveDemo)}
          <Icon
            name="arrowUpRight"
            className="size-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      ) : null}

      {project.links.repo ? (
        <a
          href={project.links.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-lg border border-ink-700 px-3.5 py-2 text-xs font-medium text-fg-muted transition-colors duration-200 hover:border-ink-600 hover:text-fg"
        >
          <Icon name="github" className="size-3.5" />
          {t(ui.sourceCode)}
        </a>
      ) : null}
    </div>
  );
}

function Tags({ items, baseDelay = 0 }: { items: readonly string[]; baseDelay?: number }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((tag, i) => (
        <Reveal key={tag} as="li" delay={baseDelay + i * 60}>
          <span className="inline-block rounded-md bg-ink-800/70 px-2 py-1 font-mono text-[11px] tracking-tight text-fg-subtle transition-colors duration-200 hover:text-accent-bright">
            {tag}
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export function Projects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" index="03" title={t(ui.sectionWork)} intro={t(ui.workIntro)}>
      {/* Öne çıkan projeler — dönüşümlü hizalanan geniş kartlar */}
      <div className="space-y-8">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <Spotlight
              as="article"
              className={`group grid overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-colors duration-500 hover:border-ink-600 hover:bg-ink-900/70 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Cover project={project} tall />

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex items-center gap-3">
                  {project.year ? (
                    <span className="rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 font-mono text-[11px] text-accent-2">
                      {project.year}
                    </span>
                  ) : null}
                  <span className="font-mono text-[11px] tracking-widest text-fg-subtle uppercase">
                    Featured
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent-bright sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-base font-medium text-accent-bright/90">
                  {t(project.blurb)}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  {t(project.description)}
                </p>

                <Tags items={project.tags} baseDelay={i * 120 + 150} />
                <ProjectLinks project={project} />
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      {/* Diğer projeler — kompakt ızgara, imlece göre hafif eğilir */}
      {rest.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 110}>
              <Spotlight
                as="article"
                tilt
                maxTilt={4}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600 hover:bg-ink-900/70"
              >
                <Cover project={project} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-accent-bright">
                      {project.title}
                    </h3>
                    {project.year ? (
                      <span className="font-mono text-xs text-fg-subtle">
                        {project.year}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                    {t(project.blurb)}
                  </p>

                  <div className="mt-auto">
                    <Tags items={project.tags} baseDelay={i * 110 + 140} />
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
