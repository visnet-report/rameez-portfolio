"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";

const glyphs = ["◎", "▥", "</>", "ϟ", "◇"];

export function Capabilities() {
  const [active, setActive] = useState<number | null>(null);

  const capabilityToken = (index: number) => {
    const item = capabilities[index];
    const isActive = active === index;

    return (
      <span
        className={`capability-inline capability-inline--${index + 1} ${isActive ? "active" : ""}`}
        data-capability-card
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}
        key={item.no}
      >
        <button
          className="capability-token"
          type="button"
          onClick={() => setActive(isActive ? null : index)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          aria-expanded={isActive}
          aria-label={`${item.title}: ${isActive ? "close details" : "show details"}`}
        >
          <i>{glyphs[index]}</i><b>{isActive ? "−" : "+"}</b>
        </button>
        <span className="capability-inline__panel" role="tooltip">
          <small>{item.no}</small>
          <strong>{item.title}</strong>
          <span>{item.text}</span>
        </span>
      </span>
    );
  };

  return (
    <section className="capabilities rail-layout" id="overview">
      <div className="capabilities-stage">
        <div className="capabilities-title" aria-hidden="true">What<br />You Get?</div>
        <div className="capabilities-copy">
          <span>CAPABILITIES OVERVIEW</span>
          <p className="capabilities-statement">
            Strategy, {capabilityToken(0)} precision, {capabilityToken(1)} and technical {capabilityToken(2)} delivery combined - turning {capabilityToken(3)} your vision into a powerful digital {capabilityToken(4)} experience that feels effortless.
          </p>
        </div>
      </div>
    </section>
  );
}
