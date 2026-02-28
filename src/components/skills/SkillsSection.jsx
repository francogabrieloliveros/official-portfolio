import Icons from "../../assets/icons";
import SkillItems from "./SkillItems";

function SkillsSection() {
  return (
    <section className="mb-30" id="skills">
      <h2 className="florilst mb-10 text-[2rem]">Skills</h2>
      <div className="flex flex-wrap justify-between gap-10">
        <SkillItems
          title={"Languages"}
          items={["JavaScript", "Python", "C", "Java", "R"]}
          icons={["javascript", "python", "c", "java", "r"]}
        />
        <SkillItems
          title={"Front-end"}
          items={["React", "Tailwind CSS"]}
          icons={["react", "tailwind"]}
        />
        <SkillItems
          title={"Back-end"}
          items={["MongoDB", "ExpressJS", "NodeJS"]}
          icons={["mongo", "express", "node"]}
        />
      </div>
    </section>
  );
}

export default SkillsSection;
