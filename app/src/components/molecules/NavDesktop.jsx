import { useEffect, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import NavDesktopItem from "../atoms/NavDesktopItem";
import NavHeader from "../atoms/NavHeader";
import NavTools from "../atoms/NavTools";

export default function NavDesktop() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  function handleScrollY() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
  }, []);

  return (
    <>
      <nav
        className={`${
          scrollY == 0 ? "shadow_invisible" : "shadow_visible"
        } container_${theme} nav_desktop position-fixed container-fluid d-flex justify-content-center p-0 m-0 py-3`}
      >
        <div className="row col-10 col-md-8 col-lg-12 col-xl-10 col-xxl-8 px-lg-4">
          <NavHeader />
          <div
            className={`col-7 col-lg-10 col-xl-9 col-xxl-8 p-0 m-0 d-flex flex-row justify-content-end`}
          >
            <NavDesktopItem name={t(`nav.home`)} />
            <NavDesktopItem name={t(`nav.experience`)} />
            <NavDesktopItem name={t(`nav.projects`)} />
            <NavDesktopItem name={t(`nav.courses`)} />
            <NavDesktopItem name={t(`nav.technologies`)} />
          </div>
        </div>
      </nav>
      <div className="nav_desktop_tools">
        <NavTools />
      </div>
    </>
  );
}
