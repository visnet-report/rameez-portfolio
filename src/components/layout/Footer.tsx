"use client";

import { useState } from "react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText("meramiz@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <footer className="footer rail-layout">
      <div><strong>RM<sup>®</sup></strong><p>Digital marketing<br />applied differently.</p></div>
      <button onClick={copy}>{copied ? "EMAIL COPIED" : "COPY EMAIL"}<span>meramiz@gmail.com</span></button>
      <nav><a href="https://linkedin.com/in/rameez-majeed" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://seosearchlight.com/rameez-majeed" target="_blank" rel="noreferrer">Searchlight ↗</a><a href="#hero">Back to top ↑</a></nav>
      <small>© {new Date().getFullYear()} Rameez Majeed · Liverpool, UK</small>
    </footer>
  );
}
