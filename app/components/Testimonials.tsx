const items = [
  {
    q: "La IA desarrollada por OMN HUB ha transformado nuestra forma de implementar políticas de igualdad, haciéndolas más eficientes y efectivas.",
    name: "María García",
    role: "Directora de RRHH",
  },
  {
    q: "Los asistentes de IA han permitido que nuestros empleados con discapacidad visual trabajen con mayor autonomía y productividad.",
    name: "Carlos Rodríguez",
    role: "Director de Innovación",
  },
  {
    q: "La formación tecnológica de OMN HUB ha sido clave para la integración laboral de personas con diversidad funcional en nuestra plantilla.",
    name: "Laura Sánchez",
    role: "Responsable de Inclusión",
  },
  {
    q: "Ahora nuestra empresa tiene un plan de igualdad real y accesible, sin complicaciones y con un impacto tangible.",
    name: "Cliente corporativo",
    role: "Sector tecnológico",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" aria-labelledby="t-h" className="reveal-section">
      <div className="container">
        <div className="services-head">
          <div>
            <span className="eyebrow">Testimonios</span>
            <h2 id="t-h" className="h-section" style={{ marginTop: 24 }}>
              Lo que cambia cuando
              <br />
              la inclusión es real.
            </h2>
          </div>
          <p className="body" style={{ maxWidth: "32ch", fontSize: 16 }}>
            Cuatro voces de equipos que ya integraron OMN HUB en su operación.
          </p>
        </div>

        <div className="testimonials-grid">
          {items.map((t, i) => (
            <figure className="testimonial" key={i}>
              <div>
                <div className="mark" aria-hidden="true">&ldquo;</div>
                <blockquote className="q" style={{ margin: 0 }}>
                  {t.q}
                </blockquote>
              </div>
              <figcaption className="who">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
                </div>
                <div className="who-text">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
