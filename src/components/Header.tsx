"use client";

import { useEffect, useState } from "react";
import { profile, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./ui/Icon";

const SECTIONS = [
  { id: "about", label: ui.navAbout },
  { id: "work", label: ui.navWork },
  { id: "experience", label: ui.navExperience },
  { id: "contact", label: ui.navContact },
];

export function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Header'ın sayfa kaydırılınca camlaşması
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktif bölümü menüde işaretle (scroll-spy)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Mobil menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-ink-800/80 py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={profile.name}
        >
          <span className="relative grid size-9 place-items-center rounded-lg border border-ink-700 bg-ink-850 font-mono text-sm font-bold text-accent-bright transition-colors duration-300 group-hover:border-accent/60">
            {profile.initials}
            <span className="absolute inset-0 -z-10 rounded-lg bg-accent/25 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">
            {profile.name}
          </span>
        </a>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {SECTIONS.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`group relative rounded-lg px-3.5 py-2 text-sm transition-colors duration-200 ${
                active === id ? "text-fg" : "text-fg-muted hover:text-fg"
              }`}
            >
              <span className="mr-1.5 font-mono text-xs text-accent-2/70">
                0{i + 1}.
              </span>
              {t(label)}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-300 ${
                  active === id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Dil değiştirici */}
          <button
            type="button"
            onClick={toggle}
            title={t(ui.switchLang)}
            aria-label={t(ui.switchLang)}
            className="flex items-center gap-1.5 rounded-lg border border-ink-700 bg-ink-850/60 px-2.5 py-2 text-xs font-medium text-fg-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
          >
            <Icon name="globe" className="size-4" strokeWidth={1.6} />
            <span className="font-mono uppercase">{lang}</span>
          </button>

          {/* CV butonu */}
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="hidden items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-medium text-accent-bright transition-all duration-200 hover:border-accent/70 hover:bg-accent/20 sm:flex"
            >
              <Icon name="download" className="size-4" strokeWidth={1.6} />
              CV
            </a>
          ) : null}

          {/* Mobil menü düğmesi */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t(ui.close) : t(ui.menu)}
            className="grid size-9 place-items-center rounded-lg border border-ink-700 bg-ink-850/60 text-fg-muted transition-colors hover:text-fg md:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="size-4.5" />
          </button>
        </div>
      </div>

      {/* Mobil menü paneli */}
      <div
        className={`glass overflow-hidden border-t border-ink-800 transition-[max-height,opacity] duration-400 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2" aria-label="Mobile">
          {SECTIONS.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-ink-800/70 py-4 text-base text-fg-muted transition-colors last:border-0 hover:text-fg"
            >
              <span className="font-mono text-xs text-accent-2/70">0{i + 1}.</span>
              {t(label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
