import { ArrowDownRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading eyebrow="01 / The short version" title={<>Strategy in one hand.<br /><em>Systems</em> in the other.</>} />
      <div className="about__grid">
        <div className="about__portrait" data-reveal>
          <div className="portrait-grid" aria-hidden="true" />
          <span className="portrait-monogram">RM</span>
          <p>PORTRAIT / BRAND IMAGE<br />PLACEHOLDER</p>
          <span className="portrait-stamp">14+ YEARS<br />DIGITAL PRACTICE</span>
        </div>
        <div className="about__copy" data-reveal>
          <p className="lead">I’m a digital marketing specialist with 14+ years of experience making multi-channel work more joined-up, measurable and useful.</p>
          <div className="about__columns">
            <p>My background spans PPC, SEO, email, web, social and content — with hands-on experience in both agencies and in-house teams.</p>
            <p>Today, I pair that campaign experience with CRM, analytics, APIs and AI-assisted workflows to build the infrastructure behind better marketing.</p>
          </div>
          <a className="circle-link" href="#journey"><ArrowDownRight /><span>See the<br />journey</span></a>
        </div>
      </div>
      <div className="about__statement" data-reveal>
        <p>THE THREAD THROUGH IT ALL</p>
        <h3>Turn business goals into clear plans.<br />Turn messy data into <em>decisions.</em></h3>
      </div>
    </section>
  );
}
