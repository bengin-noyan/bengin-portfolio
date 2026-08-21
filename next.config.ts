import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik export: çıktı /out klasörüne düşer, herhangi bir statik hosting'e
  // (Vercel, Netlify, GitHub Pages, cPanel) olduğu gibi atılabilir.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
