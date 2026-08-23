import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Next'in hazır kural setleri henüz eski (eslintrc) biçimde yayınlanıyor;
// FlatCompat onları ESLint 9'un flat config'ine çeviriyor.
const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  {
    // Üretilen çıktılar denetlenmez: `out/` statik export, `.next` build önbelleği.
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
