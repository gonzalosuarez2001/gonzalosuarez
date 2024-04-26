import { useTheme } from "../../contexts/ThemeContext";
import NavItemsDesktop from "../atoms/NavItemsDesktop";
import "../../styles/nav.css";

export default function NavContainerDesktop() {
  const { theme } = useTheme();

  return (
    <div
      className={`text_${theme} col-7 col-lg-10 col-xl-9 col-xxl-8 p-0 m-0 row justify-content-end`}
    >
      <NavItemsDesktop />
    </div>
  );
}
