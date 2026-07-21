import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta__grid" aria-hidden="true" />
      <p className="eyebrow"><span />08 / Start here</p>
      <div className="cta__body" data-reveal>
        <h2>Got a campaign to sharpen<br />or a system to <em>build?</em></h2>
        <a href="mailto:meramiz@gmail.com?subject=Portfolio%20enquiry">
          <span>Start a conversation</span><ArrowUpRight />
        </a>
      </div>
      <div className="cta__meta"><span>RESPONSE TARGET<br />WITHIN 2 WORKING DAYS</span><span>EMAIL<br />MERAMIZ@GMAIL.COM</span><span>LOCATION<br />LIVERPOOL, UK</span></div>
    </section>
  );
}
