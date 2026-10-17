import { useEffect, useState } from "react";

const activationLine = 0.35;

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const { scrollHeight } = document.documentElement;
      const reachedBottom = window.innerHeight + window.scrollY >= scrollHeight - 2;
      if (reachedBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }
      const line = window.innerHeight * activationLine;
      const passed = sectionIds.filter((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= line;
      });
      setActiveId(passed.at(-1) ?? sectionIds[0]);
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sectionIds]);

  return activeId;
}
