import Icons from "../../assets/icons";

function Footer() {
  return (
    <footer
      className="pt-10 pb-16 max-[960px]:px-[5dvw]"
      style={{ backgroundImage: "url('/noise-bg.png')" }}
    >
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-6 h-px bg-black/10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="florilst text-xl font-bold">
              Franco Gabriel P. Oliveros
            </h3>
            <p className="mt-0.5 text-[0.8rem] opacity-40">
              Aspiring Full-Stack Developer · Philippines
            </p>
          </div>
          <div className="flex gap-4">
            <a
              className="button-behavior"
              href="https://docs.google.com/document/d/1G2GXFNm6qHIa0vHiGjSDWS9Tx-2MzIKfzlE7qChG1xI/edit?usp=sharing"
              target="_blank"
            >
              <Icons.resume w="24px" />
            </a>
            <a
              className="button-behavior"
              href="https://linkedin.com/in/franco-gabriel-p-oliveros"
              target="_blank"
            >
              <Icons.linkedin w="24px" />
            </a>
            <a
              className="button-behavior"
              href="https://github.com/francogabrieloliveros"
              target="_blank"
            >
              <Icons.github w="24px" />
            </a>
            <a
              className="button-behavior"
              href="mailto:francogabrieloliveros@gmail.com"
              target="_blank"
            >
              <Icons.email w="24px" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-[0.78rem] opacity-30">
          © Franco 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
