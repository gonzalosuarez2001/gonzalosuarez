import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/ThemeContext";
import SectionTitle from "../atoms/SectionTitle";
import "../../styles/certifications.css";
import CertificationCard from "../molecules/CertificationCard.jsx";
import cert_dbd from "../../assets/images/DiplomaturaDB.webp";
import cert_fs from "../../assets/images/DiplomaturaFullStack.webp";
import cert_dr from "../../assets/images/DesarrolloReact.webp";
import cert_dj from "../../assets/images/DesarrolloJS.webp";
import cert_inProgress from "../../assets/images/inProgress.webp";
import cert_dbf from "../../assets/images/FundamentosDB.webp";
import cert_bc from "../../assets/images/BootcampUTN.webp";

export default function Certifications() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section className="certifications_container container-fluid d-flex flex-column align-items-center px-5 py-0">
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle title={t(`certifications.title`)} />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <CertificationCard
            cert={cert_fs}
            title={t("certifications.fullstack.title")}
            subtitle={t("certifications.fullstack.place")}
            date={t("certifications.fullstack.date")}
          />
          <CertificationCard
            cert={cert_dbf}
            title={t("certifications.dbf.title")}
            subtitle={t("certifications.dbf.place")}
            date={t("certifications.dbf.date")}
          />
          <CertificationCard
            cert={cert_dbd}
            title={t("certifications.dbd.title")}
            subtitle={t("certifications.dbd.place")}
            date={t("certifications.dbd.date")}
          />
          <CertificationCard
            cert={cert_dr}
            title={t("certifications.react.title")}
            subtitle={t("certifications.react.place")}
            date={t("certifications.react.date")}
          />
          <CertificationCard
            cert={cert_dj}
            title={t("certifications.js.title")}
            subtitle={t("certifications.js.place")}
            date={t("certifications.js.date")}
          />
          <CertificationCard
            cert={cert_bc}
            title={t("certifications.bootcamp.title")}
            subtitle={t("certifications.bootcamp.place")}
            date={t("certifications.bootcamp.date")}
          />
          <CertificationCard
            cert={cert_inProgress}
            title={t("certifications.devops.title")}
            subtitle={t("certifications.devops.place")}
            date={t("certifications.devops.date")}
          />
          <CertificationCard
            cert={cert_inProgress}
            title={t("certifications.docker.title")}
            subtitle={t("certifications.docker.place")}
            date={t("certifications.docker.date")}
          />
        </div>
      </div>
    </section>
  );
}
