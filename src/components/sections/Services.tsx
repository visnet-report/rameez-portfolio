import { services } from "@/content/site";

const glyphs = ["⌘", "◩", "♜"];

export function Services() {
  return (
    <section className="services rail-layout" id="services">
      <div className="services-heading" data-reveal>
        <span>SERVICES</span>
        <h2>Solutions<br />That Deliver</h2>
        <p>Same attention to detail. The difference is the scale of the problem and the kind of support you need right now.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.name} data-reveal>
            <header><i>{glyphs[index]}</i><h3>{service.name}</h3></header>
            <strong>{service.price}</strong>
            <p>{service.text}</p>
            <ul>{service.features.map((feature) => <li key={feature}><span>○</span>{feature}</li>)}</ul>
            <footer><span>ⓘ</span> {index === 0 ? "For teams that need continuous improvement and a reliable extension of their capability." : index === 1 ? "For a defined problem that needs evidence, direction and momentum." : "For operational challenges that need a tailored technical solution."}</footer>
          </article>
        ))}
      </div>
    </section>
  );
}
