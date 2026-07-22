"use client";

import { useEffect, useState } from "react";
import { milestones } from "@/content/site";

const initials = (name: string) => name.split(" ").map((word) => word[0]).join("").slice(0, 2);

const focusItems = [
  {
    no: "01",
    title: "AI search is reshaping discovery",
    text: "How Google AI Overviews, ChatGPT, Perplexity and Bing Copilot are changing brand visibility - and what it takes for content to get cited rather than crawled.",
  },
  {
    no: "02",
    title: "AI as a force multiplier, not a chat box",
    text: "Building marketing tooling with Claude Code, GitHub Copilot, Codex and Cursor - workflows that take days of manual work down to minutes.",
  },
  {
    no: "03",
    title: "Attribution that survives long B2B cycles",
    text: "Multi-touch, cohort-based, time-aware attribution for sales motions that run months, not minutes.",
  },
];

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

      <div className="journey-focus" data-reveal>
        <div className="journey-focus__heading">
          <span>WHAT I CARE ABOUT</span>
          <h3>What I care about <em>right now.</em></h3>
        </div>
        <div className="journey-focus__grid">
          {focusItems.map((item) => (
            <article key={item.no}>
              <span>{item.no}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="journey-map">
        <svg className="journey-path" viewBox="0 0 1000 2700" preserveAspectRatio="none" aria-hidden="true">
          <path className="journey-path__base" d="M880 0 C790 150 650 150 610 300 C560 490 360 500 390 760 C420 980 690 1000 645 1270 C605 1510 350 1550 395 1810 C435 2060 720 2100 640 2380 C600 2520 500 2580 520 2700" />
          <path className="journey-path__progress" d="M880 0 C790 150 650 150 610 300 C560 490 360 500 390 760 C420 980 690 1000 645 1270 C605 1510 350 1550 395 1810 C435 2060 720 2100 640 2380 C600 2520 500 2580 520 2700" />
          <circle cx="610" cy="300" r="10" />
          <circle cx="390" cy="760" r="10" />
          <circle cx="645" cy="1270" r="10" />
          <circle cx="395" cy="1810" r="10" />
          <circle cx="640" cy="2380" r="10" />
        </svg>

        {milestones.map((item, index) => (
          <article className={`journey-card journey-card--${index + 1}`} key={item.period} data-reveal>
            <span className="journey-card__year">{item.year === "Now" ? "NOW" : `'${item.year.slice(-2)}`}</span>
            <div className="journey-card__body">
              <h3>{item.role}</h3>
              <p>{item.text}</p>
              <footer>
                <span className="journey-card__mark">{initials(item.company)}</span>
                <p><strong>{item.company}</strong><small>{item.period}</small></p>
                <button type="button" onClick={() => setExpanded(index)}>Read more <span>→</span></button>
              </footer>
            </div>
          </article>
        ))}
      </div>

      {expanded !== null && (
        <div className="journey-modal-backdrop" onMouseDown={() => setExpanded(null)}>
          <div className="journey-modal" role="dialog" aria-modal="true" aria-label={`${milestones[expanded].jobTitle} details`} onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setExpanded(null)} autoFocus aria-label="Close journey story">×</button>
            <span>{milestones[expanded].period}</span>
            <i>{initials(milestones[expanded].company)}</i>
            <h3>{milestones[expanded].jobTitle}</h3>
            <h4>{milestones[expanded].company} · {milestones[expanded].location}</h4>
            <p>{milestones[expanded].detail}</p>
          </div>
        </div>
      )}
    </section>
  );
}
