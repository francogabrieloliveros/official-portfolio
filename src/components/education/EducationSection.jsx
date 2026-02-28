import EducationItem from "./EducationItem";
import uplb from "../../assets/uplb.png";
import ccsis from "../../assets/ccsis.jpg";

function EducationSection() {
  return (
    <section className="mb-30" id="education">
      <h2 className="florilst mb-10 text-[2rem]">Education</h2>
      <div className="relative flex flex-col gap-15">
        <div className="absolute left-[22px] h-full w-[1.5px] bg-linear-to-b from-black from-50% to-transparent"></div>
        <EducationItem
          school={"University of the Philippines Los Baños"}
          achievement={"BS Computer Science"}
          date={"2024 - Present"}
          address={"Laguna, Philippines"}
          learnings={[
            "JavaScript",
            "Python",
            "C",
            "Java",
            "R",
            "React",
            "ExpressJS",
          ]}
          imagesrc={uplb}
        />
        <EducationItem
          school={"Calamba City Science Integrated School"}
          date={"2022 - 2024"}
          address={"Laguna, Philippines"}
          learnings={["Arduino", "C"]}
          imagesrc={ccsis}
        />
      </div>
    </section>
  );
}

export default EducationSection;
