import { useTheme } from "../../contexts/ThemeContext";
import { useState } from "react";
//import NavItemsMobile from "../atoms/NavItemsDesktop";
import "../../styles/nav.css";

export default function NavContainerMobile() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className={`text_${theme} col-5 col-sm-7 col-md-7 p-0 m-0 justify-content-end d-flex`}
    >
      <i className={`text_${theme} nav_menu bi bi-list`}></i>
      {menuOpen ? <></> : <></>}
    </div>
  );
}
