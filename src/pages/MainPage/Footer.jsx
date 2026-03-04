import Icons from "../../assets/icons";

function Footer() {
  return (
    <footer className="pt-5 pb-50 max-[960px]:px-[5dvw]">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-xl font-bold">Franco Gabriel P. Oliveros</h3>
          <div className="flex gap-[3dvw]">
            <a
              className="button-behavior"
              href="https://drive.google.com/file/d/1zVKez4XYETGVVK5CWzArjfRH2zwQ-lSe/view?usp=sharing"
              target="_blank"
            >
              <Icons.resume w="27px" />
            </a>
            <a
              className="button-behavior"
              href="https://linkedin.com/in/franco-gabriel-p-oliveros"
              target="_blank"
            >
              <Icons.linkedin w="27px" />
            </a>

            <a
              className="button-behavior"
              href="https://github.com/francogabrieloliveros"
              target="_blank"
            >
              <Icons.github w="27px" />
            </a>
            <a
              className="button-behavior"
              href="mailto:francogabrieloliveros@gmail.com"
              target="_blank"
            >
              <Icons.email w="27px" />
            </a>
          </div>
        </div>
        <p className="mt-5">&copy; Franco 2026. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
