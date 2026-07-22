import Image from "next/image";
import { navItems } from "@/content/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-stage">
        <div className="hero-word" data-hero-brand aria-hidden="true">RAMEEZ<sup>®</sup></div>
        <div className="hero-topline">
          <p>THE MARKETER WHO BUILDS THE SYSTEM.</p>
          <div><a href="https://linkedin.com/in/rameez-majeed" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:meramiz@gmail.com">EMAIL ↗</a></div>
        </div>

        <nav className="hero-nav" aria-label="Primary navigation">
          <div>{navItems.slice(0, 3).map(([id, label]) => <a data-hero-nav-item={id} href={`#${id}`} key={id}>{label}</a>)}</div>
          <div>{navItems.slice(3).map(([id, label]) => <a data-hero-nav-item={id} href={`#${id}`} key={id}>{label}</a>)}</div>
        </nav>

        <div className="hero-portrait" data-hero-portrait>
          <Image src={`${basePath}/hero-figure.png`} alt="Editorial silhouette representing Rameez Majeed" fill priority sizes="(max-width: 700px) 110vw, 68vw" />
          <span>RAMEEZ MAJEED / LIVERPOOL</span>
        </div>

        <div className="hero-stats-card hero-stats-card--one">
          <div className="hero-stat-copy"><strong><i>↗</i> 148+</strong><span>SEO &amp; developer<br />tools built</span></div>
        </div>
        <div className="hero-stats-card hero-stats-card--two">
          <strong>14+</strong><span>Years of<br />experience</span>
        </div>

        <div className="hero-traits">
          <span><i>◒</i>Strategist</span><span><i>⌘</i>Technical</span><span><i>≋</i>Analytical</span><span><i>◆</i>Builder</span><span><i>✣</i>Collaborative</span>
        </div>

        <div className="hero-title">
          <h1>Digital,<br />Applied<br />Differently.</h1>
          <div><a data-hero-cta href="mailto:meramiz@gmail.com?subject=Portfolio%20enquiry">Start a project</a><a href="#about">About me</a></div>
        </div>

        <p className="hero-identity">The digital marketing specialist.<br />That&apos;s Rameez.</p>
        <p className="hero-copy">Working closely with marketing, sales and product teams to connect creative campaigns, technical execution and long-term value.</p>
      </div>
    </section>
  );
}
