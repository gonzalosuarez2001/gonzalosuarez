import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "../../utils/motion";

export default function Reveal({
  as = "div",
  delay = 0,
  distance = 10,
  duration = 0.8,
  onMount = false,
  children,
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  if (reduceMotion) {
    return <Component {...props}>{children}</Component>;
  }

  const visible = { opacity: 1, y: 0, transition: { duration, delay, ease: easeOut } };
  const trigger = onMount
    ? { animate: visible }
    : { whileInView: visible, viewport: { once: true, margin: "0px 0px -8% 0px" } };

  return (
    <Component initial={{ opacity: 0, y: distance }} {...trigger} {...props}>
      {children}
    </Component>
  );
}
