/* ============================================================
   FARMEL — Catalog Data
   All product categories, subcategories, and galleries
   ============================================================ */

export interface ProductItem {
  title: string;
  desc: string;
}

export interface SubGroup {
  label: string;
  items: ProductItem[];
}

export interface Category {
  id: string;
  title: string;
  brand?: string;
  desc: string;
  icon: "droplet" | "recycle" | "wrench";
  groups: SubGroup[];
  /** flat list of items for the service category */
  services?: ProductItem[];
}

export interface GalleryGroup {
  id: string;
  title: string;
  count: number;
  desc: string;
  images: string[];
}

/* ---------- CATEGORIES ---------- */

export const categories: Category[] = [
  {
    id: "water-treatment",
    title: "Water Treatment",
    brand: "FARMEL",
    desc: "Solusi pengolahan air bersih untuk industri dan komersial",
    icon: "droplet",
    groups: [
      {
        label: "Chemical Treatment — Brand: RASCHEM",
        items: [
          { title: "Cooling Tower Treatment", desc: "Chemical cooling tower untuk mencegah kerak, korosi, dan pertumbuhan bakteri." },
          { title: "Boiler Water Treatment", desc: "Chemical boiler untuk efisiensi panas dan perlindungan pipa dari kerak dan korosi." },
          { title: "Chiller Water Treatment", desc: "Chemical chiller untuk menjaga kualitas air sirkulasi dan mencegah biofouling." },
          { title: "Cleaning Water Treatment", desc: "Chemical pembersih untuk sistem air, menghilangkan kerak dan endapan kotoran." },
        ],
      },
      {
        label: "Equipment",
        items: [
          { title: "Sand Filter", desc: "Filter pasir untuk menyaring partikel tersuspensi dalam air." },
          { title: "Carbon Filter", desc: "Filter karbon aktif untuk menghilangkan bau, warna, dan senyawa organik." },
          { title: "Manganese Filter", desc: "Filter manganese untuk menghilangkan kandungan besi dan manganese dalam air." },
          { title: "Pressure Gravity Filter", desc: "Filter gravitasi bertekanan untuk penyaringan air kapasitas besar." },
          { title: "Water Softener", desc: "Pelembut air untuk menghilangkan kesadahan (kalsium dan magnesium)." },
          { title: "FRP Panel", desc: "Panel FRP tahan korosi untuk tangki dan konstruksi sistem pengolahan air." },
        ],
      },
      {
        label: "Treatment System",
        items: [
          { title: "Demineralizer", desc: "Sistem demineralisasi untuk menghasilkan air murni bebas mineral." },
          { title: "Reverse Osmosis", desc: "Sistem RO untuk penyaringan air tingkat lanjut dengan membran semi-permeabel." },
          { title: "Water Recycling Treatment", desc: "Sistem daur ulang air limbah menjadi air bersih untuk reuse." },
          { title: "Water Treatment", desc: "Sistem pengolahan air lengkap sesuai kebutuhan industri dan komersial." },
        ],
      },
    ],
  },

  {
    id: "waste-water-treatment",
    title: "Waste Water Treatment",
    brand: "FARMEL",
    desc: "Pengolahan air limbah domestik dan industri yang ramah lingkungan",
    icon: "recycle",
    groups: [
      {
        label: "Sewage Treatment",
        items: [
          { title: "Extended Aeration", desc: "Sistem aerasi extended untuk pengolahan air limbah domestik secara biologis." },
          { title: "Portable Biotechnology System", desc: "Sistem bioteknologi portabel untuk pengolahan limbah cair skala kecil." },
        ],
      },
      {
        label: "Waste Water Treatment System",
        items: [
          { title: "Anaerobic and Aerobic System", desc: "Kombinasi sistem anaerob dan aerob untuk pengolahan limbah cair secara efisien." },
          { title: "Daffresh Package", desc: "Package plant untuk pengolahan air limbah dengan sistem Daffresh." },
          { title: "Sedimentation Package", desc: "Paket sedimentasi untuk pemisahan padatan dari air limbah." },
          { title: "WWTP Package Mobile", desc: "IPAL mobile siap pakai untuk lokasi sementara dan mobile." },
          { title: "Biogas Treatment", desc: "Pengolahan limbah menjadi biogas sebagai energi terbarukan." },
        ],
      },
    ],
  },

  {
    id: "service-maintenance",
    title: "Service & Maintenance",
    desc: "Layanan profesional untuk seluruh sistem pengolahan air Anda",
    icon: "wrench",
    groups: [],
    services: [
      { title: "Engineering Design WTP/STP/WWTP", desc: "Desain rekayasa sistem pengolahan air bersih dan limbah sesuai standar." },
      { title: "Procurement, Installation and Construction", desc: "Pengadaan, pemasangan, dan konstruksi sistem pengolahan air turnkey." },
      { title: "Consulting and Supervision", desc: "Konsultasi dan supervisi teknis untuk proyek pengolahan air." },
      { title: "Optimalisation and Assesment WTP/STP/WWTP", desc: "Optimalisasi dan assessment kinerja sistem pengolahan air existing." },
      { title: "Operational & Maintenance WTP/STP/WWTP", desc: "Operasional dan pemeliharaan harian sistem pengolahan air." },
      { title: "Cleaning Boiler, Cooling & Chiller Tower", desc: "Pembersihan dan perawatan boiler, cooling tower, dan chiller tower." },
      { title: "Media Filter Replace", desc: "Penggantian media filter secara berkala untuk performa optimal." },
      { title: "Replacement Media Filtration", desc: "Penggantian media filtrasi dengan material berkualitas sesuai spesifikasi." },
    ],
  },
];

/* ---------- GALLERY ---------- */

export const galleryGroups: GalleryGroup[] = [
  {
    id: "chemical-water-analysis",
    title: "Chemical & Water Analysis",
    count: 3,
    desc: "Layanan analisis kimia dan kualitas air untuk menentukan treatment yang tepat.",
    images: [
      "/images/water1.jpg",
      "/images/water2.jpg",
      "/images/water3.jpg",
    ],
  },
  {
    id: "raschem-chemical",
    title: "RASCHEM Chemical Water Treatment",
    count: 3,
    desc: "Produk kimia RASCHEM untuk cooling tower, boiler, dan chiller water treatment.",
    images: [
      "/images/Raschem1.jpg",
      "/images/Raschem2.jpg",
      "/images/Raschem3.jpg",
    ],
  },
  {
    id: "sand-filter",
    title: "Sand Filter",
    count: 3,
    desc: "Filter pasir FARMEL untuk penyaringan partikel tersuspensi dalam air.",
    images: [
      "/images/sandfilter1.jpg",
      "/images/sandfilter2.jpg",
      "/images/sandfilter3.jpg",
    ],
  },
  {
    id: "iron-manganese-filter",
    title: "Iron & Manganese Filter",
    count: 2,
    desc: "Filter besi dan manganese untuk air dengan kandungan logam tinggi.",
    images: [
      "/images/iron.jpg",
      "/images/iron2.jpg",
    ],
  },
  {
    id: "water-softener",
    title: "Water Softener",
    count: 4,
    desc: "Sistem pelembut air untuk menghilangkan kesadahan kalsium dan magnesium.",
    images: [
      "/images/watersoftaner1.jpg",
      "/images/watersoftaner2.jpg",
      "/images/watersoftaner3.jpg",
      "/images/watersoftaner4.jpg",
    ],
  },
  {
    id: "demineralizer-mixbed",
    title: "Demineralizer & Mix Bed",
    count: 3,
    desc: "Sistem demineralisasi dan mix bed untuk menghasilkan air murni bebas mineral.",
    images: [
      "/images/mix1.jpg",
      "/images/mix2.jpg",
      "/images/mix3.jpg",
    ],
  },
  {
    id: "reverse-osmosis",
    title: "Reverse Osmosis (RO)",
    count: 2,
    desc: "Sistem reverse osmosis untuk penyaringan air tingkat lanjut dengan membran semi-permeabel.",
    images: [
      "/images/ro1.jpg",
      "/images/ro2.jpg",
    ],
  },
  {
    id: "media-filter",
    title: "Media Filter",
    count: 1,
    desc: "Media filter berkualitas untuk berbagai jenis sistem penyaringan air.",
    images: [
      "/images/media.jpg",
    ],
  },
  {
    id: "frp-tank",
    title: "FRP Tank",
    count: 1,
    desc: "Tangki FRP tahan korosi untuk sistem pengolahan air.",
    images: [
      "/images/tank.jpg",
    ],
  },
];
