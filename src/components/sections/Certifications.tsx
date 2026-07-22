import { certifications } from "@/content/site";

export function Certifications() {
  return (
    <section className="certifications rail-layout" id="certifications">
      <header className="certifications-heading" data-reveal>
        <span>LICENSES &amp; CERTIFICATIONS</span>
        <h2>Certified,<br /><em>verifiably.</em></h2>
        <p>Current credentials across AI, performance advertising, analytics, inbound and social media marketing.</p>
      </header>
      <div className="certification-ribbon">
        {certifications.map((certification, index) => (
          <a href={certification.url} target="_blank" rel="noreferrer" className="certification-card" key={certification.title} style={{ "--card-index": index } as React.CSSProperties}>
            <span className="certification-card__mark">{certification.mark}</span>
            <small>{String(index + 1).padStart(2, "0")} / CREDENTIAL</small>
            <h3>{certification.title}</h3>
            <p>{certification.issuer}</p>
            <strong>Verify credential ↗</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
