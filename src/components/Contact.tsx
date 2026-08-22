"use client";

import { contact, profile, socials } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { ContactForm } from "./ui/ContactForm";
import { Icon, type IconName } from "./ui/Icon";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";
import { SplitText } from "./ui/SplitText";

export function Contact() {
  const { t, lang } = useLang();

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 lg:py-32"
    >
      <Reveal>
        <div className="surface relative overflow-hidden rounded-3xl border border-ink-800 bg-ink-900/50 px-7 py-16 text-center backdrop-blur-sm sm:px-12 sm:py-20">
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
            <SplitText
              as="h2"
              key={lang}
              text={t(contact.heading)}
              stagger={30}
              gradient
              className="block text-3xl font-semibold tracking-tighter text-balance sm:text-5xl"
            />

            {/* Giriş cümlesi — e-posta adresi cümlenin içinde bağlantı olarak */}
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
                {t(contact.bodyBefore)}{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-accent-bright underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent"
                >
                  {profile.email}
                </a>{" "}
                {t(contact.bodyAfter)}
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ContactForm />
            </Reveal>

            {/* Sosyal bağlantılar */}
            <Reveal delay={400}>
              <div className="mt-8 flex items-center justify-center gap-2">
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
