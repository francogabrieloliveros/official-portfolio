import Icons from "../../assets/icons";
import profile from "../../assets/profile.png";

function HomeSection() {
  return (
    <section className="mb-30 flex w-full gap-20" id="home">
      <div className="flex flex-2 flex-col justify-between">
        <h1 className="florilst mb-0 text-[4rem] max-[960px]:mb-10">
          Hi Franco here!!
        </h1>

        <div className="flex flex-col gap-10 max-[960px]:mb-15">
          <p className="text-justify text-2xl">
            Aspiring full-stack software developer from the Philippines!
          </p>
          <p className="text-justify text-2xl">
            I enjoy creating projects that are fun and meaningful. Moreover, I
            love learning new things and embracing process that comes with them.
          </p>
        </div>

        <div className="flex w-[clamp(300px,75%,400px)] justify-between">
          <a className="button-behavior" href="" target="_blank">
            <div className="flex h-[45px] items-center gap-3 bg-black px-4 text-white">
              Resume <Icons.download w="14px" />
            </div>
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

      <div className="relative flex-1 max-[960px]:hidden">
        <img
          className="relative z-10 mb-8 shadow-2xl"
          src={profile}
          alt="profile picture"
        />
        <div className="absolute top-8 -left-8 z-0 h-[93%] w-full bg-black"></div>
      </div>
    </section>
  );
}

export default HomeSection;
