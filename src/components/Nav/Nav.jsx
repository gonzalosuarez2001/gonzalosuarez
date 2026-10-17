import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { sections } from "../../data/links";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { CloseIcon, MenuIcon } from "../icons";
import LanguageToggle from "./LanguageToggle";
import styles from "./Nav.module.css";

const sectionIds = sections.map((section) => section.id);
const desktopQuery = "(min-width: 861px)";

function NavLinks({ activeId, className, linkClassName, onNavigate }) {
  const { t } = useTranslation();

  return (
    <ul className={className}>
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={linkClassName}
            aria-current={activeId === section.id ? "true" : undefined}
            onClick={onNavigate}
          >
            {t(section.labelKey)}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Nav() {
  const { t } = useTranslation();
  const activeId = useActiveSection(sectionIds);
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    const desktop = window.matchMedia(desktopQuery);
    function closeOnDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <nav className={`wrap ${styles.nav}`} aria-label={t("nav.label")}>
        <a href="#inicio" className={styles.brand} onClick={closeMenu}>
          Gonzalo Suarez
        </a>
        <NavLinks activeId={activeId} className={styles.links} linkClassName={styles.link} />
        <div className={styles.actions}>
          <LanguageToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={t(menuOpen ? "nav.closeMenu" : "nav.openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <NavLinks
              activeId={activeId}
              className={`wrap ${styles.mobileLinks}`}
              linkClassName={styles.mobileLink}
              onNavigate={closeMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
