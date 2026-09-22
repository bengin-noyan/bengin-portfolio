import type { MetadataRoute } from "next";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

// statik export'ta sart, rota build aninda bir kez uretiliyor
export const dynamic = "force-static";
