import { categories, type Category } from "../data/catalog";
import { categoryIcons, getProductIcon } from "./icons";

export function Catalog() {
  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Katalog Produk</span>
          <h2 className="section-title">Produk & Layanan Kami</h2>
          <p className="section-sub">
            Tiga kategori utama solusi pengolahan air FARMEL untuk kebutuhan industri dan komersial Anda.
          </p>
        </div>

        {/* quick nav */}
        <div className="cat-nav">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="cat-nav-btn">
              {c.title}
            </a>
          ))}
        </div>

        {/* category blocks */}
        {categories.map((cat) => (
          <CategoryBlock key={cat.id} cat={cat} />
        ))}
      </div>
    </section>
  );
}

function CategoryBlock({ cat }: { cat: Category }) {
  const Icon = categoryIcons[cat.icon];

  return (
    <div className="cat-block" id={cat.id}>
      <div className="cat-header">
        <div className="cat-icon">
          <Icon />
        </div>
        <div className="cat-info">
          <h2>
            {cat.title}
            {cat.brand && <span className="cat-brand-tag">Brand: {cat.brand}</span>}
          </h2>
          <p>{cat.desc}</p>
        </div>
      </div>

      {/* product groups */}
      {cat.groups.map((group, gi) => (
        <div className="sub-group" key={gi}>
          <h3 className="sub-group-title">{group.label}</h3>
          <div className="prod-grid">
            {group.items.map((item) => {
              const ItemIcon = getProductIcon(item.title);
              return (
                <div className="prod-card" key={item.title}>
                  <div className="prod-card-icon">
                    <ItemIcon />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* service list */}
      {cat.services && (
        <div className="service-list">
          {cat.services.map((s, i) => (
            <div className="service-item" key={s.title}>
              <div className="service-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
