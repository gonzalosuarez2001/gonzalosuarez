import { useTheme } from "../../contexts/ThemeContext";

export default function NavMobileItem(props) {
  const { theme } = useTheme();

  return (
    <div onClick={() => props.setMenuOpen(false)}>
      <p className={`button_${theme} p-3 m-0`}>{props.name}</p>
    </div>
  );
}
