import EducationItem from "./EducationItem";
import uplb from "../../assets/uplb.png";
import ccsis from "../../assets/ccsis.jpg";
import { useReveal } from "../../hooks/useReveal";

function EducationSection() {
  const sectionRef = useReveal();

  return (
    <section className="mb-24 sm:mb-32" id="education" ref={sectionRef}>
      <p className="reveal section-label mb-3">— where i learned</p>
      <h2 className="florilst reveal mb-10 text-[2rem]">Education</h2>
      <div className="relative flex flex-col gap-12">
        <div className="absolute left-[22px] h-full w-[1.5px] bg-gradient-to-b from-black from-50% to-transparent" />
        <EducationItem
          school="University of the Philippines Los Baños"
          achievement="BS Computer Science"
          date="2024 - Present"
          address="Laguna, Philippines"
          learnings={[
            "JavaScript",
            "TypeScript",
            "Dart",
            "Python",
            "C",
            "Java",
            "R",
            "React",
            "Flutter",
            "ExpressJS",
            "MySQL",
          ]}
          imagesrc={uplb}
          delay={0}
        />
        <EducationItem
          school="Calamba City Science Integrated School"
          date="2022 - 2024"
          address="Laguna, Philippines"
          learnings={["Arduino", "C"]}
          imagesrc={ccsis}
          delay={0.15}
        />
      </div>
    </section>
  );
}

export default EducationSection;
