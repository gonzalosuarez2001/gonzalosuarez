import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/aboutMe.css";
import "../../styles/theme.css";

export default function AboutMe() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  function handleTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={`about_container container-fluid p-0 m-0`}>
      <button style={{ opacity: "0" }} onClick={handleTheme}>
        Cambiar Tema
      </button>
    </div>
  );
}
