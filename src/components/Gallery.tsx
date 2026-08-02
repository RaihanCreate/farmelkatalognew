import { useState } from "react";
import { galleryGroups } from "../data/catalog";

export function Gallery() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
    index: number;
    total: number;
  } | null>(null);

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Galeri Produk</span>
          <h2 className="section-title">Dokumentasi Produk FARMEL</h2>
          <p className="section-sub">
            Katalog visual produk dan sistem pengolahan air FARMEL untuk berbagai kebutuhan industri.
          </p>
        </div>

        {/* gallery groups */}
        {galleryGroups.map((group) => (
          <div className="gal-group" key={group.id}>
            <div className="gal-group-head">
              <h3>{group.title}</h3>
              <span className="gal-count">{group.count} foto</span>
            </div>
            <p className="gal-group-desc">{group.desc}</p>

            <div className="gal-grid">
              {group.images.map((src, i) => (
                <div
                  className="photo-card"
                  key={i}
                  onClick={() =>
                    setActiveImage({
                      src,
                      title: group.title,
                      index: i + 1,
                      total: group.count,
                    })
                  }
                >
                  <img
                    src={src}
                    alt={`${group.title} - foto ${i + 1}`}
                    loading="lazy"
                  />
                  <div className="photo-overlay">
                    <div className="photo-label">{group.title}</div>
                    <div className="photo-sub">Klik untuk perbesar (Foto {i + 1}/{group.count})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setActiveImage(null)}>
                &times;
              </button>
              <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h4>{activeImage.title}</h4>
                <p>Foto {activeImage.index} dari {activeImage.total}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

