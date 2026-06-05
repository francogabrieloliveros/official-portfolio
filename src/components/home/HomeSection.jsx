import { useEffect, useRef, useState } from "react";
import Icons from "../../assets/icons";
import profile from "../../assets/profile.png";
import { useReveal } from "../../hooks/useReveal";

function HomeSection() {
  const sectionRef = useReveal();

  return (
    <section className="mb-24 sm:mb-32" id="home" ref={sectionRef}>
      {/* Top label */}
      <p className="reveal section-label mb-6">— portfolio 2026</p>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        {/* Left column */}
        <div className="flex flex-2 flex-col gap-8">
          <div>
            <h1 className="florilst hero-name mb-2 text-[3.2rem] leading-[1.05] sm:text-[4.2rem]">
              Hi Franco here!
            </h1>
            <div className="hero-sub"></div>
          </div>

          <div className="hero-desc flex flex-col gap-5">
            <p className="text-[1.05rem] leading-relaxed sm:text-[1.15rem]">
              In-progress full-stack software developer from the Philippines.
            </p>
            <p className="text-[1.05rem] leading-relaxed sm:text-[1.15rem]">
              I enjoy creating projects that are fun and meaningful. Moreover, I
              love learning new things and embracing the process that comes with
              it.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <a
              className="button-behavior flex h-[45px] items-center gap-3 bg-black px-5 text-white"
              href="https://docs.google.com/document/d/1G2GXFNm6qHIa0vHiGjSDWS9Tx-2MzIKfzlE7qChG1xI/edit?usp=sharing"
              target="_blank"
            >
              Resume <Icons.download w="14px" />
            </a>
            <a
              className="button-behavior"
              href="https://github.com/francogabrieloliveros"
              target="_blank"
            >
              <Icons.github w="45px" />
            </a>
            <a
              className="button-behavior"
              href="https://linkedin.com/in/franco-gabriel-p-oliveros"
              target="_blank"
            >
              <Icons.linkedin w="45px" />
            </a>
            <a
              className="button-behavior"
              href="mailto:francogabrieloliveros@gmail.com"
              target="_blank"
            >
              <Icons.email w="45px" />
            </a>
          </div>
        </div>

        {/* Right column — profile */}
        <div className="reveal-right relative hidden shrink-0 md:block md:w-[260px] lg:w-[300px]">
          <img
            className="relative z-10 w-full shadow-xl"
            src={profile}
            alt="Franco Gabriel profile picture"
            style={{ display: "block" }}
          />
          <div
            className="absolute z-0"
            style={{
              top: "20px",
              left: "-20px",
              width: "100%",
              height: "93%",
              background: "var(--ink)",
            }}
          />
          {/* decorative accent line */}
          <div
            className="absolute"
            style={{
              bottom: "-12px",
              right: "-12px",
              width: "60%",
              height: "3px",
              background: "var(--accent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
