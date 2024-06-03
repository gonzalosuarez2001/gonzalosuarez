import { useTheme } from "../../contexts/ThemeContext";
import "../../styles/extras.css"

export default function SectionTitle({ title }) {
  const { theme } = useTheme();
  return (
    <div>
      <h2 className={`text_${theme} language section_title`}>{title}</h2>
    </div>
  );
}
