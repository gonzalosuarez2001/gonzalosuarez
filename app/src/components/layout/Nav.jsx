import { useState, useEffect } from "react";
import NavDesktop from "../molecules/NavDesktop";
import NavMobile from "../molecules/NavMobile";
import "../../styles/nav.css";

export default function Nav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [desktopBreakpoint, setdesktopBreakpoint] = useState(992);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>{screenWidth >= desktopBreakpoint ? <NavDesktop /> : <NavMobile />}</>
  );
}
