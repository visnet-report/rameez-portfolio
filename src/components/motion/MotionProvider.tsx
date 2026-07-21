"use client";

import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("reduce-motion");
      return;
    }

    let cleanup = () => {};
    const setup = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"), import("gsap"), import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.9 });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const context = gsap.context(() => {
        gsap.timeline({ scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom bottom", scrub: 1 } })
          .to(".hero-word", { scale: 0.72, yPercent: -8, ease: "none" }, 0)
          .to("[data-hero-portrait]", { scale: 1.18, filter: "blur(8px)", yPercent: 8, ease: "none" }, 0)
          .to(".hero-title", { yPercent: -35, scale: 0.88, ease: "none" }, 0)
          .to(".hero-stats-card--one", { xPercent: -45, yPercent: -25, ease: "none" }, 0)
          .to(".hero-stats-card--two", { xPercent: 35, yPercent: 15, ease: "none" }, 0)
          .to(".hero-traits", { xPercent: 25, yPercent: -20, ease: "none" }, 0)
          .to(".hero-stage", { opacity: 0.18, scale: 0.96, ease: "none" }, 0.78);

        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { opacity: 0, y: 55 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });

        gsap.fromTo(".journey-path path", { strokeDasharray: 3500, strokeDashoffset: 3500 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".journey-map", start: "top 75%", end: "bottom 35%", scrub: true } });

        const work = document.querySelector<HTMLElement>(".work");
        const track = document.querySelector<HTMLElement>("[data-horizontal-track]");
        if (work && track && window.innerWidth > 760) {
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + (window.innerWidth > 900 ? 250 : 32));
          gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger: { trigger: work, start: "top top", end: "bottom bottom", scrub: 1, invalidateOnRefresh: true } });
        }

        gsap.fromTo("[data-capability-card]", { opacity: 0, scale: 0.72, y: 70 }, { opacity: 1, scale: 1, y: 0, stagger: 0.12, ease: "back.out(1.4)", scrollTrigger: { trigger: ".capabilities", start: "top 65%", end: "top 15%", scrub: 1 } });
        gsap.to(".capabilities-copy", { yPercent: -10, scale: 1.035, ease: "none", scrollTrigger: { trigger: ".capabilities", start: "top top", end: "bottom bottom", scrub: 1 } });

        ScrollTrigger.refresh();
      });

      cleanup = () => {
        context.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    };
    setup();
    return () => cleanup();
  }, []);

  return <>{children}</>;
}
