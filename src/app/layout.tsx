import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, seo } from "@/content/site";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext: Türkçe karakterler için
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

const title = `${profile.name} · ${profile.title.tr}`;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: seo.description.tr,
  keywords: seo.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: seo.siteUrl,
    title,
    description: seo.description.tr,
    siteName: profile.name,
    locale: "tr_TR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: seo.description.en,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // Provider tema degisince bu meta'nin icerigini gunceller.
  themeColor: "#14171e",
  colorScheme: "dark light",
};

/** Arama motorlarına kim olduğunu anlatan yapısal veri. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title.en,
  email: `mailto:${profile.email}`,
  url: seo.siteUrl,
  description: seo.description.en,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: asagidaki tema betigi <html>'e React
    // hidrasyondan once data-theme yaziyor; sunucu ciktisinda bu oznitelik
    // yok, dolayisiyla React bunu uyusmazlik sayip uyariyordu. Kasitli fark,
    // sadece bu etiketin kendi oznitelikleri icin bastiriliyor.
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>
        {/* Ilk boyamadan once calisir: acik tema secmis biri sayfayi bir an
            koyu gormesin. Govdenin ilk cocugu oldugu icin altindaki icerik
            henuz boyanmamis olur. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        <script
          type="application/ld+json"
          // Sabit, kullanıcı girdisi içermeyen JSON — güvenli.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
