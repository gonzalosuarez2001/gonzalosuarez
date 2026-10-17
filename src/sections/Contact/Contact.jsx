import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import { contact } from "../../data/links";
import { useCvLink } from "../../hooks/useCvLink";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();
  const cvLink = useCvLink();

  return (
    <section id="contacto" className="section wrap" aria-labelledby="contacto-title">
      <Reveal className={styles.card}>
        <div className={styles.text}>
          <h2 id="contacto-title" className={styles.title}>
            {t("contact.title")}
          </h2>
          <p className={styles.lead}>{t("contact.lead")}</p>
        </div>
        <div className={styles.actions}>
          <Button href={`mailto:${contact.email}`} icon="arrow">
            {t("common.contactMe")}
          </Button>
          <Button variant="secondary" icon="download" {...cvLink}>
            {t("common.downloadCv")}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
