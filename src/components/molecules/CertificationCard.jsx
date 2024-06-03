import { useTheme } from "../../contexts/ThemeContext";

export default function CertificationCard({ cert, title, subtitle, date }) {
  const { theme } = useTheme();

  return (
    <div className="certifications_card d-flex flex-wrap mb-5 align-items-center justify-content-center justify-content-sm-start">
      <div className="col-10 col-sm-3 col-md-5 col-xl-4 col-xxl-4 a me-0 me-sm-3 mb-3 mb-sm-0 rounded-2">
        <img src={cert} className="certifications_card_img" />
      </div>
      <div className="col-12 col-sm-8 col-md-6  col-xl-7 col-xxl-7">
        <h2 className="certifications_card_title language m-0">{title}</h2>
        <h5 className={`text_${theme} language certifications_card_subtitle m-0`}>
          {subtitle}
        </h5>
        <p className="certifications_card_date language m-0">{date}</p>
      </div>
    </div>
  );
}
