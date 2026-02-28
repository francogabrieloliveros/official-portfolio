import HomeSection from "../../components/home/HomeSection";
import SkillsSection from "../../components/skills/SkillsSection";
import ProjectsSection from "../../components/projects/ProjectsSection";
import EducationSection from "../../components/education/EducationSection";

function Main() {
  return (
    <main className="relative mx-auto w-full max-w-[960px] pt-24 max-[960px]:px-[5dvw]">
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
    </main>
  );
}

export default Main;
