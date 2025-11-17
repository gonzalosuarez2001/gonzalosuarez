import { useTheme } from "../../contexts/ThemeContext";
import Tag from "../atoms/Tag";
import { useTranslation } from "react-i18next";
import { Eye, Lock, ExternalLink } from "lucide-react";

export default function ProyectDescription({
  title,
  text,
  technologies,
  onClick,
  url = "",
}) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="p-0">
      <div className="col-12 d-flex justify-content-between align-items-center mb-3">
        <h2 className={`text_${theme} projects_card_title language m-0`}>
          {title}
        </h2>
        <div className="d-flex align-items-center gap-2">
          <button
            onClick={onClick}
            className="projects_card_details px-2 py-1 rounded-2 d-flex justify-content-center align-items-center cursor-pointer"
          >
            <Eye size={20} />
            <h3 className="projects_card_details_text m-0 ms-2 language">
              {t("projects.details")}
            </h3>
          </button>
          <button
            onClick={() => {
              url && window.open(url, "_blank");
            }}
            className={`${
              url
                ? "projects_url_unlock text-white"
                : `projects_url_lock background_secondary_${theme}`
            } border border-0 px-2 py-1 rounded-2 d-flex justify-content-center align-items-center text-secondary`}
          >
            {url ? <ExternalLink size={20} /> : <Lock size={20} />}
          </button>
        </div>
      </div>
      <p className={`text_${theme} projects_card_text language`}>{text}</p>

      <div className="d-flex mt-4 flex-wrap">
        {technologies.map((technologie, index) => {
          return <Tag tag={technologie} key={index} />;
        })}
      </div>
    </div>
  );
}
