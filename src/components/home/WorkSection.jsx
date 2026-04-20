import { IconArrow, IconRadar } from "../Icons";
import { PROJECTS } from "./homeData";

export default function WorkSection() {
  return (
    <section id="work" className="sec defer-section">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="eyebrow">
            <IconRadar /> Selected Work
          </div>
          <h2 className="h2">
            Websites, Products
            <br />
            &amp; Systems.
          </h2>
          <p className="body">
            From agency sites and founder websites to products, AI agents,
            and technical systems, I build real software that ships into the world.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((project, index) => (
            <a
              key={project.num}
              className="proj reveal reveal-tight"
              href={project.url}
              target={project.url.startsWith("http") ? "_blank" : undefined}
              rel={project.url.startsWith("http") ? "noreferrer" : undefined}
              style={{
                "--accent": project.accent,
                "--reveal-delay": `${Math.min(index, 5) * 70}ms`,
              }}
            >
              <div className="proj-corner tl" />
              <div className="proj-corner tr" />
              <div className="proj-header">
                <div>
                  <div className="proj-tag">// {project.tag}</div>
                  <div className="proj-name">{project.name}</div>
                </div>
                <div className="proj-icon">
                  <project.Icon {...project.iconProps} />
                </div>
              </div>
              <div className="proj-body">{project.body}</div>
              <div className="proj-footer">
                <div className="proj-link">
                  Inspect Node <IconArrow size={12} />
                </div>
                <div className="proj-num">{project.num}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
