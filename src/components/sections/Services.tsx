import { Check } from "lucide-react";
import { services } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section className="section section--dark services" id="services">
      <SectionHeading invert eyebrow="06 / Ways to work together" title={<>Choose the shape.<br />Keep the outcome <em>clear.</em></>} copy="Every engagement is scoped to the problem. These starting points make it easier to find the right level of support." />
      <div className="service-grid">
        {services.map((service) => (
          <article className={service.featured ? "featured" : ""} key={service.name} data-reveal>
            {service.featured && <span className="service-badge">MOST FLEXIBLE</span>}
            <p className="service-label">{service.label}</p>
            <h3>{service.name}</h3>
            <p>{service.text}</p>
            <ul>{service.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
            <div className="service-bottom"><strong>{service.price}</strong><ButtonLink href="#contact" variant={service.featured ? "dark" : "outline"}>Discuss fit</ButtonLink></div>
          </article>
        ))}
      </div>
      <p className="service-note">Rates and availability are intentionally left open until real project details are supplied.</p>
    </section>
  );
}
