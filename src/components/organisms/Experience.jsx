import { useTranslation } from "react-i18next";
import ExperienceItem from "../atoms/ExperienceItem";
import SectionTitle from "../atoms/SectionTitle";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, useInView } from "framer-motion";
import "../../styles/experience.css";

export default function Experience() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const experienceRef = useRef();
  const isOnScreen = useInView(experienceRef, { once: true, margin: "-300px" });
  const { setExperience } = useScroll();

  useEffect(() => {
    setExperience(experienceRef);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isOnScreen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={experienceRef}
      className="experience_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`experience.title`)}
          icon={
            <PiSuitcaseSimpleBold className={`text_${theme}`} fontSize={40} />
          }
        />
        <div className="experience_items_container d-flex">
          <div className="experience_timeline col-2 col-lg-1"></div>
          <div className="col-10 col-lg-11 p-0 pt-3 d-flex">
            <div>
              <ExperienceItem
                title={t(`experience.freelance.title`)}
                subtitle={t(`experience.freelance.subtitle`)}
                date={t(`experience.freelance.date`)}
                dateSpan={t(`experience.freelance.dateSpan`)}
                text={t(`experience.freelance.text`)}
              />
              <ExperienceItem
                title={t(`experience.developer.title`)}
                subtitle={t(`experience.developer.subtitle`)}
                date={t(`experience.developer.date`)}
                dateSpan={t(`experience.developer.dateSpan`)}
                text={t(`experience.developer.text`)}
              />
              <ExperienceItem
                title={t(`experience.analyst.title`)}
                subtitle={t(`experience.analyst.subtitle`)}
                date={t(`experience.analyst.date`)}
                text={t(`experience.analyst.text`)}
              />
              <ExperienceItem
                title={t(`experience.support.title`)}
                subtitle={t(`experience.support.subtitle`)}
                date={t(`experience.support.date`)}
                text={t(`experience.support.text`)}
                lastItem={true}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
