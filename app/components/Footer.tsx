import AsteriskMark from "./AsteriskMark";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <AsteriskMark size={56} color="var(--cream)" strokeWidth={11} />
              <span className="footer-mark">OMN HUB</span>
            </div>
            <p className="lede" style={{ marginTop: 24, maxWidth: "40ch" }}>
              Recapacitando al mundo con tecnología e IA.
            </p>
          </div>
          <div className="footer-col">
            <h5>Navegación</h5>
            <a href="#mision">Misión</a>
            <a href="#servicios">Servicios</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#unete">Únete</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <a href="mailto:hola@omnhub.com">hola@omnhub.com</a>
            <a href="tel:+34900000000">+34 900 00 00 00</a>
            <a
              href="https://instagram.com/omnhub"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/omnhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 OMN HUB — Recapacitando al mundo con tecnología e IA.</span>
          <span className="mono" style={{ color: "var(--muted)" }}>
            WCAG 2.2 AA · IA ética · Hecho en España
          </span>
        </div>
      </div>
    </footer>
  );
}
