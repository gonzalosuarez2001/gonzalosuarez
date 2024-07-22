import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import ProjectMobileCard from "../molecules/ProjectMobileCard";
import pokeweb from "../../assets/videos/pokeweb.mp4";
import samayweb from "../../assets/videos/samayweb.mp4";
import cel from "../../assets/videos/cel.mp4";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import "../../styles/projects.css";

export default function Projects() {
  const { t } = useTranslation();
  const projectsRef = useRef();
  const { setProjects } = useScroll();

  useEffect(() => {
    setProjects(projectsRef);
  }, []);

  return (
    <section
      ref={projectsRef}
      className="projects_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`projects.title`)} />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <ProjectWebCard
            url=""
            video={pokeweb}
            title={t("projects.samay.title")}
            text={t("projects.samay.text")}
            technologies={["git", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            url=""
            video={samayweb}
            title={t("projects.poke.title")}
            text={t("projects.poke.text")}
            technologies={["git", "react", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            url=""
            video={samayweb}
            title={t("projects.notes.title")}
            text={t("projects.notes.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "bootstrap",
              "node",
              "sql",
            ]}
          />
          <ProjectWebCard
            url=""
            video={pokeweb}
            title={t("projects.portfolio.title")}
            text={t("projects.portfolio.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "bootstrap",
            ]}
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
