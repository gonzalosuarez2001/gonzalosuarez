import Reveal from "../Reveal/Reveal";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ id, title, lead, children }) {
  return (
    <Reveal as="header" className={styles.header}>
      <div className={styles.text}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        <p className={styles.lead}>{lead}</p>
      </div>
      {children}
    </Reveal>
  );
}
