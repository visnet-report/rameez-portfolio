import { ArrowDownRight, BarChart3, Boxes, Crosshair, Route } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { no: "01", icon: Crosshair, title: "Find the real objective", text: "Clarify the audience, business outcome, current evidence and the decision the work needs to improve." },
  { no: "02", icon: Route, title: "Map the opportunity", text: "Connect channels, content, data and constraints into a focused plan with a sensible order of operations." },
  { no: "03", icon: Boxes, title: "Build and activate", text: "Create the campaign, workflow, report or product — with stakeholders close enough to keep delivery grounded." },
  { no: "04", icon: BarChart3, title: "Measure and sharpen", text: "Read the signals, improve the system and leave behind reporting that makes the next decision easier." },
];

export function Process() {
  return (
    <section className="section process" id="process">
      <SectionHeading eyebrow="05 / How I work" title={<>Clear thinking.<br />Practical <em>delivery.</em></>} copy="Enough structure to align the work. Enough flexibility to respond to what the evidence says." />
      <div className="process-grid">
        {steps.map(({ no, icon: Icon, title, text }) => (
          <article key={no} data-reveal>
            <div><span>{no}</span><Icon strokeWidth={1.4} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <ArrowDownRight className="process-arrow" strokeWidth={1.2} />
          </article>
        ))}
      </div>
    </section>
  );
}
