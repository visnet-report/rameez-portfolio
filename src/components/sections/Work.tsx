"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Work() {
  const [active, setActive] = useState(0);
  return (
    <section className="section work" id="work">
      <SectionHeading eyebrow="03 / Selected work" title={<>Useful systems.<br /><em>Visible</em> outcomes.</>} copy="A selection of products, workflows and reporting environments from the intersection of marketing, data and technology." />
      <div className="work__layout">
        <div className="work__list">
          {projects.map((project, index) => (
            <a
              className={`project-row ${active === index ? "active" : ""}`}
              key={project.title}
              href={project.url}
              {...(project.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              data-reveal
            >
              <span className="project-row__no">{project.no}</span>
              <div className="project-row__main">
                <p>{project.client}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
              <span className="project-row__arrow"><ArrowUpRight /></span>
            </a>
          ))}
        </div>
        <aside className="work__preview" aria-live="polite">
          <div className="preview-frame">
            <Image src={projects[active].visual} alt={`${projects[active].title} abstract project preview`} fill sizes="(max-width: 900px) 100vw, 42vw" />
            <span>PROJECT {projects[active].no} / PREVIEW</span>
          </div>
          <p>{projects[active].title} <span>↗</span></p>
        </aside>
      </div>
    </section>
  );
}
