"use client";

import { useState } from "react";
import { skillDisciplines } from "@/content/site";
import { SkillsScene } from "@/components/three/SkillsScene";

export function Skills() {
  const [active, setActive] = useState(0);
  const discipline = skillDisciplines[active];

  return (
    <section className="skills rail-layout" id="skills">
      <header className="skills-heading" data-reveal>
        <span>SKILLS</span>
        <h2>The full toolkit,<br /><em>by discipline.</em></h2>
        <p>Select a discipline to explore the tools, platforms and capabilities behind the work.</p>
      </header>

      <div className="skills-stage">
        <div className="skills-scene" aria-hidden="true"><SkillsScene /></div>
        <div className="skills-orbit-nav" role="tablist" aria-label="Skill disciplines">
          {skillDisciplines.map((item, index) => (
            <button
              className={`skills-orbit-button skills-orbit-button--${index + 1} ${active === index ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              key={item.name}
            >
              <i>{item.glyph}</i><span>{item.name}</span>
            </button>
          ))}
        </div>

        <article className="skills-plane" key={discipline.name}>
          <header><span>{String(active + 1).padStart(2, "0")} / DISCIPLINE</span><i>{discipline.glyph}</i></header>
          <h3>{discipline.name}</h3>
          <div>{discipline.skills.map((skill, index) => <span key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>)}</div>
        </article>
      </div>
    </section>
  );
}
