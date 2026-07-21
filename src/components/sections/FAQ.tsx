"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <SectionHeading eyebrow="09 / Questions, answered" title={<>Before we get<br /><em>into it.</em></>} />
      <div className="faq__layout">
        <aside data-reveal><p>Still curious?</p><a href="mailto:meramiz@gmail.com">Ask something specific ↗</a></aside>
        <div className="faq__list">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={question} data-reveal>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(isOpen ? -1 : index)}>
                    <span>0{index + 1}</span>{question}<i>{isOpen ? "—" : "+"}</i>
                  </button>
                </h3>
                <div id={`faq-panel-${index}`} className="faq-panel" role="region" aria-hidden={!isOpen}><p>{answer}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
