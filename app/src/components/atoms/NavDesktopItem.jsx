import { useTheme } from "../../contexts/ThemeContext";

export default function NavDesktopItem(props) {
  const { theme } = useTheme();

  return (
    <>
      <div className={`navitem_${theme} col-2 p-2 mx-1 text-center`}>
        {props.name}
      </div>
    </>
  );
}
