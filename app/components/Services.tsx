const services = [
  {
    n: "01",
    title: "Planes de igualdad con IA",
    copy: "La igualdad es un derecho, no un privilegio. Hacemos que sea accesible y eficiente con inteligencia artificial.",
    details: [
      "Análisis avanzado para detectar desigualdades en la empresa.",
      "Automatización de planes de igualdad, reduciendo costes.",
      "IA que se adapta a cada empresa y sus necesidades.",
    ],
    cta: "Quiero un plan de igualdad",
  },
  {
    n: "02",
    title: "Asistentes de IA para inclusión laboral",
    copy: "El empleo debe ser accesible para todos. Creamos asistentes de IA que eliminan barreras en el trabajo.",
    details: [
      "IA que ayuda a empleados con discapacidad en tareas diarias.",
      "Integración con herramientas de productividad y comunicación.",
      "Mejora del entorno laboral con tecnología inclusiva.",
    ],
    cta: "¡Empieza ahora!",
  },
  {
    n: "03",
    title: "Formación tecnológica para empresas y profesionales",
    copy: "Recapacitar es formar. Damos acceso a la tecnología para cambiar vidas.",
    details: [
      "Programas de formación en IA y accesibilidad digital.",
      "Adaptación de contenidos según capacidades.",
      "Capacitación para empresas sobre inclusión laboral real.",
    ],
    cta: "Quiero formarme",
  },
];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="serv-h" className="reveal-section">
      <div className="container">
        <div className="services-head">
          <div>
            <span className="eyebrow">Servicios</span>
            <h2 id="serv-h" className="h-section" style={{ marginTop: 24 }}>
              Tres frentes para
              <br />
              transformar la inclusión.
            </h2>
          </div>
          <p className="body" style={{ maxWidth: "36ch", fontSize: 16 }}>
            Cada bloque puede contratarse por separado o combinarse. Toda la stack
            es auditable, escalable y construida sobre estándares abiertos.
          </p>
        </div>

        <div className="services-list">
          {services.map((s) => (
            <article className="service" key={s.n}>
              <div className="service-num">{s.n} / 03</div>
              <div className="service-title-col">
                <h3 className="h-card">{s.title}</h3>
                <p>{s.copy}</p>
              </div>
              <ul className="service-details">
                {s.details.map((d, i) => (
                  <li key={i}>
                    <span className="dot" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="service-cta">
                <a href="#contacto" className="btn-link">
                  {s.cta}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
