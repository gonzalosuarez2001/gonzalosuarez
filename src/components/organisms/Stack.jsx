import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import StackTechnologieContainer from "../molecules/StackTechnologieContainer";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { TbStack2 } from "react-icons/tb";
import { useTheme } from "../../contexts/ThemeContext";
import { motion, useInView } from "framer-motion";
import "../../styles/stack.css";

export default function Stack() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { setStack } = useScroll();
  const stackRef = useRef();
  const isOnScreen = useInView(stackRef, { once: true, margin: "-300px" });

  const frontTags = [
    "html",
    "css",
    "js",
    "ts",
    "react",
    "next",
    "reactNative",
    "expo",
    "tailwind",
    "bootstrap",
    "chakra",
    "figma",
  ];
  const backTags = ["node", "express", "sql", "mongo"];
  const toolsTags = ["ubuntu", "bash", "git", "gitlab", "docker", "wordpress"];
  const learningTags = ["aws"];

  useEffect(() => {
    setStack(stackRef);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isOnScreen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={stackRef}
      className="stack_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`stack.title`)}
          icon={<TbStack2 className={`text_${theme}`} fontSize={40} />}
        />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <StackTechnologieContainer
            title={t("stack.subtitle.1")}
            tags={frontTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.2")}
            tags={backTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.3")}
            tags={toolsTags}
          />
          <StackTechnologieContainer
            title={t("stack.subtitle.4")}
            tags={learningTags}
          />
        </div>
      </div>
    </motion.div>
  );
}
