import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/theme.css";

export default function AboutMe() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div style={{height: "500px"}}>
      <button style={{height: "100px", opacity: "0" }} onClick={handleTheme}>
        Cambiar Tema
      </button>
    </div>
  );
}
