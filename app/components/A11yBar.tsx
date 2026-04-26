"use client";

import { useState, useEffect } from "react";

type TextSize = "S" | "M" | "L" | "XL";

const SIZE_MAP: Record<TextSize, string> = {
  S: "15px",
  M: "17px",
  L: "19px",
  XL: "22px",
};

function getStored<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (localStorage.getItem(key) as T) || fallback;
}

export default function A11yBar() {
  const [size, setSize] = useState<TextSize>(() => getStored<TextSize>("omn-fz", "M"));
  const [contrast, setContrast] = useState<string>(() => getStored("omn-contrast", "normal"));
  const [motion, setMotion] = useState<string>(() => getStored("omn-motion", "full"));

  useEffect(() => {
    document.documentElement.style.setProperty("--fz-base", SIZE_MAP[size] || "17px");
    localStorage.setItem("omn-fz", size);
  }, [size]);

  useEffect(() => {
    document.documentElement.dataset.contrast = contrast;
    localStorage.setItem("omn-contrast", contrast);
  }, [contrast]);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
    localStorage.setItem("omn-motion", motion);
  }, [motion]);

  return (
    <div className="a11y-bar" role="region" aria-label="Controles de accesibilidad">
      <div className="a11y-bar-inner">
        <span className="a11y-bar-label">Accesibilidad</span>
        <div className="a11y-controls">
          <span className="mono" style={{ color: "var(--muted)", marginRight: 6 }}>
            texto
          </span>
          <div className="a11y-group" role="radiogroup" aria-label="Tamaño de texto">
            {(["S", "M", "L", "XL"] as TextSize[]).map((s) => (
              <button
                key={s}
                className="a11y-btn"
                role="radio"
                aria-checked={size === s}
                aria-label={`Tamaño de texto ${s}`}
                onClick={() => setSize(s)}
              >
                A
                {s !== "M" && (
                  <sub style={{ fontSize: "0.7em" }}>{s}</sub>
                )}
              </button>
            ))}
          </div>
          <span className="a11y-divider" />
          <button
            className="a11y-btn"
            aria-pressed={contrast === "high"}
            onClick={() => setContrast(contrast === "high" ? "normal" : "high")}
            style={{ border: "1px solid var(--line)", borderRadius: 999 }}
          >
            ◐ Alto contraste
          </button>
          <span className="a11y-divider" />
          <button
            className="a11y-btn"
            aria-pressed={motion === "reduce"}
            onClick={() => setMotion(motion === "reduce" ? "full" : "reduce")}
            style={{ border: "1px solid var(--line)", borderRadius: 999 }}
          >
            ⏸ Reducir movimiento
          </button>
        </div>
      </div>
    </div>
  );
}
