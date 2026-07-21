import Image from "next/image";
import { projects } from "@/content/site";

export function Work() {
  return (
    <section className="work rail-layout" id="projects">
      <div className="work-stage">
        <div className="work-heading">
          <p>SELECTED WORK</p>
          <h2>Built for Marketing,<br />Made to Perform</h2>
          <p>Campaign systems, reporting environments and practical tools designed to make complex marketing work clearer and more effective.</p>
        </div>

        <div className="work-track" data-horizontal-track>
          {projects.map((project) => (
            <a className="work-card" href={project.url} key={project.title} {...(project.url.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
              <Image src={project.visual} alt={`${project.title} project preview`} fill sizes="380px" />
              <div className="work-card__top"><span>{project.no}</span><ul>{project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              <div className="work-card__bottom"><h3>{project.title}</h3><p>{project.description}</p><i>↗</i></div>
            </a>
          ))}
          <div className="work-end-card"><span>05 / 05</span><h3>Have a useful<br />problem?</h3><a href="mailto:meramiz@gmail.com">Let’s talk ↗</a></div>
        </div>
      </div>
    </section>
  );
}
