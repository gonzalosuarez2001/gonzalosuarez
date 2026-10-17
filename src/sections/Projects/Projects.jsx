import { useState } from "react";
import { useTranslation } from "react-i18next";
import ListDetail from "../../components/ListDetail/ListDetail";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SegmentedControl from "../../components/SegmentedControl/SegmentedControl";
import { projectCategories, projects } from "../../data/projects";
import ProjectDetail from "./ProjectDetail";
import styles from "./Projects.module.css";

export default function Projects() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const visible = projects.filter((project) => category === "all" || project.categories.includes(category));

  return (
    <section id="proyectos" className={`section wrap ${styles.section}`} aria-labelledby="proyectos-title">
      <SectionHeader id="proyectos-title" title={t("projects.title")} lead={t("projects.lead")}>
        <SegmentedControl
          label={t("projects.filterLabel")}
          options={projectCategories.map((value) => ({ value, label: t(`projects.categories.${value}`) }))}
          value={category}
          onChange={setCategory}
        />
      </SectionHeader>
      <p className="visually-hidden" role="status">
        {t("projects.resultsCount", { count: visible.length })}
      </p>
      <Reveal delay={0.1}>
        <ListDetail
          id="projects"
          label={t("projects.title")}
          items={visible}
          selectedId={selectedId}
          onSelect={setSelectedId}
          listWidth={280}
          panelClassName={styles.panel}
          getTabContent={(project) => ({
            title: t(`projects.items.${project.id}.title`),
            subtitle: t(`projects.items.${project.id}.kind`),
          })}
          renderPanel={(project) => <ProjectDetail t={t} project={project} />}
        />
      </Reveal>
    </section>
  );
}
