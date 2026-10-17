import { ChipItem, ChipList } from "../../components/Chip/Chip";
import { CheckIcon } from "../../components/icons";
import { asset } from "../../utils/asset";
import styles from "./Projects.module.css";

function ProjectMedia({ t, project }) {
  const title = t(`projects.items.${project.id}.title`);

  if (project.media.type === "mobile") {
    const [first, second] = project.media.images;
    return (
      <div className={`${styles.media} ${styles.mobileMedia}`}>
        <div className={styles.phone}>
          <img src={asset(first)} alt={t("projects.screenAlt", { title })} width="700" height="1419" />
        </div>
        <div className={`${styles.phone} ${styles.phoneOffset}`}>
          <img src={asset(second)} alt={t("projects.otherScreenAlt", { title })} width="700" height="1419" />
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.media} ${styles.webMedia}`}>
      <img
        className={styles.screenshot}
        src={asset(project.media.image)}
        alt={t("projects.screenshotAlt", { title })}
        width="1600"
        height="900"
      />
    </div>
  );
}

export default function ProjectDetail({ t, project }) {
  const key = `projects.items.${project.id}`;

  return (
    <div className={styles.detail}>
      <ProjectMedia t={t} project={project} />
      <div className={styles.summary}>
        <div className={styles.titleRow}>
          <h3 className={styles.projectTitle}>{t(`${key}.title`)}</h3>
          {project.link && (
            <a className={styles.externalLink} href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <p className={styles.description}>{t(`${key}.description`)}</p>
      </div>
      <div className={styles.facts}>
        <div className={styles.challenges}>
          <h4 className={styles.factLabel}>{t("projects.challenges")}</h4>
          <ul className={styles.challengeList}>
            {t(`${key}.challenges`, { returnObjects: true }).map((challenge) => (
              <li key={challenge}>
                <CheckIcon className={styles.check} />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.stack}>
          <h4 className={styles.factLabel}>{t("common.stack")}</h4>
          <ChipList>
            {project.stack.map((tag) => (
              <ChipItem key={tag}>{tag}</ChipItem>
            ))}
          </ChipList>
        </div>
      </div>
    </div>
  );
}
