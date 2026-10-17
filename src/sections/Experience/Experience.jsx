import { useState } from "react";
import { useTranslation } from "react-i18next";
import ListDetail from "../../components/ListDetail/ListDetail";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { CheckIcon } from "../../components/icons";
import { experience } from "../../data/experience";
import styles from "./Experience.module.css";

function yearRange(t, { startYear, endYear }) {
  return `${startYear} — ${endYear ?? t("common.present")}`;
}

function BulletList({ items, size = "default" }) {
  return (
    <ul className={`${styles.bullets} ${styles[size]}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckIcon className={styles.check} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleTimeline({ t, company }) {
  return (
    <ol className={styles.timeline}>
      {company.roles.map((role, index) => {
        const key = `experience.items.${company.id}.roles.${role.id}`;
        return (
          <li key={role.id} className={`${styles.role} ${index === 0 ? styles.latestRole : ""}`}>
            <span className={styles.roleMarker} aria-hidden="true" />
            <div className={styles.roleBody}>
              <h4 className={styles.roleHeading}>
                <span className={styles.roleTitle}>{t(`${key}.title`)}</span>
                <span className={styles.years}>{yearRange(t, role)}</span>
              </h4>
              <BulletList items={t(`${key}.bullets`, { returnObjects: true })} size="small" />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function ExperienceDetail({ t, company }) {
  const key = `experience.items.${company.id}`;

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <h3 className={styles.company}>{t(`${key}.company`)}</h3>
        <p className={styles.position}>{t(`${key}.position`)}</p>
        <p className={styles.meta}>
          {yearRange(t, company)} · {t(`${key}.description`)}
        </p>
      </div>
      {company.roles ? (
        <RoleTimeline t={t} company={company} />
      ) : (
        <BulletList items={t(`${key}.bullets`, { returnObjects: true })} />
      )}
    </div>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(experience[0].id);

  return (
    <section id="experiencia" className={`section wrap ${styles.section}`} aria-labelledby="experiencia-title">
      <SectionHeader id="experiencia-title" title={t("experience.title")} lead={t("experience.lead")} />
      <Reveal delay={0.1}>
        <ListDetail
          id="experience"
          label={t("experience.title")}
          items={experience}
          selectedId={selectedId}
          onSelect={setSelectedId}
          size="large"
          listWidth={300}
          panelClassName={styles.panel}
          getTabContent={(company) => ({
            title: t(`experience.items.${company.id}.company`),
            badge: company.current ? t("experience.current") : null,
            aside: yearRange(t, company),
            subtitle: t(`experience.items.${company.id}.summary`),
          })}
          renderPanel={(company) => <ExperienceDetail t={t} company={company} />}
        />
      </Reveal>
    </section>
  );
}
