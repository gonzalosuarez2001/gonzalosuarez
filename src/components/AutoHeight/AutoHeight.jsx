import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { swapTransition } from "../../utils/motion";

const instant = { duration: 0 };

export default function AutoHeight({ children, className }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("auto");
  const [animating, setAnimating] = useState(false);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const content = contentRef.current;
    const observer = new ResizeObserver(() => setHeight(content.offsetHeight));
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ height }}
      transition={reduceMotion ? instant : swapTransition}
      style={{ overflow: animating ? "hidden" : "visible" }}
      onAnimationStart={() => setAnimating(true)}
      onAnimationComplete={() => setAnimating(false)}
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
