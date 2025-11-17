import { useContext, useState, createContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/projects.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeContext";

const ProjectContext = createContext();

export function useProject() {
  return useContext(ProjectContext);
}

export function ProjectContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const { t } = useTranslation();
  const { theme } = useTheme();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
        openModal,
        closeModal,
      }}
    >
      <>
        {children}
        <AnimatePresence>
          {open && (
            <>
              {/* Fondo oscuro */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="modal_backdrop"
                onClick={closeModal}
              />

              {/* Contenido del modal */}
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`custom_modal background_secondary_${theme} rounded-2 p-4`}
              >
                <h2 className={`text_${theme} language mb-3`}>
                  {t(`projects.${currentProject.name}.title`)}
                </h2>
                <p className={`text_${theme} language`}>
                  {t(`projects.${currentProject.name}.text`)}
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    </ProjectContext.Provider>
  );
}
