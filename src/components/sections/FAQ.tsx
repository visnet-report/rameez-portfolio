"use client";

import { useState } from "react";
import { faqs } from "@/content/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq rail-layout" id="faq">
      <div className="faq-word" aria-hidden="true">RM<sup>®</sup></div>
      <div className="faq-heading"><span>FAQ</span><h2>Got any<br />questions?</h2></div>
      <div className="faq-grid">
        {faqs.map(([question, answer], index) => {
          const isOpen = open === index;
          return (
            <article className={isOpen ? "open" : ""} key={question}>
              <h3><button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}><span>{question}</span><i>{isOpen ? "−" : "+"}</i></button></h3>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
