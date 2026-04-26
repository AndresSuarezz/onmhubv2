"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contacto"
      className={`fab${visible ? "" : " hidden"}`}
      aria-label="Contactar con OMN HUB"
    >
      Hablemos
      <span aria-hidden="true">→</span>
    </a>
  );
}
