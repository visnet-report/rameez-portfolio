"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";

const glyphs = ["◎", "⌁", "▦", "⚡", "◇"];

export function Capabilities() {
  const [active, setActive] = useState(1);

  return (
    <section className="capabilities rail-layout" id="overview">
      <div className="capabilities-stage">
        <div className="capabilities-title" aria-hidden="true">What<br />You Get?</div>
        <div className="capabilities-copy">
          <span>CAPABILITIES OVERVIEW</span>
          <p>Strategy, precision and technical delivery combined — turning your vision into a digital experience that feels effortless.</p>
        </div>
        <div className="capability-cloud" aria-label="Interactive capability details">
          {capabilities.slice(0, 5).map((item, index) => {
            const isActive = active === index;
            return (
              <article className={`capability-pop capability-pop--${index + 1} ${isActive ? "active" : ""}`} key={item.no} data-capability-card>
                <button type="button" onClick={() => setActive(index)} aria-expanded={isActive}>
                  <i>{glyphs[index]}</i><span>{item.title}</span><b>{isActive ? "−" : "+"}</b>
                </button>
                <div className="capability-pop__detail">
                  <span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
