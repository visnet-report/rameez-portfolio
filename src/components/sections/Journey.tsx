import { milestones } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section className="section section--dark journey" id="journey">
      <SectionHeading invert eyebrow="02 / The journey" title={<>Built through the work.<br /><em>Sharpened</em> by change.</>} copy="A path from hands-on channel execution to campaign leadership, data systems and marketing products." />
      <div className="timeline">
        <aside className="timeline__rail" data-reveal>
          <p>2011 — NOW</p>
          <div className="timeline__line"><span /></div>
          <small>LIVERPOOL<br />UNITED KINGDOM</small>
        </aside>
        <div className="timeline__entries">
          {milestones.map((item, index) => (
            <article className="timeline-entry" key={item.year} data-reveal>
              <span className="timeline-entry__index">0{index + 1}</span>
              <time>{item.year}</time>
              <div><h3>{item.role}</h3><p className="timeline-entry__company">{item.company}</p><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
