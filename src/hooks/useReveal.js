import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const allReveal = el.classList?.contains("reveal") || el.classList?.contains("reveal-left") || el.classList?.contains("reveal-right")
      ? [el]
      : Array.from(el.querySelectorAll(".reveal, .reveal-left, .reveal-right"));

    // also observe the container itself if it has reveal class
    const targets = allReveal;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
