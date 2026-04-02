import { useEffect } from "react";

export default function useHomepageSurfaceEffects(pageRef, glowRef, isOgHomepageSurface) {
  useEffect(() => {
    if (!isOgHomepageSurface) {
      return undefined;
    }

    document.documentElement.classList.add("og-homepage-html");
    document.body.classList.add("og-homepage-body");

    return () => {
      document.documentElement.classList.remove("og-homepage-html");
      document.body.classList.remove("og-homepage-body");
    };
  }, [isOgHomepageSurface]);

  useEffect(() => {
    const pageElement = pageRef.current;
    const glowElement = glowRef.current;

    if (!pageElement) {
      return undefined;
    }

    const revealElements = pageElement.querySelectorAll(".reveal:not(.revealed)");
    const prefersReducedMotion =
      isOgHomepageSurface || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsPointerEffects =
      window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion;

    if (!revealElements.length && !supportsPointerEffects) {
      return undefined;
    }

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("revealed"));
      return undefined;
    }

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const flushMousePosition = () => {
      frame = 0;

      if (glowElement) {
        glowElement.style.setProperty("--mx", `${nextX}px`);
        glowElement.style.setProperty("--my", `${nextY}px`);
      }
    };

    const onMove = (event) => {
      nextX = event.clientX;
      nextY = event.clientY;

      if (!frame) {
        frame = window.requestAnimationFrame(flushMousePosition);
      }
    };

    if (supportsPointerEffects && glowElement) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    const io =
      revealElements.length > 0
        ? new IntersectionObserver(
            (entries) =>
              entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                  return;
                }

                entry.target.classList.add("revealed");
                io.unobserve(entry.target);
              }),
            { threshold: 0.08 }
          )
        : null;

    revealElements.forEach((element) => io?.observe(element));

    return () => {
      if (supportsPointerEffects && glowElement) {
        window.removeEventListener("mousemove", onMove);
      }

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      io?.disconnect();
    };
  }, [glowRef, isOgHomepageSurface, pageRef]);
}
