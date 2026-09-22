import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, seo } from "@/content/site";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext olmazsa Turkce karakterler bozuluyor
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
    // link onizlemesinde cikan gorsel, metadataBase mutlak adrese ceviriyor
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: seo.description.en,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // tema degisince Provider bu meta'yi guncelliyor
  themeColor: "#14171e",
  colorScheme: "dark light",
};

// google'a kim oldugumu anlatan yapisal veri
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
    // suppressHydrationWarning lazim: asagidaki tema betigi <html>'e React'ten
    // once data-theme yaziyor, sunucu ciktisinda o oznitelik yok ve React bunu
    // uyusmazlik sanip uyari basiyordu.
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable}`}
    >
      <body>
        {/* Ilk boyamadan once calismasi lazim, yoksa acik tema secen biri sayfayi
            bir an koyu goruyor. Govdenin ilk cocugu oldugu icin alti henuz bos. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />

        <script
          type="application/ld+json"
          // sabit JSON, icinde kullanici girdisi yok
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
