import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { contact } from "../../data/links";
import { useCvLink } from "../../hooks/useCvLink";
import { asset } from "../../utils/asset";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();
  const cvLink = useCvLink();

  return (
    <section id="inicio" className={`section wrap ${styles.hero}`} aria-labelledby="inicio-title">
      <div className={styles.intro}>
        <Reveal onMount delay={0.05} className={styles.identity}>
          <img
            className={styles.avatar}
            src={asset("images/me.webp")}
            alt=""
            width="256"
            height="256"
            fetchpriority="high"
          />
          <div className={styles.identityText}>
            <span className={styles.name}>Gonzalo Suarez</span>
            <span className={styles.role}>{t("hero.role")}</span>
          </div>
        </Reveal>
        <Reveal as="h1" onMount delay={0.12} id="inicio-title" className={styles.title}>
          {t("hero.title")}
        </Reveal>
        <Reveal as="p" onMount delay={0.2} className={styles.lead}>
          {t("hero.lead")}
        </Reveal>
        <Reveal onMount delay={0.28} className={styles.actions}>
          <Button href={`mailto:${contact.email}`} icon="arrow">
            {t("common.contactMe")}
          </Button>
          <Button variant="secondary" icon="download" {...cvLink}>
            {t("common.downloadCv")}
          </Button>
        </Reveal>
        <Reveal as="ul" onMount delay={0.34} className={styles.social}>
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        </Reveal>
      </div>
      <Reveal onMount delay={0.3} className={styles.showcase}>
        <HeroVideo />
      </Reveal>
    </section>
  );
}
