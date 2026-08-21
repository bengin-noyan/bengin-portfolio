import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, seo } from "@/content/site";
import { LangProvider } from "@/lib/i18n";
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
  themeColor: "#08090c",
  colorScheme: "dark",
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
    <html lang="tr" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          // Sabit, kullanıcı girdisi içermeyen JSON — güvenli.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
