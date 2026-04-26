"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
  { href: "#mision", label: "Misión" },
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#unete", label: "Únete" },
  { href: "#contacto", label: "Contacto" },
];

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize past breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 920) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Principal">
      <div className="nav-inner">
        <Logo size={24} />

        <div className="nav-links" role="list">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" role="listitem">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="btn btn-ghost nav-cta"
          style={{ padding: "10px 18px", fontSize: 14 }}
        >
          Hablemos
          <span className="arrow" aria-hidden="true">→</span>
        </a>

        <button
          className="nav-burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span>{open ? "cerrar" : "menú"}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`nav-mobile${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <div className="nav-mobile-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-mobile-link"
              onClick={close}
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-mobile-sep" aria-hidden="true" />
        <div className="nav-mobile-cta">
          <a
            href="#contacto"
            className="btn btn-primary"
            onClick={close}
            tabIndex={open ? 0 : -1}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Hablemos
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
