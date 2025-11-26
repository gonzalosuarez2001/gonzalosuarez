import { useContext, useState, createContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeContext";
import {
  CheckCircle,
  X,
  Layers,
  Workflow,
  Image,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Tag from "../components/atoms/Tag";
import uno from "../../public/assets/images/pap1.png";
import dos from "../../public/assets/images/pap2.png";
import tres from "../../public/assets/images/pap3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/projects.css";

const ProjectContext = createContext();

export function useProject() {
  return useContext(ProjectContext);
}

export function ProjectContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  const [currentProjectType, setCurrentProjectType] = useState("web");

  const { t } = useTranslation();
  const { theme } = useTheme();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const test = [
    "Implemented responsive design to ensure optimal viewing across devices.",
    "Integrated third-party APIs for enhanced functionality.",
    "Optimized performance to reduce load times and improve user experience.",
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "clip";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setCurrentProject,
        openModal,
        closeModal,
        setCurrentProjectType,
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
                className={`custom_modal container_${theme} rounded-3`}
              >
                <div className="custom_modal_inner h-100 overflow-auto p-3 p-md-5 ">
                  <div className="d-flex align-items-center mb-3 col-12 justify-content-between">
                    <h2 className={`projects_card_title language m-0 fs-3`}>
                      {t(`projects.${currentProject.name}.title`)}
                    </h2>
                    <X
                      onClick={closeModal}
                      style={{ cursor: "pointer" }}
                      className={`text_${theme}`}
                      size={35}
                    />
                  </div>
                  <p className={`text_${theme} language`}>
                    {t(`projects.${currentProject.name}.text`)}
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <CheckCircle className={`text_${theme}`} size={25} />
                    <h3
                      className={`text_${theme} language ms-3 fs-5 project_text_fixed`}
                      style={{ fontWeight: "900" }}
                    >
                      {t("projects.modal.challengues")}
                    </h3>
                  </div>
                  <div className="col-12 row">
                    {test.map((item, index) => (
                      <div
                        className="d-flex align-items-center mt-3"
                        key={index}
                      >
                        <i
                          className={`bi bi-circle-fill me-3 d-none d-md-block`}
                          style={{ color: "#4071f4", fontSize: "8px" }}
                        />
                        <p className={`text_${theme} language m-0`}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex align-items-center mt-5">
                    <Layers className={`text_${theme}`} size={25} />
                    <h3
                      className={`text_${theme} language ms-3 fs-5 project_text_fixed`}
                      style={{ fontWeight: "900" }}
                    >
                      {t("projects.modal.technologies")}
                    </h3>
                  </div>
                  <div className="d-flex mt-3 flex-wrap">
                    {currentProject.technologies.map((technologie, index) => {
                      return <Tag tag={technologie} key={index} />;
                    })}
                  </div>

                  {currentProject?.integrations && (
                    <>
                      <div className="d-flex align-items-center mt-4">
                        <Workflow className={`text_${theme}`} size={25} />
                        <h3
                          className={`text_${theme} language ms-3 fs-5 project_text_fixed`}
                          style={{ fontWeight: "900" }}
                        >
                          {t("projects.modal.integrations")}
                        </h3>
                      </div>

                      <div className="d-flex mt-3 flex-wrap">
                        {currentProject.integrations.map(
                          (technologie, index) => {
                            return <Tag tag={technologie} key={index} />;
                          }
                        )}
                      </div>
                    </>
                  )}

                  <div className="d-flex align-items-center mt-4 mb-3">
                    <Image className={`text_${theme}`} size={25} />
                    <h3
                      className={`text_${theme} language ms-3 fs-5 project_text_fixed`}
                      style={{ fontWeight: "900" }}
                    >
                      {t("projects.modal.gallery")}
                    </h3>
                  </div>

                  <div
                    className={`rounded-2 d-flex justify-content-start align-items-center`}
                  >
                    <div
                      className="w-100 rounded-2 overflow-hidden position-relative"
                      style={{
                        boxShadow:
                          currentProjectType == "web"
                            ? "2px 3px 10px 0px rgba(62, 62, 62, 0.2)"
                            : null,
                      }}
                    >
                      <div className="custom-prev">
                        <ChevronLeft size={28} strokeWidth={3} />
                      </div>

                      <div className="custom-next">
                        <ChevronRight size={28} strokeWidth={3} />
                      </div>
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                          prevEl: ".custom-prev",
                          nextEl: ".custom-next",
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="mySwiper"
                      >
                        {currentProject.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <div className="w-100 d-flex justify-content-center">
                              <img
                                src={`/gonzalosuarez/assets/images/${image}`}
                                className={`${
                                  currentProjectType == "web"
                                    ? "w-100"
                                    : "col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4"
                                }`}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    </ProjectContext.Provider>
  );
}
