import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import bootcamp from "../../assets/pdf/BootcampUTN.pdf";
import js from "../../assets/pdf/DesarrolloJS.pdf";
import react from "../../assets/pdf/DesarrolloReact.pdf";
import dbd from "../../assets/pdf/DiplomaturaDB.pdf";
import dbf from "../../assets/pdf/FundamentosDB.pdf";
import fullstack from "../../assets/pdf/DiplomaturaFullStack.pdf";
import dk from "../../assets/pdf/DockerKubernetes.pdf";
import en from "../../assets/pdf/Ingles.pdf";

export default function CertificationCard({
  cert,
  title,
  subtitle,
  date,
  pdf = null,
}) {
  const { theme } = useTheme();

  const pdfs = {
    fullstack: fullstack,
    bootcamp: bootcamp,
    js: js,
    react: react,
    dbd: dbd,
    dbf: dbf,
    dk: dk,
    en: en
  };

  function handleCertificate() {
    window.open(pdfs[pdf], "_blank");
  }

  return (
    <div
      onClick={() => {
        pdf ? handleCertificate() : null;
      }}
      className={`${
        pdf ? "cursor_pointer" : ""
      } col-12 col-lg-5 d-flex flex-wrap mb-5 align-items-center justify-content-center justify-content-sm-start`}
    >
      <div className="col-10 col-sm-3 col-md-5 col-xl-4 col-xxl-4 overflow-hidden me-0 me-sm-3 mb-3 mb-sm-0 rounded-2">
        <img src={cert} className="certifications_card_img" />
      </div>
      <div className="col-10 col-sm-8 col-md-6  col-xl-7 col-xxl-7">
        <h2 className="certifications_card_title language m-0 mb-1">{title}</h2>
        <h5
          className={`text_${theme} language certifications_card_subtitle m-0`}
        >
          {subtitle}
        </h5>
        <p className="certifications_card_date language m-0">{date}</p>
      </div>
    </div>
  );
}
