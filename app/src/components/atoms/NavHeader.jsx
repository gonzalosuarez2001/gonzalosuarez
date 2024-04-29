import { useTheme } from "../../contexts/ThemeContext";

export default function NavHeader() {
  const theme = useTheme();

  return (
    <header
      className={`text_${theme} col-7 col-sm-5 col-lg-2 col-xl-3 col-xxl-4 col p-0 m-0 row justify-content-start`}
    >
      <div className="nav_logo col-12 py-2 px-0">Gonzalo Suarez</div>
    </header>
  );
}
