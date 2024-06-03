import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../atoms/SectionTitle";
import "../../styles/certifications.css";

export default function Certifications() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section className="certifications_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`certifications.title`)} />
        <div className="d-flex flex-wrap col-12 justify-content-around"></div>
      </div>
    </section>
  );
}
