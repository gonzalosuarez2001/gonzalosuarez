import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import "../../styles/nav.css";

export default function NavItemsDesktop() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <div className={`button_${theme} nav_item col-2 p-2 mx-1 text-center`}>
        Inicio
      </div>
      <div className={`button_${theme} nav_item col-2 p-2 mx-1 text-center`}>
        Experiencia
      </div>
      <div className={`button_${theme} nav_item col-2 p-2 mx-1 text-center`}>
        Proyectos
      </div>
      <div className={`button_${theme} nav_item col-2 p-2 mx-1 text-center`}>
        Cursos
      </div>
      <div className={`button_${theme} nav_item col-2 p-2 mx-1 text-center`}>
        Tecnologías
      </div>
    </>
  );
}
