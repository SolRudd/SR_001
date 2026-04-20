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
    const progressElement = pageElement.querySelector(".scroll-progress");

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("revealed"));
      if (progressElement) {
        progressElement.style.setProperty("--sp", "0");
      }
      return undefined;
    }

    let pointerFrame = 0;
    let scrollFrame = 0;
    let nextX = 0;
    let nextY = 0;

    const flushMousePosition = () => {
      pointerFrame = 0;

      if (glowElement) {
        glowElement.style.setProperty("--mx", `${nextX}px`);
        glowElement.style.setProperty("--my", `${nextY}px`);
      }
    };

    const onMove = (event) => {
      nextX = event.clientX;
      nextY = event.clientY;

      if (!pointerFrame) {
        pointerFrame = window.requestAnimationFrame(flushMousePosition);
      }
    };

    if (supportsPointerEffects && glowElement) {
      window.addEventListener("mousemove", onMove, { passive: true });
    }

    const flushScrollProgress = () => {
      scrollFrame = 0;

      if (!progressElement) {
        return;
      }

      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / max));
      progressElement.style.setProperty("--sp", ratio.toFixed(4));
    };

    const onScroll = () => {
      if (scrollFrame) {
        return;
      }
      scrollFrame = window.requestAnimationFrame(flushScrollProgress);
    };

    if (progressElement) {
      flushScrollProgress();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
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

      if (progressElement) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }

      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      io?.disconnect();
    };
  }, [glowRef, isOgHomepageSurface, pageRef]);
}
