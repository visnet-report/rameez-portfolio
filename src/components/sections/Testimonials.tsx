"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/content/site";

export function Recommendations() {
  const [active, setActive] = useState(0);
  const recommendation = testimonials[active];

  return (
    <section className="recommendations rail-layout" id="recommendations">
      <div className="recommendations-heading" data-reveal>
        <span>RECOMMENDATIONS</span>
        <h2>From People<br /><em>I&apos;ve Worked With</em></h2>
        <p>Five perspectives from people who collaborated with me, hired me or trusted me with their growth.</p>
      </div>

      <div className="recommendations-layout">
        <div className="recommendation-tabs" role="tablist" aria-label="Recommendations">
          {testimonials.map((item, index) => (
            <button
              key={item.person}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              style={{ "--tab-index": index } as React.CSSProperties}
            >
              <span className="recommendation-avatar">
                {item.image ? <Image src={item.image} alt="" fill sizes="88px" /> : <b>{item.person.split(" ").map((part) => part[0]).join("").slice(0, 2)}</b>}
              </span>
              <span><strong>{item.person}</strong><small>0{index + 1}</small></span>
            </button>
          ))}
        </div>

        <article className="recommendation-card" key={recommendation.person}>
          <span className="recommendation-card__quote" aria-hidden="true">“</span>
          <header>
            <span className="recommendation-card__avatar">
              {recommendation.image ? <Image src={recommendation.image} alt={recommendation.person} fill sizes="104px" /> : <b>{recommendation.person.split(" ").map((part) => part[0]).join("").slice(0, 2)}</b>}
            </span>
            <div><h3>{recommendation.person}</h3><p>{recommendation.role}</p></div>
            <a href={recommendation.linkedin} target="_blank" rel="noreferrer" aria-label={`Open ${recommendation.person}'s LinkedIn profile`}>in ↗</a>
          </header>
          <p className="recommendation-card__relationship">{recommendation.relationship}</p>
          <blockquote>{recommendation.quote}</blockquote>
          <footer><span>0{active + 1} / 0{testimonials.length}</span><div>{testimonials.map((item, index) => <button key={item.person} type="button" aria-label={`Show ${item.person}`} onClick={() => setActive(index)} className={active === index ? "active" : ""} />)}</div></footer>
        </article>
      </div>
    </section>
  );
}
