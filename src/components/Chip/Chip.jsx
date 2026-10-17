import styles from "./Chip.module.css";

export default function Chip({ children }) {
  return <span className={styles.chip}>{children}</span>;
}

export function ChipList({ children, label }) {
  return (
    <ul className={styles.list} aria-label={label}>
      {children}
    </ul>
  );
}

export function ChipItem({ children }) {
  return (
    <li>
      <Chip>{children}</Chip>
    </li>
  );
}
