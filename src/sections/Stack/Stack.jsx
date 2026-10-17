import { useTranslation } from "react-i18next";
import { ChipItem, ChipList } from "../../components/Chip/Chip";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { stackGroups } from "../../data/stack";
import styles from "./Stack.module.css";

export default function Stack() {
  const { t } = useTranslation();

  return (
    <section id="stack" className={`section wrap ${styles.section}`} aria-labelledby="stack-title">
      <SectionHeader id="stack-title" title={t("stack.title")} lead={t("stack.lead")} />
      <ul className={styles.grid}>
        {stackGroups.map((group, index) => {
          const title = t(`stack.groups.${group.id}.title`);
          return (
            <Reveal as="li" key={group.id} delay={0.08 + index * 0.06} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.description}>{t(`stack.groups.${group.id}.description`)}</p>
              <ChipList size="large" label={t("stack.toolsLabel", { group: title })}>
                {group.tools.map((tool) => (
                  <ChipItem key={tool} size="large">
                    {tool}
                  </ChipItem>
                ))}
              </ChipList>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
