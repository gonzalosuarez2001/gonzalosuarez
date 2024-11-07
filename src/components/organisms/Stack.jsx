import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import StackTechnologieContainer from "../molecules/StackTechnologieContainer";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import "../../styles/stack.css";

export default function Stack() {
  const { t } = useTranslation();
  const { setStack } = useScroll();
  const stackRef = useRef();

  const frontTags = [
    "html",
    "css",
    "js",
    "react",
    "bootstrap",
    "next",
    "expo",
    "reactNative",
    "figma",
  ];
  const backTags = ["node", "express", "sql", "mongo"];
  const toolsTags = ["ubuntu", "bash", "git", "gitlab", "docker", "wordpress"];
  const learningTags = ["ts"];

  useEffect(() => {
    setStack(stackRef);
  }, []);

  return (
    <section
      ref={stackRef}
      className="stack_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`stack.title`)} />
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
    </section>
  );
}
