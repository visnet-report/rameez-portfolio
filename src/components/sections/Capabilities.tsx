"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";

const glyphs = ["◎", "▥", "⌁", "ϟ", "◇"];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const item = capabilities[active];

  const token = (index: number, label: string) => (
    <button
      key={capabilities[index].no}
      className={`capability-token ${active === index ? "active" : ""}`}
      type="button"
      onClick={() => setActive(index)}
      onMouseEnter={() => setActive(index)}
      onFocus={() => setActive(index)}
      aria-label={`Show ${capabilities[index].title}`}
      aria-pressed={active === index}
      data-capability-card
    >
      <i aria-hidden="true">{glyphs[index]}</i>
      <span className="sr-only">{label}</span>
    </button>
  );

  return (
    <section className="capabilities rail-layout" id="overview">
      <div className="capabilities-stage">
        <div className="capabilities-title" aria-hidden="true">What You Get?</div>
        <div className="capabilities-copy">
          <span>CAPABILITIES OVERVIEW</span>
          <p className="capabilities-statement">
            I partner with ambitious teams to shape strategic {token(0, "campaign systems")} campaign systems,
            measurable {token(1, "measurement")} growth, intelligent {token(2, "search")} search,
            reliable {token(3, "automation")} automation and decision-ready {token(4, "data quality")} data.
          </p>
        </div>

        <aside className="capability-panel" aria-live="polite">
          <div className="capability-panel__connector" aria-hidden="true" />
          <span className="capability-panel__icon" aria-hidden="true">{glyphs[active]}</span>
          <small>{item.no} / CAPABILITY</small>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ul>{item.points.map((point) => <li key={point}><i>✓</i>{point}</li>)}</ul>
          <div className="capability-panel__pager">
            {capabilities.map((capability, index) => (
              <button key={capability.no} type="button" onClick={() => setActive(index)} aria-label={`Show ${capability.title}`} className={active === index ? "active" : ""} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
