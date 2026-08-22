"use client";

import { projects, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { Spotlight } from "./ui/Spotlight";

type Project = (typeof projects)[number];

/**
 * Proje adından türeyen sabit bir renk tonu. Aynı proje her zaman aynı rengi
 * alır; listeye yeni proje eklendiğinde kendi rengiyle gelir.
 */
function hueOf(title: string): number {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) % 360;
  }
  return hash;
}

/**
 * Kartın üst kenarındaki ince aksan çizgisi.
 * Ekran görüntüsü olmayan projeye sahte bir kapak üretmek yer tutucu gibi
 * duruyordu; projeyi ayıran kimliği bu çizgi taşıyor.
 */
function AccentRule({ title }: { title: string }) {
  const hue = hueOf(title);
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        backgroundImage: `linear-gradient(90deg, hsl(${hue} 85% 62%) 0%, hsl(${
          (hue + 70) % 360
        } 85% 60%) 45%, transparent 100%)`,
      }}
    />
  );
}

/** Kapak alanı — yalnızca gerçek ekran görüntüsü verilmiş projelerde çizilir. */
function Cover({ project, tall }: { project: Project; tall?: boolean }) {
  if (!project.image) return null;

  return (
    <div
      className={`${tall ? "aspect-[16/10]" : "aspect-[16/9]"} relative overflow-hidden bg-ink-850`}
    >
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

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLang();

  // Depolar gizli oldugu icin cogu projede hic link yok; bos bir kap
  // birakmak kartin altina sahipsiz bir bosluk ekliyordu.
  if (!project.links.demo && !project.links.repo) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      {project.links.demo ? (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer noopener"
          className="group/link inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent-bright transition-colors duration-200 hover:border-accent/70 hover:bg-accent/20"
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
          className="inline-flex items-center gap-1.5 rounded-lg border border-ink-700 px-3.5 py-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:border-ink-600 hover:text-fg"
        >
          <Icon name="github" className="size-3.5" />
          {t(ui.sourceCode)}
        </a>
      ) : null}
    </div>
  );
}

/** CV'deki gibi başlıklı maddeler — her biri alt alta. */
function Highlights({
  items,
  baseDelay = 0,
}: {
  items: readonly { label: string; text: string }[];
  baseDelay?: number;
}) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-6 w-full max-w-2xl space-y-5">
      {items.map((item, i) => (
        <Reveal key={item.label} as="li" delay={baseDelay + i * 90}>
          <div className="text-center">
            <p className="text-base font-semibold tracking-tight text-accent-bright">
              {item.label}
            </p>
            <p className="mt-1 text-base leading-relaxed text-fg-muted">
              {item.text}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

function Tags({ items, baseDelay = 0 }: { items: readonly string[]; baseDelay?: number }) {
  return (
    <ul className="mt-5 flex flex-wrap justify-center gap-2">
      {items.map((tag, i) => (
        <Reveal key={tag} as="li" delay={baseDelay + i * 60}>
          <span className="inline-block rounded-md bg-ink-800/70 px-2 py-1 font-mono text-xs tracking-tight text-fg-subtle transition-colors duration-200 hover:text-accent-bright">
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
    <Section id="work" srTitle={t(ui.sectionWork)} intro={t(ui.workIntro)}>
      {/* Öne çıkan projeler */}
      <div className="space-y-6">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <Spotlight
              as="article"
              tilt
              maxTilt={4}
              className={`surface group relative grid overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-colors duration-500 hover:border-ink-600 hover:bg-ink-900/70 ${
                // İki sütunlu düzen yalnızca gerçek kapak görseli varken
                // anlamlı; yoksa kart tek sütunlu editoryal düzene geçer.
                project.image
                  ? `lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:nth-child(2)]:order-2" : ""}`
                  : ""
              }`}
            >
              <AccentRule title={project.title} />
              <Cover project={project} tall />

              <div className="flex flex-col items-center justify-center p-7 text-center sm:p-10">
                <div className="flex items-center gap-3">
                  {project.year ? (
                    <span className="rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 font-mono text-xs text-accent-2">
                      {project.year}
                    </span>
                  ) : null}
                  <span className="font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    Featured
                  </span>
                </div>

                <h3 className="mt-4 max-w-3xl text-center text-2xl font-semibold tracking-tight text-balance text-fg transition-colors duration-300 group-hover:text-accent-bright sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl text-center text-base font-medium text-accent-bright/90">
                  {t(project.blurb)}
                </p>

                <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-fg-muted">
                  {t(project.description)}
                </p>

                <div className="max-w-3xl">
                  <Highlights items={t(project.highlights)} baseDelay={i * 120 + 120} />
                </div>

                <Tags items={project.tags} baseDelay={i * 120 + 150} />
                <ProjectLinks project={project} />
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      {/* Diğer projeler — kompakt ızgara, imlece göre hafif eğilir */}
      {rest.length > 0 ? (
        <div className="mt-6 space-y-6">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 110}>
              <Spotlight
                as="article"
                tilt
                maxTilt={4}
                className="surface group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 backdrop-blur-sm transition-colors duration-300 hover:border-ink-600 hover:bg-ink-900/70"
              >
                <AccentRule title={project.title} />
                <Cover project={project} />

                <div className="flex flex-1 flex-col items-center p-7 text-center sm:p-10">
                  {project.year ? (
                    <span className="w-fit rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 font-mono text-xs text-accent-2">
                      {project.year}
                    </span>
                  ) : null}

                  <h3 className="mt-4 max-w-3xl text-center text-2xl font-semibold tracking-tight text-balance text-fg transition-colors duration-300 group-hover:text-accent-bright sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-center text-base font-medium text-accent-bright/90">
                    {t(project.blurb)}
                  </p>

                  <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-fg-muted">
                    {t(project.description)}
                  </p>

                  <div className="max-w-3xl">
                    <Highlights items={t(project.highlights)} baseDelay={i * 110 + 110} />
                  </div>

                  <Tags items={project.tags} baseDelay={i * 110 + 140} />
                  <ProjectLinks project={project} />
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
