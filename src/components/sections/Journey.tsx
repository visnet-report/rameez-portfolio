"use client";

import { useEffect, useState } from "react";
import { milestones } from "@/content/site";

const initials = (name: string) => name.split(" ").map((word) => word[0]).join("").slice(0, 2);

export function Journey() {
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (expanded === null) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setExpanded(null);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expanded]);

  return (
    <section className="journey rail-layout" id="about">
      <div className="journey-intro">
        <div className="journey-intro__copy">
          <span>START SMALL, GROW BIG</span>
          <h2>About Me <i>(&amp;)</i><br />My Journey</h2>
          <p>Fourteen years across agency and in-house teams. What happened between channel execution and marketing engineering is easier to show than explain.</p>
        </div>
      </div>

      <div className="journey-map">
        <svg className="journey-path" viewBox="0 0 1000 3200" preserveAspectRatio="none" aria-hidden="true">
          <path className="journey-path__track" d="M920 0 C875 130 700 115 650 245 C585 420 400 470 390 690 C380 890 680 930 650 1170 C620 1400 355 1430 390 1700 C420 1935 700 1950 650 2200 C600 2450 330 2490 400 2760 C450 2950 610 3040 520 3200" />
          <path className="journey-path__progress" d="M920 0 C875 130 700 115 650 245 C585 420 400 470 390 690 C380 890 680 930 650 1170 C620 1400 355 1430 390 1700 C420 1935 700 1950 650 2200 C600 2450 330 2490 400 2760 C450 2950 610 3040 520 3200" />
          <circle cx="650" cy="245" r="9" />
          <circle cx="390" cy="690" r="9" />
          <circle cx="650" cy="1170" r="9" />
          <circle cx="390" cy="1700" r="9" />
          <circle cx="650" cy="2200" r="9" />
          <circle cx="400" cy="2760" r="9" />
        </svg>

        {milestones.map((item, index) => (
          <article className={`journey-card journey-card--${index + 1}`} key={item.year} data-reveal>
            <span className="journey-card__year">{item.year === "Now" ? "NOW" : `'${item.year.slice(-2)}`}</span>
            <div className="journey-card__body">
              <h3>{item.role}</h3>
              <p>{item.text}</p>
              <footer>
                <span className="journey-card__mark">{initials(item.company)}</span>
                <p><strong>@{item.company.toLowerCase().replaceAll(" ", "-")}</strong><small>{index === milestones.length - 1 ? "Present" : `${milestones.length - index} chapters ago`}</small></p>
                <button type="button" onClick={() => setExpanded(index)}>Read more <span>→</span></button>
              </footer>
            </div>
          </article>
        ))}
      </div>

      {expanded !== null && (
        <div className="journey-modal-backdrop" onMouseDown={() => setExpanded(null)}>
          <div className="journey-modal" role="dialog" aria-modal="true" aria-label={`${milestones[expanded].role} details`} onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setExpanded(null)} autoFocus aria-label="Close journey story">×</button>
            <span>{milestones[expanded].year}</span>
            <i>{initials(milestones[expanded].company)}</i>
            <h3>{milestones[expanded].role}</h3>
            <p>{milestones[expanded].text}</p>
            <p>This chapter helped shape the combination of campaign leadership, hands-on delivery and technical curiosity that defines the work today.</p>
          </div>
        </div>
      )}
    </section>
  );
}
