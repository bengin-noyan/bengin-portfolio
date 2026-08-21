"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { L, Lang } from "@/content/site";

const STORAGE_KEY = "portfolio-lang";

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Çift dilli bir değeri aktif dile göre çözer. */
  t: <T>(value: L<T>) => T;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  // Kayıtlı tercih yoksa tarayıcı diline bak.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "tr" || saved === "en") {
      setLangState(saved);
      return;
    }
    setLangState(navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "tr" ? "en" : "tr"),
      t: <T,>(value: L<T>) => value[lang],
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
