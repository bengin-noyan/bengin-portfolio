"use client";

import { profile, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./ui/Icon";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-base text-fg-subtle sm:flex-row sm:px-8">
        <p>
          © {year} {profile.name}
          <span aria-hidden="true" className="mx-2 text-ink-600">
            ·
          </span>
          {t(ui.builtWith)}
        </p>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 transition-colors duration-200 hover:text-accent-bright"
        >
          {t(ui.backToTop)}
          <Icon name="arrowUp" className="size-3.5" strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}
