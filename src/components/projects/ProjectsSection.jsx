import { useState } from "react";
import Icons from "../../assets/icons";
import projects from "../../constants/projects";
import { useReveal } from "../../hooks/useReveal";

const ALL_TAGS = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

function ProjectCard({ project, index }) {
  const delay = (index % 3) * 0.1;

  return (
    <div
      className="project-card-wrap relative flex flex-col overflow-hidden border border-black/10 bg-white/50"
      style={{ transitionDelay: `${delay}s`, backdropFilter: "blur(4px)" }}
    >
      {/* Image with overlay */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={project.image}
          alt={project.title}
          style={{ display: "block" }}
        />
        <div className="img-overlay">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 border border-white px-3 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            <Icons.github w="14px" /> Code
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              className="flex items-center gap-2 border border-white px-3 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
            >
              <Icons.globe w="14px" /> Live
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg leading-tight font-bold">{project.title}</h3>
        <p className="line-clamp-3 flex-1 text-[0.88rem] leading-relaxed opacity-70">
          {project.desc}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="skill-pill border border-black/20 px-2 py-0.5 text-[0.72rem] tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All");
  const sectionRef = useReveal();

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="mb-24 sm:mb-32" id="projects" ref={sectionRef}>
      <p className="reveal section-label mb-3">— things i built</p>
      <h2 className="florilst reveal mb-6 text-[2rem]">Projects</h2>

      {/* Filter pills */}
      <div className="reveal mb-8 flex flex-wrap gap-2">
        {[
          "All",
          "JavaScript",
          "TypeScript",
          "Dart",
          "Flutter",
          "React",
          "Java",
          "C",
          "Arduino",
        ].map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="skill-pill border border-black/20 px-3 py-1 text-[0.78rem] tracking-wide uppercase"
            style={
              activeTag === tag
                ? { background: "var(--ink)", color: "var(--paper)" }
                : {}
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="reveal project-grid">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center opacity-40">
          No projects match that filter.
        </p>
      )}
    </section>
  );
}

export default ProjectsSection;
