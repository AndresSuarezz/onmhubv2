import Image from "next/image";

const audiences = [
  {
    label: "Empresas",
    title: "Implementa IA para mejorar la inclusión y la igualdad.",
    desc: "Auditoría, automatización y reportes listos para tu plan de igualdad.",
  },
  {
    label: "Profesionales",
    title: "Fórmate en accesibilidad y tecnología inclusiva.",
    desc: "Programas certificados, contenidos adaptados, mentoría 1:1.",
  },
  {
    label: "Administraciones",
    title: "Impulsa políticas públicas basadas en datos y tecnología.",
    desc: "Indicadores, modelos abiertos y evaluación de impacto continua.",
  },
];

export default function Join() {
  return (
    <section id="unete" aria-labelledby="join-h" className="reveal-section">
      <div className="container">
        <span className="eyebrow">Únete al cambio</span>
        <h2
          id="join-h"
          className="h-section"
          style={{ marginTop: 24, maxWidth: "18ch" }}
        >
          Construyamos juntos
          <br />
          un futuro más ético,
          <br />
          libre y democrático.
        </h2>
        <p className="lede" style={{ marginTop: 28 }}>
          ¿Cómo puedes ser parte de la transformación?
        </p>

        <div className="join-banner" aria-hidden="true">
          <Image
            src="/img/image-3-1024x666.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1168px, (min-width: 920px) calc(100vw - 112px), calc(100vw - 40px)"
            className="join-banner-img"
          />
        </div>

        <div className="join-grid">
          {audiences.map((a) => (
            <article className="join-card" key={a.label}>
              <span className="label">{a.label}</span>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
              <span className="arrow-mark" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M7 21L21 7M21 7H10M21 7v11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </article>
          ))}
        </div>

        <div className="join-cta-row">
          <a href="#contacto" className="btn btn-primary">
            Únete a OMN HUB
            <span className="arrow" aria-hidden="true">→</span>
          </a>
          <span className="mono" style={{ color: "var(--muted)" }}>
            o escríbenos directamente: hola@omnhub.com
          </span>
        </div>
      </div>
    </section>
  );
}
