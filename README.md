# bengin-portfolio

Modern teknolojilerle geliştirdiğim masaüstü, web ve AI destekli yazılım projelerimi barındıran kişisel portfolyo sitem.

Next.js 15 · TypeScript · Tailwind CSS v4 ile kurulmuş, iki dilli (TR/EN) kişisel portfolyo sitesi.
Tamamen statik olarak dışa aktarılır — sunucu gerektirmez.

---

## Hızlı başlangıç

```bash
npm install       # bağımlılıklar (bir kez)
npm run dev       # geliştirme sunucusu → http://localhost:3000
npm run build     # üretim derlemesi   → /out klasörü
```

---

## ⚠ Yayına almadan önce değiştir

`src/content/site.ts` içinde şu yer tutucular duruyor:

| Alan | Şu an | Ne yapmalı |
|------|-------|------------|
| `socials` | `kullaniciadin` | GitHub ve LinkedIn kullanıcı adını yaz |
| `projects` | 4 örnek proje | Kendi projelerinle değiştir, açıklamalara somut sonuç ekle |
| `experience` | `Şirket Adı` | Gerçek staj/işlerini yaz — yoksa `[]` yapıp bölümü gizle |
| `education[].period` | `2021 — 2026` | Başlangıç yılını düzelt |
| `profile.location` | `Denizli` | Kendi şehrini yaz |
| `about.stats` | `10+` proje | Gerçek sayıyla değiştir |
| `seo.siteUrl` | Vercel örneği | Deploy sonrası gerçek adresi yaz |
| `public/cv.pdf` | yok | CV'ni ekle (yoksa `profile.resumeUrl = ""`) |

---

## ⭐ İçeriği nasıl güncellerim?

**Tek bir dosya:** [`src/content/site.ts`](src/content/site.ts)

Sitedeki bütün metinler, projeler, iş deneyimleri ve bağlantılar orada.
Başka hiçbir dosyaya dokunmana gerek yok. Dosyayı kaydettiğin anda
`npm run dev` çalışıyorsa site kendini yeniler.

Dosya numaralandırılmış bölümlere ayrılmıştır:

| # | Bölüm | Ne yapar |
|---|-------|----------|
| 1 | `profile` | Ad, ünvan, özet cümle, konum, e-posta, CV bağlantısı |
| 2 | `socials` | GitHub / LinkedIn / e-posta bağlantıları |
| 3 | `about` | Hakkımda paragrafları + rakamlar |
| 4 | `skillGroups` | Yetenek kategorileri ve etiketleri |
| 5 | `projects` | Proje kartları |
| 6 | `experience` | İş deneyimi zaman çizelgesi |
| 7 | `education` | Eğitim ve sertifikalar |
| 8 | `contact` | İletişim bölümü başlık ve metni |
| 9 | `ui` | Menü ve buton yazıları |
| 10 | `seo` | Site adresi, açıklama, anahtar kelimeler |

### İki dillilik

Çift dilli her alan şu biçimdedir:

```ts
{ tr: "Türkçe metin", en: "English text" }
```

İkisini de doldur. Ziyaretçi sağ üstteki **TR / EN** düğmesiyle geçiş yapar;
tercihi `localStorage`'a yazılır. İlk ziyarette tarayıcı diline göre otomatik seçilir.

### Sık yapılan değişiklikler

**Proje eklemek** — `projects` dizisine yeni bir nesne ekle:

```ts
{
  title: "Proje Adı",
  year: "2026",
  featured: true,               // true → büyük kart, listenin başında
  blurb: { tr: "Tek cümlelik özet.", en: "One-line summary." },
  description: { tr: "Detaylı anlatım…", en: "Detailed write-up…" },
  tags: ["React", "TypeScript"],
  image: "/projects/proje.png", // boş bırakırsan degrade kapak üretilir
  links: { demo: "https://…", repo: "https://…" },
}
```

**Bir bölümü gizlemek** — dizisini boşalt: `export const education = [];`

**CV eklemek** — PDF'i `public/cv.pdf` olarak koy. Kaldırmak için
`profile.resumeUrl` değerini `""` yap; buton kendiliğinden kaybolur.

**Proje görseli eklemek** — dosyayı `public/projects/` içine at,
yolunu `image` alanına `/projects/dosya.png` biçiminde yaz.

**Renkleri değiştirmek** — [`src/app/globals.css`](src/app/globals.css) dosyasının
en üstündeki `@theme` bloğu ("Aurora" paleti). `--color-accent` nane yeşili ana
vurgu, `--color-accent-2` periwinkle mavi, `--color-accent-3` yumuşak pembe.
`--color-ink-*` zemin katmanlarıdır. Değiştirdiğinde tüm site uyar.

**Odak alanlarını değiştirmek** — hero'da daktilo etkisiyle dönen ifadeler
`profile.focus` alanında. İstediğin kadar ekle veya çıkar.

---

## Yayına alma

### Vercel (önerilen)

1. Projeyi bir GitHub deposuna gönder.
2. [vercel.com/new](https://vercel.com/new) → depoyu içe aktar.
3. Ayara dokunma, **Deploy**. Sonraki her `git push` otomatik yayınlanır.

Yayına aldıktan sonra `site.ts` içindeki `seo.siteUrl` değerini gerçek adresinle
güncelle — sitemap ve sosyal medya önizlemeleri bunu kullanıyor.

### Netlify / Cloudflare Pages

Build komutu `npm run build`, yayın klasörü `out`.

### GitHub Pages

Depo adı `kullaniciadi.github.io` değilse `next.config.ts` dosyasına alt yol ekle:

```ts
basePath: "/depo-adi",
assetPrefix: "/depo-adi/",
```

Sonra `out/` klasörünün içeriğini `gh-pages` dalına gönder.

### Herhangi bir statik hosting (cPanel, FTP…)

`npm run build` sonrası oluşan `out/` klasörünü olduğu gibi yükle.

---

## Neler dahil

- **Hareket** — animasyon kütüphanesi yok; hepsi CSS geçişleri +
  IntersectionObserver + `requestAnimationFrame` ile yazıldı:
  - başlıklarda harf harf beliren, degradesi sürekli akan yazı
  - hero'da daktilo etkisiyle dönen odak alanları
  - imleci gecikmeli takip eden arka plan ışığı
  - kartlarda fareyi izleyen parıltı ve kenarlık, hafif 3B eğilme
  - butonlarda mıknatıs etkisi, üzerinden geçen parlama
  - görünürken sayarak artan istatistikler
  - sayfa üstünde kaydırma ilerleme çubuğu
  - yavaşça sürüklenen "aurora" arka plan lekeleri
  - fare üzerine gelince duran teknoloji şeridi
- **Performans** — ~117 kB ilk yükleme JS, statik önceden render.
  Fare efektleri `requestAnimationFrame` ile kare başına tek güncelleme yapar
  ve yalnızca `transform` / CSS değişkeni yazar — layout tetiklemez.
- **Erişilebilirlik** — `prefers-reduced-motion` açıkken tüm animasyonlar
  (JS tabanlı fare efektleri dahil) kapanır; anlamsal HTML, klavye odak
  halkaları, içeriğe atlama bağlantısı, `aria` etiketleri. Animasyonlu
  metinlerin okunabilir karşılığı ekran okuyucuya `sr-only` olarak sunulur.
- **Dokunmatik** — mıknatıs, eğilme ve imleç efektleri yalnızca
  `(pointer: fine)` cihazlarda çalışır.
- **SEO** — Open Graph ve Twitter kartları, `schema.org/Person` yapısal verisi,
  otomatik `sitemap.xml` ve `robots.txt`.
- **Yazdırma stili** — sayfa CV olarak yazdırılabilir (header/footer gizlenir).

---

## Proje yapısı

```
src/
├── app/
│   ├── layout.tsx      # metadata, fontlar, dil sağlayıcısı
│   ├── page.tsx        # bölümlerin sırası
│   ├── globals.css     # tasarım token'ları ve yardımcı sınıflar
│   ├── icon.svg        # favicon
│   ├── robots.ts       # /robots.txt
│   └── sitemap.ts      # /sitemap.xml
├── components/
│   ├── Header.tsx      # sabit menü, dil düğmesi, scroll-spy
│   ├── Hero.tsx        # giriş ekranı + teknoloji şeridi
│   ├── About.tsx       # hakkımda + rakamlar
│   ├── Skills.tsx      # yetenek kartları
│   ├── Projects.tsx    # öne çıkan + diğer projeler
│   ├── Experience.tsx  # zaman çizelgesi + eğitim
│   ├── Contact.tsx     # iletişim kartı
│   ├── Footer.tsx
│   ├── Background.tsx  # ızgara + neon lekeler
│   └── ui/             # hareket ve arayüz parçaları
│       ├── Section.tsx      # numaralı, harf harf beliren bölüm başlığı
│       ├── SplitText.tsx    # metni harflere bölüp sırayla belirtir
│       ├── RotatingText.tsx # daktilo etkisiyle dönen ifadeler
│       ├── Spotlight.tsx    # fareyi izleyen parıltı + 3B eğilme
│       ├── Magnetic.tsx     # imlece çekilen düğme
│       ├── CountUp.tsx      # görünürken sayan rakam
│       ├── CursorGlow.tsx   # imleci takip eden arka plan ışığı
│       ├── ScrollProgress.tsx
│       ├── Reveal.tsx       # kaydırınca beliren sarmalayıcı
│       └── Icon.tsx         # bağımlılıksız ikon seti
├── content/
│   └── site.ts         # ⭐ TÜM İÇERİK BURADA
└── lib/
    ├── i18n.tsx        # dil bağlamı ve t() yardımcısı
    └── motion.ts       # hareket azaltma / işaretçi türü algılama
```

---

## Notlar

- `typescript` sürümü **5.x**'te tutulmalı; 7.x (native port) Next.js 15'in
  `next.config.ts` yükleyicisiyle henüz uyumlu değil.
- Statik export kullanıldığı için `next/image` optimizasyonu kapalıdır
  (`images.unoptimized`). Proje görsellerini yüklemeden önce sıkıştır.
- Başlıklardaki degrade, üst öğeye değil **her harfe ayrı** uygulanır.
  Degradeyi başlığa verip harflere `transform`/`filter` uygulamak, oluşan
  stacking context yüzünden `background-clip: text`'i bozuyordu.
- Özel bir animasyon sınıfına Tailwind varyantı (`group-hover:` vb.) uygulamak
  istersen düz `.sinif {}` yerine `@utility sinif {}` ile tanımla — aksi hâlde
  varyant üretilmez.
