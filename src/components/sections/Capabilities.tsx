import { capabilities } from "@/content/site";

export function Capabilities() {
  return (
    <section className="capabilities rail-layout" id="overview">
      <div className="capabilities-title" aria-hidden="true">What<br />You Get?</div>
      <div className="capabilities-content">
        <div className="capabilities-copy" data-reveal>
          <span>CAPABILITIES OVERVIEW</span>
          <p>Strategy, precision and technical delivery combined — turning marketing complexity into an operating system that feels lighter and performs better.</p>
        </div>
        <div className="capabilities-list">
          {capabilities.slice(0, 5).map((item) => (
            <article key={item.no} data-capability-card>
              <span>{item.no}</span><h3>{item.title}</h3><p>{item.text}</p><i>+</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
