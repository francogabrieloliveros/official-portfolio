import { useReveal } from "../../hooks/useReveal";
import Icons from "../../assets/icons";

const languages = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Dart", icon: "dart" },
  { name: "C", icon: "c" },
  { name: "Java", icon: "java" },
  { name: "R", icon: "r" },
];

const frontend = [
  { name: "React", icon: "react" },
  { name: "Flutter", icon: "flutter" },
  { name: "Tailwind CSS", icon: "tailwind" },
];

const backend = [
  { name: "MongoDB", icon: "mongo" },
  { name: "MySQL", icon: "sql" },
  { name: "Firebase", icon: "firebase" },
  { name: "ExpressJS", icon: "express" },
  { name: "NodeJS", icon: "node" },
];

const tools = [
  { name: "Git/ GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "GitHub Actions", icon: "github" },
  { name: "Linux", icon: "linux" },
];

function SkillBar({ name, icon }) {
  const Icon = Icons[icon];
  return (
    <div className="reveal group flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Icon w="18px" />
          <span className="text-[0.95rem]">{name}</span>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="reveal flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-black/20" />
        <h3 className="section-label">{title}</h3>
        <div className="h-px flex-1 bg-black/20" />
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <SkillBar key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const sectionRef = useReveal();

  return (
    <section className="mb-24 sm:mb-32" id="skills" ref={sectionRef}>
      <p className="reveal section-label mb-3">— what i work with</p>
      <h2 className="florilst reveal mb-10 text-[2rem]">Skills</h2>

      <div className="reveal grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <SkillGroup title="Languages" items={languages} />
        <SkillGroup title="Front-end" items={frontend} />
        <SkillGroup title="Back-end" items={backend} />
        <SkillGroup title="Tools" items={tools} />
      </div>
    </section>
  );
}

export default SkillsSection;
