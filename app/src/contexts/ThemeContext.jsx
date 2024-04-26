import { useState, useContext, useEffect, createContext } from "react";
import "../styles/theme.css";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("");
  const [validThemes, setValidThemes] = useState(["light", "dark", "system"]);

  useEffect(() => {
    validThemes.includes(localStorage.getItem("theme"))
      ? setTheme(localStorage.getItem("theme"))
      : setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container_${theme} container_theme`}>{children}</div>
    </ThemeContext.Provider>
  );
}
