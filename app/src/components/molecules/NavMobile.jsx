import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import NavMobileItem from "../atoms/NavMobileItem";
import NavHeader from "../atoms/NavHeader";

export default function NavMobile() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${
        menuOpen ? "nav_open" : "nav_close"
      } nav_mobile position-fixed container-fluid d-flex flex-column align-items-center shadow-sm p-0 m-0 py-3`}
    >
      <div className="row col-10 col-md-8">
        <NavHeader />
        <div
          className={`text_${theme} col-5 col-sm-7 col-md-7 p-0 m-0 justify-content-end d-flex`}
        >
          <i
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
            className={`text_${theme} nav_menu bi bi-list`}
          ></i>
        </div>
      </div>
      <div className="col-10 col-10 col-md-8 my-3 d-flex flex-column">
        <NavMobileItem name="Inicio" setMenuOpen={setMenuOpen} />
        <NavMobileItem name="Experiencia" setMenuOpen={setMenuOpen} />
        <NavMobileItem name="Proyectos" setMenuOpen={setMenuOpen} />
        <NavMobileItem name="Cursos" setMenuOpen={setMenuOpen} />
        <NavMobileItem name="Tecnologías" setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
