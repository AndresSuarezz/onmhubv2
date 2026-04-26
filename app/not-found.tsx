"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SECONDS = 5;

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(SECONDS);

  useEffect(() => {
    if (count <= 0) {
      router.push("/");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, router]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ textAlign: "center", paddingTop: 40, paddingBottom: 40 }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Error
        </span>

        <p
          className="h-display"
          style={{
            marginTop: 24,
            color: "var(--accent)",
            fontSize: "clamp(96px, 20vw, 220px)",
            lineHeight: 1,
          }}
        >
          404
        </p>

        <h1
          className="h-section"
          style={{ marginTop: 24, fontSize: "clamp(28px, 4vw, 52px)" }}
        >
          Página no encontrada.
        </h1>

        <p className="lede" style={{ marginTop: 20, marginLeft: "auto", marginRight: "auto" }}>
          La dirección que buscas no existe o fue movida.
        </p>

        <p className="mono" style={{ marginTop: 32, color: "var(--muted)" }}>
          Redirigiendo en {count}s…
        </p>

        <div style={{ marginTop: 32 }}>
          <a href="/" className="btn btn-primary">
            Volver al inicio
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
