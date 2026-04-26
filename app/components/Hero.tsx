"use client";

import { useMemo } from "react";
import AsteriskMark from "./AsteriskMark";

export default function Hero() {
  const particles = useMemo(() => {
    const r4 = (n: number) => Math.round(n * 10000) / 10000;
    const out = [];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const r = 30 + (i % 4) * 8;
      out.push({
        left: `${r4(50 + Math.cos(a) * r)}%`,
        top: `${r4(50 + Math.sin(a) * r)}%`,
        tx: `${r4(Math.cos(a) * 12)}px`,
        ty: `${r4(Math.sin(a) * 12)}px`,
        delay: `${r4((i * 0.43) % 8)}s`,
      });
    }
    return out;
  }, []);

  return (
    <section className="hero" id="top" aria-labelledby="hero-h">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <div>
            <span className="hero-tag">
              <span className="hero-tag-dot" aria-hidden="true" />
              <span>IA · Accesibilidad · Planes de igualdad</span>
            </span>
            <h1 id="hero-h" className="h-display">
              Recapacitar al
              <br />
              mundo con <em>tecnología</em>
              <br />
              e inteligencia artificial.
            </h1>
            <p className="lede">
              Formamos y transformamos la vida de las personas con discapacidad
              a través de tecnología accesible y planes de igualdad efectivos.
            </p>
            <div className="hero-actions">
              <a href="#mision" className="btn btn-primary">
                Quiero saber más
                <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="#servicios" className="btn btn-ghost">
                Ver servicios
              </a>
            </div>
            <div className="hero-stats" role="list">
              <div role="listitem">
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">WCAG 2.2 AA</div>
              </div>
              <div role="listitem">
                <div className="hero-stat-num">3 ejes</div>
                <div className="hero-stat-label">Igualdad · Empleo · Formación</div>
              </div>
              <div role="listitem">
                <div className="hero-stat-num">IA ética</div>
                <div className="hero-stat-label">Auditable y transparente</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-glow" />
            <div className="asterisk-stage">
              <div className="asterisk-ring r1" />
              <div className="asterisk-ring r2" />
              <div className="asterisk-ring r3" />
              <div className="asterisk-particles">
                {particles.map((p, i) => (
                  <span
                    key={i}
                    className="asterisk-particle"
                    style={
                      {
                        left: p.left,
                        top: p.top,
                        "--tx": p.tx,
                        "--ty": p.ty,
                        animationDelay: p.delay,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
              <div className="asterisk-rotor">
                <AsteriskMark
                  size={"min(58%, 360px)"}
                  color="var(--accent)"
                  strokeWidth={11}
                />
              </div>
              <div
                className="asterisk-rotor"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "120s",
                  opacity: 0.18,
                }}
              >
                <AsteriskMark
                  size={"min(86%, 540px)"}
                  color="var(--cream)"
                  strokeWidth={6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
