import { MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { sections } from "./data/links";

const pendingSections = sections.filter((section) => section.id !== "contacto");

function App() {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        {t("a11y.skipToContent")}
      </a>
      <Nav />
      <main id="contenido">
        {pendingSections.map((section) => (
          <section key={section.id} id={section.id} className="wrap" style={{ minHeight: "80vh", paddingTop: 56 }}>
            <h2>{t(section.labelKey)}</h2>
          </section>
        ))}
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
