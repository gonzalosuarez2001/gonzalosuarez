import { useTheme } from "../../contexts/ThemeContext";
import ProjectsTag from "../atoms/ProjectsTag";

export default function ProyectDescription({title, text, technologies}) {
  const { theme } = useTheme();

  return (
    <div className="p-0">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <h2 className={`text_${theme} projects_card_title language mb-3`}>
          {title}
        </h2>
        <h3 className="projects_card_category px-3 py-2 mb-3 rounded-2">
          Mobile
        </h3>
      </div>
      <p className={`text_${theme} projects_card_text language`}>{text}.</p>

      <div className="d-flex mt-4 flex-wrap">
        {technologies.map((technologie) => {
          return <ProjectsTag tag={technologie} />;
        })}
      </div>
    </div>
  );
}
