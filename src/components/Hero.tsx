import { ArrowLeftIcon, ArrowDownIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* decorative glow */}
      <div className="hero-glow" />

      {/* floating bubbles */}
      <div className="bubbles">
        {bubbleData.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* top bar */}
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <img src="/images/Screenshot_2026-08-02_015843.png" alt="FARMEL logo" />
          </div>
          <div className="brand-name">
            FARMEL
          </div>
        </div>

        <a href="/" className="back-btn">
          <ArrowLeftIcon />
          Kembali ke Beranda
        </a>
      </div>

      {/* hero content */}
      <div className="hero-content">
        <div className="hero-badge">Katalog Produk & Layanan</div>
        <h1 className="hero-title">
          Solusi Pengolahan Air <span>Profesional</span> untuk Industri
        </h1>
        <p className="hero-desc">
          Water Treatment, Waste Water Treatment, dan Service & Maintenance —
          dirancang untuk efisiensi, keandalan, dan keberlanjutan lingkungan.
        </p>
        <div className="hero-cta">
          <a href="#catalog" className="btn-primary">
            Lihat Katalog
            <ArrowDownIcon />
          </a>
          <a href="#gallery" className="btn-ghost">
            Galeri Produk
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">3</div>
            <div className="stat-label">Kategori Utama</div>
          </div>
          <div className="stat">
            <div className="stat-num">25+</div>
            <div className="stat-label">Produk & Sistem</div>
          </div>
          <div className="stat">
            <div className="stat-num">8</div>
            <div className="stat-label">Layanan</div>
          </div>
        </div>
      </div>

      {/* animated waves */}
      <div className="hero-waves">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="wave-layer wave-layer-3"
            fill="rgba(0,139,245,0.15)"
            d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,220 L0,220 Z"
          />
          <path
            className="wave-layer wave-layer-2"
            fill="rgba(118,196,255,0.25)"
            d="M0,130 C240,190 480,70 720,130 C960,190 1200,70 1440,130 L1440,220 L0,220 Z"
          />
          <path
            className="wave-layer"
            fill="#ffffff"
            d="M0,160 C240,210 480,110 720,160 C960,210 1200,110 1440,160 L1440,220 L0,220 Z"
          />
        </svg>
      </div>
    </section>
  );
}

/* bubble config */
const bubbleData = [
  { left: 5, size: 24, duration: 18, delay: 0 },
  { left: 15, size: 16, duration: 22, delay: 3 },
  { left: 28, size: 30, duration: 16, delay: 6 },
  { left: 42, size: 20, duration: 20, delay: 1 },
  { left: 55, size: 14, duration: 24, delay: 8 },
  { left: 68, size: 26, duration: 19, delay: 4 },
  { left: 80, size: 18, duration: 21, delay: 7 },
  { left: 92, size: 22, duration: 17, delay: 2 },
];
