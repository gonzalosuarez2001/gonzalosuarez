import { useTheme } from "../../contexts/ThemeContext";

export default function NavMobileItem({ name, onClick, isActive }) {
  const { theme } = useTheme();

  return (
    <div onClick={onClick}>
      <p
        style={{ backgroundColor: isActive && "#4070f4", color: isActive && "#ffffff" }}
        className={`navitem_${theme} text_${theme} language p-3 m-0`}
      >
        {name}
      </p>
    </div>
  );
}
