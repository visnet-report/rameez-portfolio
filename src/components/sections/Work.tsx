"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/content/site";

export function Work() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const linkProps = project.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};

  const move = (direction: number) => {
    setActive((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section className="work rail-layout" id="projects">
      <div className="work-layout">
        <header className="work-heading">
          <p>SELECTED WORK</p>
          <h2>Built for Marketing,<br />Made to Perform</h2>
          <p>Campaign systems, reporting environments and practical tools designed to make complex marketing work clearer and more effective.</p>

          <nav className="work-project-list" aria-label="Selected projects">
            {projects.map((item, index) => (
              <button
                className={active === index ? "active" : ""}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                aria-current={active === index ? "true" : undefined}
                key={item.title}
              >
                <span>{item.no}</span>
                <span><strong>{item.title}</strong><small>{item.client}</small></span>
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </nav>
        </header>

        <article className="work-showcase" key={project.title}>
          <div className="work-showcase__visual">
            <Image src={project.visual} alt={`${project.title} project preview`} fill sizes="(max-width: 760px) 100vw, 52vw" priority={active === 0} />
          </div>
          <div className="work-showcase__details">
            <div>
              <span>FEATURED PROJECT</span>
              <b>{project.no} / {String(projects.length).padStart(2, "0")}</b>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <a href={project.url} {...linkProps}>View case study <span>↗</span></a>
          </div>
          <footer>
            <button type="button" onClick={() => move(-1)} aria-label="Previous project">← Previous</button>
            <span><strong>{active + 1}</strong> of {projects.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Next project">Next →</button>
          </footer>
        </article>
      </div>
    </section>
  );
}
