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
        const sideRail = document.querySelector<HTMLElement>("[data-side-rail]");
        const railPanels = gsap.utils.toArray<HTMLElement>("[data-rail-panel]");
        const railLateContent = gsap.utils.toArray<HTMLElement>(".rail-intro > p, .rail-socials, .rail-marquee, .rail-email");
        const heroTimeline = gsap.timeline({
          defaults: { ease: "power1.inOut" },
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });

        if (sideRail && window.innerWidth > 760) {
          const heroStage = document.querySelector<HTMLElement>(".hero-stage");
          const stageBox = heroStage?.getBoundingClientRect();
          gsap.set(sideRail, { opacity: 0, pointerEvents: "none" });
          gsap.set(railPanels, { backgroundColor: "rgba(255,255,255,0)", borderColor: "rgba(43,31,79,0)", boxShadow: "none" });
          gsap.set(railLateContent, { opacity: 0, y: 8 });

          const morphTo = (sourceSelector: string, targetSelector: string, at: number, duration = 0.66) => {
            const source = document.querySelector<HTMLElement>(sourceSelector);
            const target = document.querySelector<HTMLElement>(targetSelector);
            if (!source || !target) return;
            const from = source.getBoundingClientRect();
            const to = target.getBoundingClientRect();
            const sourceLeft = stageBox ? from.left - stageBox.left : from.left;
            const sourceTop = stageBox ? from.top - stageBox.top : from.top;
            heroTimeline.to(source, {
              x: to.left - sourceLeft,
              y: to.top - sourceTop,
              scaleX: to.width / Math.max(from.width, 1),
              scaleY: to.height / Math.max(from.height, 1),
              transformOrigin: "top left",
              duration,
            }, at);
          };

          morphTo("[data-hero-brand]", "[data-rail-brand]", 0.08, 0.74);
          morphTo(".hero-stats-card--one", "[data-rail-stat='tools']", 0.18, 0.62);
          morphTo(".hero-stats-card--two", "[data-rail-stat='experience']", 0.2, 0.6);
          morphTo("[data-hero-cta]", "[data-rail-cta]", 0.24, 0.58);

          document.querySelectorAll<HTMLElement>("[data-hero-nav-item]").forEach((source, index) => {
            const id = source.dataset.heroNavItem;
            const target = id ? document.querySelector<HTMLElement>(`[data-rail-nav-item='${id}']`) : null;
            if (!target) return;
            const from = source.getBoundingClientRect();
            const to = target.getBoundingClientRect();
            const sourceLeft = stageBox ? from.left - stageBox.left : from.left;
            const sourceTop = stageBox ? from.top - stageBox.top : from.top;
            heroTimeline.to(source, {
              x: to.left - sourceLeft,
              y: to.top - sourceTop,
              scale: Math.min(1, to.height / Math.max(from.height, 1)),
              transformOrigin: "left center",
              duration: 0.56,
            }, 0.2 + index * 0.018);
          });

          heroTimeline
            .set(sideRail, { pointerEvents: "auto" }, 0.78)
            .to(sideRail, { opacity: 1, duration: 0.12 }, 0.78)
            .to(railPanels, {
              backgroundColor: "rgba(255,255,255,.55)",
              borderColor: "rgba(43,31,79,.12)",
              boxShadow: "inset 0 1px rgba(255,255,255,.8)",
              duration: 0.14,
              stagger: 0.018,
            }, 0.84)
            .to(railLateContent, { opacity: 1, y: 0, duration: 0.1, stagger: 0.018 }, 0.88)
            .to("[data-hero-brand], .hero-stats-card, [data-hero-nav-item], [data-hero-cta]", { opacity: 0, duration: 0.08 }, 0.78);
        }

        heroTimeline
          .to("[data-hero-portrait]", { scale: 1.45, filter: "blur(22px)", yPercent: 18, opacity: 0.06, duration: 0.84, ease: "power1.in" }, 0.06)
          .to(".hero-title h1", { yPercent: -165, scale: 0.82, opacity: 0.04, duration: 0.48 }, 0.38)
          .to(".hero-title > div > a:last-child", { yPercent: 90, opacity: 0, duration: 0.46 }, 0.24)
          .to(".hero-traits", { xPercent: -48, yPercent: 45, scale: 0.62, opacity: 0, duration: 0.56 }, 0.18)
          .to(".hero-topline, .hero-identity, .hero-copy", { opacity: 0, duration: 0.28 }, 0.06)
          .to(".hero-nav", { "--divider-opacity": 0, duration: 0.22 }, 0.16);

        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(element, { opacity: 0, y: 55 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });

        const journeyLine = document.querySelector<SVGPathElement>(".journey-path__progress");
        if (journeyLine) {
          const lineLength = journeyLine.getTotalLength();
          const journeyTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".journey-map",
              start: "top 99%",
              end: "bottom 82%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          journeyTimeline.fromTo(journeyLine, { strokeDasharray: lineLength, strokeDashoffset: lineLength }, { strokeDashoffset: 0, duration: 0.78, ease: "none" }, 0);
          document.querySelectorAll<SVGCircleElement>(".journey-path circle").forEach((circle) => {
            const position = (Number(circle.getAttribute("cy")) / 2700) * 0.78;
            journeyTimeline.fromTo(circle, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.035, transformOrigin: "center", ease: "none" }, position);
          });
        }

        gsap.fromTo("[data-capability-card]", { opacity: 0, scale: 0.82, y: 30 }, { opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.55, ease: "back.out(1.3)", scrollTrigger: { trigger: ".capabilities-copy", start: "top 78%", once: true } });

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
