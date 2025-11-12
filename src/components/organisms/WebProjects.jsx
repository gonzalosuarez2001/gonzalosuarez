import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import ProjectMobileCard from "../molecules/ProjectMobileCard";
import ripadmin from "../../assets/videos/ripadmin.webm";
import pap from "../../assets/videos/pap.webm";
import traducciones from "../../assets/videos/traducciones.webm";
import credencial1 from "../../assets/videos/credencial1.webm";
import credencial2 from "../../assets/videos/credencial2.webm";
import ripalive1 from "../../assets/videos/ripalive1.webm";
import ripalive2 from "../../assets/videos/ripalive2.webm";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { Monitor } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, useInView } from "framer-motion";
import "../../styles/projects.css";

export default function WebProjects() {
  const { t } = useTranslation();
  const projectsRef = useRef();
  const { theme } = useTheme();
  const { setProjects } = useScroll();
  const isOnScreen = useInView(projectsRef, { once: true, margin: "-300px" });

  useEffect(() => {
    setProjects(projectsRef);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isOnScreen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={projectsRef}
      className="projects_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`projects.web.title`)}
          icon={<Monitor className={`text_${theme}`} size={35} />}
        />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <ProjectWebCard
            video={pap}
            title={t("projects.movil.title")}
            text={t("projects.movil.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "tailwind",
              "node",
              "mongo",
            ]}
          />

          <ProjectWebCard
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
              "sequelize",
            ]}
          />

          <ProjectWebCard
            video={traducciones}
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
              "sequelize",
              "keycloak",
            ]}
          />
          <ProjectWebCard
            video={traducciones}
            title={t("projects.difusiones.title")}
            text={t("projects.difusiones.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "node",
              "sql",
              "sequelize",
              "keycloak",
            ]}
          />
          <ProjectWebCard
            video={ripadmin}
            title={t("projects.ripadmin.title")}
            text={t("projects.ripadmin.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "chakra",
              "node",
              "mongo",
            ]}
          />
          <ProjectWebCard
            video={ripadmin}
            title={t("projects.ripbene.title")}
            text={t("projects.ripbene.text")}
            technologies={[
              "git",
              "react",
              "html",
              "css",
              "js",
              "chakra",
              "node",
              "mongo",
            ]}
          />
          <ProjectWebCard
            video={pap}
            title={t("projects.planner.title")}
            text={t("projects.planner.text")}
            technologies={[
              "git",
              "docker",
              "react",
              "html",
              "css",
              "js",
              "tailwind",
              "node",
              "sql",
              "sequelize",
            ]}
          />
          <ProjectWebCard
            video={pap}
            title={t("projects.toon.title")}
            text={t("projects.toon.text")}
            technologies={[
              "git",
              "docker",
              "next",
              "react",
              "html",
              "css",
              "ts",
              "tailwind",
              "node",
              "sql",
              "prisma",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}
