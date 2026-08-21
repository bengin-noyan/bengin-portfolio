"use client";

import { useState } from "react";
import { contact, profile, socials, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon, type IconName } from "./ui/Icon";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";
import { SplitText } from "./ui/SplitText";

export function Contact() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Pano izni yoksa sessizce geç — mailto bağlantısı hâlâ çalışıyor.
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/50 px-7 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20">
          {/* Kartın arkasındaki hareketli ışıklar */}
          <div
            aria-hidden="true"
            className="animate-aurora-a pointer-events-none absolute -top-32 left-1/3 size-96 rounded-full bg-accent/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="animate-aurora-b pointer-events-none absolute -bottom-40 right-1/4 size-80 rounded-full bg-accent-2/15 blur-[110px]"
          />

          <div className="relative">
            <span className="font-mono text-sm text-accent-2">05</span>

            <SplitText
              as="h2"
              key={lang}
              text={t(contact.heading)}
              stagger={30}
              gradient
              className="mt-4 block text-3xl font-semibold tracking-tighter text-balance sm:text-5xl"
            />

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
                {t(contact.body)}
              </p>
            </Reveal>

            {/* E-posta eylemleri */}
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={0.22}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-ink-950 shadow-lg shadow-accent/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/45"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                    <Icon name="mail" className="size-4" strokeWidth={2} />
                    {t(ui.emailMe)}
                  </a>
                </Magnetic>

                <Magnetic strength={0.18}>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-850/60 px-5 py-4 font-mono text-sm text-fg-muted transition-colors duration-300 hover:border-accent/50 hover:text-fg"
                  >
                    <Icon
                      name={copied ? "check" : "copy"}
                      className={`size-4 transition-colors duration-300 ${copied ? "text-accent" : ""}`}
                    />
                    <span>{copied ? t(ui.copied) : profile.email}</span>
                  </button>
                </Magnetic>
              </div>
            </Reveal>

            {profile.phone ? (
              <Reveal delay={360}>
                <p className="mt-5 font-mono text-sm text-fg-subtle">
                  {profile.phone}
                </p>
              </Reveal>
            ) : null}

            {/* Sosyal bağlantılar */}
            <Reveal delay={400}>
              <div className="mt-10 flex items-center justify-center gap-2">
                {socials.map((s) => (
                  <Magnetic key={s.label} strength={0.35}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      title={s.label}
                      className="grid size-11 place-items-center rounded-xl border border-ink-800 text-fg-subtle transition-colors duration-300 hover:border-accent/50 hover:text-accent-bright"
                    >
                      <Icon name={s.icon as IconName} className="size-5" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
