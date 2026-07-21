"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { milestones, projects } from "@/content/site";

export function Journey() {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (expanded === null) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expanded]);

  return (
    <section className="journey rail-layout" id="about">
      <div className="journey-intro">
        <p>ABOUT ME</p>
        <h2>About Me <span>(&amp;)</span><br />My Journey</h2>
        <p>Fourteen years across agency and in-house teams. What happened between channel execution and marketing engineering is easier to show than explain.</p>
      </div>

      <div className="journey-map">
        <svg className="journey-path" viewBox="0 0 1000 2500" preserveAspectRatio="none" aria-hidden="true">
          <path d="M840 0 C870 220 650 250 650 440 C650 620 930 650 900 860 C870 1070 430 940 390 1210 C350 1480 760 1390 700 1690 C650 1940 160 1810 150 2100 C140 2290 430 2350 540 2500" />
          <circle cx="650" cy="440" r="9" /><circle cx="900" cy="860" r="9" /><circle cx="390" cy="1210" r="9" /><circle cx="700" cy="1690" r="9" /><circle cx="150" cy="2100" r="9" />
        </svg>

        {milestones.map((item, index) => (
          <article className={`journey-card journey-card--${index + 1}`} key={item.year} data-reveal>
            <div className="journey-card__year"><span>{item.year}</span><small>{index === milestones.length - 1 ? "NOW" : `${milestones.length - index} CHAPTERS AGO`}</small></div>
            <div className="journey-card__body">
              <p>@{item.company.toLowerCase().replaceAll(" ", "-")}</p>
              <h3>{item.role}</h3>
              <p>{item.text}</p>
              <button type="button" onClick={() => setExpanded(index)}>Read more <span>↗</span></button>
            </div>
            {index % 2 === 0 && (
              <div className="journey-card__image">
                <Image src={projects[index % projects.length].visual} alt="Abstract project milestone visual" fill sizes="300px" />
              </div>
            )}
          </article>
        ))}
      </div>

      {expanded !== null && (
        <div className="journey-modal-backdrop" onMouseDown={() => setExpanded(null)}>
          <div className="journey-modal" role="dialog" aria-modal="true" aria-label={`${milestones[expanded].role} details`} onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setExpanded(null)} autoFocus>CLOSE ×</button>
            <span>{milestones[expanded].year}</span>
            <h3>{milestones[expanded].role}</h3>
            <p>{milestones[expanded].text}</p>
            <p>This chapter helped shape the combination of campaign leadership, hands-on delivery and technical curiosity that defines the work today.</p>
          </div>
        </div>
      )}
    </section>
  );
}
