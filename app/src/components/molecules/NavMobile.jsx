import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import NavMobileItem from "../atoms/NavMobileItem";
import NavHeader from "../atoms/NavHeader";
import NavTools from "../atoms/NavTools";
import NavMobileMenu from "../atoms/NavMobileMenu";

export default function NavMobile() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${
        menuOpen ? "nav_open" : "nav_close"
      } container_${theme} nav_mobile position-fixed container-fluid d-flex flex-column align-items-center shadow-sm p-0 m-0 py-3`}
    >
      <div className="row col-10 col-md-8">
        <NavHeader />
        <div
          className={`text_${theme} col-5 col-sm-7 col-md-7 p-0 m-0 align-items-center justify-content-end d-flex`}
        >
          <NavTools />
          <NavMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
      <div className="col-10 col-10 col-md-8 my-3 d-flex flex-column">
        <NavMobileItem name={t(`nav.home`)} setMenuOpen={setMenuOpen} />
        <NavMobileItem name={t(`nav.experience`)} setMenuOpen={setMenuOpen} />
        <NavMobileItem name={t(`nav.projects`)} setMenuOpen={setMenuOpen} />
        <NavMobileItem name={t(`nav.courses`)} setMenuOpen={setMenuOpen} />
        <NavMobileItem name={t(`nav.technologies`)} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
