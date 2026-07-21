"use client";

import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-fallback"><span>RM</span></div>,
});

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="hero__intro">
        <p className="availability"><span /> Liverpool, UK · Open to useful conversations</p>
        <p className="hero__kicker">Digital marketing specialist<br />&amp; marketing systems builder</p>
      </div>
      <div className="hero__headline">
        <h1 data-reveal>
          Digital marketing,<br />
          <em>engineered</em> to <span>perform.</span>
        </h1>
      </div>
      <div className="hero__lower">
        <div className="hero__copy" data-reveal>
          <p>I connect campaign strategy, paid media, SEO and content with the data, automation and tools that make better decisions possible.</p>
          <div className="hero__actions">
            <ButtonLink href="#contact" variant="dark">Start a conversation</ButtonLink>
            <a className="text-link" href="#work">Explore selected work <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero__visual" data-reveal>
          <HeroScene />
          <div className="visual-label visual-label--top"><span>STRATEGY</span><span>+ SYSTEMS</span></div>
          <div className="visual-label visual-label--bottom"><span>CAMPAIGNS</span><span>→ OUTCOMES</span></div>
        </div>
        <div className="hero__stats" data-reveal>
          <div><strong>14+</strong><span>Years across agency<br />and in-house teams</span></div>
          <div><strong>46+</strong><span>Reports centralised<br />in one internal hub</span></div>
          <div><strong>148+</strong><span>Free tools built<br />for Searchlight</span></div>
          <div><strong>03</strong><span>Markets supported<br />UK · US · Australia</span></div>
        </div>
      </div>
      <div className="hero__marquee" aria-label="Core disciplines">
        <div>SEO &amp; AI SEARCH <i>✳</i> PAID MEDIA <i>✳</i> AUTOMATION <i>✳</i> ATTRIBUTION <i>✳</i> ANALYTICS <i>✳</i> CONTENT SYSTEMS <i>✳</i></div>
      </div>
    </section>
  );
}
