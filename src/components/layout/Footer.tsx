"use client";

import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("meramiz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <p className="eyebrow eyebrow--light"><span />Have a useful problem?</p>
          <h2>Let’s make<br />it <em>move.</em></h2>
        </div>
        <button className="email-copy" onClick={copyEmail} type="button">
          <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
          <strong>meramiz@gmail.com</strong>
        </button>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Rameez Majeed</p>
        <div>
          <a href="https://linkedin.com/in/rameez-majeed" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://seosearchlight.com/rameez-majeed" target="_blank" rel="noreferrer">Searchlight ↗</a>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
