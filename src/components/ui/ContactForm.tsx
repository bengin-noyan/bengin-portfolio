"use client";

import { useEffect, useRef, useState } from "react";
import { contact, profile, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * İletişim formu. Site statik export edildiği için sunucu tarafı yok:
 *
 * - `contact.formEndpoint` doluysa mesaj oraya POST edilir.
 * - Boşsa mesaj kullanıcının kendi e-posta istemcisinde hazır hâlde açılır
 *   (mailto). Böylece form hiçbir servise kaydolmadan da çalışır.
 */
export function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef(0);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  function scheduleReset() {
    // Art arda gönderimde önceki zamanlayıcı kalırsa mesaj erken kaybolur.
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 6000);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Bot tuzağı: gerçek kullanıcı bu alanı göremez, dolduran bot demektir.
    if (data.get("_gotcha")) {
      setStatus("sent");
      form.reset();
      return;
    }
    data.delete("_gotcha");

    // Gönderim adresi yoksa e-posta istemcisine düş.
    if (!contact.formEndpoint) {
      const from = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const subject = encodeURIComponent(`Portfolyo üzerinden mesaj — ${from}`);
      const body = encodeURIComponent(`${message}\n\n— ${from}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
      scheduleReset();
      return;
    }

    if (contact.formAccessKey) data.set("access_key", contact.formAccessKey);

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
    scheduleReset();
  }

  const field =
    "w-full rounded-2xl border border-ink-700 bg-ink-850/70 px-5 py-4 text-base text-fg placeholder:text-fg-subtle transition-colors duration-200 outline-none focus:border-accent/60";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-2xl space-y-4 text-left">
      <label className="block">
        <span className="sr-only">{t(ui.formEmail)}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={t(ui.formEmail)}
          className={field}
        />
      </label>

      <label className="block">
        <span className="sr-only">{t(ui.formMessage)}</span>
        <textarea
          name="message"
          required
          rows={8}
          placeholder={t(ui.formMessage)}
          className={`${field} resize-y`}
        />
      </label>

      {/* Bal küpü — ekranda ve ekran okuyucuda görünmez, yalnızca botlar doldurur */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/45 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t(ui.formSending) : t(ui.formSend)}
        <Icon
          name="send"
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </button>

      {/* Sonuç bildirimi — ekran okuyucuya da duyurulur */}
      <p
        aria-live="polite"
        className={`min-h-5 text-base transition-colors duration-300 ${
          status === "error" ? "text-accent-3" : "text-accent-bright"
        }`}
      >
        {status === "sent" ? t(ui.formSuccess) : null}
        {status === "error" ? t(ui.formError) : null}
      </p>
    </form>
  );
}
