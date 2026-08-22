# CLAUDE.md

İçerik düzenleme, proje yapısı ve deploy adımları `README.md`'de. Burada yalnızca
**bilinmezse iş bozan** şeyler var.

## Çalıştırma

```bash
npx next dev -p 3111
```

Port **3111**, varsayılan 3000 değil.

**Dev sunucusu açıkken `next build` çalıştırma.** İkisi de aynı `.next` dizinine
yazıyor; production build, dev sunucusunun çalışma anında ihtiyaç duyduğu
chunk'ları eziyor ve sayfa `Cannot find module './331.js'` ile **HTTP 500**
dönmeye başlıyor. Belirti yanıltıcı: Next, App Router yerine Pages Router hata
kabuğunu servis ediyor, yani hata koddaymış gibi görünüyor.

Build alman gerekiyorsa: dev'i durdur → `rm -rf .next` → build → tekrar
`rm -rf .next` → dev'i başlat.

Dev sürecini durdururken portu gerçekten boşalttığını doğrula. Arka plan
görevini durdurmak `npx` sarmalayıcısını öldürür ama asıl `node` sürecini
bırakabilir; o da portu tutmaya devam eder:

```powershell
Get-NetTCPConnection -LocalPort 3111 -State Listen |
  Select-Object -ExpandProperty OwningProcess -Unique |
  ForEach-Object { Stop-Process -Id $_ -Force }
```

## Renk paleti — iki katmanlı, sebebi var

`src/app/globals.css` içinde renkler **iki kademede** tanımlı:

```css
:root            { --p-accent: #00e19a; }        /* ham değer */
@theme           { --color-accent: var(--p-accent); }  /* Tailwind token */
:root[data-theme="light"] { --p-accent: #00694a; }     /* tema burada değişir */
```

**`@theme` içine doğrudan sabit renk yazma.** Tailwind, statik bir değer
görürse opaklık varyantlarını (`bg-accent/16`, `border-accent/40`, …) derleme
sırasında sabit hex'e çeviriyor ve `var()` bağını koparıyor. O noktadan sonra
değişkeni ezmek 47 yardımcı sınıfı hiç etkilemiyor: açık temada zeminler
beyazlarken tüm parıltı ve kenarlıklar koyu temanın neon renklerinde kalıyor.

Renk değiştirmek için yalnızca `--p-*` satırlarına dokun.

### Açık tema kancaları

Koyu temada kontrastın yaptığı işi açık temada gölge yapmak zorunda:

- `.surface` — yarı saydam kart yüzeyleri (`bg-ink-900/40`) beyaz zeminde
  kayboluyordu. Açık temada tam opak + gölge. Yeni kart eklerken bu sınıfı da ver.
- `.glass` — menü hapı ve düğmeler; açık temada daha opak + gölge.
- `.aurora-layer` — dekoratif lekeler; koyu zeminde "ışık", beyazda "leke" gibi
  duruyor, o yüzden açık temada 0.22 opaklığa kısılı.

Açık tema aksanları iki testi birden geçecek şekilde seçildi: beyaz üzerinde
metin olarak **ve** dolgu rengi olup üstünde açık metin taşırken (ikisi de ≥4.5:1).

## Kalıcı kısıtlar

- **Animasyon kütüphanesi yok.** Her şey CSS + IntersectionObserver + rAF.
  Bilinçli karar; yeni efekt eklerken bozma.
- **`typescript` 5.x'te kalmalı.** 7.x, Next 15'in `next.config.ts` yükleyicisini
  kırıyor (`TypeError: ... 'fileExists'`).
- **Statik export** (`out/`), sunucu tarafı yok. Server Action, route handler,
  `next/image` optimizasyonu kullanılamaz.
- Her efekt `prefers-reduced-motion` ve `(pointer: fine)` kontrolünden geçer.
- Tüm metinler `src/content/site.ts`'te, iki dilli. Bileşenlere metin gömme.

## Bilinmesi gereken incelikler

- **`[data-char]`** (harf harf beliren başlık) `perspective()` içerir — onsuz
  `rotateX` 3B dönmez, harfi yalnızca dikeyde ezer.
- **`.char-gradient [data-char]`** alt tarafta `padding-bottom` + negatif
  `margin-bottom` taşır. Degrade harfin kendi kutusuna boyanıyor; başlıktaki
  sıkı satır aralığı yüzünden `g`/`y` inişleri kutu dışında kalıp boyasız
  kalıyordu.
- **`Magnetic` ve `Spotlight`** `pointerleave`'de bekleyen rAF'i iptal eder.
  Etmezse sıfırlamadan sonra çalışıp öğeyi yeniden kaydırır, buton/kart kaymış
  hâlde donar.
- **`<html suppressHydrationWarning>`** gerekli: tema betiği React hidrasyondan
  önce `<html>`'e `data-theme` yazıyor, sunucu çıktısında o öznitelik yok.
- **Header hap menüsü `lg`'den itibaren** görünür. 5 öğeyle `md` genişliğinde
  sağdaki düğmelerin üzerine biniyordu. Mobil menü eşiği ve `matchMedia`
  sorgusu da 1024px — üçü birlikte değişmeli.
- **Tema ve dil düğmeleri hedefi gösterir**, mevcut durumu değil (koyu temada
  güneş ikonu, Türkçedeyken `EN`). `aria-label`'lar da aynı şeyi söylüyor.

## Açık işler

- `profile.photo` boş — hero portresi dosya verilene kadar çizilmiyor.
- `contact.formEndpoint` boş — form şu an mesajı `mailto` ile e-posta
  istemcisinde açıyor. Formspree vb. adres yazılınca arka planda POST'a geçer.
- `seo.siteUrl` hâlâ tahmini Vercel adresi; yayına alınca gerçek adresle değiştir.
- `npm run lint` çalışmıyor: projede `eslint.config.*` ve `eslint` bağımlılığı yok.
