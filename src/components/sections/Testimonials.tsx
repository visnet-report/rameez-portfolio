"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/content/site";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: true });
  const [selected, setSelected] = useState(0);
  const previous = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="testimonials rail-layout" id="testimonial">
      <div className="testimonials-heading">
        <span>TESTIMONIALS</span>
        <h2>From People<br />I’ve Worked With</h2>
        <p>Approved client quotes are still needed. These cards preserve the exact interaction and content structure ready for final proof.</p>
      </div>
      <div className="testimonial-progress"><span style={{ transform: `scaleX(${(selected + 1) / testimonials.length})` }} /></div>
      <div className="testimonial-viewport" ref={emblaRef}>
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.person}>
              <i>”</i>
              <h3>{index === 0 ? "Strategic thinking, practical delivery." : index === 1 ? "Makes complex performance clear." : "A builder with a marketing mindset."}</h3>
              <blockquote>{testimonial.quote}</blockquote>
              <div><span>{testimonial.person.charAt(0)}</span><p><strong>{testimonial.person}</strong><small>{testimonial.role}</small></p><b>0{index + 1} / 0{testimonials.length}</b></div>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonial-actions"><button onClick={previous}>← CLICK</button><span>DRAG</span><button onClick={next}>CLICK →</button></div>
    </section>
  );
}
