"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Icon } from "./ui/Icon";

const SECTIONS = [
  { id: "about", label: ui.navAbout },
  { id: "work", label: ui.navWork },
  { id: "experience", label: ui.navExperience },
  { id: "education", label: ui.sectionEducation },
  { id: "contact", label: ui.navContact },
];

export function Header() {
  const { t, lang, toggle } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Hap menüdeki kayan vurgu — genişliği ve konumu aktif bağlantıdan ölçülür.
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [pill, setPill] = useState({ left: 0, width: 0, shown: false });

  const measurePill = useCallback(() => {
    const nav = navRef.current;
    const el = active ? linkRefs.current.get(active) : undefined;
    if (!nav || !el) {
      setPill((p) => (p.shown ? { ...p, shown: false } : p));
      return;
    }
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    // Degismediyse state'e dokunma: bu olcum ResizeObserver icinden de
    // cagriliyor ve her seferinde yeniden render tetiklemek tarayicida
    // "ResizeObserver loop completed with undelivered notifications"
    // hatasina yol acabiliyor.
    setPill((p) =>
      p.left === left && p.width === width && p.shown
        ? p
        : { left, width, shown: true },
    );
  }, [active]);

  // Aktif bölüm değişince, dil değişince (etiket genişlikleri kayar) ve
  // menü yeniden boyutlanınca vurguyu yeniden ölç.
  useEffect(() => {
    measurePill();
  }, [measurePill, lang]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new ResizeObserver(() => measurePill());
    observer.observe(nav);
    return () => observer.disconnect();
  }, [measurePill]);

  // Sayfa kaydırılınca header camlaşsın
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

  // Menü açıkken masaüstü genişliğine geçilirse panel md:hidden ile kaybolur
  // ama açık sayılmaya devam eder — bu da gövde kaydırmasını kilitli bırakır.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (mq.matches) setMenuOpen(false);
    };
    close();
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  const isLight = theme === "light";
  const themeLabel = t(isLight ? ui.switchToDark : ui.switchToLight);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 sm:px-8">
        {/* Yüzen hap menü — aktif bölüm kayan bir vurguyla işaretlenir */}
        <nav
          ref={navRef}
          aria-label="Primary"
          className="glass absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-ink-700/80 p-1 shadow-lg shadow-ink-950/20 lg:flex"
        >
          {/* Kayan vurgu: layout tetiklemeyen transform ile taşınır */}
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-0 -z-10 rounded-full bg-ink-800/90 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: `${pill.width}px`,
              transform: `translateX(${pill.left}px)`,
              opacity: pill.shown ? 1 : 0,
            }}
          />

          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(node) => {
                if (node) linkRefs.current.set(id, node);
                else linkRefs.current.delete(id);
              }}
              aria-current={active === id ? "true" : undefined}
              className={`relative rounded-full px-4 py-2 text-base whitespace-nowrap transition-colors duration-300 ${
                active === id ? "text-fg" : "text-fg-muted hover:text-fg"
              }`}
            >
              {t(label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Tema değiştirici — iki ikon üst üste durur, biri dönerek bırakır */}
          <button
            type="button"
            onClick={toggleTheme}
            title={themeLabel}
            aria-label={themeLabel}
            aria-pressed={isLight}
            className="glass grid size-11 place-items-center rounded-xl border border-ink-700 text-fg-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-bright"
          >
            {/* İkon hedefi gösterir: koyu temadayken güneş (tıkla → aydınlık),
                aydınlıkta ay. aria-label da aynı şeyi söylüyor. */}
            <span className="relative grid size-5 place-items-center">
              <Icon
                name="sun"
                className={`col-start-1 row-start-1 size-5 transition-all duration-500 ${
                  isLight
                    ? "scale-50 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
                strokeWidth={1.7}
              />
              <Icon
                name="moon"
                className={`col-start-1 row-start-1 size-5 transition-all duration-500 ${
                  isLight
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-50 -rotate-90 opacity-0"
                }`}
                strokeWidth={1.7}
              />
            </span>
          </button>

          {/* Dil değiştirici */}
          <button
            type="button"
            onClick={toggle}
            title={t(ui.switchLang)}
            aria-label={t(ui.switchLang)}
            className="glass flex items-center gap-2 rounded-xl border border-ink-700 px-3.5 py-2.5 text-base font-medium text-fg-muted transition-colors duration-200 hover:border-accent/50 hover:text-fg"
          >
            <Icon name="globe" className="size-5" strokeWidth={1.6} />
            {/* Seçili dil değil, tıklanınca geçilecek dil yazar */}
            <span className="font-mono uppercase">{lang === "tr" ? "en" : "tr"}</span>
          </button>

          {/* Mobil menü düğmesi */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t(ui.close) : t(ui.menu)}
            className="glass grid size-11 place-items-center rounded-xl border border-ink-700 text-fg-muted transition-colors hover:text-fg lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobil menü paneli.
          `invisible`: yalnızca max-height/opacity ile gizlenen panelin
          bağlantıları kapalıyken de Tab ile odaklanabiliyordu. */}
      <div
        id="mobile-menu"
        className={`glass mx-6 mt-3 overflow-hidden rounded-2xl border border-ink-800 transition-[max-height,opacity,visibility] duration-400 lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "invisible max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-1" aria-label="Mobile">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 border-b border-ink-800/70 py-4 text-base text-fg-muted transition-colors last:border-0 hover:text-fg"
            >
              {t(label)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
