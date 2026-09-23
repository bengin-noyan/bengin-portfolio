// Sitedeki butun metinler bu dosyada, baska bir yere dokunmaya gerek yok.
// Bir alani degistirip kaydetmek yetiyor.
//
// Cift dilli alanlar boyle yaziliyor:  { tr: "Turkce metin", en: "English text" }
// Bir bolumu komple gizlemek icin dizisini bos birak: []
//
// Metinlerin hepsi CV'den geliyor (BENGIN-NOYAN-CV-guncel.pdf, 2026).

export type Lang = "tr" | "en";

// cift dilli deger / bilingual value
export type L<T = string> = { tr: T; en: T };

// --- 1. PROFIL ---
export const profile = {
  // tam adim, header'da ve tarayici sekmesinde gorunuyor
  name: "Bengin Noyan",

  // logo olarak kullanilan bas harfler
  initials: "BN",

  // Hero'daki portre. Dosyayi public/ icine koyup yolunu buraya yaziyorum
  // (or. "/portrait.jpg"). Bos birakirsam foto alani hic cizilmiyor, bozuk
  // gorsel ikonu cikmasin diye. Kare kirpilmis, en az 640x640 olmasi iyi.
  photo: "/bengin-noyan.jpg",

  // fotografin alt metni, bos birakilirsa isim + unvan kullaniliyor
  photoAlt: { tr: "Bengin Noyan portresi", en: "Portrait of Bengin Noyan" } as L,

  // unvan, hero'da ismin altinda cikiyor
  title: {
    tr: "Software Developer",
    en: "Software Developer",
  } as L,

  // hero'da ismin ustundeki tek cumlelik ozet
  tagline: {
    tr: "C#, .NET, Go ve Python ile uçtan uca sistemler kuruyorum. Kurumsal kaynak planlama ve süreç otomasyonları tasarlıyor, makine öğrenmesi ve görüntü işleme modellerini üretime taşıyorum.",
    en: "I build end-to-end systems with C#, .NET, Go and Python. I design enterprise resource planning and process automation, and take machine learning and computer vision models to production.",
  } as L,

  // hero'daki kucuk durum rozeti
  availability: {
    tr: "Mezuniyet aşamasında · İş fırsatlarına açığım",
    en: "Graduating · Open to opportunities",
  } as L,

  location: {
    tr: "Türkiye · Uzaktan çalışmaya açık",
    en: "Türkiye · Open to remote",
  } as L,

  email: "benginnyn72@gmail.com",

  // Telefonu bilerek siteye koymadim, sadece indirilen CV'de var.
  // Sayfada da gostermek istersem numarayi buraya yazip Contact'a bir satir
  // eklemem lazim.
  phone: "",

  // CV dosyasi public/cv.pdf olarak duruyor. Butonu gizlemek icin: ""
  resumeUrl: "/cv.pdf",

  // indirirken dosyaya verilecek ad
  resumeFileName: "BENGİN-NOYAN-CV.pdf",
};

// --- 2. SOSYAL LINKLER ---
// icon secenekleri: "github" | "linkedin" | "x" | "mail" | "dribbble" | "link"
export const socials = [
  { label: "GitHub", href: "https://github.com/bengin-noyan", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bengin-noyan-028b07312",
    icon: "linkedin",
  },
  { label: "E-posta", href: "mailto:" + profile.email, icon: "mail" },
];

// --- 3. HAKKIMDA ---
export const about = {
  // her dizi elemani ayri bir paragraf oluyor
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

  // Hakkimda'nin yanindaki rakam kartlari, su an kapali.
  // Geri acmak icin diziye kayit ekle, ornegin:
  //   { value: "2026", label: { tr: "Mezuniyet yili", en: "Graduation year" } as L },
  // Bos kaldigi surece bolum tek sutuna dusuyor, kart alani hic cizilmiyor.
  stats: [] as { value: string; label: L }[],
};

// --- 4. YETENEKLER (CV'deki beceriler) ---
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
      "Node.js",
      "Streamlit",
      "RESTful API",
      "Modüler Mimari",
      "RBAC",
      "Database Migrations",
      "UBL-TR 1.2 (e-Fatura)",
      "Web3",
      "DApps",
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
    ],
  },
  {
    title: { tr: "Yapay Zekâ & Görüntü İşleme", en: "AI & Computer Vision" } as L,
    items: [
      "YOLOv8",
      "Computer Vision",
      "Machine Learning",
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

// --- 5. PROJELER (CV'deki projeler) ---
// featured: true  -> buyuk kart olarak listenin basinda gosteriliyor
// image: gorseli public/projects/ icine at, yolunu buraya yaz. Bos birakirsan
//        kapak hic cizilmiyor, kartin ustunde sadece aksan cizgisi kaliyor.
// links: repo/demo herkese acikssa yaz, bos birakilanin butonu gorunmuyor
// year:  bos birakirsan yil rozeti cikmiyor
export const projects = [
  {
    title: "NowlTarım — Modüler Tarım ERP Sistemi",
    year: "2026",
    featured: true,
    blurb: {
      tr: "~20.000 dönümlük büyük ölçekli tarım işletmeleri için 13 bağımsız modülden oluşan, uydu görüntüsü ve yapay zekâ analizleriyle beslenen web tabanlı kurumsal kaynak planlama sistemi.",
      en: "A web-based enterprise resource planning system of 13 independent modules for large-scale farms of ~20,000 decares, fed by satellite imagery and AI-driven analysis.",
    } as L,
    description: {
      tr: "Go (chi/v5 router, jackc/pgx/v5 bağlantı havuzu) ve PostgreSQL 16 üzerinde, Docker ile paketlenen RESTful bir API tasarladım; arayüzü React 18, TypeScript, Vite, Tailwind CSS ve Leaflet ile geliştirdim. 6 kullanıcı rolü × 13 modül seviyesinde merkezî bir RBAC katmanı kurguladım. Kapanan üretim sezonlarına geriye dönük veri girişini ve kâr/zarar sapmalarını PostgreSQL trigger'ları ve table guard yapılarıyla veritabanı seviyesinde kesin olarak engelledim. UBL-TR 1.2 XML formatında e-Fatura entegrasyon çekirdeği, Sentinel Hub API ile çok bantlı NDVI haritalama katmanı ve YOLOv8 + Gemini API tabanlı zirai analiz servisleri entegre ettim.",
      en: "I designed a Dockerised RESTful API on Go (chi/v5 router, jackc/pgx/v5 connection pool) and PostgreSQL 16, with a front end built in React 18, TypeScript, Vite, Tailwind CSS and Leaflet. A central RBAC layer governs 6 user roles across 13 modules. Backdated entry into closed production seasons — and the profit/loss drift it causes — is blocked at the database level by PostgreSQL triggers and table guards. I integrated a UBL-TR 1.2 XML e-invoice core, a multi-band NDVI mapping layer over the Sentinel Hub API, and agricultural analysis services built on YOLOv8 and the Gemini API.",
    } as L,
    // CV'deki madde basliklari, kartta alt alta listeleniyor
    highlights: {
      tr: [
        { label: "Mimari & backend", text: "Go (chi/v5 router, jackc/pgx/v5 bağlantı havuzu), PostgreSQL 16 ve Docker üzerinde RESTful API mimarisi kurgulandı; arayüz React 18, TypeScript, Vite, Tailwind CSS ve Leaflet ile geliştirildi." },
        { label: "Kapsam & yetkilendirme", text: "~20.000 dönümlük büyük ölçekli tarım işletmeleri için 13 bağımsız modül geliştirildi; 6 kullanıcı rolü × 13 modül seviyesinde merkezî rol tabanlı erişim kontrolü (RBAC) katmanı tasarlandı." },
        { label: "Veri bütünlüğü", text: "PostgreSQL trigger'ları ve table guard yapılarıyla, kapanan üretim sezonlarına/kampanyalarına geriye dönük veri girişi ve kâr/zarar sapmaları veritabanı seviyesinde kesin olarak engellendi." },
        { label: "Dış entegrasyonlar", text: "UBL-TR 1.2 XML formatında e-Fatura entegrasyon çekirdeği, Sentinel Hub API ile uydu görüntülerinden çok bantlı NDVI (Normalize Edilmiş Fark Bitki İndeksi) haritalama katmanı ve YOLOv8 ile Gemini API tabanlı zirai analiz servisleri entegre edildi." },
      ],
      en: [
        { label: "Architecture & backend", text: "A RESTful API architecture was built on Go (chi/v5 router, jackc/pgx/v5 connection pool), PostgreSQL 16 and Docker, with a front end in React 18, TypeScript, Vite, Tailwind CSS and Leaflet." },
        { label: "Scope & authorisation", text: "13 independent modules were developed for large-scale farms of ~20,000 decares, governed by a central role-based access control (RBAC) layer spanning 6 user roles × 13 modules." },
        { label: "Data integrity", text: "PostgreSQL triggers and table guards conclusively block backdated data entry into closed production seasons/campaigns and the profit/loss drift it would cause, at the database level." },
        { label: "External integrations", text: "A UBL-TR 1.2 XML e-invoice integration core, a multi-band NDVI (Normalised Difference Vegetation Index) mapping layer built on satellite imagery via the Sentinel Hub API, and agricultural analysis services based on YOLOv8 and the Gemini API were integrated." },
      ],
    } as L<{ label: string; text: string }[]>,
    tags: [
      "Go",
      "chi/v5",
      "pgx/v5",
      "PostgreSQL 16",
      "Docker",
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "RBAC",
      "UBL-TR 1.2",
      "Sentinel Hub API",
      "YOLOv8",
      "Gemini API",
    ],
    image: "",
    links: { demo: "", repo: "" },
  },
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
    // CV'deki madde basliklari, kartta alt alta listeleniyor
    highlights: {
      tr: [
        { label: "Derin öğrenme & mimariler", text: "Derin öğrenme tabanlı bilgisayarlı görü ile bulut mimarilerini entegre eden uçtan uca otonom teşhis sistemi tasarlandı." },
        { label: "Model optimizasyonu & performans", text: "Roboflow ve Kaggle veri kümelerinde transfer learning ve hiper-parametre optimizasyonuyla eğitilen Ultralytics YOLOv8 Medium modeliyle %94.1 mAP50 doğruluk ve 2 saniyenin altında çıkarım latansı elde edildi." },
        { label: "Reaktif karar destek paneli", text: "Model çıktılarını SQLite ve Firebase mimarileriyle senkronize eden, Streamlit tabanlı arayüzde Pandas ve Plotly ile zirai eylem planlarını görselleştiren dinamik analiz paneli kurgulandı." },
      ],
      en: [
        { label: "Deep learning & architecture", text: "An end-to-end autonomous diagnosis system was designed, integrating deep-learning computer vision with cloud architecture." },
        { label: "Model optimisation & metrics", text: "An Ultralytics YOLOv8 Medium model, trained on Roboflow and Kaggle datasets with transfer learning and hyper-parameter optimisation, reached 94.1% mAP50 accuracy at sub-two-second inference latency." },
        { label: "Reactive decision-support panel", text: "A dynamic analysis panel was built on a reactive Streamlit interface, synchronising model output through SQLite and Firebase and visualising agricultural action plans with Pandas and Plotly." },
      ],
    } as L<{ label: string; text: string }[]>,
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
    // CV'deki madde basliklari, kartta alt alta listeleniyor
    highlights: {
      tr: [
        { label: "LAN dağıtık mimarisi", text: "Diş klinikleri için yerel ağ (LAN) topolojisinde istemci-sunucu modelinde eşzamanlı çalışan masaüstü klinik otomasyon sistemi kurgulandı." },
        { label: "Dental standartlar & iş akışı", text: "FDI (ISO 3950) uluslararası dental standardına uygun dinamik diş topolojisi, hekim takvimli asenkron randevu yönetimi, seans tabanlı tedavi planlaması ve taksitli finansal süreç takip modülleri geliştirildi." },
        { label: "Migration & asenkron kuyruk", text: "PostgreSQL 17 üzerinde 23 tablolu normalize şema ve sürüm kontrollü sıralı SQL migration yönetimi sağlandı; NetGSM entegrasyonlu asenkron arka plan SMS bildirim kuyruğu servisi yapılandırıldı." },
      ],
      en: [
        { label: "Distributed LAN architecture", text: "A desktop clinic automation system was built for dental practices, running concurrently in a client-server model over a local network topology." },
        { label: "Dental standards & workflow", text: "Dynamic tooth topology compliant with the FDI (ISO 3950) international dental standard, asynchronous appointment management on practitioner calendars, session-based treatment planning and instalment-based financial tracking modules were developed." },
        { label: "Migrations & async queue", text: "A normalised 23-table schema with version-controlled sequential SQL migration management was established on PostgreSQL 17, alongside an asynchronous background SMS notification queue integrated with NetGSM." },
      ],
    } as L<{ label: string; text: string }[]>,
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
    // CV'deki madde basliklari, kartta alt alta listeleniyor
    highlights: {
      tr: [
        { label: "CGO-free native mimarisi", text: "Cross-compilation avantajı sağlayan CGO-free saf Go ve Wails3 mimarisinde, native ve sıfır bağımlılıklı tek dosyalı (.exe) masaüstü otomasyonu geliştirildi." },
        { label: "Deterministik hesap motoru", text: "Kayan nokta hassasiyet kayıplarını ve yuvarlama sapmalarını engellemek amacıyla deterministik tamsayı aritmetiği (int64 fixed-point / scaled integer) üzerine kurgulanmış, TCMB XML entegrasyonlu ve izole birim testli kur farkı hesap motoru yazıldı." },
        { label: "Süreklilik & raporlama", text: "Gömülü SQL migration altyapısı, otomatik yedekleme/recovery mekanizmaları, Excelize kütüphanesiyle veri dışa aktarımı ve senkronize cari ekstre raporlama altyapısı kurgulandı." },
      ],
      en: [
        { label: "CGO-free native architecture", text: "A native, zero-dependency single-file (.exe) desktop automation was built on a CGO-free pure Go and Wails3 architecture that enables cross-compilation." },
        { label: "Deterministic calculation engine", text: "An exchange-rate engine was written on deterministic integer arithmetic (int64 fixed-point / scaled integer) to eliminate floating-point precision loss and rounding drift, integrated with TCMB XML and covered by isolated unit tests." },
        { label: "Continuity & reporting", text: "Embedded SQL migration infrastructure, automatic backup/recovery mechanisms, Excelize-based data export and synchronised account-statement reporting were established." },
      ],
    } as L<{ label: string; text: string }[]>,
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
    // CV'deki madde basliklari, kartta alt alta listeleniyor
    highlights: {
      tr: [
        { label: "Sistem analizi & tasarımı (SDLC)", text: "Akıllı mikro-mobilite ekosisteminin System Development Life Cycle (SDLC) ve nesne yönelimli analiz/tasarım (OOA/OOD) metodolojileri doğrultusunda uçtan uca mimari kurgusu yürütüldü." },
        { label: "İstemci mimarisi & telemetri", text: "C# ile masaüstü istemci arayüzü, Microsoft SQL Server üzerinde 3NF seviyesinde normalize edilmiş ilişkisel veritabanı şeması ve anlık GPS/IoT telemetri veri akış modelleri yapılandırıldı." },
        { label: "Formal dokümantasyon & güvenlik", text: "Sistem gereksinimleri UML Use Case, veri akış diyagramları (DFD Level 0/1), karar ağaçları ve detaylı HIPO modelleriyle formal olarak dokümante edildi; 3D Secure ödeme geçidi entegrasyon protokolleri planlandı." },
        { label: "Sermaye bütçelemesi & fizibilite", text: "4.65M TL sermayeli finansal simülasyonlarda %60.07 iç kârlılık oranı (IRR), 7.22M TL net bugünkü değer (NPV) ve 1.56 yıl indirgenmiş geri ödeme süresiyle projenin finansal fizibilitesi doğrulandı." },
      ],
      en: [
        { label: "System analysis & design (SDLC)", text: "End-to-end architecture for the smart micro-mobility ecosystem was carried out following System Development Life Cycle (SDLC) and object-oriented analysis/design (OOA/OOD) methodologies." },
        { label: "Client architecture & telemetry", text: "A C# desktop client interface, a relational schema normalised to 3NF on Microsoft SQL Server, and real-time GPS/IoT telemetry data-flow models were configured." },
        { label: "Formal documentation & security", text: "System requirements were formally documented with UML use cases, data-flow diagrams (DFD level 0/1), decision trees and detailed HIPO models; 3D Secure payment gateway integration protocols were planned." },
        { label: "Capital budgeting & feasibility", text: "Financial simulations on 4.65M TRY of capital confirmed feasibility with a 60.07% internal rate of return (IRR), 7.22M TRY net present value (NPV) and a 1.56-year discounted payback period." },
      ],
    } as L<{ label: string; text: string }[]>,
    tags: ["C#", "MS SQL Server", "3NF", "UML", "DFD", "IoT / GPS", "SDLC", "NPV / IRR"],
    image: "",
    links: { demo: "", repo: "" },
  },
];

// --- 6. DENEYIM (CV'deki deneyim) ---
export const experience = [
  {
    company: "NowlSoft",
    url: "",
    location: { tr: "Batman, Türkiye", en: "Batman, Türkiye" } as L,
    role: { tr: "Yazılım Geliştirme Stajyeri", en: "Software Development Intern" } as L,
    period: { tr: "07/2026 – 10/2026", en: "07/2026 – 10/2026" } as L,
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

// --- 7. EGITIM --- (gizlemek icin: [])
export const education = [
  {
    school: { tr: "Pamukkale Üniversitesi", en: "Pamukkale University" } as L,
    degree: {
      tr: "Yönetim Bilişim Sistemleri, Lisans (Mezuniyet Aşamasında)",
      en: "BSc Management Information Systems (Graduand)",
    } as L,
    period: "09/2022 — 06/2026",
    note: {
      tr: "Denizli, Türkiye · Tüm ders yükümlülükleri tamamlandı. 13 Ekim 2026'da zorunlu staj süreci bitiyor ve mezuniyet gerçekleşiyor; bu tarihten itibaren tam zamanlı çalışmaya uygunum.",
      en: "Denizli, Türkiye · All coursework completed. The mandatory internship ends on 13 October 2026 and graduation follows; I am available for full-time work from that date.",
    } as L,
  },
];

// --- 8. DILLER & SERTIFIKALAR --- (gizlemek icin: [])
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
  {
    tr: "The Complete Full-Stack Web Development Bootcamp",
    en: "The Complete Full-Stack Web Development Bootcamp",
  },
  { tr: "Uygulamalarla SQL Öğreniyorum", en: "Learning SQL Through Practice" },
  { tr: "Versiyon Kontrolleri: Git ve GitHub", en: "Version Control: Git and GitHub" },
  { tr: "Go ile Programlamaya Giriş", en: "Introduction to Programming with Go" },
];

// --- 9. REFERANSLAR ---
// CV'deki referansi (Dr. Ogr. Uyesi Mehmet Ulas KOYUNCUOGLU) siteye koymadim:
// baska birinin e-posta ve telefonunu herkese acik bir sayfada yayinlamak once
// ona sormayi gerektirir. CV uzerinden paylasmaya devam edebilirim. Yine de
// sitede gorunsun istersem asagidaki diziyi doldururum, iletisim bilgisi
// koymadan.
export const references: { name: string; title: L }[] = [];

// --- 10. ILETISIM BOLUMU ---
export const contact = {
  heading: { tr: "Benimle iletişime geçin", en: "Contact me" } as L,

  // giris cumlesinin ortasinda e-posta linki duruyor, o yuzden ikiye bolundu
  bodyBefore: {
    tr: "Bana doğrudan",
    en: "Please contact me directly at",
  } as L,
  bodyAfter: {
    tr: "adresinden ya da bu form üzerinden ulaşabilirsiniz.",
    en: "or through this form.",
  } as L,

  // Formun mesaji POST edecegi adres. Site statik export edildigi icin sunucu
  // tarafi yok, calismasi icin ucuncu parti bir servis lazim. Bos birakilirsa
  // form mailto'ya dusuyor.
  //
  // Formspree : https://formspree.io/f/XXXXXXXX
  // Web3Forms : https://api.web3forms.com/submit   (access key'i de asagiya yaz)
  // Getform   : https://getform.io/f/XXXXXXXX
  formEndpoint: "https://formspree.io/f/xeajwlzg",

  // sadece Web3Forms icin, panelden aldigin access key
  formAccessKey: "",
};

// --- 11. ARAYUZ METINLERI ---
export const ui = {
  navAbout: { tr: "Hakkımda", en: "About" } as L,
  navWork: { tr: "Projeler", en: "Work" } as L,
  navExperience: { tr: "Deneyim", en: "Experience" } as L,
  navContact: { tr: "İletişim", en: "Contact" } as L,

  heroPrimary: { tr: "Projelerime göz at", en: "View my work" } as L,
  heroSecondary: { tr: "CV'yi indir", en: "Download CV" } as L,

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
  backToTop: { tr: "Yukarı dön", en: "Back to top" } as L,
  builtWith: {
    tr: "Next.js ve Tailwind CSS ile geliştirildi.",
    en: "Built with Next.js and Tailwind CSS.",
  } as L,
  menu: { tr: "Menü", en: "Menu" } as L,
  close: { tr: "Kapat", en: "Close" } as L,
  switchLang: { tr: "Switch to English", en: "Türkçe'ye geç" } as L,
  switchToLight: { tr: "Açık temaya geç", en: "Switch to light theme" } as L,
  switchToDark: { tr: "Koyu temaya geç", en: "Switch to dark theme" } as L,

  // iletisim formu
  formEmail: { tr: "E-posta adresiniz", en: "Your email" } as L,
  formMessage: { tr: "Mesajınız", en: "Your message" } as L,
  formSend: { tr: "Gönder", en: "Submit" } as L,
  formSending: { tr: "Gönderiliyor…", en: "Sending…" } as L,
  formSuccess: {
    tr: "Mesajın bana ulaştı — en kısa sürede döneceğim.",
    en: "Your message reached me — I will get back to you shortly.",
  } as L,
  formError: {
    tr: "Mesaj gönderilemedi. Doğrudan e-posta atabilirsin.",
    en: "The message could not be sent. Feel free to email me directly.",
  } as L,
  formOr: { tr: "ya da", en: "or" } as L,
};

// --- 12. SEO ---
export const seo = {
  // Sitenin canli adresi. sitemap.xml, robots.txt, canonical ve OG etiketleri
  // hep buradan tureyor, alan adi degisirse tek degisecek yer burasi.
  siteUrl: "https://bengin-portfolio.vercel.app",
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
