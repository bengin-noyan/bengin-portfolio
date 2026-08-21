/* ═══════════════════════════════════════════════════════════════════════════
 *  SİTE İÇERİĞİ  ·  SITE CONTENT
 *  ───────────────────────────────────────────────────────────────────────────
 *  Sitedeki TÜM metinler bu dosyadadır. Başka hiçbir dosyaya dokunmana
 *  gerek yok. Bir alanı değiştir, kaydet — site anında güncellenir.
 *
 *  Çift dilli alanlar şu şekilde yazılır:
 *      { tr: "Türkçe metin", en: "English text" }
 *
 *  İpucu: Bir bölümü tamamen gizlemek için dizisini boş bırak → []
 *
 *  ⚠ YER TUTUCULAR: "Şirket Adı", "kullaniciadin" ve projeler bölümündeki
 *    açıklamalar örnektir — yayına almadan önce kendi bilgilerinle değiştir.
 * ═══════════════════════════════════════════════════════════════════════════ */

export type Lang = "tr" | "en";

/** Çift dilli değer / Bilingual value */
export type L<T = string> = { tr: T; en: T };

/* ───────────────────────────────────────────────────────────────────────────
 * 1 · PROFİL
 * ─────────────────────────────────────────────────────────────────────────── */
export const profile = {
  /** Tam adın. Header'da ve tarayıcı sekmesinde görünür. */
  name: "Bengin Noyan",

  /** Logo olarak kullanılan baş harfler. */
  initials: "BN",

  /** Ünvanın. Hero bölümünde isminin altında çıkar. */
  title: {
    tr: "Software Developer",
    en: "Software Developer",
  } as L,

  /**
   * Hero'da daktilo etkisiyle sırayla yazılan odak alanları.
   * İstediğin kadar ekleyip çıkarabilirsin.
   */
  focus: {
    tr: [
      "ERP & süreç otomasyonu",
      "C# · .NET · Go · Python",
      "Makine Öğrenmesi entegrasyonu",
      "Görüntü İşleme",
      "Veritabanı mimarisi",
    ],
    en: [
      "ERP & process automation",
      "C# · .NET · Go · Python",
      "Machine Learning integration",
      "Computer Vision",
      "Database architecture",
    ],
  } as L<string[]>,

  /** Hero'da isminin üstündeki tek cümlelik özet. */
  tagline: {
    tr: "C#, .NET, Go ve Python ile uçtan uca sistemler kuruyorum. Kurumsal kaynak planlama ve süreç otomasyonlarını, makine öğrenmesi ve görüntü işleme modelleriyle güçlendiriyorum.",
    en: "I build end-to-end systems with C#, .NET, Go and Python — strengthening enterprise resource planning and process automation with machine learning and computer vision models.",
  } as L,

  /** Hero'daki yanıp sönen küçük durum rozeti. */
  availability: {
    tr: "Mezuniyet aşamasında · İş fırsatlarına açığım",
    en: "Graduating · Open to opportunities",
  } as L,

  /** ⚠ Şehri kendi konumunla değiştir. */
  location: {
    tr: "Denizli, Türkiye · Uzaktan çalışmaya açık",
    en: "Denizli, Türkiye · Open to remote",
  } as L,

  email: "benginnyn72@gmail.com",

  /** Boş bırakırsan telefon satırı hiç görünmez. */
  phone: "",

  /**
   * CV dosyan. PDF'ini `public/` klasörüne koy ve adını buraya yaz.
   * Örn: public/cv.pdf  →  "/cv.pdf"    ·    Butonu gizlemek için: ""
   */
  resumeUrl: "/cv.pdf",
};

/* ───────────────────────────────────────────────────────────────────────────
 * 2 · SOSYAL BAĞLANTILAR   ⚠ "kullaniciadin" yerine kendi kullanıcı adını yaz
 *     icon seçenekleri: "github" | "linkedin" | "x" | "mail" | "dribbble" | "link"
 * ─────────────────────────────────────────────────────────────────────────── */
export const socials = [
  { label: "GitHub", href: "https://github.com/kullaniciadin", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kullaniciadin", icon: "linkedin" },
  { label: "E-posta", href: "mailto:" + profile.email, icon: "mail" },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 3 · HAKKIMDA
 * ─────────────────────────────────────────────────────────────────────────── */
export const about = {
  /** Her dizi elemanı ayrı bir paragraf olur. */
  paragraphs: {
    tr: [
      "Pamukkale Üniversitesi Yönetim Bilişim Sistemleri lisans programındaki tüm ders dönemini başarıyla tamamlamış ve mezuniyet aşamasında bir Yönetim Bilişim Sistemleri mezun adayı olarak; C#, .NET, Go ve Python ekosistemlerinde modern web ve masaüstü uygulamaları geliştiriyorum.",
      "Kurumsal kaynak planlama (ERP), süreç otomasyonları ve veritabanı mimarileri üzerine uçtan uca sistemler kurgularken; yazılım altyapımı Makine Öğrenmesi (Machine Learning) ve Görüntü İşleme (Computer Vision) modellerini uygulamalara entegre etme yetkinliğiyle güçlendiriyorum.",
      "Yönetim Bilişim Sistemleri disiplininden gelen sistem analizi ve süreç yönetimi vizyonumu, güçlü yazılım pratikleriyle harmanlayarak karmaşık iş problemlerine katma değerli ve sürdürülebilir çözümler sunmayı hedefliyorum.",
    ],
    en: [
      "As a Management Information Systems graduand who has successfully completed all coursework in the MIS undergraduate programme at Pamukkale University, I develop modern web and desktop applications across the C#, .NET, Go and Python ecosystems.",
      "I design end-to-end systems around enterprise resource planning (ERP), process automation and database architecture, while strengthening that foundation with the ability to integrate machine learning and computer vision models into production applications.",
      "By blending the systems analysis and process management perspective that Management Information Systems gives me with solid software engineering practice, I aim to deliver high-value, sustainable solutions to complex business problems.",
    ],
  } as L<string[]>,

  /** Hakkımda bölümünün yanındaki rakamlar. Gizlemek için: [] */
  stats: [
    { value: "2026", label: { tr: "Mezuniyet yılı", en: "Graduation year" } as L },
    { value: "4", label: { tr: "Ana ekosistem", en: "Core ecosystems" } as L },
    { value: "10+", label: { tr: "Geliştirilen proje", en: "Projects built" } as L },
    { value: "ERP", label: { tr: "Uzmanlık odağı", en: "Focus area" } as L },
  ],
};

/* ───────────────────────────────────────────────────────────────────────────
 * 4 · YETENEKLER
 * ─────────────────────────────────────────────────────────────────────────── */
export const skillGroups = [
  {
    title: { tr: "Diller & Çalışma Zamanı", en: "Languages & Runtimes" } as L,
    items: ["C#", ".NET", "Go", "Python", "JavaScript", "SQL"],
  },
  {
    title: { tr: "Web & Masaüstü", en: "Web & Desktop" } as L,
    items: ["ASP.NET Core", "Entity Framework", "WPF", "WinForms", "REST API", "Blazor"],
  },
  {
    title: { tr: "Veri & Yapay Zekâ", en: "Data & AI" } as L,
    items: ["MS SQL Server", "PostgreSQL", "pandas", "scikit-learn", "OpenCV", "NumPy"],
  },
  {
    title: { tr: "Sistem & Araçlar", en: "Systems & Tooling" } as L,
    items: ["Git", "Docker", "Linux", "Visual Studio", "Postman", "Sistem analizi"],
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 5 · PROJELER   ⚠ Aşağıdakiler alan örnekleridir — kendi projelerinle değiştir.
 *     featured: true  →  büyük kart olarak, listenin başında gösterilir.
 *     image: görselini public/projects/ içine at, yolunu buraya yaz.
 *            Boş bırakırsan başlıktan türetilen bir degrade kapak üretilir.
 * ─────────────────────────────────────────────────────────────────────────── */
export const projects = [
  {
    title: "ERP · Stok ve Sipariş Modülü",
    year: "2025",
    featured: true,
    blurb: {
      tr: "C# ve .NET ile geliştirilen, stok hareketlerini ve sipariş süreçlerini uçtan uca yöneten kurumsal modül.",
      en: "An enterprise module built with C# and .NET that manages stock movements and order processes end to end.",
    } as L,
    description: {
      tr: "Süreç analizinden veritabanı tasarımına, arayüzden raporlamaya kadar tüm katmanları kendim kurguladım. Katmanlı mimari, Entity Framework ile veri erişimi ve rol bazlı yetkilendirme üzerine oturuyor. Buraya projenin çözdüğü somut problemi ve ölçülebilir sonucunu yaz.",
      en: "I designed every layer myself, from process analysis and database design through to the UI and reporting. Built on a layered architecture with Entity Framework data access and role-based authorisation. Describe the concrete problem it solved and the measurable outcome here.",
    } as L,
    tags: ["C#", ".NET", "Entity Framework", "MS SQL Server", "WPF"],
    image: "",
    links: { demo: "", repo: "https://github.com/kullaniciadin/erp-modul" },
  },
  {
    title: "Görüntü İşleme ile Kalite Kontrol",
    year: "2025",
    featured: true,
    blurb: {
      tr: "Üretim hattı görüntülerinden hatalı ürünleri ayıran, Python ve OpenCV tabanlı görüntü işleme sistemi.",
      en: "A Python and OpenCV computer vision system that separates defective products from production line imagery.",
    } as L,
    description: {
      tr: "Görüntü ön işleme, öznitelik çıkarımı ve sınıflandırma adımlarını içeren bir işlem hattı kurdum. Model çıktıları bir masaüstü arayüzü üzerinden operatöre anlık olarak sunuluyor. Buraya kullandığın veri kümesini, model başarımını ve gerçek kullanım senaryosunu yaz.",
      en: "I built a pipeline covering image preprocessing, feature extraction and classification. Model output is surfaced to the operator in real time through a desktop interface. Describe your dataset, model performance and the real-world scenario here.",
    } as L,
    tags: ["Python", "OpenCV", "scikit-learn", "NumPy"],
    image: "",
    links: { demo: "", repo: "https://github.com/kullaniciadin/kalite-kontrol" },
  },
  {
    title: "Go ile Süreç Otomasyon Servisi",
    year: "2024",
    featured: false,
    blurb: {
      tr: "Tekrarlayan iş adımlarını zamanlanmış görevlerle yürüten, Go ile yazılmış hafif servis.",
      en: "A lightweight Go service that runs repetitive business steps as scheduled jobs.",
    } as L,
    description: {
      tr: "Eşzamanlılık için goroutine tabanlı bir işçi havuzu, dış sistemlerle iletişim için REST arayüzü ve yapılandırılabilir görev tanımları içeriyor.",
      en: "Includes a goroutine-based worker pool for concurrency, a REST interface for talking to external systems, and configurable job definitions.",
    } as L,
    tags: ["Go", "REST API", "PostgreSQL", "Docker"],
    image: "",
    links: { demo: "", repo: "https://github.com/kullaniciadin/otomasyon-servisi" },
  },
  {
    title: "Talep Tahmin Modeli",
    year: "2024",
    featured: false,
    blurb: {
      tr: "Geçmiş satış verisinden gelecek dönem talebini öngören makine öğrenmesi modeli.",
      en: "A machine learning model that forecasts upcoming demand from historical sales data.",
    } as L,
    description: {
      tr: "Veri temizleme, öznitelik mühendisliği ve model karşılaştırma adımlarını içeren bir çalışma. Sonuçlar stok planlama sürecine girdi olacak biçimde raporlanıyor.",
      en: "Covers data cleaning, feature engineering and model comparison. Results are reported so they can feed directly into stock planning.",
    } as L,
    tags: ["Python", "pandas", "scikit-learn", "SQL"],
    image: "",
    links: { demo: "", repo: "https://github.com/kullaniciadin/talep-tahmin" },
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 6 · DENEYİM   ⚠ "Şirket Adı" yer tutucudur — gerçek staj/işlerinle değiştir.
 *     Henüz deneyimin yoksa diziyi boşalt: export const experience = [];
 * ─────────────────────────────────────────────────────────────────────────── */
export const experience = [
  {
    company: "Şirket Adı",
    url: "",
    role: { tr: "Yazılım Geliştirme Stajyeri", en: "Software Development Intern" } as L,
    period: { tr: "2025 · Yaz dönemi", en: "2025 · Summer" } as L,
    highlights: {
      tr: [
        "Hangi projede çalıştığını ve hangi teknolojileri kullandığını yaz.",
        "Somut olarak neyi geliştirdiğini ve ne sonuç doğurduğunu ekle.",
      ],
      en: [
        "Describe the project you worked on and the technologies you used.",
        "Add what you concretely built and what outcome it produced.",
      ],
    } as L<string[]>,
    tech: ["C#", ".NET", "MS SQL Server"],
  },
  {
    company: "Şirket Adı",
    url: "",
    role: { tr: "Bilgi İşlem Stajyeri", en: "IT Intern" } as L,
    period: { tr: "2024 · Yaz dönemi", en: "2024 · Summer" } as L,
    highlights: {
      tr: [
        "Sistem analizi ve süreç iyileştirme tarafında üstlendiğin görevleri yaz.",
        "Kurum içi kullanılan yazılımlara kattığın değeri ekle.",
      ],
      en: [
        "Describe your responsibilities in systems analysis and process improvement.",
        "Add the value you brought to the software used inside the organisation.",
      ],
    } as L<string[]>,
    tech: ["SQL", "Süreç analizi", "Raporlama"],
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 7 · EĞİTİM & SERTİFİKA   (gizlemek için: [])
 * ─────────────────────────────────────────────────────────────────────────── */
export const education = [
  {
    school: { tr: "Pamukkale Üniversitesi", en: "Pamukkale University" } as L,
    degree: {
      tr: "Yönetim Bilişim Sistemleri, Lisans",
      en: "BSc Management Information Systems",
    } as L,
    /** ⚠ Başlangıç yılını kendi bilgine göre düzelt. */
    period: "2021 — 2026",
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 8 · İLETİŞİM BÖLÜMÜ
 * ─────────────────────────────────────────────────────────────────────────── */
export const contact = {
  heading: { tr: "Birlikte çalışalım", en: "Let's work together" } as L,
  body: {
    tr: "Mezuniyet aşamasındayım ve yeni pozisyonlara açığım. Bir fikrin, bir açık pozisyonun ya da sadece bir sorun varsa yazmaktan çekinme — genelde bir gün içinde dönüyorum.",
    en: "I am finishing my degree and open to new roles. If you have an idea, an open position, or just a question, get in touch — I usually reply within a day.",
  } as L,
};

/* ───────────────────────────────────────────────────────────────────────────
 * 9 · ARAYÜZ METİNLERİ  ·  UI STRINGS
 * ─────────────────────────────────────────────────────────────────────────── */
export const ui = {
  navAbout: { tr: "Hakkımda", en: "About" } as L,
  navWork: { tr: "Projeler", en: "Work" } as L,
  navExperience: { tr: "Deneyim", en: "Experience" } as L,
  navContact: { tr: "İletişim", en: "Contact" } as L,

  heroPrimary: { tr: "Projelerime göz at", en: "View my work" } as L,
  heroSecondary: { tr: "CV'yi indir", en: "Download CV" } as L,
  scrollHint: { tr: "Kaydır", en: "Scroll" } as L,

  sectionAbout: { tr: "Hakkımda", en: "About" } as L,
  sectionSkills: { tr: "Yetenekler", en: "Skills" } as L,
  sectionWork: { tr: "Seçilmiş projeler", en: "Selected work" } as L,
  sectionExperience: { tr: "Deneyim", en: "Experience" } as L,
  sectionEducation: { tr: "Eğitim", en: "Education" } as L,
  sectionContact: { tr: "İletişim", en: "Contact" } as L,

  workIntro: {
    tr: "Üzerinde çalışmaktan en çok keyif aldığım işler. Her biri için problemi, kurduğum çözümü ve kullandığım teknolojileri yazdım.",
    en: "The work I enjoyed most. For each one I have written down the problem, the solution I built and the technologies I used.",
  } as L,

  liveDemo: { tr: "Canlı demo", en: "Live demo" } as L,
  sourceCode: { tr: "Kaynak kod", en: "Source code" } as L,
  emailMe: { tr: "E-posta gönder", en: "Send an email" } as L,
  copied: { tr: "Kopyalandı", en: "Copied" } as L,
  copyEmail: { tr: "Adresi kopyala", en: "Copy address" } as L,
  backToTop: { tr: "Yukarı dön", en: "Back to top" } as L,
  builtWith: {
    tr: "Next.js ve Tailwind CSS ile geliştirildi.",
    en: "Built with Next.js and Tailwind CSS.",
  } as L,
  menu: { tr: "Menü", en: "Menu" } as L,
  close: { tr: "Kapat", en: "Close" } as L,
  switchLang: { tr: "Switch to English", en: "Türkçe'ye geç" } as L,
};

/* ───────────────────────────────────────────────────────────────────────────
 * 10 · SEO
 * ─────────────────────────────────────────────────────────────────────────── */
export const seo = {
  /** ⚠ Siteyi yayına aldıktan sonra gerçek adresini buraya yaz. */
  siteUrl: "https://bengin-noyan.vercel.app",
  description: {
    tr: "Software Developer. C#, .NET, Go ve Python ile ERP, süreç otomasyonu, makine öğrenmesi ve görüntü işleme çözümleri.",
    en: "Software Developer. ERP, process automation, machine learning and computer vision solutions with C#, .NET, Go and Python.",
  } as L,
  keywords: [
    "Bengin Noyan",
    "software developer",
    "C#",
    ".NET",
    "Go",
    "Python",
    "ERP",
    "machine learning",
    "computer vision",
    "yönetim bilişim sistemleri",
  ],
};
