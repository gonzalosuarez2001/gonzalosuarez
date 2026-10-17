import { MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sections } from "./data/links";

function App() {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        {t("a11y.skipToContent")}
      </a>
      <main id="contenido">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="wrap" style={{ minHeight: "60vh", paddingTop: 56 }}>
            <h2>{t(section.labelKey)}</h2>
          </section>
        ))}
      </main>
    </MotionConfig>
  );
}

export default App;
