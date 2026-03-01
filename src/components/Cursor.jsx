import { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMove = (e) => {
      cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed -z-9999 rounded-full"
      style={{
        width: "350px",
        height: "350px",
        background:
          "radial-gradient(circle, rgba(114,195,210,0.5) 0%, rgba(114,195,210,0) 70%)",
        filter: "blur(4px)",
      }}
    />
  );
}

export default Cursor;
