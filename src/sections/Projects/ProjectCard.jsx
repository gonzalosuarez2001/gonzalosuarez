import { asset } from "../../utils/asset";
import styles from "./Projects.module.css";

export default function ProjectCard({ t, project }) {
  const key = `projects.items.${project.id}`;
  const title = t(`${key}.title`);
  const isLink = Boolean(project.href);
  const Container = isLink ? "a" : "article";
  const linkProps = isLink ? { href: project.href, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Container className={`${styles.card} ${isLink ? styles.cardLink : ""}`} {...linkProps}>
      <div className={styles.cardMedia}>
        <img
          src={asset(project.image)}
          alt={t("projects.screenshotAlt", { title })}
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardTitle}>
          {title}
          {isLink && (
            <span className={styles.cardArrow} aria-hidden="true">
              ↗
            </span>
          )}
        </span>
        <span className={styles.cardDescription}>{t(`${key}.description`)}</span>
        <span className={styles.cardStack}>{project.stack.join(" · ")}</span>
      </div>
    </Container>
  );
}
