import { useTheme } from "../../contexts/ThemeContext";
import { useState, useEffect } from "react";
import NavContainerDesktop from "../molecules/NavContainerDesktop";
import NavContainerMobile from "../molecules/NavContainerMobile";
import "../../styles/nav.css";

export default function Nav() {
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [deskTopWidth, setdeskTopWidth] = useState(992);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <nav style={{transition: ".2s"}} className="position-fixed container-fluid d-flex justify-content-center shadow-sm p-0 m-0 py-3">
      <div className="row col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-9 px-lg-4">
        <header
          className={`text_${theme} col-7 col-sm-5 col-lg-2 col-xl-3 col-xxl-4 col p-0 m-0 row justify-content-start`}
        >
          <div className="nav_logo col-12 py-2 px-0">Gonzalo Suarez</div>
        </header>
        {screenWidth >= deskTopWidth ? <NavContainerDesktop /> : <NavContainerMobile />}
      </div>
    </nav>
  );
}
