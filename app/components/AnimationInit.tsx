"use client";

import { useEffect } from "react";

export default function AnimationInit() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal-section");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((el) => activeObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  return null;
}
