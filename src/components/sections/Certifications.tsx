import { certifications } from "@/content/site";

export function Certifications() {
  return (
    <section className="certifications rail-layout" id="certifications">
      <header className="certifications-heading" data-reveal>
        <span>LICENSES &amp; CERTIFICATIONS</span>
        <h2>Certified, <em>verifiably.</em></h2>
      </header>
      <div className="certification-gallery">
        {certifications.map((certification, index) => (
          <a href={certification.url} target="_blank" rel="noreferrer" className="certification-card" key={certification.title} style={{ "--card-index": index } as React.CSSProperties}>
            <span className="certification-card__mark">{certification.mark}</span>
            <p>{certification.issuer}</p>
            <i aria-hidden="true" />
            <h3>{certification.title}</h3>
            <span className="certification-card__stamp"><b>✓</b><small>VERIFIED</small></span>
            <strong>Verify credential ↗</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
