"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/site";

const navGlyphs = ["⌂", "◒", "▰", "≋", "ϟ", "♟", "?"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
      const marker = window.innerHeight * 0.45;
      const current = navItems.find(([id]) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });
      if (current) setActive(current[0]);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("meramiz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <aside className={`side-rail ${visible ? "side-rail--visible" : ""}`} data-side-rail aria-label="Portfolio navigation">
        <div className="rail-card rail-intro" data-rail-panel>
          <div className="rail-brand-row">
            <a className="rail-brand" data-rail-brand href="#hero" aria-label="Rameez Majeed - home"><img src={`${basePath}/rm-logo.png`} alt="RM" /></a>
            <div className="rail-socials"><a href="https://linkedin.com/in/rameez-majeed" target="_blank" rel="noreferrer">in</a><a href="mailto:meramiz@gmail.com">@</a></div>
          </div>
          <p>Connecting campaign strategy, technical delivery and data into marketing systems that keep creating value.</p>
        </div>

        <div className="rail-card rail-stats" data-rail-panel>
          <div data-rail-stat="tools"><strong>148+</strong><span>SEO tools<br />built</span></div>
          <div data-rail-stat="experience"><strong>14+</strong><span>Years of<br />experience</span></div>
        </div>

        <nav className="rail-card rail-nav" data-rail-panel>
          {navItems.map(([id, label], index) => (
            <a className={active === id ? "active" : ""} data-rail-nav-item={id} href={`#${id}`} key={id}>
              <span>{navGlyphs[index]}</span>{label}
            </a>
          ))}
        </nav>

        <div className="rail-card rail-marquee" data-rail-panel><div>HUBSPOT&nbsp;&nbsp; GA4&nbsp;&nbsp; GSC&nbsp;&nbsp; D365&nbsp;&nbsp; LOOKER&nbsp;&nbsp; AHREFS&nbsp;&nbsp;</div></div>
        <button className="rail-email" data-rail-panel type="button" onClick={copyEmail}><span>{copied ? "Copied" : "meramiz@gmail.com"}</span><b>▣</b></button>
        <a className="rail-cta" data-rail-cta href="mailto:meramiz@gmail.com?subject=Portfolio%20enquiry">Start a project</a>
      </aside>

      <button className={`mobile-rail-toggle ${visible ? "show" : ""}`} onClick={() => setMenuOpen(true)} aria-label="Open menu"><img src={`${basePath}/rm-logo.png`} alt="" /> <span>MENU</span></button>
      {menuOpen && (
        <div className="mobile-rail-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">CLOSE ×</button>
          <img className="mobile-rail-menu__logo" src={`${basePath}/rm-logo.png`} alt="RM" />
          <nav>{navItems.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav>
          <a href="mailto:meramiz@gmail.com">meramiz@gmail.com ↗</a>
        </div>
      )}
    </>
  );
}
