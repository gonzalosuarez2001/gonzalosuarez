import { useTheme } from "../../contexts/ThemeContext";
import Tag from "../atoms/Tag";

export default function ProyectDescription({
  title,
  text,
  technologies,
  type,
}) {
  const { theme } = useTheme();

  return (
    <div className="p-0">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <h2 className={`text_${theme} projects_card_title language mb-3`}>
          {title}
        </h2>
        <h3 className="projects_card_category text-center px-3 py-2 mb-3 rounded-2">
          {type}
        </h3>
      </div>
      <p className={`text_${theme} projects_card_text language`}>{text}.</p>

      <div className="d-flex mt-4 flex-wrap">
        {technologies.map((technologie) => {
          return <Tag tag={technologie} />;
        })}
      </div>
    </div>
  );
}
