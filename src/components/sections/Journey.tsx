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
        <svg className="journey-path" viewBox="0 0 1000 2850" preserveAspectRatio="none" aria-hidden="true">
          <path d="M990 0 C930 210 710 210 710 420 C710 650 980 620 940 880 C900 1110 340 970 310 1290 C285 1540 810 1430 745 1750 C700 1990 120 1870 105 2220 C98 2470 490 2500 560 2850" />
          <circle cx="710" cy="420" r="9" /><circle cx="940" cy="880" r="9" /><circle cx="310" cy="1290" r="9" /><circle cx="745" cy="1750" r="9" /><circle cx="105" cy="2220" r="9" />
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
