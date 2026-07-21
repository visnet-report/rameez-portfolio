"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  const [active, setActive] = useState(0);
  return (
    <section className="section section--acid capabilities" id="capabilities">
      <SectionHeading eyebrow="04 / What I bring" title={<>More than channels.<br />A connected <em>system.</em></>} />
      <div className="capabilities__layout">
        <div className="capability-intro" data-reveal>
          <p>Good marketing depends on the connections between the idea, the audience, the channel, the data and the follow-through.</p>
          <div className="capability-orbit" aria-hidden="true"><span>RM</span><i>PLAN · BUILD · MEASURE · </i></div>
        </div>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <button
              type="button"
              className={active === index ? "active" : ""}
              key={item.title}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              data-reveal
            >
              <span>{item.no}</span><strong>{item.title}</strong><i>{active === index ? "—" : "+"}</i>
              <p>{item.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
