import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import ProjectWebCard from "../molecules/ProjectWebCard";
import { useRef, useEffect, useState } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { Monitor, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, useInView, AnimatePresence } from "framer-motion";
import webProjects from "../../config/webProjects.js";
import "../../styles/projects.css";
import { useProject } from "../../contexts/ProjectsContext.jsx";

export default function WebProjects() {
  const { t } = useTranslation();
  const projectsRef = useRef();
  const { theme } = useTheme();
  const { setProjects } = useScroll();
  const isOnScreen = useInView(projectsRef, { once: true, margin: "-300px" });
  const { setCurrentProject, openModal, setCurrentProjectType } = useProject();

  const [isSafari, setIsSafari] = useState(false);

  const isSafariBrowser = () => {
    if (typeof navigator === "undefined") return false;

    const ua = navigator.userAgent;
    return /Safari/.test(ua) && !/Chrome/.test(ua);
  };

  useEffect(() => {
    setIsSafari(isSafariBrowser());
  }, []);

  useEffect(() => {
    setProjects(projectsRef);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isOnScreen ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        ref={projectsRef}
        className="projects_container container-fluid d-flex flex-column align-items-center px-5 py-0"
      >
        <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
          <SectionTitle
            title={t(`projects.titles.web`)}
            icon={<Monitor className={`text_${theme}`} size={35} />}
          />
          <div className="d-flex flex-wrap col-12 justify-content-around">
            {webProjects.map((project, index) => (
              <ProjectWebCard
                key={index}
                isSafari={isSafari}
                title={t(`projects.${project.name}.title`)}
                text={t(`projects.${project.name}.text`)}
                video={project.video}
                image={project.image}
                technologies={project.technologies}
                url={project?.url}
                onClick={() => {
                  setCurrentProjectType("web");
                  setCurrentProject(project);
                  openModal();
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
