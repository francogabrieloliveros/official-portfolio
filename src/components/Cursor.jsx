import { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const handleMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="cursor pointer-events-none fixed -z-9999 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
