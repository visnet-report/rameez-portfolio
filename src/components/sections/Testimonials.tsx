"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (
    <section className="section proof" id="proof">
      <SectionHeading eyebrow="07 / Client proof" title={<>The work is stronger<br />with <em>trust</em> in the room.</>} copy="The résumé did not contain approved testimonials, so these cards preserve the intended design and are ready for real quotes." />
      <div className="testimonial-controls" data-reveal>
        <p>APPROVED QUOTES NEEDED</p>
        <div><button onClick={previous} aria-label="Previous testimonial"><ArrowLeft /></button><button onClick={next} aria-label="Next testimonial"><ArrowRight /></button></div>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial" key={testimonial.person} data-reveal>
              <Quote aria-hidden="true" />
              <blockquote>{testimonial.quote}</blockquote>
              <div className="testimonial__person"><span>{testimonial.person.slice(0, 1)}</span><p><strong>{testimonial.person}</strong><small>{testimonial.role}</small></p><i>0{index + 1}</i></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
