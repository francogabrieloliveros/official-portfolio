import { useState, useEffect, useRef } from "react";

function Header({ scrollbar }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    if (!scrollbar) return;

    const handleScroll = ({ offset }) => {
      const currentY = offset.y;
      setHidden(currentY > lastY.current && currentY > 100);
      lastY.current = currentY;
    };

    scrollbar.addListener(handleScroll);
    return () => scrollbar.removeListener(handleScroll);
  }, [scrollbar]);

  const handleNav = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target || !scrollbar) return;
    scrollbar.scrollIntoView(target, {
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 mt-8 flex w-full justify-center ${hidden ? "-translate-y-24" : "translate-y-0"} transition-all duration-300`}
    >
      <nav className="flex gap-4">
        <a
          className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
          onClick={(e) => handleNav(e, "#home")}
          href="#home"
        >
          Home
        </a>
        <a
          className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
          onClick={(e) => handleNav(e, "#skills")}
          href="#skills"
        >
          Skills
        </a>
        <a
          className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
          onClick={(e) => handleNav(e, "#projects")}
          href="#projects"
        >
          Projects
        </a>
        <a
          className="rounded-2xl border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md"
          onClick={(e) => handleNav(e, "#education")}
          href="#education"
        >
          Education
        </a>
      </nav>
    </header>
  );
}

export default Header;
