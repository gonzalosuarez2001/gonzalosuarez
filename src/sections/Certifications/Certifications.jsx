import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SegmentedControl from "../../components/SegmentedControl/SegmentedControl";
import { ArrowUpRightIcon } from "../../components/icons";
import { certificationCategories, certifications } from "../../data/certifications";
import { asset } from "../../utils/asset";
import styles from "./Certifications.module.css";

function formatIssuedOn(issuedOn, language) {
  const [year, month] = issuedOn.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
}

export default function Certifications() {
  const { t, i18n } = useTranslation();
  const [category, setCategory] = useState("all");
  const visible = certifications.filter((item) => category === "all" || item.category === category);

  return (
    <section
      id="certificaciones"
      className={`section wrap ${styles.section}`}
      aria-labelledby="certificaciones-title"
    >
      <SectionHeader id="certificaciones-title" title={t("certifications.title")} lead={t("certifications.lead")}>
        <SegmentedControl
          label={t("certifications.filterLabel")}
          options={certificationCategories.map((value) => ({
            value,
            label: t(`certifications.categories.${value}`),
          }))}
          value={category}
          onChange={setCategory}
        />
      </SectionHeader>
      <p className="visually-hidden" role="status">
        {t("certifications.resultsCount", { count: visible.length })}
      </p>
      <ul className={styles.grid}>
        {visible.map((item, index) => {
          const key = `certifications.items.${item.id}`;
          const title = t(`${key}.title`);
          return (
            <Reveal as="li" key={`${category}-${item.id}`} delay={0.08 + index * 0.05} className={styles.item}>
              <a className={styles.card} href={asset(item.pdf)} target="_blank" rel="noreferrer">
                <div className={styles.thumb}>
                  <img
                    src={asset(item.image)}
                    alt={t("certifications.imageAlt", { title })}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.place}>{t(`${key}.place`)}</p>
                  <div className={styles.footer}>
                    <span className={styles.date}>{formatIssuedOn(item.issuedOn, i18n.resolvedLanguage)}</span>
                    <span className={styles.view}>
                      {t("certifications.view")}
                      <ArrowUpRightIcon />
                      <span className="visually-hidden">{t("certifications.opensPdf")}</span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
