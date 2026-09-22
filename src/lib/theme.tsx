"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

// adres cubugu rengi, globals.css'teki ink-950 ile ayni olmali
const BROWSER_CHROME: Record<Theme, string> = {
  dark: "#14171e",
  light: "#fbfbfd",
};

// <head>'e gomulen kucuk betik. React devreye girmeden once calisiyor ki
// acik tema secen biri sayfayi bir an koyu gormesin. Provider'la ayni anahtari
// okuyor.
export const themeInitScript = `try{var t=localStorage.getItem(${JSON.stringify(
  STORAGE_KEY,
)});document.documentElement.dataset.theme=(t==="light"||t==="dark")?t:"dark"}catch(e){}`;

type Ctx = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Sunucu ve ilk client render'i ayni olsun diye koyuyla basliyorum,
  // kayitli tercihi asagidaki effect okuyor.
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") setThemeState(saved);
    } catch {
      // depolama kapaliysa (gizli sekme vs.) koyu temada kal
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_CHROME[theme]);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // yazamiyorsak tercih sadece bu oturumda gecerli olur, sorun degil
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      theme,
      setTheme,
      toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme, ThemeProvider içinde çağrılmalı");
  return ctx;
}
