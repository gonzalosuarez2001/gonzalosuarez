import { useTheme } from "../../contexts/ThemeContext";

export default function NavDesktopItem(props) {
  const { theme } = useTheme();

  return (
    <>
      <div className={`navitem_${theme} text_${theme} language py-2 px-3 mx-1 text-center`}>
        {props.name}
      </div>
    </>
  );
}
