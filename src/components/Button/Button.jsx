import { ArrowRightIcon, DownloadIcon } from "../icons";
import styles from "./Button.module.css";

const icons = {
  arrow: ArrowRightIcon,
  download: DownloadIcon,
};

export default function Button({ variant = "primary", icon, href, className = "", children, ...props }) {
  const IconComponent = icons[icon];
  const classes = `${styles.button} ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {IconComponent && <IconComponent className={icon === "arrow" ? styles.arrow : undefined} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
