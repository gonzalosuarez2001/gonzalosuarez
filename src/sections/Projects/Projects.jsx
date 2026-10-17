import { useState } from "react";
import { useTranslation } from "react-i18next";
import AutoHeight from "../../components/AutoHeight/AutoHeight";
import ListDetail from "../../components/ListDetail/ListDetail";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SegmentedControl from "../../components/SegmentedControl/SegmentedControl";
import { featuredProjects, moreProjects, projectCategories } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import styles from "./Projects.module.css";

function matchesCategory(category) {
  return (project) => category === "all" || project.categories.includes(category);
}

export default function Projects() {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState(featuredProjects[0].id);

  const featured = featuredProjects.filter(matchesCategory(category));
  const more = moreProjects.filter(matchesCategory(category));
  const resultsCount = featured.length + more.length;

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
        {t("projects.resultsCount", { count: resultsCount })}
      </p>

      {featured.length > 0 && (
        <Reveal delay={0.1}>
          <ListDetail
            id="projects"
            label={t("projects.featured")}
            heading={t("projects.featured")}
            items={featured}
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
      )}

      <AutoHeight>
        {more.length > 0 && (
          <Reveal className={styles.more}>
            <div className={styles.moreHeader}>
              <h3 className={styles.moreTitle}>{t("projects.more")}</h3>
              <span className={styles.moreCount}>{t("projects.count", { count: more.length })}</span>
            </div>
            <div className={styles.grid}>
              {more.map((project) => (
                <ProjectCard key={project.id} t={t} project={project} />
              ))}
            </div>
          </Reveal>
        )}
      </AutoHeight>
    </section>
  );
}
