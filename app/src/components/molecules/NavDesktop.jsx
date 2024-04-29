import { useTheme } from "../../contexts/ThemeContext";
import NavDesktopItem from "../atoms/NavDesktopItem";
import NavHeader from "../atoms/NavHeader";

export default function NavDesktop() {
  const { theme } = useTheme();

  return (
    <nav
      style={{ transition: ".2s" }}
      className="position-fixed container-fluid d-flex justify-content-center shadow-sm p-0 m-0 py-3"
    >
      <div className="row col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-9 px-lg-4">
        <NavHeader />
        <div
          className={`col-7 col-lg-10 col-xl-9 col-xxl-8 p-0 m-0 row justify-content-end`}
        >
          <NavDesktopItem name="Inicio" />
          <NavDesktopItem name="Experiencia" />
          <NavDesktopItem name="Proyectos" />
          <NavDesktopItem name="Cursos" />
          <NavDesktopItem name="Tecnologías" />
        </div>
      </div>
    </nav>
  );
}
