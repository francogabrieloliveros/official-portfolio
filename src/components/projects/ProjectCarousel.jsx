import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard.jsx";
import Icons from "../../assets/icons/index.jsx";
import projects from "../../constants/projects.js";
import slots from "../../constants/slots.js";

function ProjectCarousel() {
  const [cardSlots, setCardSlots] = useState(() => {
    const s = [];
    projects.forEach((_, i) =>
      i === projects.length - 1
        ? (s[i] = "prevactive")
        : i === 0
          ? (s[i] = "active")
          : i === 1
            ? (s[i] = "next")
            : i === 2
              ? (s[i] = "last")
              : i === 3
                ? (s[i] = "nextlast")
                : (s[i] = "hidden"),
    );
    return s;
  });

  const isAnimating = useRef(false);

  const projectCards = projects.map((project, i) => (
    <ProjectCard slot={slots[cardSlots[i]]} project={project} key={i} />
  ));

  const slideNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setTimeout(() => {
      setCardSlots((prev) => {
        const newSlots = [...prev];

        const prevActiveIdx = newSlots.indexOf("prevactive");
        const activeIdx = newSlots.indexOf("active");

        newSlots[prevActiveIdx] = "hidden";
        newSlots[activeIdx] = "prevactive";

        return newSlots;
      });
    }, 0);

    setTimeout(() => {
      setCardSlots((prev) => {
        const newSlots = [...prev];

        const nextIdx = newSlots.indexOf("next");
        const lastIdx = newSlots.indexOf("last");
        const nextLastIdx = newSlots.indexOf("nextlast");

        newSlots[nextIdx] = "active";
        newSlots[lastIdx] = "next";
        newSlots[nextLastIdx] = "last";
        newSlots[(nextLastIdx + 1) % newSlots.length] = "nextlast";

        isAnimating.current = false;
        return newSlots;
      });
    }, 200);
  };

  const slidePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setTimeout(() => {
      setCardSlots((prev) => {
        const newSlots = [...prev];

        const activeIdx = newSlots.indexOf("active");
        const nextIdx = newSlots.indexOf("next");
        const lastIdx = newSlots.indexOf("last");
        const nextLastIdx = newSlots.indexOf("nextlast");

        newSlots[activeIdx] = "next";
        newSlots[nextIdx] = "last";
        newSlots[lastIdx] = "nextlast";
        newSlots[nextLastIdx] = "hidden";

        return newSlots;
      });
    }, 0);

    setTimeout(() => {
      setCardSlots((prev) => {
        const newSlots = [...prev];

        const prevActiveIdx = newSlots.indexOf("prevactive");

        const newPrevactive = prevActiveIdx - 1;
        newSlots[newPrevactive !== -1 ? newPrevactive : newSlots.length - 1] =
          "prevactive";
        newSlots[prevActiveIdx] = "active";

        isAnimating.current = false;
        return newSlots;
      });
    }, 200);
  };

  return (
    <div className="flex items-center gap-5 overflow-x-hidden">
      <div
        className="button-behavior flex h-[45px] w-[45px] items-center justify-center bg-black"
        onClick={() => slidePrev()}
      >
        <Icons.arrowLeft />
      </div>
      <div className="relative h-[700px] w-full perspective-normal">
        {projectCards}
      </div>
      <div
        className="button-behavior z-10 flex h-[45px] w-[45px] items-center justify-center bg-black"
        onClick={() => slideNext()}
      >
        <Icons.arrowRight />
      </div>
    </div>
  );
}

export default ProjectCarousel;
