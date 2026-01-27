import { useTheme } from "../../contexts/ThemeContext";

export default function NavDesktopItem({ name, onClick, isActive }) {
  const { theme } = useTheme();

  return (
    <>
      <div
        onClick={onClick}
        className={`navitem_${theme} text_${theme} language py-2 px-3 mx-1 text-center position-relative`}
        style={{ cursor: "pointer" }}
      >
        {name}
        {isActive && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: "#3b82f6",
              borderRadius: "2px 2px 0 0",
            }}
          />
        )}
      </div>
    </>
  );
}
