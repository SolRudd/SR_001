import { BOOKING_URL, CONTACT_EMAIL } from "../../content/site";
import { IconArrow } from "../Icons";
import { CONTACT_ITEMS } from "./homeData";

export default function ContactSection() {
  return (
    <section id="contact" className="sec defer-section">
      <div className="wrap">
        <div className="contact-card reveal">
          <div className="contact-glow" />
          <div className="contact-inner">
            <div className="contact-l">
              <div className="c-status">
                <div className="c-dot" /> Open for deployment
              </div>
              <h2 className="c-h2">
                Need something
                <br />
                sharper?
              </h2>
              <p className="c-body">
                I help founders and businesses build stronger websites, products,
                automation systems, and technical infrastructure with better design,
                better UX, and better execution.
              </p>
            </div>
            <div className="contact-r">
              <div className="c-items">
                {CONTACT_ITEMS.map((item) => (
                  <div className="c-item" key={item.label}>
                    <span className="c-icon">
                      <item.Icon {...item.iconProps} />
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="contact-actions">
                <a
                  href={BOOKING_URL}
                  className="btn btn-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Call <IconArrow />
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">
                  Email {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
