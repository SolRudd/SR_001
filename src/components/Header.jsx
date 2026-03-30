import { useEffect, useRef, useState } from "react";
import { PRIMARY_NAV_LINKS } from "../content/navigation";
import { CONTACT_EMAIL } from "../content/site";

export default function Header() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const scrollFrameRef = useRef(0);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const updateScrolled = () => {
      scrollFrameRef.current = 0;

      const nextScrolled = window.scrollY > 24;

      if (scrolledRef.current !== nextScrolled) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      if (scrollFrameRef.current) {
        return;
      }

      scrollFrameRef.current = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 861px)");
    const onDesktopChange = (event) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", onDesktopChange);
    } else {
      desktopQuery.addListener(onDesktopChange);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);

      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener("change", onDesktopChange);
      } else {
        desktopQuery.removeListener(onDesktopChange);
      }
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`hdr${scrolled ? " hdr--scrolled" : ""}`}>
        <div className="hdr-wrap">

          {/* Logo */}
          <a href="/" className="hdr-logo" onClick={close}>
            <img
              src="/brand/sol-rudd.svg"
              alt="Sol Rudd"
              className="hdr-logo-mark"
              width="250"
              height="59"
              decoding="async"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hdr-nav" aria-label="Main navigation">
            {PRIMARY_NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="hdr-link">
                <span className="hdr-link-arrow">&gt;</span>
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="/#contact" className="hdr-cta">
            Init Project
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`hdr-burger${open ? " hdr-burger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mob-menu${open ? " mob-menu--open" : ""}`} aria-hidden={!open}>
        <div className="mob-menu-inner">
          <div className="mob-menu-label">// Navigation</div>
          <nav className="mob-nav">
            {PRIMARY_NAV_LINKS.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                className="mob-link"
                onClick={close}
                style={{ animationDelay: open ? `${0.05 + i * 0.07}s` : "0s" }}
              >
                <span className="mob-link-num">0{i + 1}</span>
                {label}
                <svg className="mob-link-arr" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 14L14 2M14 2H5M14 2V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </nav>
          <div className="mob-footer">
            <div className="mob-status">
              <span className="mob-dot" /> Open for deployment
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mob-cta" onClick={close}>
              Init Project
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="mob-overlay" onClick={close} aria-hidden="true" />}
    </>
  );
}
