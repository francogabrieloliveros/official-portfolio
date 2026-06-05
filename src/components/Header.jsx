import { useState, useEffect, useRef } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

function Header({ scrollbar }) {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#home");
  const lastY = useRef(0);

  useEffect(() => {
    if (!scrollbar) return;
    const handleScroll = ({ offset }) => {
      const y = offset.y;
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    scrollbar.addListener(handleScroll);
    return () => scrollbar.removeListener(handleScroll);
  }, [scrollbar]);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActive(href);
    const target = document.querySelector(href);
    if (!target || !scrollbar) return;
    scrollbar.scrollIntoView(target, {
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 mt-6 flex w-full justify-center transition-all duration-300 ${hidden ? "-translate-y-24" : "translate-y-0"}`}
    >
      <nav
        className="flex items-center gap-1 rounded-full border border-black/12 px-3 py-2 shadow-sm backdrop-blur-md"
        style={{ backdropFilter: "blur(12px)" }}
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleNav(e, href)}
            className={`nav-link rounded-full px-3 py-1 text-[0.85rem] transition-all duration-200 ${
              active === href ? "bg-black text-white" : "hover:bg-black/8"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
