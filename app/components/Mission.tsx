import Image from "next/image";

const items = [
  "Inclusión real, sin barreras.",
  "Transparencia y ética en la IA.",
  "Formación y acceso a la tecnología para todos.",
  "Impacto social con soluciones accesibles.",
];

export default function Mission() {
  return (
    <section id="mision" aria-labelledby="mision-h" className="reveal-section">
      <div className="container">
        <span className="eyebrow">¿Por qué OMN HUB?</span>
        <div className="mission-grid" style={{ marginTop: 40 }}>
          <div>
            <h2 id="mision-h" className="h-section">
              No ofrecemos solo
              <br />
              herramientas. Cambiamos
              <br />
              cómo las empresas
              <br />
              entienden la inclusión.
            </h2>
            <p className="lede" style={{ marginTop: 32 }}>
              La igualdad es un derecho, no un privilegio. Construimos tecnología
              que la hace accesible, medible y eficiente — sin teatro, sin trampas,
              y con auditoría humana en cada decisión.
            </p>
          </div>

          <div className="mission-quote">
            <div className="mission-img-wrap">
              <Image
                src="/img/image-2-1024x683.jpg"
                alt="Profesional en silla de ruedas trabajando activamente en una presentación"
                width={1024}
                height={683}
                className="mission-img"
              />
            </div>
            <span className="mono" style={{ color: "var(--muted)" }}>
              ¿Cómo lo hacemos?
            </span>
            <ul className="checklist" aria-label="Principios de OMN HUB">
              {items.map((t, i) => (
                <li key={i}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="check" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M4 11.5l4.5 4.5L18 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mission-strip">
          <Image
            src="/img/image1.jpg"
            alt="Dos profesionales colaborando juntas, ejemplo de inclusión real en el entorno laboral"
            fill
            sizes="(min-width: 1280px) 1168px, (min-width: 920px) calc(100vw - 112px), calc(100vw - 40px)"
            className="mission-strip-img"
          />
        </div>
      </div>
    </section>
  );
}
