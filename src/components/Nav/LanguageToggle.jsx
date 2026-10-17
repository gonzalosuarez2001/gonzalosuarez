import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../../i18n";
import styles from "./Nav.module.css";

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;
  const next = supportedLanguages.find((language) => language !== current);

  return (
    <button
      type="button"
      className={styles.language}
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t("nav.switchLanguage")}
      lang={next}
    >
      {supportedLanguages.map((language, index) => (
        <span key={language} aria-hidden="true">
          {index > 0 && <span className={styles.languageSeparator}>/</span>}
          <span className={language === current ? styles.languageCurrent : undefined}>
            {language.toUpperCase()}
          </span>
        </span>
      ))}
    </button>
  );
}
