import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../atoms/SectionTitle";
import "../../styles/stack.css";
import StackTechnologie from "../atoms/StackTechnologie";
import StackTechnologieContainer from "../molecules/StackTechnologieContainer";

export default function Stack() {
  const { theme } = useTheme();
  const { t } = useTranslation();
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
  const backTags = ["node", "express", "sql"];
  const toolsTags = ["ubuntu", "bash", "git", "gitlab", "docker", "wordpress"];
  const learningTags = ["ts", "mongo"];

  return (
    <section className="stack_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`stack.title`)} />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <StackTechnologieContainer title="Frontend" tags={frontTags} />
          <StackTechnologieContainer title="Backend" tags={backTags} />
          <StackTechnologieContainer title="Herramientas" tags={toolsTags} />
          <StackTechnologieContainer title="Aprendiendo" tags={learningTags} />
        </div>
      </div>
    </section>
  );
}
