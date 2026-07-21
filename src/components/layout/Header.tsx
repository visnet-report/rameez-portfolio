"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-40% 0px -52% 0px" },
    );
    navItems.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Rameez Majeed, home">
        <span className="brand__mark">RM</span>
        <span className="brand__name">Rameez<br />Majeed</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.slice(0, 5).map(([id, label]) => (
          <a className={active === id ? "active" : ""} href={`#${id}`} key={id}>{label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="key-hint" type="button" onClick={() => window.dispatchEvent(new Event("open-command"))}>
          Quick jump <kbd>⌘K</kbd>
        </button>
        <a className="header-cta" href="#contact">Let’s talk <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu aria-hidden="true" />
        </button>
      </div>
      {open && (
        <div className="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Site navigation">
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></button>
          <nav>
            {navItems.map(([id, label], index) => (
              <a href={`#${id}`} onClick={() => setOpen(false)} key={id}><span>0{index + 1}</span>{label}</a>
            ))}
          </nav>
          <p>Liverpool, UK · Available for select projects</p>
        </div>
      )}
    </header>
  );
}
