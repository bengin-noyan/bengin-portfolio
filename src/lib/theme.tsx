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

/** Adres çubuğu / tarayıcı arayüzü rengi — globals.css'teki ink-950 ile aynı. */
const BROWSER_CHROME: Record<Theme, string> = {
  dark: "#14171e",
  light: "#fbfbfd",
};

/**
 * <head>'e gömülen küçük betik. React devreye girmeden önce çalışır ki
 * açık tema seçmiş biri sayfayı bir an koyu görmesin ("theme flash").
 * Provider ile aynı anahtarı okur.
 */
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
  // Sunucu ve ilk istemci render'ı aynı olsun diye koyuyla başla;
  // kayıtlı tercih aşağıdaki effect'te okunur.
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") setThemeState(saved);
    } catch {
      // Depolama kapalıysa (gizli sekme vb.) varsayılan koyu temada kal.
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
      // Yazamıyorsak tercih bu oturumla sınırlı kalır — sorun değil.
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
