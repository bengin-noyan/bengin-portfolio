import type { MetadataRoute } from "next";
import { seo } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}

// statik export'ta sart, rota build aninda bir kez uretiliyor
export const dynamic = "force-static";
