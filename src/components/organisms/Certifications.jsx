import { useTranslation } from "react-i18next";
import SectionTitle from "../atoms/SectionTitle";
import CertificationCard from "../molecules/CertificationCard.jsx";
import cert_dbd from "../../assets/images/DiplomaturaDB.webp";
import cert_fs from "../../assets/images/DiplomaturaFullStack.webp";
import cert_dr from "../../assets/images/DesarrolloReact.webp";
import cert_dj from "../../assets/images/DesarrolloJS.webp";
import cert_dbf from "../../assets/images/FundamentosDB.webp";
import cert_bc from "../../assets/images/BootcampUTN.webp";
import cert_dk from "../../assets/images/DockerKubernetes.webp";
import { useRef, useEffect } from "react";
import { useScroll } from "../../contexts/ScrollContext";
import { LuGraduationCap } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { motion, useInView } from "framer-motion";
import "../../styles/certifications.css";

export default function Certifications() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const certificationsRef = useRef();
  const { setCertifications } = useScroll();
  const isOnScreen = useInView(certificationsRef, {
    once: true,
    margin: "-300px",
  });

  useEffect(() => {
    setCertifications(certificationsRef);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isOnScreen ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={certificationsRef}
      className="certifications_container container-fluid d-flex flex-column align-items-center px-5 py-0"
    >
      <div className="col-12 col-md-8 col-lg-12 col-xl-10 col-xxl-8">
        <SectionTitle
          title={t(`certifications.title`)}
          icon={<LuGraduationCap className={`text_${theme}`} fontSize={40} />}
        />
        <div className="d-flex flex-wrap col-12 justify-content-around">
          <CertificationCard
            cert={cert_fs}
            title={t("certifications.fullstack.title")}
            subtitle={t("certifications.fullstack.place")}
            date={t("certifications.fullstack.date")}
            pdf="fullstack"
          />
          <CertificationCard
            cert={cert_dbf}
            title={t("certifications.dbf.title")}
            subtitle={t("certifications.dbf.place")}
            date={t("certifications.dbf.date")}
            pdf="dbf"
          />
          <CertificationCard
            cert={cert_dbd}
            title={t("certifications.dbd.title")}
            subtitle={t("certifications.dbd.place")}
            date={t("certifications.dbd.date")}
            pdf="dbd"
          />
          <CertificationCard
            cert={cert_dr}
            title={t("certifications.react.title")}
            subtitle={t("certifications.react.place")}
            date={t("certifications.react.date")}
            pdf="react"
          />
          <CertificationCard
            cert={cert_dj}
            title={t("certifications.js.title")}
            subtitle={t("certifications.js.place")}
            date={t("certifications.js.date")}
            pdf="js"
          />
          <CertificationCard
            cert={cert_bc}
            title={t("certifications.bootcamp.title")}
            subtitle={t("certifications.bootcamp.place")}
            date={t("certifications.bootcamp.date")}
            pdf="bootcamp"
          />
          <CertificationCard
            cert={cert_dk}
            title={t("certifications.docker.title")}
            subtitle={t("certifications.docker.place")}
            date={t("certifications.docker.date")}
            pdf="dk"
          />
        </div>
      </div>
    </motion.div>
  );
}
