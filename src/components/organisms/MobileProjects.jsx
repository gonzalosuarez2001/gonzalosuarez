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
import { Smartphone } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, useInView } from "framer-motion";
import "../../styles/projects.css";

export default function MobileProjects() {
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
          title={t(`projects.mobile.title`)}
          icon={
            <Smartphone className={`text_${theme}`} size={35} />
          }
        />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <ProjectMobileCard
            video1={ripalive1}
            video2={ripalive2}
            title={t("projects.ripalive.title")}
            text={t("projects.ripalive.text")}
            technologies={[
              "git",
              "expo",
              "reactNative",
              "css",
              "js",
              "node",
              "mongo",
              "stripe",
              "rc",
              "figma",
            ]}
          />
          <ProjectMobileCard
            video1={credencial1}
            video2={credencial2}
            title={t("projects.credential.title")}
            text={t("projects.credential.text")}
            technologies={[
              "git",
              "docker",
              "expo",
              "reactNative",
              "css",
              "js",
              "node",
              "keycloak",
              "figma",
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
}
