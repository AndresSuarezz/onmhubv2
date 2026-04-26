"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string | null>>;
type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [k]: e.target.value });
      if (errors[k]) setErrors({ ...errors, [k]: null });
    };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Indica tu nombre.";
    if (!form.email.trim()) e.email = "Necesitamos un email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email no válido.";
    if (!form.message.trim()) e.message = "Cuéntanos algo.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", company: "", message: "" });
      }, 3500);
    }, 900);
  };

  return (
    <section id="contacto" aria-labelledby="c-h" className="reveal-section">
      <div className="container">
        <span className="eyebrow">Contacto</span>
        <h2
          id="c-h"
          className="h-section"
          style={{ marginTop: 24, maxWidth: "16ch" }}
        >
          Hablemos de tu plan
          <br />
          de inclusión.
        </h2>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-row">
              <span className="lbl">Email</span>
              <a className="val" href="mailto:hola@omnhub.com">
                hola@omnhub.com
              </a>
            </div>
            <div className="contact-row">
              <span className="lbl">Teléfono</span>
              <a className="val" href="tel:+34900000000">
                +34 900 00 00 00
              </a>
            </div>
            <div className="contact-row">
              <span className="lbl">Instagram</span>
              <a
                className="val"
                href="https://instagram.com/omnhub"
                target="_blank"
                rel="noreferrer"
              >
                @omnhub
              </a>
            </div>
            <div className="contact-row">
              <span className="lbl">Tiempo de respuesta</span>
              <span className="val">&lt; 24 h laborables</span>
            </div>
          </div>

          <form className="form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className={`field ${errors.name ? "invalid" : ""}`}>
                <label htmlFor="f-name">Nombre</label>
                <input
                  id="f-name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
                <span className="err" role="alert">
                  {errors.name || ""}
                </span>
              </div>
              <div className={`field ${errors.email ? "invalid" : ""}`}>
                <label htmlFor="f-email">Email</label>
                <input
                  id="f-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="tu@empresa.com"
                  autoComplete="email"
                />
                <span className="err" role="alert">
                  {errors.email || ""}
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-company">Empresa</label>
              <input
                id="f-company"
                type="text"
                value={form.company}
                onChange={update("company")}
                placeholder="Opcional"
                autoComplete="organization"
              />
              <span className="err" />
            </div>
            <div className={`field ${errors.message ? "invalid" : ""}`}>
              <label htmlFor="f-message">Mensaje</label>
              <textarea
                id="f-message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="¿Qué quieres construir con nosotros?"
              />
              <span className="err" role="alert">
                {errors.message || ""}
              </span>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Enviando…"
                  : status === "sent"
                    ? "✓ Enviado"
                    : "Enviar"}
                {status === "idle" && (
                  <span className="arrow" aria-hidden="true">→</span>
                )}
              </button>
              <span
                className={`form-status ${status === "sent" ? "ok" : ""}`}
                role="status"
              >
                {status === "sent"
                  ? "Te responderemos en menos de 24 h."
                  : "Tus datos no se compartirán con terceros."}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
