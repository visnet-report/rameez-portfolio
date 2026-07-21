"use client";

import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      document.documentElement.classList.add("reduce-motion");
      return;
    }

    let cleanup = () => {};

    const setup = async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const heroTween = gsap.fromTo(
        "#hero [data-reveal]",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, delay: 0.08, ease: "power3.out" },
      );

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        if (element.closest("#hero")) return;
        gsap.fromTo(
          element,
          { opacity: 0, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      cleanup = () => {
        heroTween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.ticker.remove(update);
        lenis.destroy();
      };
    };

    setup();
    return () => cleanup();
  }, []);

  return <>{children}</>;
}
