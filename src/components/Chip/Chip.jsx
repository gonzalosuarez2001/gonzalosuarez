import styles from "./Chip.module.css";

export default function Chip({ size = "default", children }) {
  return <span className={`${styles.chip} ${styles[size]}`}>{children}</span>;
}

export function ChipList({ size = "default", children, label }) {
  return (
    <ul className={`${styles.list} ${styles[size]}`} aria-label={label}>
      {children}
    </ul>
  );
}

export function ChipItem({ size = "default", children }) {
  return (
    <li>
      <Chip size={size}>{children}</Chip>
    </li>
  );
}
