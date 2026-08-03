import { PhoneIcon, MailIcon, MapPinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* brand */}
          <div className="footer-col">
            <div className="footer-brand">
              <div className="brand-mark">
                <img src="/images/Screenshot_2026-08-02_015843.png" alt="FARMEL logo" />
              </div>
              <div className="brand-name">
                FARMEL
              </div>
            </div>
            <p>
              Spesialis pengolahan air dan air limbah untuk kebutuhan industri dan komersial.
              Water Treatment, Waste Water Treatment, dan Service & Maintenance.
            </p>
          </div>

          {/* quick links */}
          <div className="footer-col">
            <h5>Kategori</h5>
            <ul>
              <li><a href="#water-treatment">Water Treatment</a></li>
              <li><a href="#waste-water-treatment">Waste Water Treatment</a></li>
              <li><a href="#service-maintenance">Service & Maintenance</a></li>
              <li><a href="#gallery">Galeri Produk</a></li>
            </ul>
          </div>

          {/* contact */}
          <div className="footer-col">
            <h5>Kontak</h5>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <PhoneIcon className="footer-contact-icon" style={{ marginTop: "4px" }} />
                <div>
                  <div>Telp. (62-21) 7362295</div>
                  <div>Fax. (62-21) 7362311</div>
                </div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MailIcon className="footer-contact-icon" />
                <a href="mailto:marketing@farmel.co.id">marketing@farmel.co.id</a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPinIcon className="footer-contact-icon" style={{ marginTop: "4px" }} />
                <span> MGK Kemayoran F-15 - Jakarta Pusat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} FARMEL. All rights reserved.
            &nbsp;|&nbsp; PT Farmel Cipta Mulia
          </p>
        </div>
      </div>
    </footer>
  );
}
