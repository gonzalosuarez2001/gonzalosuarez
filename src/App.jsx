import { MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Certifications from "./sections/Certifications/Certifications";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

function App() {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        {t("a11y.skipToContent")}
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
