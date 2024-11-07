import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import ProjectMobileCard from "../molecules/ProjectMobileCard";
import poke from "../../assets/videos/poke.webm";
import samay from "../../assets/videos/samay.webm";
import notes from "../../assets/videos/notes.webm";
import ripadmin from "../../assets/videos/ripadmin.webm";
import pap from "../../assets/videos/pap.webm";
import credencial1 from "../../assets/videos/credencial1.webm";
import credencial2 from "../../assets/videos/credencial2.webm";
import ripalive1 from "../../assets/videos/ripalive1.webm";
import ripalive2 from "../../assets/videos/ripalive2.webm";
import amigoscole1 from "../../assets/videos/amigoscole1.webm";
import amigoscole2 from "../../assets/videos/amigoscole2.webm";
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
            video={samay}
            title={t("projects.samay.title")}
            text={t("projects.samay.text")}
            technologies={["git", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            url=""
            video={poke}
            title={t("projects.poke.title")}
            text={t("projects.poke.text")}
            technologies={["git", "react", "html", "css", "js", "bootstrap"]}
          />
          <ProjectWebCard
            url=""
            video={notes}
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
            video={pap}
            title={t("projects.pap.title")}
            text={t("projects.pap.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "chakra",
              "node",
              "sql",
            ]}
          />
          <ProjectWebCard
            url=""
            video={ripadmin}
            title={t("projects.traducciones.title")}
            text={t("projects.traducciones.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "node",
              "sql",
            ]}
          />
          <ProjectWebCard
            url=""
            video={ripadmin}
            title={t("projects.ripadmin.title")}
            text={t("projects.ripadmin.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "bootstrap",
              "node",
              "mongo",
            ]}
          />
          <ProjectMobileCard
            video1={credencial1}
            video2={credencial2}
            title={t("projects.credential.title")}
            text={t("projects.credential.text")}
            technologies={["git", "docker", "css", "reactNative", "js", "node"]}
          />
          <ProjectMobileCard
            video1={ripalive1}
            video2={ripalive2}
            title={t("projects.ripalive.title")}
            text={t("projects.ripalive.text")}
            technologies={["git", "reactNative", "css", "js", "node", "mongo"]}
          />
          <ProjectMobileCard
            video1={amigoscole1}
            video2={amigoscole2}
            title={t("projects.amigoscole.title")}
            text={t("projects.amigoscole.text")}
            technologies={[
              "git",
              "docker",
              "reactNative",
              "css",
              "js",
              "node",
              "sql",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
