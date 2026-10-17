import { useTranslation } from "react-i18next";
import { contact } from "../../data/links";
import { GithubIcon, LinkedinIcon } from "../icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contacto" className={`wrap ${styles.footer}`}>
      <h2 className="visually-hidden">{t("footer.title")}</h2>
      <div className={styles.inner}>
        <p className={styles.credit}>{t("footer.credit")}</p>
        <div className={styles.links}>
          <a className={styles.email} href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a className={styles.icon} href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a className={styles.icon} href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
