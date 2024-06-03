import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import ProjectMobileCard from "../molecules/ProjectMobileCard"
import "../../styles/projects.css";
import pokeweb from "../../assets/videos/pokeweb.mp4";
import samayweb from "../../assets/videos/samayweb.mp4";
import cel from "../../assets/videos/cel.mp4";

export default function Projects() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section className="projects_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`projects.title`)} />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <ProjectWebCard
            video={pokeweb}
            title={t("projects.samay.title")}
            text={t("projects.samay.text")}
            technologies={["git", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            video={samayweb}
            title={t("projects.poke.title")}
            text={t("projects.poke.text")}
            technologies={["git", "react", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            video={samayweb}
            title={t("projects.notes.title")}
            text={t("projects.notes.text")}
            technologies={["git", "react", "html", "css", "js", "bootstrap", "node", "sql"]}
          />
          <ProjectWebCard
            video={pokeweb}
            title={t("projects.portfolio.title")}
            text={t("projects.portfolio.text")}
            technologies={["git", "docker", "react", "html", "css", "js", "bootstrap"]}
          />
          <ProjectMobileCard
            video={cel}
            title={t("projects.credential.title")}
            text={t("projects.credential.text")}
            technologies={["git", "docker", "css", "reactNative", "js", "node"]}
          />
          <ProjectMobileCard
            video={cel}
            title={t("projects.ripalive.title")}
            text={t("projects.ripalive.text")}
            technologies={["git", "reactNative", "css", "js"]}
          />
        </div>
      </div>
    </section>
  );
}
