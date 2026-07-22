"use client";

import { useState } from "react";
import { skillDisciplines } from "@/content/site";
import { SkillsScene } from "@/components/three/SkillsScene";

export function Skills() {
  const defaultDiscipline = skillDisciplines.length - 1;
  const [active, setActive] = useState(defaultDiscipline);
  const discipline = skillDisciplines[active];
  const orbitDisciplines = skillDisciplines.slice(0, -1);

  return (
    <section className="skills rail-layout" id="skills">
      <header className="skills-heading" data-reveal>
        <span>SKILLS</span>
        <h2><span>The full toolkit,</span><em>by discipline.</em></h2>
        <p>A multidisciplinary skillset. Integrated systems. Measurable outcomes. Built to scale.</p>
      </header>

      <div className="skills-stage">
        <svg className="skills-orbit-lines" viewBox="0 0 760 620" preserveAspectRatio="none" aria-hidden="true">
          <ellipse cx="350" cy="344" rx="316" ry="220" />
          <ellipse cx="350" cy="344" rx="268" ry="178" />
          <ellipse cx="350" cy="344" rx="214" ry="132" />
          <ellipse cx="350" cy="344" rx="157" ry="88" />
          <path d="M350 344 C470 310 548 260 652 232" className="skills-active-line" />
          {["90,270", "148,438", "238,522", "422,488", "526,385", "586,177", "652,232"].map((point) => {
            const [cx, cy] = point.split(",");
            return <circle key={point} cx={cx} cy={cy} r="7" />;
          })}
        </svg>
        <div className="skills-scene" aria-hidden="true"><SkillsScene /></div>
        <div className="skills-orbit-nav" role="group" aria-label="Skill disciplines">
          {orbitDisciplines.map((item, index) => (
            <button
              className={`skills-orbit-button skills-orbit-button--${index + 1}`}
              type="button"
              aria-controls="skills-active-panel"
              aria-pressed={active === index}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              key={item.name}
            >
              <i>{item.glyph}</i><span>{item.name}</span>
            </button>
          ))}
        </div>

        <article className="skills-plane" id="skills-active-panel" key={discipline.name}>
          <header>
            <i>{discipline.glyph}</i>
            <h3>{discipline.name}</h3>
            <span>ACTIVE</span>
          </header>
          <b className="skills-plane__accent" aria-hidden="true" />
          <div>{discipline.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </article>
      </div>
    </section>
  );
}
