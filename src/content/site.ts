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
 *  İçerik kaynağı: BENGİN-NOYAN-CV-guncel.pdf (2026). Aşağıdaki metinler
 *  bu CV'den alınmıştır; yer tutucu kalmadı.
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
      "Go · C# · .NET · Python",
      "Native masaüstü (Wails3)",
      "Görüntü İşleme & YOLOv8",
      "Veritabanı mimarisi",
    ],
    en: [
      "ERP & process automation",
      "Go · C# · .NET · Python",
      "Native desktop (Wails3)",
      "Computer Vision & YOLOv8",
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

  location: {
    tr: "Denizli, Türkiye · Uzaktan çalışmaya açık",
    en: "Denizli, Türkiye · Open to remote",
  } as L,

  email: "benginnyn72@gmail.com",

  /** Boş bırakırsan telefon satırı hiç görünmez. */
  phone: "+90 546 685 9909",

  /**
   * CV dosyan: public/cv.pdf olarak duruyor.
   * Butonu gizlemek istersen: ""
   */
  resumeUrl: "/cv.pdf",

  /** İndirilirken dosyaya verilecek ad. */
  resumeFileName: "Bengin-Noyan-CV.pdf",
};

/* ───────────────────────────────────────────────────────────────────────────
 * 2 · SOSYAL BAĞLANTILAR
 *     icon seçenekleri: "github" | "linkedin" | "x" | "mail" | "dribbble" | "link"
 * ─────────────────────────────────────────────────────────────────────────── */
export const socials = [
  { label: "GitHub", href: "https://github.com/bengin-noyan", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bengin-noyan-028b07312",
    icon: "linkedin",
  },
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
    { value: "4", label: { tr: "Kapsamlı proje", en: "In-depth projects" } as L },
    { value: "5", label: { tr: "Ana ekosistem", en: "Core ecosystems" } as L },
    { value: "ERP", label: { tr: "Uzmanlık odağı", en: "Focus area" } as L },
  ],
};

/* ───────────────────────────────────────────────────────────────────────────
 * 4 · YETENEKLER   (CV · BECERİLER)
 * ─────────────────────────────────────────────────────────────────────────── */
export const skillGroups = [
  {
    title: {
      tr: "Yazılım Geliştirme & Diller",
      en: "Software Development & Languages",
    } as L,
    items: [
      "Go (Golang)",
      "C#",
      ".NET",
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "HTML5",
      "CSS3",
      "Visual Basic (VBA)",
    ],
  },
  {
    title: { tr: "Web, Masaüstü & Mimariler", en: "Web, Desktop & Architecture" } as L,
    items: [
      "Wails3",
      "Vue 3",
      "React 18",
      "Streamlit",
      "RESTful API",
      "Modüler Mimari",
      "RBAC",
      "Database Migrations",
      "UBL-TR 1.2 (e-Fatura)",
    ],
  },
  {
    title: { tr: "Veritabanı & Veri Yönetimi", en: "Databases & Data Management" } as L,
    items: [
      "PostgreSQL",
      "MS SQL Server",
      "SQLite",
      "Firebase",
      "SQL",
      "ER Diyagramları",
      "3NF Normalizasyon",
    ],
  },
  {
    title: { tr: "Yapay Zekâ & Görüntü İşleme", en: "AI & Computer Vision" } as L,
    items: [
      "YOLOv8",
      "Computer Vision",
      "Deep Learning",
      "OpenCV",
      "Ultralytics",
      "Google Gemini API",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Plotly",
    ],
  },
  {
    title: { tr: "Araçlar & Metodolojiler", en: "Tooling & Methodologies" } as L,
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Visual Studio",
      "PyCharm",
      "SDLC",
      "UML Modelleme",
      "DFD",
      "Fizibilite (NPV/IRR)",
    ],
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 5 · PROJELER   (CV · PROJELER)
 *     featured: true  →  büyük kart olarak, listenin başında gösterilir.
 *     image: görselini public/projects/ içine at, yolunu buraya yaz.
 *            Boş bırakırsan başlıktan türetilen bir degrade kapak üretilir.
 *     links: repo/demo bağlantıların herkese açıksa buraya yaz;
 *            boş bırakılan bağlantının butonu hiç görünmez.
 *     year:  boş bırakırsan yıl rozeti gösterilmez.
 * ─────────────────────────────────────────────────────────────────────────── */
export const projects = [
  {
    title: "Bitki Hastalığı Teşhisi ve Tarımsal Verimlilik Analizi",
    year: "2026",
    featured: true,
    blurb: {
      tr: "Bitirme tezi: YOLOv8 tabanlı bilgisayarlı görü ile bitki hastalıklarını teşhis eden ve sonuçları reaktif bir karar destek paneline taşıyan uçtan uca otonom sistem.",
      en: "Graduation thesis: an end-to-end autonomous system that diagnoses plant diseases with YOLOv8-based computer vision and surfaces the results in a reactive decision-support dashboard.",
    } as L,
    description: {
      tr: "Derin öğrenme tabanlı bilgisayarlı görü ve bulut mimarilerini entegre eden uçtan uca bir otonom teşhis sistemi tasarladım. Roboflow ve Kaggle veri kümeleri üzerinde transfer learning ve hiper-parametre optimizasyonu ile eğitilen Ultralytics YOLOv8 Medium modeli %94.1 mAP50 doğruluk başarımı ve 2 saniyenin altında çıkarım latansı elde etti. Model çıktıları SQLite ve Firebase mimarileriyle senkronize edilerek, Streamlit tabanlı reaktif arayüzde Pandas ve Plotly ile zirai eylem planlarına dönüştürülüyor.",
      en: "I designed an end-to-end autonomous diagnosis system integrating deep-learning computer vision with cloud architecture. An Ultralytics YOLOv8 Medium model, trained on Roboflow and Kaggle datasets with transfer learning and hyper-parameter optimisation, reached 94.1% mAP50 accuracy at sub-two-second inference latency. Model output is synchronised through SQLite and Firebase and turned into agricultural action plans on a reactive Streamlit interface using Pandas and Plotly.",
    } as L,
    tags: [
      "Python",
      "YOLOv8",
      "Ultralytics",
      "Computer Vision",
      "Streamlit",
      "SQLite",
      "Firebase",
      "Pandas",
      "Plotly",
    ],
    image: "",
    links: { demo: "", repo: "" },
  },
  {
    title: "BraDent — Diş Kliniği Yönetim Otomasyonu",
    year: "2026",
    featured: true,
    blurb: {
      tr: "Diş klinikleri için yerel ağ topolojisinde, istemci-sunucu modelinde eşzamanlı çalışan masaüstü klinik otomasyon sistemi.",
      en: "A desktop clinic automation system for dental practices, running concurrently on a client-server model over a local network.",
    } as L,
    description: {
      tr: "FDI (ISO 3950) uluslararası dental standardına uygun dinamik diş topolojisi, hekim takvimli asenkron randevu yönetimi, seans tabanlı tedavi planlaması ve taksitli finansal süreç takip modülleri geliştirdim. PostgreSQL 17 üzerinde 23 tablolu normalize şema ve version-controlled sıralı SQL migration yönetimi sağladım; NetGSM entegrasyonlu asenkron arka plan SMS bildirim kuyruğu servisi yapılandırdım.",
      en: "I built a dynamic tooth topology compliant with the FDI (ISO 3950) international dental standard, asynchronous appointment management on practitioner calendars, session-based treatment planning and instalment-based financial tracking modules. On PostgreSQL 17 I delivered a normalised 23-table schema with version-controlled sequential SQL migrations, plus an asynchronous background SMS notification queue service integrated with NetGSM.",
    } as L,
    tags: ["Go", "Wails3", "Vue 3", "TypeScript", "PostgreSQL 17", "NetGSM API", "Vite"],
    image: "",
    links: { demo: "", repo: "" },
  },
  {
    title: "MLS KİMYA — Muhasebe & İş Takip Otomasyonu",
    year: "2026",
    featured: false,
    blurb: {
      tr: "CGO-free saf Go ve Wails3 mimarisinde geliştirilmiş, sıfır bağımlılıklı tek dosyalı (.exe) native masaüstü muhasebe otomasyonu.",
      en: "A zero-dependency, single-file (.exe) native desktop accounting automation built on a CGO-free pure Go and Wails3 architecture.",
    } as L,
    description: {
      tr: "Kayan nokta hassasiyet kayıplarını ve yuvarlama sapmalarını engellemek için deterministik tamsayı aritmetiği (int64 fixed-point) üzerine kurgulanmış, TCMB XML entegrasyonlu ve izole birim testli bir kur farkı hesap motoru yazdım. Gömülü SQL migration altyapısı, otomatik yedekleme/recovery mekanizmaları, Excelize ile veri dışa aktarımı ve senkronize cari ekstre raporlama altyapısı kurguladım.",
      en: "I wrote an exchange-rate calculation engine built on deterministic integer arithmetic (int64 fixed-point) to eliminate floating-point precision loss and rounding drift, integrated with TCMB XML and covered by isolated unit tests. I also built embedded SQL migration infrastructure, automatic backup/recovery mechanisms, Excelize-based data export and synchronised account-statement reporting.",
    } as L,
    tags: ["Go", "Wails3", "Vue 3", "TypeScript", "SQLite (modernc)", "Vite", "Excelize"],
    image: "",
    links: { demo: "", repo: "" },
  },
  {
    title: "PauGo — Kampüs İçi Akıllı E-Scooter Paylaşım Sistemi",
    year: "2025",
    featured: false,
    blurb: {
      tr: "Akıllı mikro-mobilite ekosisteminin SDLC ve nesne yönelimli analiz/tasarım metodolojileriyle kurgulanan uçtan uca sistem tasarımı ve fizibilitesi.",
      en: "End-to-end system design and feasibility study for a smart micro-mobility ecosystem, built with SDLC and object-oriented analysis/design methodologies.",
    } as L,
    description: {
      tr: "C# ile masaüstü istemci arayüzü, Microsoft SQL Server üzerinde 3NF seviyesinde normalize edilmiş ilişkisel veritabanı şeması ve anlık GPS/IoT telemetri veri akış modelleri yapılandırdım. Sistem gereksinimlerini UML Use Case, DFD (Level 0/1), karar ağaçları ve detaylı HIPO modelleriyle formal olarak dokümante ettim; 3D Secure ödeme geçidi entegrasyon protokollerini planladım. 4.65M TL sermayeli finansal simülasyonlarda %60.07 İç Karlılık Oranı (IRR), 7.22M TL Net Bugünkü Değer (NPV) ve 1.56 yıl indirgenmiş geri ödeme süresiyle projenin finansal fizibilitesini doğruladım.",
      en: "I built a C# desktop client interface, a relational schema normalised to 3NF on Microsoft SQL Server, and real-time GPS/IoT telemetry data-flow models. System requirements were formally documented with UML use cases, DFDs (level 0/1), decision trees and detailed HIPO models, and 3D Secure payment gateway integration protocols were planned. Financial simulations on 4.65M TRY of capital confirmed feasibility with a 60.07% IRR, 7.22M TRY NPV and a 1.56-year discounted payback period.",
    } as L,
    tags: ["C#", "MS SQL Server", "3NF", "UML", "DFD", "IoT / GPS", "SDLC", "NPV / IRR"],
    image: "",
    links: { demo: "", repo: "" },
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 6 · DENEYİM   (CV · DENEYİM)
 * ─────────────────────────────────────────────────────────────────────────── */
export const experience = [
  {
    company: "NowlSoft",
    url: "",
    location: { tr: "Batman, Türkiye", en: "Batman, Türkiye" } as L,
    role: { tr: "Yazılım Geliştirme Stajyeri", en: "Software Development Intern" } as L,
    period: { tr: "07/2026 – 08/2026", en: "07/2026 – 08/2026" } as L,
    highlights: {
      tr: [
        "Kamu & İşletme Çözümleri: Yerel yönetimler, kamu kurumları ve özel sektör işletmeleri için iş süreçlerini dijitalleştiren web ve masaüstü tabanlı kurumsal yazılım çözümlerinin (ERP, süreç otomasyonları, veri yönetimi) geliştirilmesinde aktif rol aldım.",
        "Backend & Masaüstü Mimarisi: Go (Wails3), C# (.NET), Vue 3 ve React ile yerel ağ (LAN) topolojisinde çalışan dağıtık sistemler, CGO-free mimaride tek dosyalı native masaüstü otomasyonları ve mikro-servis uyumlu backend yapıları kurguladım.",
        "Finansal & Süreç Yönetim Modülleri: Kur farkı korumalı deterministik finansal hesap motorları, UBL-TR 1.2 standartlarında e-Fatura entegrasyon çekirdeği, dinamik SQL migration sistemleri ve rol tabanlı yetkilendirme (RBAC) katmanları geliştirdim.",
        "Yapay Zekâ & Saha Entegrasyonu: YOLOv8 bilgisayarlı görü modelleriyle elde edilen otonom teşhis ve analiz verilerini kurumsal ERP ve saha otomasyon sistemlerine bağlayan servis entegrasyonları gerçekleştirdim.",
      ],
      en: [
        "Public sector & business solutions: I took an active role in building web and desktop enterprise software (ERP, process automation, data management) that digitalises workflows for municipalities, public institutions and private companies.",
        "Backend & desktop architecture: Using Go (Wails3), C# (.NET), Vue 3 and React, I built distributed systems running over LAN topologies, single-file native desktop automations on a CGO-free architecture, and microservice-compatible backends.",
        "Financial & process modules: I developed deterministic financial calculation engines with exchange-rate protection, a UBL-TR 1.2 compliant e-invoice integration core, dynamic SQL migration systems and role-based access control (RBAC) layers.",
        "AI & field integration: I built service integrations connecting autonomous diagnosis and analysis data from YOLOv8 computer vision models into enterprise ERP and field automation systems.",
      ],
    } as L<string[]>,
    tech: ["Go", "Wails3", "C#", ".NET", "Vue 3", "React", "UBL-TR 1.2", "RBAC"],
  },
  {
    company: "Pamukkale Üniversitesi İİBF Bilgi İşlem Dairesi",
    url: "",
    location: { tr: "Denizli, Türkiye", en: "Denizli, Türkiye" } as L,
    role: {
      tr: "Bilgi Teknolojileri (IT) Destek Asistanı · İŞKUR Gençlik Programı",
      en: "IT Support Assistant · İŞKUR Youth Programme",
    } as L,
    period: { tr: "01/2026 – 06/2026", en: "01/2026 – 06/2026" } as L,
    highlights: {
      tr: [
        "Fakülte bünyesindeki sunucu ve bilgisayarların işletim sistemi konfigürasyonlarını yönettim; akademik/idari personelin ihtiyaç duyduğu kurumsal yazılımların, veri tabanı istemcilerinin ve geliştirme araçlarının kurulum, lisanslama ve optimizasyon süreçlerini yürüttüm.",
        "Kullanıcı hesap yönetimi, Active Directory / e-posta sunucusu erişim yetkilendirmeleri ve ağ güvenlik protokollerinin uygulanması süreçlerinde sistem yöneticisine destek verdim.",
        "Yerel veri tabanı sistemlerinin günlük/haftalık veri yedekleme operasyonlarını takip ederek iş sürekliliği ve veri güvenliği standartlarının korunmasına katkı sağladım.",
        "Gelen teknik destek ve arıza taleplerini bilet (ticket) sistemi mantığıyla analiz edip kategorize ettim; tekrarlayan kronik sorunları tespit ederek süreç iyileştirme önerileri raporladım.",
      ],
      en: [
        "I managed operating system configurations for the faculty's servers and workstations, and handled installation, licensing and optimisation of the enterprise software, database clients and development tools needed by academic and administrative staff.",
        "I supported the system administrator on user account management, Active Directory / mail server access authorisation and the enforcement of network security protocols.",
        "I tracked daily and weekly backup operations for local database systems, contributing to business continuity and data security standards.",
        "I analysed and categorised incoming support and fault requests using ticket-system logic, identified recurring chronic issues and reported process improvement proposals.",
      ],
    } as L<string[]>,
    tech: [
      "Active Directory",
      "Windows Server",
      "Veri yedekleme",
      "Ağ güvenliği",
      "Ticket yönetimi",
    ],
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 7 · EĞİTİM   (gizlemek için: [])
 * ─────────────────────────────────────────────────────────────────────────── */
export const education = [
  {
    school: { tr: "Pamukkale Üniversitesi", en: "Pamukkale University" } as L,
    degree: {
      tr: "Yönetim Bilişim Sistemleri, Lisans (Mezuniyet Aşamasında)",
      en: "BSc Management Information Systems (Graduand)",
    } as L,
    period: "09/2022 — 06/2026",
    note: {
      tr: "Denizli, Türkiye · Tüm ders yükümlülükleri başarıyla tamamlandı.",
      en: "Denizli, Türkiye · All coursework successfully completed.",
    } as L,
  },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 8 · DİLLER & SERTİFİKALAR   (gizlemek için: [])
 * ─────────────────────────────────────────────────────────────────────────── */
export const languages = [
  {
    name: { tr: "Türkçe", en: "Turkish" } as L,
    level: { tr: "Ana dil", en: "Native" } as L,
  },
  {
    name: { tr: "İngilizce", en: "English" } as L,
    level: { tr: "Orta seviye (B1)", en: "Intermediate (B1)" } as L,
  },
  {
    name: { tr: "Almanca", en: "German" } as L,
    level: { tr: "Başlangıç (A1)", en: "Beginner (A1)" } as L,
  },
];

export const certifications: L[] = [
  { tr: "Uygulamalarla SQL Öğreniyorum", en: "Learning SQL Through Practice" },
  { tr: "Versiyon Kontrolleri: Git ve GitHub", en: "Version Control: Git and GitHub" },
  { tr: "Go ile Programlamaya Giriş", en: "Introduction to Programming with Go" },
];

/* ───────────────────────────────────────────────────────────────────────────
 * 9 · REFERANSLAR
 *     CV'deki referans (Dr. Öğr. Üyesi Mehmet Ulaş KOYUNCUOĞLU) bilinçli olarak
 *     siteye konmadı: üçüncü bir kişinin e-posta ve telefonunu herkese açık bir
 *     sayfada yayınlamak onun rızasını gerektirir. Referansı CV üzerinden
 *     paylaşmaya devam edebilirsin. Yine de sitede görünmesini istersen
 *     aşağıdaki diziyi doldur — iletişim bilgisi olmadan önerilir.
 * ─────────────────────────────────────────────────────────────────────────── */
export const references: { name: string; title: L }[] = [];

/* ───────────────────────────────────────────────────────────────────────────
 * 10 · İLETİŞİM BÖLÜMÜ
 * ─────────────────────────────────────────────────────────────────────────── */
export const contact = {
  heading: { tr: "Birlikte çalışalım", en: "Let's work together" } as L,
  body: {
    tr: "Mezuniyet aşamasındayım ve yeni pozisyonlara açığım. Bir fikrin, bir açık pozisyonun ya da sadece bir sorun varsa yazmaktan çekinme — genelde bir gün içinde dönüyorum.",
    en: "I am finishing my degree and open to new roles. If you have an idea, an open position, or just a question, get in touch — I usually reply within a day.",
  } as L,
};

/* ───────────────────────────────────────────────────────────────────────────
 * 11 · ARAYÜZ METİNLERİ  ·  UI STRINGS
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
  sectionLanguages: { tr: "Diller", en: "Languages" } as L,
  sectionCertifications: { tr: "Sertifikalar", en: "Certifications" } as L,
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
 * 12 · SEO
 * ─────────────────────────────────────────────────────────────────────────── */
export const seo = {
  /** ⚠ Siteyi yayına aldıktan sonra gerçek adresini buraya yaz. */
  siteUrl: "https://bengin-noyan.vercel.app",
  description: {
    tr: "Software Developer. Go, C#, .NET ve Python ile ERP, süreç otomasyonu, native masaüstü uygulamaları ve YOLOv8 tabanlı görüntü işleme çözümleri.",
    en: "Software Developer. ERP, process automation, native desktop applications and YOLOv8-based computer vision with Go, C#, .NET and Python.",
  } as L,
  keywords: [
    "Bengin Noyan",
    "software developer",
    "Go",
    "Golang",
    "Wails3",
    "C#",
    ".NET",
    "Python",
    "Vue 3",
    "PostgreSQL",
    "ERP",
    "YOLOv8",
    "computer vision",
    "machine learning",
    "yönetim bilişim sistemleri",
    "Pamukkale Üniversitesi",
  ],
};
